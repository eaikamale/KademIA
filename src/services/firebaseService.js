import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot,
  deleteField
} from "firebase/firestore";
import { FIREBASE_CONFIG } from "../config";

// Inicialização do Firebase
const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

/**
 * Realiza login via Popup com a conta Google, com fallback automático para Redirect em celulares/PWA.
 */
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return {
      success: true,
      user: result.user
    };
  } catch (error) {
    console.error("Erro no login via Popup Firebase Google:", error);
    // Se o popup for bloqueado pelo navegador do celular ou PWA, tenta o login via Redirect
    if (
      error.code === "auth/popup-blocked" ||
      error.code === "auth/popup-closed-by-user" ||
      error.code === "auth/cancelled-popup-request" ||
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    ) {
      try {
        await signInWithRedirect(auth, googleProvider);
        return { success: true, redirecting: true };
      } catch (redirectErr) {
        return { success: false, error: redirectErr.message };
      }
    }
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Verifica o resultado de autenticação via Redirect (após retorno no celular).
 */
export async function checkRedirectResult() {
  try {
    const result = await getRedirectResult(auth);
    if (result && result.user) {
      return { success: true, user: result.user };
    }
  } catch (error) {
    console.error("Erro no checkRedirectResult:", error);
  }
  return null;
}

/**
 * Encerra a sessão do usuário no Firebase.
 */
export async function logoutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Escuta mudanças de estado da autenticação (persistência automática de sessão).
 */
export function subscribeAuthState(callback) {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

/**
 * Salva ou atualiza os dados completos do usuário no Firestore (`users/{userId}`).
 * Purga qualquer campo legado antigo e associa o documento exclusivamente ao KademIA.
 */
export async function saveUserDataToFirestore(userId, { workoutData, history, profile, profileHistory }) {
  if (!userId) return { success: false, error: "ID de usuário ausente" };

  try {
    const userDocRef = doc(db, "users", userId);
    const payload = {
      appName: "KademIA",
      updatedAt: new Date().toISOString(),
      // Purga campos legados antigos do documento Firestore se existirem
      gymrotData: deleteField(),
      gymwagData: deleteField(),
      fittrackData: deleteField(),
      gymwag_backup: deleteField(),
      gymrot_history: deleteField(),
      fittrack_history: deleteField()
    };

    if (workoutData !== undefined) payload.workoutData = workoutData;
    if (history !== undefined) payload.history = history;
    if (profile !== undefined) payload.profile = profile;
    if (profileHistory !== undefined) payload.profileHistory = profileHistory;

    await setDoc(userDocRef, payload, { merge: true });
    return { success: true };
  } catch (error) {
    console.error("Erro ao salvar no Firestore:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Busca uma única vez os dados do usuário no Firestore.
 */
export async function fetchUserDataFromFirestore(userId) {
  if (!userId) return null;

  try {
    const userDocRef = doc(db, "users", userId);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error("Erro ao carregar dados do Firestore:", error);
    return null;
  }
}

/**
 * Assina atualizações em tempo real do documento do usuário no Firestore.
 */
export function subscribeUserDataFromFirestore(userId, callback) {
  if (!userId) return () => {};

  const userDocRef = doc(db, "users", userId);
  return onSnapshot(userDocRef, (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data());
    }
  }, (error) => {
    console.error("Erro no listener em tempo real do Firestore:", error);
  });
}
