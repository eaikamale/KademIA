import React, { useState } from "react";
import { BarbellIcon, DownloadIcon } from "./Icons";
import { generateWorkoutReceiptImage } from "../utils/receiptGenerator";

export default function WorkoutReceiptModal({ session, profile, onClose }) {
  const [isSharing, setIsSharing] = useState(false);

  if (!session) return null;

  // Calculate total volume (load * reps)
  const totalVolume = session.exercises?.reduce((acc, ex) => {
    return acc + (ex.setsData?.reduce((sum, set) => sum + (parseFloat(set.load) || 0) * (parseInt(set.reps) || 0), 0) || 0);
  }, 0) || 0;

  // Calculate completed sets count
  const completedSetsCount = session.exercises?.reduce((acc, ex) => {
    return acc + (ex.setsData?.filter(s => s.completed).length || 0);
  }, 0) || 0;

  const dateObj = new Date(session.date || Date.now());
  const formattedDate = dateObj.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  const formattedTime = dateObj.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const authCode = `#KDM-${dateObj.getTime().toString(36).toUpperCase()}`;
  const athleteName = profile?.name || "Wagner";

  // Generate PNG with transparent background & serrated edges
  const handleSaveOrSharePNG = async () => {
    setIsSharing(true);
    try {
      const blob = await generateWorkoutReceiptImage(session, profile);
      const fileName = `comprovante_treino_${session.routineId}_${dateObj.toISOString().split("T")[0]}.png`;
      const file = new File([blob], fileName, { type: "image/png" });

      // Check if Web Share API with File sharing is supported
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `Comprovante de Treino - KademIA`,
          text: `Treino ${session.routineName} concluído! 💪`,
          files: [file]
        });
      } else {
        // Fallback: Direct PNG download
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error("Erro ao gerar ou compartilhar comprovante:", err);
      alert("Não foi possível gerar a imagem do comprovante. Tente novamente.");
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="modal-overlay animate-fade-in" style={{ zIndex: 11000 }}>
      <div className="modal-content receipt-modal-box glass animate-slide-up" style={{ maxWidth: "440px", padding: "0" }}>
        
        {/* Printable / Viewable Receipt Body */}
        <div id="printable-receipt" className="receipt-paper">
          {/* Header */}
          <div className="receipt-header">
            <div className="receipt-brand">
              <BarbellIcon size={22} className="receipt-logo-icon" />
              <span className="receipt-brand-title">KADEMIA</span>
            </div>
            <span className="receipt-badge-stamp">TÁ PAGO ✓</span>
          </div>

          <div className="receipt-divider-dashed"></div>

          {/* Routine Header Row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--accent-lime)", color: "#000", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem" }}>
                {(session.routineId || "A").toString().charAt(0).toUpperCase()}
              </div>
              <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: "700", color: "#fff" }}>{session.routineName}</h4>
            </div>
            <span style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>{formattedTime}</span>
          </div>

          {/* Summary Badges Row */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
            <div style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid var(--border-color)", fontSize: "0.8rem", color: "#e2e8f0", fontWeight: "600" }}>
              ⏱️ {session.duration || 0} min
            </div>
            <div style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid var(--border-color)", fontSize: "0.8rem", color: "#e2e8f0", fontWeight: "600" }}>
              Vol: {totalVolume.toLocaleString("pt-BR")} kg
            </div>
            <div style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(173, 255, 47, 0.15)", border: "1px solid var(--accent-lime)", fontSize: "0.8rem", color: "var(--accent-lime)", fontWeight: "700" }}>
              Exercícios: {session.exercises?.filter(ex => ex.setsData?.some(s => s.completed || (parseFloat(s.load) > 0 || (s.reps && String(s.reps).trim() !== "" && String(s.reps).trim() !== "0")))).length || 0}/{session.exercises?.length || 0}
            </div>
            <div style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(173, 255, 47, 0.15)", border: "1px solid var(--accent-lime)", fontSize: "0.8rem", color: "var(--accent-lime)", fontWeight: "700" }}>
              Séries: {completedSetsCount}/{session.exercises?.reduce((a, e) => a + (e.setsData?.length || 0), 0) || 0}
            </div>
          </div>

          <div className="receipt-divider-dashed"></div>

          {/* Exercise List with Set Bubbles */}
          <div className="receipt-exercises-breakdown" style={{ textAlign: "left" }}>
            <h5 className="details-title" style={{ fontSize: "0.9rem", color: "#fff", marginBottom: "12px" }}>Exercícios Realizados</h5>
            {session.exercises?.map((ex, idx) => {
              const isExSkipped = !ex.setsData || ex.setsData.length === 0 || !ex.setsData.some(s => s.completed || (parseFloat(s.load) > 0 || (s.reps && String(s.reps).trim() !== "" && String(s.reps).trim() !== "0")));

              if (isExSkipped) {
                return (
                  <div key={idx} className="details-ex-item" style={{ marginBottom: "12px", opacity: 0.75 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span className="details-ex-name" style={{ fontSize: "0.88rem", fontWeight: "600", color: "var(--color-text-secondary)" }}>{ex.name}</span>
                      <span style={{ fontSize: "0.72rem", padding: "2px 8px", borderRadius: "10px", background: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "var(--color-text-muted)", fontWeight: "600" }}>
                        Pulado / Não realizado
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <div key={idx} className="details-ex-item" style={{ marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <span className="details-ex-name" style={{ fontSize: "0.9rem", fontWeight: "700", color: "#f1f5f9" }}>{ex.name}</span>
                    <span style={{ fontSize: "0.72rem", color: "#4ade80", fontWeight: "700" }}>✓ Executado</span>
                  </div>
                  <div className="details-sets-list" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {ex.setsData?.map((set, setIdx) => (
                      <div key={setIdx} className={`details-set-bubble ${set.completed ? "ok" : "nok"}`} style={{ display: "inline-flex", alignItems: "center", gap: "4px", padding: "4px 8px", borderRadius: "6px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.12)", fontSize: "0.78rem" }}>
                        <span className="set-num" style={{ color: "var(--color-text-muted)", fontWeight: "600" }}>{set.setNum || (setIdx + 1)}ª</span>
                        <span className="set-val" style={{ color: "#fff", fontWeight: "700" }}>
                          {set.load ? `${set.load}kg` : "--"} × {set.reps || "0"}
                        </span>
                        {set.completed ? (
                          <span style={{ color: "#4ade80", fontWeight: "bold", marginLeft: "2px" }}>✓</span>
                        ) : (
                          <span style={{ color: "#ef4444", fontWeight: "bold", marginLeft: "2px" }}>✕</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="receipt-divider-dashed"></div>

          {/* Footer Auth Code */}
          <div className="receipt-footer">
            <span className="r-auth-code">AUTENTICAÇÃO: {authCode}</span>
            <span className="r-footer-tag">KademIA PWA • Resiliência & Alta Performance</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="receipt-actions-bar no-print">
          <button 
            type="button" 
            className="btn btn-lime" 
            onClick={handleSaveOrSharePNG}
            disabled={isSharing}
            style={{ justifyContent: "center" }}
          >
            <DownloadIcon size={16} /> {isSharing ? "Gerando Imagem PNG..." : "Salvar / Compartilhar PNG"}
          </button>
          
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={onClose}
            style={{ justifyContent: "center" }}
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
}
