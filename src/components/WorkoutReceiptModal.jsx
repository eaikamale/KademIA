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
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
  const formattedTime = dateObj.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const authCode = `#KDM-${dateObj.getTime().toString(36).toUpperCase()}`;
  const athleteName = (profile?.name || "Wagner").toUpperCase();
  const routineName = (session.routineName || "TREINO").toUpperCase();

  // Generate JPG and trigger Native Share or Direct File Download
  const handleSaveOrShareJPG = async () => {
    setIsSharing(true);
    try {
      const blob = await generateWorkoutReceiptImage(session, profile);
      const fileName = `comprovante_treino_${session.routineId || "kemia"}_${dateObj.toISOString().split("T")[0]}.jpg`;
      const file = new File([blob], fileName, { type: "image/jpeg" });

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `Comprovante de Treino - KademIA`,
          text: `Treino ${routineName} concluído! 💪`,
          files: [file]
        });
      } else {
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
      <div className="modal-content receipt-modal-box animate-slide-up" style={{ maxWidth: "460px", padding: "0", background: "transparent", border: "none" }}>
        
        {/* Printable / Thermal Receipt Paper */}
        <div id="printable-receipt" className="thermal-receipt-paper">
          {/* Top Paper Serrated Edge */}
          <div className="receipt-serrated-edge top"></div>

          <div className="thermal-receipt-content">
            {/* Header */}
            <div className="thermal-header">
              <span className="thermal-brand">KADEMIA FITNESS & TREINOS</span>
              <span className="thermal-subbrand">COMPROVANTE OFICIAL DE EXECUÇÃO</span>
            </div>

            <div className="receipt-line-double"></div>

            {/* Receipt Metadata */}
            <div className="thermal-meta-grid">
              <div className="thermal-meta-row">
                <span>{formattedDate}</span>
                <span>HORA DF {formattedTime}</span>
              </div>
              <div className="thermal-meta-row">
                <span>AUTENTICAÇÃO: {authCode}</span>
              </div>
              <div className="thermal-meta-row">
                <span>LOCALIDADE: SÃO PAULO</span>
                <span>TERM: 021930</span>
              </div>
            </div>

            <div className="receipt-line-dashed"></div>

            <div className="thermal-section-header">
              <span>COMPROVANTE DE CONCLUSAO DE TREINO</span>
            </div>

            <div className="thermal-info-block">
              <div className="thermal-info-row">
                <span className="t-label">ATLETA:</span>
                <span className="t-val">{athleteName}</span>
              </div>
              <div className="thermal-info-row">
                <span className="t-label">TREINO:</span>
                <span className="t-val highlight">{routineName}</span>
              </div>
              <div className="thermal-info-row">
                <span className="t-label">DURAÇÃO:</span>
                <span className="t-val">{session.duration || 0} MINUTOS</span>
              </div>
              <div className="thermal-info-row">
                <span className="t-label">VOLUME TOTAL:</span>
                <span className="t-val">{totalVolume.toLocaleString("pt-BR")} KG</span>
              </div>
            </div>

            <div className="receipt-line-double"></div>

            {/* Exercise List Breakdown with Green Checkmarks */}
            <div className="thermal-exercises-section">
              <h5 className="thermal-ex-title">EXERCÍCIOS REALIZADOS</h5>
              
              <div className="thermal-exercises-list">
                {session.exercises?.map((ex, exIdx) => (
                  <div key={exIdx} className="thermal-ex-item">
                    <span className="thermal-ex-name">{ex.name}</span>
                    <div className="thermal-sets-list">
                      {ex.setsData?.map((set, setIdx) => (
                        <div key={setIdx} className={`thermal-set-bubble ${set.completed ? "ok" : "nok"}`}>
                          <span className="set-num">{set.setNum}ª</span>
                          <span className="set-val">
                            {set.load ? `${set.load}kg` : "--"} × {set.reps || "0"}
                          </span>
                          {set.completed ? (
                            <span className="set-check-ok">✓</span>
                          ) : (
                            <span className="set-check-nok">✗</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="receipt-line-dashed"></div>

            {/* Total Summary Row */}
            <div className="thermal-summary-row">
              <span>TOTAL DE SÉRIES: {completedSetsCount}</span>
              <span className="thermal-stamp-ok">TÁ PAGO ✓</span>
            </div>

            <div className="receipt-line-double"></div>

            {/* Simulated Barcode */}
            <div className="thermal-barcode-container">
              <div className="thermal-barcode-lines">
                ||||| |||| |||||| ||| ||||||| |||| |||||| ||| ||||||| |||||
              </div>
              <span className="thermal-auth-num">{authCode}</span>
            </div>

            <div className="thermal-footer">
              <span>1ª VIA - KADEMIA RESILIÊNCIA & PERFORMANCE</span>
            </div>
          </div>

          {/* Bottom Paper Serrated Edge */}
          <div className="receipt-serrated-edge bottom"></div>
        </div>

        {/* Action Buttons */}
        <div className="receipt-actions-bar no-print" style={{ padding: "16px 8px 8px 8px" }}>
          <button 
            type="button" 
            className="btn btn-lime" 
            onClick={handleSaveOrShareJPG}
            disabled={isSharing}
            style={{ justifyContent: "center", width: "100%", fontWeight: "700" }}
          >
            <DownloadIcon size={16} /> {isSharing ? "GERANDO COMPROVANTE..." : "SALVAR / COMPARTILHAR COMPROVANTE"}
          </button>
          
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={onClose}
            style={{ justifyContent: "center", width: "100%", marginTop: "8px" }}
          >
            FECHAR
          </button>
        </div>

        <style>{`
          .thermal-receipt-paper {
            background: #F8F6F0;
            color: #1E293B;
            font-family: "Courier New", Courier, monospace;
            padding: 24px 20px;
            border-radius: 4px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            position: relative;
          }

          .thermal-receipt-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .thermal-header {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .thermal-brand {
            font-size: 1.1rem;
            font-weight: 900;
            letter-spacing: 1px;
            color: #0F172A;
          }

          .thermal-subbrand {
            font-size: 0.72rem;
            color: #475569;
            font-weight: 700;
          }

          .receipt-line-double {
            border-bottom: 2px solid #0F172A;
            margin: 4px 0;
          }

          .receipt-line-dashed {
            border-bottom: 1px dashed #64748B;
            margin: 4px 0;
          }

          .thermal-meta-grid {
            font-size: 0.75rem;
            display: flex;
            flex-direction: column;
            gap: 2px;
            color: #334155;
            font-weight: 700;
          }

          .thermal-meta-row {
            display: flex;
            justify-content: space-between;
          }

          .thermal-section-header {
            text-align: center;
            font-weight: 900;
            font-size: 0.85rem;
            color: #0F172A;
            padding: 4px 0;
          }

          .thermal-info-block {
            display: flex;
            flex-direction: column;
            gap: 4px;
            font-size: 0.8rem;
            font-weight: 700;
          }

          .thermal-info-row {
            display: flex;
            justify-content: space-between;
          }

          .t-label {
            color: #475569;
          }

          .t-val {
            color: #0F172A;
          }

          .t-val.highlight {
            color: #047857;
            font-weight: 900;
          }

          .thermal-ex-title {
            font-size: 0.85rem;
            font-weight: 900;
            margin-bottom: 8px;
            color: #0F172A;
          }

          .thermal-exercises-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .thermal-ex-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .thermal-ex-name {
            font-size: 0.8rem;
            font-weight: 900;
            color: #0F172A;
          }

          .thermal-sets-list {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }

          .thermal-set-bubble {
            display: flex;
            align-items: center;
            gap: 4px;
            background: #1E293B;
            color: #FFFFFF;
            border-radius: 4px;
            padding: 3px 7px;
            font-size: 0.75rem;
            font-family: sans-serif;
          }

          .thermal-set-bubble.nok {
            background: #475569;
            opacity: 0.75;
          }

          .thermal-set-bubble .set-num {
            color: #94A3B8;
            font-weight: 600;
          }

          .thermal-set-bubble .set-val {
            color: #FFFFFF;
            font-weight: 700;
          }

          /* V (checkmark) em VERDE no comprovante! */
          .thermal-set-bubble .set-check-ok {
            color: #22c55e !important;
            font-weight: 900;
            font-size: 0.85rem;
          }

          .thermal-set-bubble .set-check-nok {
            color: #ef4444 !important;
            font-weight: 900;
            font-size: 0.85rem;
          }

          .thermal-summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
            font-weight: 900;
            color: #0F172A;
          }

          .thermal-stamp-ok {
            background: #15803d;
            color: #FFFFFF;
            font-size: 0.7rem;
            padding: 2px 8px;
            border-radius: 3px;
            font-weight: 900;
          }

          .thermal-barcode-container {
            text-align: center;
            margin-top: 4px;
          }

          .thermal-barcode-lines {
            font-size: 1.1rem;
            letter-spacing: 2px;
            font-weight: 900;
            color: #0F172A;
          }

          .thermal-auth-num {
            font-size: 0.7rem;
            color: #475569;
            display: block;
          }

          .thermal-footer {
            text-align: center;
            font-size: 0.68rem;
            color: #64748B;
            font-weight: 700;
            margin-top: 4px;
          }
        `}</style>
      </div>
    </div>
  );
}

