import React, { useState } from "react";
import { 
  SyncIcon, 
  SunIcon, 
  MoonIcon,
  BarbellIcon
} from "./Icons";
import { loginWithGoogle } from "../services/firebaseService";

export default function LoginScreen({
  theme,
  onToggleTheme,
  onUpdateProfile,
  profile,
  onLoginSuccess
}) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleConnectGoogle = async () => {
    setIsConnecting(true);
    setErrorMsg("");

    try {
      const res = await loginWithGoogle();
      if (res.success && res.user) {
        const user = res.user;
        const displayName = user.displayName || "";
        const givenName = displayName.split(" ")[0];

        // Update profile name if it was empty or default
        if (givenName && (!profile?.name || profile?.name === "Wagner")) {
          onUpdateProfile({
            ...profile,
            name: givenName
          });
        }

        if (onLoginSuccess) {
          onLoginSuccess(user);
        }
      } else {
        setErrorMsg("Falha ao entrar com o Google: " + (res.error || "Erro desconhecido"));
      }
    } catch (err) {
      console.error("Erro no login Firebase Google:", err);
      setErrorMsg("Erro de autenticação: " + err.message);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="login-screen-container animate-fade-in">
      {/* Floating Theme Button */}
      <button type="button" className="theme-toggle-btn" onClick={onToggleTheme}>
        {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
      </button>

      <div className="login-card glass animate-slide-up">
        {/* App Logo */}
        <div className="login-logo-wrapper">
          <div className="login-logo-circle">
            <BarbellIcon size={36} className="login-logo-icon" />
          </div>
          <h1 className="login-title">Kadem<span>IA</span></h1>
          <p className="login-subtitle">Seu treino, no seu ritmo.</p>
        </div>

        <p className="login-description">
          Conecte-se com sua conta Google para salvar e sincronizar automaticamente suas fichas, cargas e histórico de treinos na nuvem.
        </p>

        {errorMsg && <div className="login-error-banner">{errorMsg}</div>}

        <div className="login-form-area">
          {/* Connect Button */}
          <button 
            type="button" 
            className="btn btn-primary login-connect-btn"
            onClick={handleConnectGoogle}
            disabled={isConnecting}
          >
            {isConnecting ? (
              <>
                <SyncIcon size={18} className="spinner-animation" />
                Conectando...
              </>
            ) : (
              <>
                {/* Classic Google 'G' logo inside SVG */}
                <svg className="google-logo-svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Entrar com o Google
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .login-screen-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: var(--bg-primary);
          position: relative;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 28px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .login-logo-wrapper {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .login-logo-circle {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background-color: var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .login-logo-icon {
          color: var(--color-on-accent);
        }

        .login-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-text-primary);
          line-height: 1;
        }

        .login-title span {
          color: var(--accent-purple);
        }

        .login-subtitle {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          margin-top: 4px;
          font-weight: 500;
        }

        .login-description {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .login-error-banner {
          width: 100%;
          padding: 10px 14px;
          background: var(--status-error-glow);
          border: 1px solid var(--status-error);
          color: var(--status-error);
          border-radius: 12px;
          font-size: 0.82rem;
          margin-bottom: 16px;
          text-align: left;
        }

        .login-form-area {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .login-connect-btn {
          width: 100%;
          padding: 14px;
          font-size: 1rem;
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .google-logo-svg {
          flex-shrink: 0;
          background: white;
          border-radius: 50%;
          padding: 2px;
        }
      `}</style>
    </div>
  );
}
