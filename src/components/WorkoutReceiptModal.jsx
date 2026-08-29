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
              <BarbellIcon size={24} className="receipt-logo-icon" />
              <span className="receipt-brand-title">KADEMIA</span>
            </div>
            <span className="receipt-badge-stamp">TÁ PAGO ✓</span>
          </div>

          <div className="receipt-divider-dashed"></div>

          <h3 className="receipt-title">COMPROVANTE DE TREINO</h3>
          <p className="receipt-subtitle">Registro Oficial de Execução & Cargas</p>

          {/* Key Details Grid */}
          <div className="receipt-details-grid">
            <div className="receipt-detail-item">
              <span className="r-label">ATLETA</span>
              <span className="r-val">{athleteName}</span>
            </div>
            <div className="receipt-detail-item">
              <span className="r-label">FICHA / ROTINA</span>
              <span className="r-val highlight">{session.routineName}</span>
            </div>
            <div className="receipt-detail-item">
              <span className="r-label">DATA & HORÁRIO</span>
              <span className="r-val">{formattedDate} às {formattedTime}</span>
            </div>
            <div className="receipt-detail-item">
              <span className="r-label">DURAÇÃO TOTAL</span>
              <span className="r-val">{session.duration || 0} minutos</span>
            </div>
          </div>

          <div className="receipt-divider-dashed"></div>

          {/* High-Impact Stats Row */}
          <div className="receipt-stats-row">
            <div className="r-stat-box">
              <span className="r-stat-num">{totalVolume.toLocaleString("pt-BR")} <small>kg</small></span>
              <span className="r-stat-label">Volume Total</span>
            </div>
            <div className="r-stat-box">
              <span className="r-stat-num">{completedSetsCount}</span>
              <span className="r-stat-label">Séries Concluídas</span>
            </div>
          </div>

          <div className="receipt-divider-dashed"></div>

          {/* Exercise Breakdown List */}
          <div className="receipt-exercises-breakdown">
            <span className="r-label" style={{ marginBottom: "8px", display: "block" }}>EXERCÍCIOS REALIZADOS</span>
            {session.exercises?.map((ex, idx) => {
              const doneSets = ex.setsData?.filter(s => s.completed) || [];
              const maxLoad = Math.max(...doneSets.map(s => parseFloat(s.load) || 0), 0);
              return (
                <div key={idx} className="r-exercise-row">
                  <div className="r-ex-info">
                    <span className="r-ex-name">{ex.name}</span>
                    <span className="r-ex-meta">{doneSets.length} séries {maxLoad > 0 ? `• máx ${maxLoad}kg` : ""}</span>
                  </div>
                  <span className="r-ex-check">✓</span>
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
