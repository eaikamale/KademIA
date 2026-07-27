import React, { useState, useEffect } from "react";
import { 
  UserIcon, 
  SyncIcon, 
  CheckCircleIcon, 
  SunIcon, 
  MoonIcon,
  InfoIcon,
  PaletteIcon,
  CheckIcon
} from "./Icons";
import { loginWithGoogle, logoutUser } from "../services/firebaseService";
import { applyAccentColorToDOM } from "../utils/theme";

export default function Settings({
  profile,
  onUpdateProfile,
  profileHistory,
  onClearProfileHistory,
  theme,
  onToggleTheme,
  googleSyncSettings,
  onUpdateGoogleSyncSettings,
  onSync,
  workoutData,
  history,
  onTriggerExpiredSession,
  onImportBackup,
  onClearHistory,
  syncProps
}) {
  const defaultGreen = theme === "dark" ? "#ADFF2F" : "#008A47";

  // Local profile inputs
  const [name, setName] = useState(profile.name || "");
  const [weight, setWeight] = useState(profile.weight || "");
  const [height, setHeight] = useState(profile.height || "");
  const [secondaryColor, setSecondaryColor] = useState(
    profile.secondaryColor || defaultGreen
  );
  
  // UI states
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSyncingAll, setIsSyncingAll] = useState(false);
  const [syncError, setSyncError] = useState("");
  const [syncSuccess, setSyncSuccess] = useState(false);

  // Track profile prop changes
  useEffect(() => {
    setName(profile.name || "");
    setWeight(profile.weight || "");
    setHeight(profile.height || "");
    setSecondaryColor(profile.secondaryColor || defaultGreen);
  }, [profile, defaultGreen]);

  const handleSelectColor = (hex) => {
    setSecondaryColor(hex);
    applyAccentColorToDOM(hex);
    onUpdateProfile({ 
      ...profile,
      name,
      weight: weight ? parseFloat(weight) : "", 
      height: height ? parseFloat(height) : "",
      secondaryColor: hex
    });
  };

  const handleResetColor = () => {
    handleSelectColor(defaultGreen);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    onUpdateProfile({ 
      name, 
      weight: weight ? parseFloat(weight) : "", 
      height: height ? parseFloat(height) : "",
      secondaryColor
    });
    alert("Perfil atualizado com sucesso!");
  };

  const handleConnectGoogle = async () => {
    setIsConnecting(true);
    setSyncError("");
    setSyncSuccess(false);

    try {
      const res = await loginWithGoogle();
      if (res.success && res.user) {
        const user = res.user;
        onUpdateGoogleSyncSettings({
          connected: true,
          email: user.email || "",
          userName: user.displayName || "",
          picture: user.photoURL || "",
          uid: user.uid
        });

        const givenName = (user.displayName || "").split(" ")[0];
        if (givenName && (!profile.name || profile.name === "Wagner")) {
          onUpdateProfile({
            ...profile,
            name: givenName
          });
        }

        setSyncSuccess(true);
      } else {
        setSyncError("Falha ao entrar com o Google: " + (res.error || "Erro desconhecido"));
      }
    } catch (err) {
      console.error("Connection setup error:", err);
      setSyncError("Erro ao conectar com o Firebase: " + err.message);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    if (window.confirm("Deseja realmente desconectar sua conta da nuvem? Os dados locais continuarão salvos no aparelho.")) {
      await logoutUser();
      onUpdateGoogleSyncSettings({
        connected: false,
        email: "",
        userName: "",
        picture: "",
        uid: ""
      });
      setSyncSuccess(false);
    }
  };

  const handleSyncClick = async () => {
    if (!googleSyncSettings.connected) return;
    
    setIsSyncingAll(true);
    setSyncError("");
    setSyncSuccess(false);

    try {
      await onSync();
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 4000);
      alert("Sucesso! Os seus dados foram sincronizados em tempo real com a nuvem Firebase.");
    } catch (err) {
      setSyncError("Erro na sincronização: " + err.message);
    } finally {
      setIsSyncingAll(false);
    }
  };

  // Render Weight History Chart using a responsive SVG
  const renderWeightChart = () => {
    const weightHistory = profileHistory
      .filter(h => h.weight)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (weightHistory.length < 2) {
      return (
        <div className="chart-empty-state">
          <InfoIcon size={20} />
          <span>Registre pelo menos 2 pesagens no seu perfil para visualizar o gráfico de evolução.</span>
        </div>
      );
    }

    const weights = weightHistory.map(h => h.weight);
    const minW = Math.min(...weights) - 1;
    const maxW = Math.max(...weights) + 1;

    const width = 340;
    const heightSvg = 140;
    const padding = 20;

    const getX = (index) => {
      if (weightHistory.length === 1) return width / 2;
      return padding + (index / (weightHistory.length - 1)) * (width - 2 * padding);
    };

    const getY = (val) => {
      if (maxW === minW) return heightSvg / 2;
      return heightSvg - padding - ((val - minW) / (maxW - minW)) * (heightSvg - 2 * padding);
    };

    const points = weightHistory.map((h, i) => `${getX(i)},${getY(h.weight)}`).join(" ");

    return (
      <div className="svg-chart-container">
        <svg viewBox={`0 0 ${width} ${heightSvg}`} className="weight-svg">
          <polyline
            fill="none"
            stroke={secondaryColor || defaultGreen}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
          />
          {weightHistory.map((h, i) => (
            <g key={i}>
              <circle
                cx={getX(i)}
                cy={getY(h.weight)}
                r="5"
                fill={secondaryColor || defaultGreen}
                stroke="var(--bg-secondary)"
                strokeWidth="2"
              />
              <text
                x={getX(i)}
                y={getY(h.weight) - 10}
                fill="var(--color-text-secondary)"
                fontSize="10"
                textAnchor="middle"
                fontWeight="600"
              >
                {h.weight}kg
              </text>
            </g>
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="settings-container animate-fade-in">
      <div className="settings-header">
        <h2 className="settings-page-title">Ajustes & Perfil</h2>
        <p className="settings-page-subtitle">Personalize suas metas, dados biométricos e conexão com a nuvem.</p>
      </div>

      {/* User Profile Card */}
      <section className="settings-section glass">
        <h3 className="section-title">Dados Pessoais & Biometria</h3>
        <form onSubmit={handleSaveProfile} className="profile-form">
          <div className="form-grid">
            <div className="input-group">
              <label>Nome do Atleta</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Ex: Wagner" 
                required 
              />
            </div>

            <div className="input-group">
              <label>Peso Atual (kg)</label>
              <input 
                type="number" 
                step="0.1" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
                placeholder="Ex: 78.5" 
              />
            </div>

            <div className="input-group">
              <label>Altura (cm)</label>
              <input 
                type="number" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
                placeholder="Ex: 175" 
              />
            </div>
          </div>

          {/* Color Scheme Picker */}
          <div className="color-scheme-picker" style={{ marginTop: "20px" }}>
            <div className="label-with-reset">
              <label><PaletteIcon size={16} /> Cor Secundária do App</label>
              {secondaryColor !== defaultGreen && (
                <button type="button" className="btn-reset-color" onClick={handleResetColor}>
                  Restaurar Padrão
                </button>
              )}
            </div>

            <div className="color-swatches-grid">
              {[
                { name: "Verde Esportivo", hex: defaultGreen },
                { name: "Azul Neon", hex: "#3B82F6" },
                { name: "Roxo Tech", hex: "#8B5CF6" },
                { name: "Laranja Energia", hex: "#F97316" },
                { name: "Rosa Vibrante", hex: "#EC4899" }
              ].map((swatch) => (
                <button
                  key={swatch.hex}
                  type="button"
                  className={`color-swatch-btn ${secondaryColor === swatch.hex ? "active" : ""}`}
                  style={{ backgroundColor: swatch.hex }}
                  onClick={() => handleSelectColor(swatch.hex)}
                  title={swatch.name}
                >
                  {secondaryColor === swatch.hex && (
                    <CheckIcon size={16} className="color-swatch-check" />
                  )}
                </button>
              ))}

              {/* Custom Color Input Circle */}
              {(() => {
                const presetHexes = [defaultGreen, "#3B82F6", "#8B5CF6", "#F97316", "#EC4899"];
                const isCustomActive = !presetHexes.includes(secondaryColor);
                return (
                  <div 
                    className={`custom-color-wrapper ${isCustomActive ? "active" : ""}`}
                    title="Escolher cor personalizada"
                  >
                    <div 
                      className="custom-color-inner" 
                      style={{ 
                        backgroundColor: isCustomActive ? secondaryColor : "transparent" 
                      }}
                    >
                      {isCustomActive && (
                        <CheckIcon size={16} className="color-swatch-check" />
                      )}
                    </div>
                    <input 
                      type="color" 
                      value={secondaryColor || defaultGreen} 
                      onInput={(e) => handleSelectColor(e.target.value)}
                      onChange={(e) => handleSelectColor(e.target.value)}
                      className="custom-color-input"
                    />
                  </div>
                );
              })()}
            </div>
          </div>

          <button type="submit" className="btn btn-lime submit-profile-btn" style={{ marginTop: "20px" }}>
            <UserIcon size={18} /> Salvar Alterações
          </button>
        </form>

        {/* Evolution Graph */}
        {profileHistory.filter(h => h.weight).length > 0 && (
          <div className="evolution-chart-box">
            <h4 className="sub-section-title">Evolução de Peso</h4>
            {renderWeightChart()}
            
            {/* History Table */}
            <div className="history-table-wrapper">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Peso</th>
                  </tr>
                </thead>
                <tbody>
                  {[...profileHistory]
                    .filter(item => item.weight)
                    .reverse()
                    .slice(0, 5)
                    .map((item, i) => (
                      <tr key={i}>
                        <td>{new Date(item.date).toLocaleDateString("pt-BR")}</td>
                        <td>{item.weight} kg</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {profileHistory.filter(item => item.weight).length > 5 && (
                <div className="table-more-info">Exibindo as últimas 5 pesagens</div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Firebase Cloud Sync Card */}
      <section className="settings-section glass">
        <div className="section-header-row">
          <h3 className="section-title">Sincronização em Nuvem (Firebase)</h3>
          {googleSyncSettings.connected ? (
            <span className="badge-status connected">
              <span className="status-dot pulsing"></span> Conectado
            </span>
          ) : (
            <span className="badge-status disconnected">
              Desconectado
            </span>
          )}
        </div>

        {syncError && <div className="sync-banner error">{syncError}</div>}
        {syncSuccess && <div className="sync-banner success">Sincronização concluída com sucesso!</div>}

        {!googleSyncSettings.connected ? (
          <div className="sync-connect-flow">
            <p className="sync-info-text">
              Conecte sua conta do Google para salvar e sincronizar automaticamente suas fichas, cargas e histórico de treinos no banco de dados em nuvem.
            </p>

            <button 
              type="button" 
              className="btn btn-primary start-sync-btn"
              onClick={handleConnectGoogle}
              disabled={isConnecting}
              style={{ marginTop: "16px" }}
            >
              <SyncIcon size={18} className={isConnecting ? "spinner-animation" : ""} />
              {isConnecting ? "Conectando..." : "Conectar Conta Google"}
            </button>
          </div>
        ) : (
          <div className="sync-connected-flow">
            {/* User Info Row */}
            <div className="user-profile-sync">
              {googleSyncSettings.picture ? (
                <img src={googleSyncSettings.picture} alt="Avatar" className="user-sync-avatar" />
              ) : (
                <div className="user-sync-avatar-fallback"><UserIcon size={24} /></div>
              )}
              <div className="user-sync-details">
                <span className="user-sync-name">{googleSyncSettings.userName || "Usuário Conectado"}</span>
                <span className="user-sync-email">{googleSyncSettings.email}</span>
              </div>
            </div>

            {/* Sync Action Grid */}
            <div className="sync-actions-grid">
              <button 
                type="button" 
                className="btn btn-lime full-sync-btn"
                onClick={handleSyncClick}
                disabled={isSyncingAll}
              >
                <SyncIcon size={18} className={isSyncingAll ? "spinner-animation" : ""} />
                {isSyncingAll ? "Sincronizando..." : "Sincronizar Agora com a Nuvem"}
              </button>

              <button 
                type="button" 
                className="btn btn-danger disconnect-btn"
                onClick={handleDisconnect}
              >
                Sair da Conta
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Backup & Import Card */}
      <section className="settings-section glass">
        <h3 className="section-title">Importação & Backup</h3>
        <p className="sync-info-text" style={{ marginBottom: "14px", marginTop: "6px" }}>
          Restaure seu histórico completo do aplicativo GymWag anterior ou importe um arquivo de backup em JSON.
        </p>

        <div className="backup-actions-column" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button 
            type="button" 
            className="btn btn-lime"
            onClick={async () => {
              try {
                const res = await fetch(import.meta.env.BASE_URL + "kademia_restored_backup.json");
                if (!res.ok) throw new Error("Não foi possível carregar o arquivo de restauração.");
                const data = await res.json();
                if (window.confirm("Deseja importar os 4 treinos e 14 registros de peso recuperados da planilha do GymWag?")) {
                  await onImportBackup(data);
                }
              } catch (err) {
                alert("Erro ao carregar histórico: " + err.message);
              }
            }}
          >
            <SyncIcon size={18} /> Restaurar Histórico do GymWag (4 Treinos + Pesagens)
          </button>
        </div>
      </section>

      {/* Theme Settings Card */}
      <section className="settings-section glass">
        <h3 className="section-title">Tema do Aplicativo</h3>
        <div className="theme-toggle-row">
          <span>Modo {theme === "dark" ? "Escuro" : "Claro"} Ativo</span>
          <button type="button" className="btn btn-secondary theme-toggle-pill" onClick={onToggleTheme}>
            {theme === "dark" ? (
              <>
                <MoonIcon size={18} /> Escuro
              </>
            ) : (
              <>
                <SunIcon size={18} /> Claro
              </>
            )}
          </button>
        </div>
      </section>

      {/* Danger Zone Card */}
      <section className="settings-section glass danger-zone-card">
        <h3 className="section-title text-danger">Zona de Perigo</h3>
        <p className="sync-info-text" style={{ marginBottom: "14px", marginTop: "6px" }}>
          Ações irreversíveis sobre os seus dados locais salvos no aparelho.
        </p>

        <div className="danger-actions-column">
          <button 
            type="button" 
            className="btn btn-danger danger-btn"
            onClick={onClearProfileHistory}
          >
            Limpar Histórico de Pesagens
          </button>

          <button 
            type="button" 
            className="btn btn-danger danger-btn"
            onClick={onClearHistory}
          >
            Limpar Histórico de Treinos
          </button>
        </div>
      </section>
    </div>
  );
}
