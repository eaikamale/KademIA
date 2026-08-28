import React, { useState, useEffect, useRef } from "react";
import { applyAccentColorToDOM } from "./utils/theme";
import { defaultWorkout } from "./data/defaultWorkout";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import ActiveWorkout from "./components/ActiveWorkout";
import RoutineManager from "./components/RoutineManager";
import History from "./components/History";
import Settings from "./components/Settings";
import LoginScreen from "./components/LoginScreen";
import SyncStatusIndicator from "./components/SyncStatusIndicator";
import { BarbellIcon, CalendarIcon, HistoryIcon, UserIcon, ClipboardIcon } from "./components/Icons";
import { 
  subscribeAuthState, 
  saveUserDataToFirestore, 
  fetchUserDataFromFirestore,
  subscribeUserDataFromFirestore 
} from "./services/firebaseService";

// Helper to deduplicate local history data (both session duplicates and set duplicates)
function deduplicateHistory(historyList) {
  if (!Array.isArray(historyList)) return [];

  const getNormalizedDateKey = (dateStr) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      d.setMilliseconds(0);
      return d.toISOString();
    } catch (e) {
      return dateStr;
    }
  };

  const sessionsMap = {};

  historyList.forEach(session => {
    if (!session) return;
    const key = getNormalizedDateKey(session.date);
    
    if (!sessionsMap[key]) {
      sessionsMap[key] = {
        ...session,
        exercises: Array.isArray(session.exercises) ? session.exercises.map(ex => {
          if (!ex) return ex;
          const seenSets = new Set();
          const uniqueSets = [];
          if (Array.isArray(ex.setsData)) {
            ex.setsData.forEach(set => {
              const num = parseInt(set.setNum) || 1;
              if (!seenSets.has(num)) {
                seenSets.add(num);
                uniqueSets.push(set);
              }
            });
          }
          return {
            ...ex,
            setsData: uniqueSets
          };
        }) : []
      };
    } else {
      const existingSession = sessionsMap[key];
      if (Array.isArray(session.exercises)) {
        session.exercises.forEach(ex => {
          if (!ex) return;
          let existingEx = existingSession.exercises.find(e => e.name === ex.name);
          if (!existingEx) {
            existingEx = {
              name: ex.name,
              sets: ex.sets,
              setsData: []
            };
            existingSession.exercises.push(existingEx);
          }
          if (Array.isArray(ex.setsData)) {
            ex.setsData.forEach(set => {
              const num = parseInt(set.setNum) || 1;
              const hasSet = existingEx.setsData.some(s => (parseInt(s.setNum) || 1) === num);
              if (!hasSet) {
                existingEx.setsData.push(set);
              }
            });
          }
        });
      }
    }
  });

  return Object.values(sessionsMap).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function deduplicateProfileHistory(profileHistList) {
  if (!Array.isArray(profileHistList)) return [];

  const getNormalizedDateKey = (dateStr) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      d.setMilliseconds(0);
      return d.toISOString();
    } catch (e) {
      return dateStr;
    }
  };

  const map = {};
  profileHistList.forEach(item => {
    if (!item) return;
    if (item.weight === undefined || item.weight === null || item.weight === "") return;
    const key = getNormalizedDateKey(item.date);
    if (!map[key]) {
      map[key] = item;
    }
  });

  return Object.values(map).sort((a, b) => new Date(a.date) - new Date(b.date));
}

