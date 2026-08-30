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
  subscribeUserDataFromFirestore,
  checkRedirectResult
} from "./services/firebaseService";

// Helper to deduplicate local history data (both session duplicates and set duplicates)
function deduplicateHistory(historyList) {
  if (!Array.isArray(historyList)) return [];

  const getNormalizedDateKey = (session) => {
    if (!session) return "";
    if (session.id) return String(session.id);
    if (!session.date) return "";
    try {
      const d = new Date(session.date);
      d.setMilliseconds(0);
      return d.toISOString();
    } catch (e) {
      return String(session.date);
    }
  };

  const sessionsMap = {};

  historyList.forEach(session => {
    if (!session) return;
    const key = getNormalizedDateKey(session) || Math.random().toString();
    
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

function mergeHistory(localList, remoteList) {
  const arrLocal = Array.isArray(localList) ? localList : [];
  const arrRemote = Array.isArray(remoteList) ? remoteList : [];
  return deduplicateHistory([...arrLocal, ...arrRemote]);
}

function mergeProfileHistory(localList, remoteList) {
  const arrLocal = Array.isArray(localList) ? localList : [];
  const arrRemote = Array.isArray(remoteList) ? remoteList : [];
  return deduplicateProfileHistory([...arrLocal, ...arrRemote]);
}

function sanitizeWorkoutData(workoutData) {
  if (!workoutData || !Array.isArray(workoutData.routines)) {
    return defaultWorkout;
  }
  return workoutData;
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("kademia_theme");
    return saved || "dark";
  });

  // App data states
  const [workoutData, setWorkoutData] = useState(() => {
    try {
      const saved = localStorage.getItem("kademia_workout_data");
      return saved ? JSON.parse(saved) : defaultWorkout;
    } catch (e) {
      return defaultWorkout;
    }
  });

  const [history, setHistory] = useState(() => {
    try {
      const keys = [
        "kademia_history",
        "gymrot_history",
        "fittrack_history",
        "gymwag_history",
        "history"
      ];
      let combined = [];
      keys.forEach((k) => {
        const item = localStorage.getItem(k);
        if (item) {
          try {
            const parsed = JSON.parse(item);
            if (Array.isArray(parsed)) combined = [...combined, ...parsed];
          } catch (e) {}
        }
      });
      const merged = deduplicateHistory(combined);
      if (merged.length > 0) {
        localStorage.setItem("kademia_history", JSON.stringify(merged));
      }
      localStorage.removeItem("gymrot_history");
      localStorage.removeItem("fittrack_history");
      localStorage.removeItem("gymwag_history");
      localStorage.removeItem("gymrot_workout_data");
      localStorage.removeItem("fittrack_workout_data");
      return merged;
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
      const keys = [
        "kademia_profile_history",
        "gymrot_profile_history",
        "fittrack_profile_history",
        "gymwag_profile_history",
        "profile_history"
      ];
      let combined = [];
      keys.forEach((k) => {
        const item = localStorage.getItem(k);
        if (item) {
          try {
            const parsed = JSON.parse(item);
            if (Array.isArray(parsed)) combined = [...combined, ...parsed];
          } catch (e) {}
        }
      });
      const merged = deduplicateProfileHistory(combined);
      if (merged.length > 0) {
        localStorage.setItem("kademia_profile_history", JSON.stringify(merged));
      }
      localStorage.removeItem("gymrot_profile_history");
      localStorage.removeItem("fittrack_profile_history");
      localStorage.removeItem("gymwag_profile_history");
      return merged;
    } catch (e) {
      return [];
    }
  });

  // Apply custom accent color dynamically on boot and theme toggle
  const defaultGreen = theme === "dark" ? "#ADFF2F" : "#008A47";
  const rawColor = profile?.secondaryColor || localStorage.getItem("kademia_secondary_color") || defaultGreen;
  const isDefaultGreen = !rawColor || rawColor.toLowerCase() === "#adff2f" || rawColor.toLowerCase() === "#008a47";
  const activeUserColor = isDefaultGreen ? defaultGreen : rawColor;
  
  useEffect(() => {
    applyAccentColorToDOM(activeUserColor, theme);
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
    setTheme((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      const nextDefault = nextTheme === "dark" ? "#ADFF2F" : "#008A47";
      const rawColor = profile?.secondaryColor || localStorage.getItem("kademia_secondary_color");
      const isDefaultGreen = !rawColor || rawColor.toLowerCase() === "#adff2f" || rawColor.toLowerCase() === "#008a47";

      if (isDefaultGreen) {
        setProfile((prevProf) => ({ ...prevProf, secondaryColor: nextDefault }));
        try {
          localStorage.setItem("kademia_secondary_color", nextDefault);
        } catch (e) {}
      }
      return nextTheme;
    });
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

  // Subscribe to Firebase Auth State (Session persistence & Redirect handler)
  useEffect(() => {
    checkRedirectResult().catch(err => console.error("Erro no checkRedirectResult:", err));

    const unsubscribeAuth = subscribeAuthState(async (user) => {
      if (user) {
        setGoogleSyncSettings({
          connected: true,
          email: user.email || "",
          userName: user.displayName || "",
          picture: user.photoURL || "",
          uid: user.uid
        });

        // Fetch initial user data from Firestore on login and bi-directionally merge
        try {
          const remoteData = await fetchUserDataFromFirestore(user.uid);
          
          let localHist = latestDataRef.current.history || [];
          let localProfHist = latestDataRef.current.profileHistory || [];
          let localProf = latestDataRef.current.profile || {};
          let localWd = latestDataRef.current.workoutData || defaultWorkout;

          // Fallback to localStorage directly if latestDataRef is empty
          try {
            const h = localStorage.getItem("kademia_history");
            if (h) localHist = mergeHistory(localHist, JSON.parse(h));
          } catch(e) {}

          try {
            const ph = localStorage.getItem("kademia_profile_history");
            if (ph) localProfHist = mergeProfileHistory(localProfHist, JSON.parse(ph));
          } catch(e) {}

          try {
            const p = localStorage.getItem("kademia_profile");
            if (p) localProf = { ...localProf, ...JSON.parse(p) };
          } catch(e) {}

          try {
            const wd = localStorage.getItem("kademia_workout_data");
            if (wd) localWd = sanitizeWorkoutData(JSON.parse(wd));
          } catch(e) {}

          const remoteHist = remoteData?.history || [];
          const mergedHist = mergeHistory(localHist, remoteHist);

          const remoteProfHist = remoteData?.profileHistory || [];
          const mergedProfHist = mergeProfileHistory(localProfHist, remoteProfHist);

          const remoteProf = remoteData?.profile || {};
          const mergedProf = { ...localProf, ...remoteProf };

          const finalWorkoutData = remoteData?.workoutData ? sanitizeWorkoutData(remoteData.workoutData) : sanitizeWorkoutData(localWd);

          // Update React states immediately
          setHistory(mergedHist);
          setProfileHistory(mergedProfHist);
          setProfile(mergedProf);
          setWorkoutData(finalWorkoutData);

          // Update localStorage immediately
          localStorage.setItem("kademia_history", JSON.stringify(mergedHist));
          localStorage.setItem("kademia_profile_history", JSON.stringify(mergedProfHist));
          localStorage.setItem("kademia_profile", JSON.stringify(mergedProf));
          localStorage.setItem("kademia_workout_data", JSON.stringify(finalWorkoutData));

          // Save unified merged payload to Firestore
          await saveUserDataToFirestore(user.uid, {
            workoutData: finalWorkoutData,
            history: mergedHist,
            profile: mergedProf,
            profileHistory: mergedProfHist
          });

          console.log(`✅ Sincronização automática de login concluída! ${mergedHist.length} treinos no histórico e ${mergedProfHist.length} pesagens ativas.`);
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
        setHistory(prevLocal => mergeHistory(prevLocal, remoteData.history));
      }
      if (remoteData.profile) {
        setProfile(prevLocal => ({ ...prevLocal, ...remoteData.profile }));
      }
      if (remoteData.profileHistory) {
        setProfileHistory(prevLocal => mergeProfileHistory(prevLocal, remoteData.profileHistory));
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

  // Monitor online/offline status and window focus for instant multi-device sync
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

    const handleFocus = () => {
      if (googleSyncSettings.connected && googleSyncSettings.uid) {
        console.log("🔄 Foco na janela: Verificando sincronização com a nuvem...");
        handleSync();
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("focus", handleFocus);
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
    let newWd = workoutData;
    let newHist = history;
    let newProf = profile;
    let newProfHist = profileHistory;

    // Workout Data
    const rawWd = importedData.kademia_workout_data || importedData.workoutData;
    if (rawWd) {
      newWd = sanitizeWorkoutData(rawWd);
      setWorkoutData(newWd);
      localStorage.setItem("kademia_workout_data", JSON.stringify(newWd));
    }

    // History
    const rawHist = importedData.kademia_history || importedData.history;
    if (rawHist && Array.isArray(rawHist)) {
      newHist = mergeHistory(history, rawHist);
      setHistory(newHist);
      localStorage.setItem("kademia_history", JSON.stringify(newHist));
    }

    // Profile
    const rawProf = importedData.kademia_profile || importedData.profile;
    if (rawProf) {
      newProf = { ...profile, ...rawProf };
      setProfile(newProf);
      localStorage.setItem("kademia_profile", JSON.stringify(newProf));
    }

    // Profile History (Weight)
    const rawProfHist = importedData.kademia_profile_history || importedData.profileHistory;
    if (rawProfHist && Array.isArray(rawProfHist)) {
      newProfHist = mergeProfileHistory(profileHistory, rawProfHist);
      setProfileHistory(newProfHist);
      localStorage.setItem("kademia_profile_history", JSON.stringify(newProfHist));
    }

    alert(`Backup importado e mesclado com sucesso! (${newHist.length} treinos no histórico e ${newProfHist.length} pesagens).`);

    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      await saveUserDataToFirestore(googleSyncSettings.uid, {
        workoutData: newWd,
        history: newHist,
        profile: newProf,
        profileHistory: newProfHist
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

  const handleResetDefaultWorkout = async () => {
    if (window.confirm("Deseja restaurar as fichas para a versão oficial (Ficha ABCD Otimizada - com treino B isolado de Ombros & Core)? As fichas serão atualizadas no seu aparelho e na nuvem imediatamente (seu histórico de treinos salvos NÃO será afetado).")) {
      setWorkoutData(defaultWorkout);
      localStorage.setItem("kademia_workout_data", JSON.stringify(defaultWorkout));
      if (googleSyncSettings.connected && googleSyncSettings.uid) {
        await saveUserDataToFirestore(googleSyncSettings.uid, { workoutData: defaultWorkout });
      }
      alert("Ficha ABCD Otimizada restaurada e sincronizada com a nuvem com sucesso!");
    }
  };

  const handleSync = async () => {
    if (!googleSyncSettings.connected || !googleSyncSettings.uid) return;

    await runSyncTask(async () => {
      const remoteData = await fetchUserDataFromFirestore(googleSyncSettings.uid);

      const localHist = latestDataRef.current.history || [];
      const remoteHist = remoteData?.history || [];
      const mergedHist = mergeHistory(localHist, remoteHist);

      const localProfHist = latestDataRef.current.profileHistory || [];
      const remoteProfHist = remoteData?.profileHistory || [];
      const mergedProfHist = mergeProfileHistory(localProfHist, remoteProfHist);

      const mergedProf = { ...(latestDataRef.current.profile || {}), ...(remoteData?.profile || {}) };
      const finalWorkoutData = latestDataRef.current.workoutData || remoteData?.workoutData || defaultWorkout;

      setHistory(mergedHist);
      setProfileHistory(mergedProfHist);
      setProfile(mergedProf);
      setWorkoutData(finalWorkoutData);

      localStorage.setItem("kademia_history", JSON.stringify(mergedHist));
      localStorage.setItem("kademia_profile_history", JSON.stringify(mergedProfHist));
      localStorage.setItem("kademia_profile", JSON.stringify(mergedProf));
      localStorage.setItem("kademia_workout_data", JSON.stringify(finalWorkoutData));

      await saveUserDataToFirestore(googleSyncSettings.uid, {
        workoutData: finalWorkoutData,
        history: mergedHist,
        profile: mergedProf,
        profileHistory: mergedProfHist
      });
    });
  };

  const handleForcePushToCloud = async () => {
    if (!googleSyncSettings.connected || !googleSyncSettings.uid) {
      alert("Sua conta do Google não está conectada neste aparelho.");
      return;
    }

    const histLen = (history || []).length;
    const profHistLen = (profileHistory || []).length;

    if (window.confirm(`Deseja ENVIAR TODOS OS DADOS deste aparelho (${histLen} treinos salvos e ${profHistLen} pesagens) para a nuvem na conta (${googleSyncSettings.email})?`)) {
      await runSyncTask(async () => {
        await saveUserDataToFirestore(googleSyncSettings.uid, {
          workoutData: latestDataRef.current.workoutData,
          history: latestDataRef.current.history,
          profile: latestDataRef.current.profile,
          profileHistory: latestDataRef.current.profileHistory
        });
      });
      alert(`Sucesso! Os ${histLen} treinos e ${profHistLen} pesagens deste aparelho foram gravados na nuvem para a conta ${googleSyncSettings.email}. No seu outro aparelho, abra a tela Perfil e clique em 'Sincronizar Agora com a Nuvem'.`);
    }
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

  const handleDeleteSingleWorkout = (sessionToDelete) => {
    const updated = history.filter((s) => {
      if (sessionToDelete.id && s.id) {
        return s.id !== sessionToDelete.id;
      }
      return s.date !== sessionToDelete.date;
    });
    setHistory(updated);
    localStorage.setItem("kademia_history", JSON.stringify(updated));
    if (googleSyncSettings.connected && googleSyncSettings.uid) {
      saveUserDataToFirestore(googleSyncSettings.uid, { history: updated });
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
            onDeleteWorkout={handleDeleteSingleWorkout}
            syncProps={syncProps}
            profile={profile}
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
            onResetDefaultWorkout={handleResetDefaultWorkout}
            onForcePush={handleForcePushToCloud}
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
          profile={profile}
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
