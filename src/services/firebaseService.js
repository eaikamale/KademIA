import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot 
} from "firebase/firestore";
import { FIREBASE_CONFIG } from "../config";

// Inicialização do Firebase
const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

/**
 * Realiza login via Popup com a conta Google (sem solicitar escopos do Drive).
 */
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return {
      success: true,
      user: result.user
    };
  } catch (error) {
    console.error("Erro no login do Firebase Google:", error);
    return {
      success: false,
      error: error.message
    };
  }
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
 */
export async function saveUserDataToFirestore(userId, { workoutData, history, profile, profileHistory }) {
  if (!userId) return { success: false, error: "ID de usuário ausente" };

  try {
    const userDocRef = doc(db, "users", userId);
    const payload = {
      updatedAt: new Date().toISOString()
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