function sanitizeWorkoutData(workoutData) {
  if (!workoutData || !Array.isArray(workoutData.routines)) {
    return defaultWorkout;
  }
  return workoutData;
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("kademia_theme") ||
                  localStorage.getItem("gymrot_theme") ||
                  localStorage.getItem("fittrack_theme");
    return saved || "dark";
  });

  // App data states
  const [workoutData, setWorkoutData] = useState(() => {
    try {
      const saved = localStorage.getItem("kademia_workout_data") ||
                    localStorage.getItem("gymrot_workout_data") ||
                    localStorage.getItem("fittrack_workout_data");
      return saved ? JSON.parse(saved) : defaultWorkout;
    } catch (e) {
      return defaultWorkout;
    }
  });

  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem("kademia_history") ||
                    localStorage.getItem("gymrot_history") ||
                    localStorage.getItem("fittrack_history");
      const list = saved ? JSON.parse(saved) : [];
      return deduplicateHistory(list);
    } catch (e) {
      return [];
    }
  });

  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem("kademia_profile");
      const defaultGreen = theme === "dark" ? "#ADFF2F" : "#008A47";
      const savedSecondary = localStorage.getItem("kademia_secondary_color");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.secondaryColor && savedSecondary) {
          parsed.secondaryColor = savedSecondary;
        }
        return parsed;
      }
      return { 
        name: "Wagner", 
        weight: 78.5, 
        height: 175,
        secondaryColor: localStorage.getItem("kademia_secondary_color") || "" 
      };
    } catch (e) {
      return { name: "Wagner", weight: 78.5, height: 175, secondaryColor: "" };
    }
  });

  const [profileHistory, setProfileHistory] = useState(() => {
    try {
      const saved = localStorage.getItem("kademia_profile_history");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Apply custom accent color dynamically on boot and theme toggle
  const defaultGreen = theme === "dark" ? "#ADFF2F" : "#008A47";
  const activeUserColor = profile?.secondaryColor || localStorage.getItem("kademia_secondary_color") || defaultGreen;
  
  useEffect(() => {
    applyAccentColorToDOM(activeUserColor);
  }, [activeUserColor, theme]);

  // Cloud sync state (Firebase Auth / Firestore)
  const [googleSyncSettings, setGoogleSyncSettings] = useState(() => {
    try {
      const saved = localStorage.getItem("kademia_google_sync");
      return saved ? JSON.parse(saved) : { connected: false };
    } catch (e) {
      return { connected: false };
    }
  });

  const [syncStatus, setSyncStatus] = useState(() => {
    return localStorage.getItem("kademia_sync_status") || "synced";
  });
  const [lastSyncTime, setLastSyncTime] = useState(() => {
    return localStorage.getItem("kademia_last_sync_time") || "";
  });
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // App navigation state
  const [hasEnteredApp, setHasEnteredApp] = useState(() => {
    return sessionStorage.getItem("kademia_session_entered") === "true";
  });

  const [activeTab, setActiveTab] = useState("dashboard");

  // Active workout state (persisted to localStorage)
  const [activeWorkoutRoutine, setActiveWorkoutRoutine] = useState(() => {
    try {
      const saved = localStorage.getItem("kademia_active_routine");
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showExitMessage, setShowExitMessage] = useState(false);

  // Latest state ref for callbacks
  const latestDataRef = useRef({
    googleSyncSettings,
    workoutData,
    history,
    profile,
    profileHistory
  });

  useEffect(() => {
    latestDataRef.current = {
      googleSyncSettings,
      workoutData,
      history,
      profile,
      profileHistory
    };
  });

  // Apply theme class to body
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("kademia_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Listen to beforeinstallprompt event
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      window.deferredPrompt = e;
    };

    const handleCustomPromptEvent = (e) => {
      setDeferredPrompt(e.detail);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("pwa-prompt-available", handleCustomPromptEvent);

    // Register PWA service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register(import.meta.env.BASE_URL + "sw.js")
          .then((registration) => {
            console.log("Service Worker registrado com sucesso:", registration.scope);
          })
          .catch((err) => {
            console.log("Falha ao registrar o Service Worker:", err);
          });
      });
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("pwa-prompt-available", handleCustomPromptEvent);
    };
  }, []);

  // Subscribe to Firebase Auth State (Session persistence)
  useEffect(() => {
    const unsubscribeAuth = subscribeAuthState(async (user) => {
      if (user) {
        setGoogleSyncSettings({
          connected: true,
          email: user.email || "",
          userName: user.displayName || "",
          picture: user.photoURL || "",
          uid: user.uid
        });

        // Fetch initial user data from Firestore on login
        try {
          const remoteData = await fetchUserDataFromFirestore(user.uid);
          if (remoteData) {
            if (remoteData.workoutData) {
              const cleanWd = sanitizeWorkoutData(remoteData.workoutData);
              setWorkoutData(cleanWd);
              localStorage.setItem("kademia_workout_data", JSON.stringify(cleanWd));
            }
            if (remoteData.history) {
              const cleanHist = deduplicateHistory(remoteData.history);
              setHistory(cleanHist);
              localStorage.setItem("kademia_history", JSON.stringify(cleanHist));
            }
            if (remoteData.profile) {
              setProfile(remoteData.profile);
              localStorage.setItem("kademia_profile", JSON.stringify(remoteData.profile));
            }
            if (remoteData.profileHistory) {
              const cleanProfHist = deduplicateProfileHistory(remoteData.profileHistory);
              setProfileHistory(cleanProfHist);
              localStorage.setItem("kademia_profile_history", JSON.stringify(cleanProfHist));
            }
          } else {
            // Document doesn't exist yet, seed initial local data to Firestore
            await saveUserDataToFirestore(user.uid, {
              workoutData: latestDataRef.current.workoutData,
              history: latestDataRef.current.history,
              profile: latestDataRef.current.profile,
              profileHistory: latestDataRef.current.profileHistory
            });
          }
        } catch (err) {
          console.error("Erro ao sincronizar Firestore ao autenticar:", err);
        }
      } else {
        setGoogleSyncSettings({ connected: false });
      }
    });

    return () => unsubscribeAuth();
  }, []);

  // Real-time Firestore sync listener when logged in
  useEffect(() => {
    if (!googleSyncSettings.connected || !googleSyncSettings.uid) return;

    const unsubscribeDoc = subscribeUserDataFromFirestore(googleSyncSettings.uid, (remoteData) => {
      if (!remoteData) return;

      if (remoteData.workoutData) {
        setWorkoutData(sanitizeWorkoutData(remoteData.workoutData));
      }
      if (remoteData.history) {
        setHistory(deduplicateHistory(remoteData.history));
      }
      if (remoteData.profile) {
        setProfile(remoteData.profile);
      }
      if (remoteData.profileHistory) {
        setProfileHistory(deduplicateProfileHistory(remoteData.profileHistory));
      }

      setSyncStatus("synced");
      const timeStr = new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
      setLastSyncTime(timeStr);
    });

    return () => unsubscribeDoc();
  }, [googleSyncSettings.connected, googleSyncSettings.uid]);

  // Sync runner function for manual sync triggers
  const runSyncTask = async (taskFn) => {
    if (!googleSyncSettings.connected || !googleSyncSettings.uid) return;
    
    setSyncStatus("syncing");
    localStorage.setItem("kademia_sync_status", "syncing");
    
    try {
      if (!navigator.onLine) {
        throw new Error("offline");
      }
      await taskFn();
      
      setSyncStatus("synced");
      localStorage.setItem("kademia_sync_status", "synced");
      
      const timeStr = new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
      setLastSyncTime(timeStr);
      localStorage.setItem("kademia_last_sync_time", timeStr);
    } catch (err) {
      console.error("Erro na sincronização Firestore:", err);
      const isNetworkError = !navigator.onLine || 
                            err.message === "offline" || 
                            err.message.includes("Failed to fetch") || 
                            err.message.includes("NetworkError");
      
      const nextStatus = isNetworkError ? "pending" : "error";
      setSyncStatus(nextStatus);
      localStorage.setItem("kademia_sync_status", nextStatus);
    }
  };

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (googleSyncSettings.connected && googleSyncSettings.uid) {
        handleSync();
      }
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [googleSyncSettings.connected, googleSyncSettings.uid]);

  // Intercept PWA back button
  const navigationStateRef = useRef({ activeTab, activeWorkoutRoutine });
  useEffect(() => {
    navigationStateRef.current = { activeTab, activeWorkoutRoutine };
  }, [activeTab, activeWorkoutRoutine]);

  useEffect(() => {
    if (!hasEnteredApp || !googleSyncSettings.connected) {
      return;
    }

    window.history.pushState({ noBackExits: true }, "");

    let lastBackPress = 0;
    let toastTimeout = null;

    const handlePopState = () => {
      const currentTab = navigationStateRef.current.activeTab;
      const isWorkoutActive = navigationStateRef.current.activeWorkoutRoutine;

      if (isWorkoutActive) {
        window.history.pushState({ noBackExits: true }, "");
        if (window.confirm("Deseja realmente cancelar este treino? Os dados digitados serão perdidos.")) {
          setActiveWorkoutRoutine(null);
          setActiveTab("dashboard");
        }
        return;
      }

      if (currentTab !== "dashboard") {
        window.history.pushState({ noBackExits: true }, "");
        setActiveTab("dashboard");
        return;
      }

      const now = Date.now();
      if (now - lastBackPress < 2000) {
        window.history.go(-2);
      } else {
        lastBackPress = now;
        window.history.pushState({ noBackExits: true }, "");
        
        setShowExitMessage(true);
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          setShowExitMessage(false);
        }, 2000);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      clearTimeout(toastTimeout);
    };
  }, [hasEnteredApp, googleSyncSettings.connected]);

  // Save state changes to localStorage and debounced sync to Firestore
  useEffect(() => {
    localStorage.setItem("kademia_workout_data", JSON.stringify(workoutData));

    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      const syncDebounce = setTimeout(() => {
        saveUserDataToFirestore(googleSyncSettings.uid, { workoutData });
      }, 1500);
      return () => clearTimeout(syncDebounce);
    }
  }, [workoutData, googleSyncSettings.connected, googleSyncSettings.uid]);

  useEffect(() => {
    localStorage.setItem("kademia_history", JSON.stringify(history));

    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      const syncDebounce = setTimeout(() => {
        saveUserDataToFirestore(googleSyncSettings.uid, { history });
      }, 1500);
      return () => clearTimeout(syncDebounce);
    }
  }, [history, googleSyncSettings.connected, googleSyncSettings.uid]);

  useEffect(() => {
    localStorage.setItem("kademia_profile", JSON.stringify(profile));

    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      const syncDebounce = setTimeout(() => {
        saveUserDataToFirestore(googleSyncSettings.uid, { profile });
      }, 1500);
      return () => clearTimeout(syncDebounce);
    }
  }, [profile, googleSyncSettings.connected, googleSyncSettings.uid]);

  useEffect(() => {
    localStorage.setItem("kademia_profile_history", JSON.stringify(profileHistory));

    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      const syncDebounce = setTimeout(() => {
        saveUserDataToFirestore(googleSyncSettings.uid, { profileHistory });
      }, 1500);
      return () => clearTimeout(syncDebounce);
    }
  }, [profileHistory, googleSyncSettings.connected, googleSyncSettings.uid]);

  useEffect(() => {
    localStorage.setItem("kademia_google_sync", JSON.stringify(googleSyncSettings));
  }, [googleSyncSettings]);

  useEffect(() => {
    if (activeWorkoutRoutine) {
      localStorage.setItem("kademia_active_routine", JSON.stringify(activeWorkoutRoutine));
    } else {
      localStorage.removeItem("kademia_active_routine");
    }
  }, [activeWorkoutRoutine]);

  const handleUpdateProfile = async (newProfile) => {
    const weightValid = newProfile.weight !== "" && newProfile.weight !== undefined && newProfile.weight !== null;
    const weightChanged = weightValid && newProfile.weight !== profile.weight;
    const heightChanged = (newProfile.height !== profile.height && newProfile.height !== "" && newProfile.height !== undefined && newProfile.height !== null);

    let updatedHistory = [...profileHistory];
    if (weightValid && (weightChanged || heightChanged)) {
      updatedHistory.push({
        date: new Date().toISOString(),
        name: newProfile.name,
        weight: newProfile.weight,
        height: newProfile.height
      });
      setProfileHistory(updatedHistory);
    }

    setProfile(newProfile);

    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      saveUserDataToFirestore(googleSyncSettings.uid, { 
        profile: newProfile,
        profileHistory: updatedHistory
      });
    }
  };

  const handleUpdateGoogleSyncSettings = (newSettings) => {
    setGoogleSyncSettings(newSettings);
  };

  const handleClearProfileHistory = () => {
    setProfileHistory([]);
    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      saveUserDataToFirestore(googleSyncSettings.uid, { profileHistory: [] });
    }
  };

  const handleImportBackup = async (importedData) => {
    if (importedData.kademia_workout_data) {
      setWorkoutData(importedData.kademia_workout_data);
      localStorage.setItem("kademia_workout_data", JSON.stringify(importedData.kademia_workout_data));
    }
    if (importedData.kademia_history) {
      const cleanHistory = deduplicateHistory(importedData.kademia_history);
      setHistory(cleanHistory);
      localStorage.setItem("kademia_history", JSON.stringify(cleanHistory));
    }
    if (importedData.kademia_profile) {
      setProfile(importedData.kademia_profile);
      localStorage.setItem("kademia_profile", JSON.stringify(importedData.kademia_profile));
    }
    if (importedData.kademia_profile_history) {
      const cleanProfileHistory = deduplicateProfileHistory(importedData.kademia_profile_history);
      setProfileHistory(cleanProfileHistory);
      localStorage.setItem("kademia_profile_history", JSON.stringify(cleanProfileHistory));
    }

    alert("Backup importado com sucesso!");

    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      saveUserDataToFirestore(googleSyncSettings.uid, {
        workoutData: importedData.kademia_workout_data || workoutData,
        history: importedData.kademia_history || history,
        profile: importedData.kademia_profile || profile,
        profileHistory: importedData.kademia_profile_history || profileHistory
      });
    }
  };

  const handleUpdateWorkoutData = (newDataOrFn) => {
    setWorkoutData((prev) => {
      const nextData = typeof newDataOrFn === "function" ? newDataOrFn(prev) : newDataOrFn;
      return {
        ...nextData,
        lastUpdated: new Date().toISOString()
      };
    });
  };

  const handleSync = async () => {
    if (!googleSyncSettings.connected || !googleSyncSettings.uid) return;

    await runSyncTask(async () => {
      await saveUserDataToFirestore(googleSyncSettings.uid, {
        workoutData: latestDataRef.current.workoutData,
        history: latestDataRef.current.history,
        profile: latestDataRef.current.profile,
        profileHistory: latestDataRef.current.profileHistory
      });
    });
  };

  const handleEnterApp = () => {
    setHasEnteredApp(true);
    sessionStorage.setItem("kademia_session_entered", "true");
  };

  const handleStartWorkout = (routine) => {
    setActiveWorkoutRoutine(routine);
  };

  const handleSaveWorkout = async (sessionData) => {
    const updatedHistory = [sessionData, ...history];
    setHistory(updatedHistory);

    const updatedRoutines = workoutData.routines.map((routine) => {
      if (routine.id !== sessionData.routineId) return routine;
      
      return {
        ...routine,
        exercises: routine.exercises.map((ex) => {
          const finishedEx = sessionData.exercises.find((fe) => fe.name === ex.name);
          if (finishedEx && finishedEx.setsData) {
            const loads = finishedEx.setsData.map((s) => s.load).filter(Boolean);
            if (loads.length > 0) {
              return {
                ...ex,
                load: loads[loads.length - 1]
              };
            }
          }
          return ex;
        })
      };
    });

    const newWorkoutData = {
      ...workoutData,
      routines: updatedRoutines,
      lastUpdated: new Date().toISOString()
    };

    setWorkoutData(newWorkoutData);
    setActiveWorkoutRoutine(null);
    setActiveTab("dashboard");

    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      saveUserDataToFirestore(googleSyncSettings.uid, {
        history: updatedHistory,
        workoutData: newWorkoutData
      });
    }
  };

  const handleCancelWorkout = () => {
    if (window.confirm("Deseja realmente cancelar este treino? Os dados digitados serão perdidos.")) {
      setActiveWorkoutRoutine(null);
      localStorage.removeItem("kademia_active_routine");
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      saveUserDataToFirestore(googleSyncSettings.uid, { history: [] });
    }
  };

  // Render navigation tab contents
  const renderTabContent = () => {
    const syncProps = googleSyncSettings.connected ? {
      status: syncStatus,
      lastSync: lastSyncTime,
      isOnline,
      onSync: handleSync
    } : null;

    switch (activeTab) {
      case "dashboard":
        return (
          <Dashboard
            workoutData={workoutData}
            history={history}
            onStartWorkout={handleStartWorkout}
            onSetActiveTab={setActiveTab}
            profile={profile}
            syncProps={syncProps}
          />
        );
      case "routines":
        return (
          <RoutineManager
            workoutData={workoutData}
            onUpdateWorkoutData={handleUpdateWorkoutData}
            syncProps={syncProps}
          />
        );
      case "history":
        return (
          <History
            history={history}
            onClearHistory={handleClearHistory}
            syncProps={syncProps}
          />
        );
      case "settings":
        return (
          <Settings
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            profileHistory={profileHistory}
            onClearProfileHistory={handleClearProfileHistory}
            theme={theme}
            onToggleTheme={toggleTheme}
            googleSyncSettings={googleSyncSettings}
            onUpdateGoogleSyncSettings={handleUpdateGoogleSyncSettings}
            onSync={handleSync}
            workoutData={workoutData}
            history={history}
            onImportBackup={handleImportBackup}
            onClearHistory={handleClearHistory}
            syncProps={syncProps}
          />
        );
      default:
        return (
          <Dashboard
            workoutData={workoutData}
            history={history}
            onStartWorkout={handleStartWorkout}
            onSetActiveTab={setActiveTab}
            profile={profile}
          />
        );
    }
  };

  if (!hasEnteredApp) {
    return (
      <LandingPage
        deferredPrompt={deferredPrompt}
        onEnterApp={handleEnterApp}
      />
    );
  }

  if (hasEnteredApp && !googleSyncSettings.connected) {
    return (
      <LoginScreen
        theme={theme}
        onToggleTheme={toggleTheme}
        onUpdateProfile={handleUpdateProfile}
        profile={profile}
      />
    );
  }

  if (activeWorkoutRoutine) {
    return (
      <div className="app-container">
        <ActiveWorkout
          routine={activeWorkoutRoutine}
          history={history}
          onSaveWorkout={handleSaveWorkout}
          onCancelWorkout={handleCancelWorkout}
        />
      </div>
    );
  }

  return (
    <div className="app-container animate-fade-in">
      <main className="app-main-content">
        {renderTabContent()}
      </main>

      <nav className="bottom-nav">
        <button
          className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          <BarbellIcon size={20} />
          <span>Treinar</span>
        </button>

        <button
          className={`nav-item ${activeTab === "routines" ? "active" : ""}`}
          onClick={() => setActiveTab("routines")}
        >
          <ClipboardIcon size={20} />
          <span>Fichas</span>
        </button>

        <button
          className={`nav-item ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          <CalendarIcon size={20} />
          <span>Histórico</span>
        </button>

        <button
          className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          <UserIcon size={20} />
          <span>Perfil</span>
        </button>
      </nav>

      {showExitMessage && (
        <div className="exit-toast animate-fade-in">
          Pressione voltar novamente para sair
        </div>
      )}

      <style>{`
        .app-main-content {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 20px;
        }

        .bottom-nav {
          position: fixed;
          bottom: 16px;
          left: 16px;
          right: 16px;
          height: 66px;
          max-width: 448px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: 24px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
          z-index: 99;
          
          background: var(--nav-bg);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid var(--nav-border);
          transition: all 0.3s ease;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background: none;
          border: none;
          color: var(--color-text-secondary);
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          transition: all 0.2s;
          padding: 8px 10px;
          border-radius: 12px;
        }

        .nav-item:hover {
          color: var(--color-text-primary);
        }

        .nav-item.active {
          color: var(--accent-purple);
        }

        .exit-toast {
          position: fixed;
          bottom: 96px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(30, 30, 30, 0.9);
          color: #ffffff;
          padding: 10px 18px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1000;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          white-space: nowrap;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
