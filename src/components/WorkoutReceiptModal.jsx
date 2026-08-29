import React, { useState } from "react";
import { BarbellIcon, DownloadIcon } from "./Icons";
import { generateWorkoutReceiptImage } from "../utils/receiptGenerator";

export default function WorkoutReceiptModal({ session, profile, onClose }) {
  const [receiptStyle, setReceiptStyle] = useState("story"); // 'story' | 'thermal'
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
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
  const formattedTime = dateObj.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const authCode = `#KDM-${dateObj.getTime().toString(36).toUpperCase()}`;
  const athleteName = profile?.name || "Wagner";
  const routineName = session.routineName || "Treino";

  // Generate JPG and trigger Native Share or Direct File Download
  const handleSaveOrShareJPG = async () => {
    setIsSharing(true);
    try {
      const blob = await generateWorkoutReceiptImage(session, profile, receiptStyle);
      const fileName = `comprovante_treino_${receiptStyle}_${dateObj.toISOString().split("T")[0]}.jpg`;
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
      <div className="modal-content receipt-modal-box animate-slide-up" style={{ maxWidth: "460px", padding: "12px", background: "#0B0E14", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "20px" }}>
        
        {/* Style Selector Tabs */}
        <div className="receipt-style-tabs" style={{ display: "flex", gap: "8px", marginBottom: "12px", background: "rgba(255,255,255,0.05)", padding: "4px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <button
            type="button"
            className={`btn-tab ${receiptStyle === 'story' ? 'active' : ''}`}
            onClick={() => setReceiptStyle('story')}
            style={{
              flex: 1,
              padding: "10px 4px",
              fontSize: "0.85rem",
              fontWeight: "700",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: receiptStyle === 'story' ? "var(--accent-lime)" : "transparent",
              color: receiptStyle === 'story' ? "#000" : "var(--color-text-secondary)"
            }}
          >
            ⚡ Story 9:16 (Instagram)
          </button>
          <button
            type="button"
            className={`btn-tab ${receiptStyle === 'thermal' ? 'active' : ''}`}
            onClick={() => setReceiptStyle('thermal')}
            style={{
              flex: 1,
              padding: "10px 4px",
              fontSize: "0.85rem",
              fontWeight: "700",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: receiptStyle === 'thermal' ? "var(--accent-lime)" : "transparent",
              color: receiptStyle === 'thermal' ? "#000" : "var(--color-text-secondary)"
            }}
          >
            🧾 Recibo Térmico
          </button>
        </div>

        {/* ⚡ VIEW 1: STRAVA CYBERPUNK 9:16 STORY CARD */}
        {receiptStyle === 'story' && (
          <div id="printable-receipt" className="story-card-preview animate-fade-in">
            {/* Header */}
            <div className="story-header">
              <div className="story-brand">
                <BarbellIcon size={22} className="story-logo" />
                <span>KADEMIA ATHLETICS</span>
              </div>
              <span className="story-badge-stamp">TÁ PAGO ✓</span>
            </div>

            {/* Athlete Name & Date */}
            <div className="story-user-block">
              <h2 className="story-athlete-name">{athleteName}</h2>
              <span className="story-date-str">{formattedDate} • {formattedTime}</span>
            </div>

            {/* Routine Title Banner */}
            <div className="story-routine-banner">
              <span className="banner-tag">FICHA DE TREINO</span>
              <h3 className="banner-title">{routineName}</h3>
            </div>

            {/* Stat Cards Grid 2x2 */}
            <div className="story-stats-grid">
              <div className="story-stat-card highlight">
                <span className="s-val">{totalVolume.toLocaleString("pt-BR")} kg</span>
                <span className="s-lbl">VOLUME TOTAL</span>
              </div>
              <div className="story-stat-card">
                <span className="s-val">{completedSetsCount}</span>
                <span className="s-lbl">SÉRIES CONCLUÍDAS</span>
              </div>
              <div className="story-stat-card">
                <span className="s-val">{session.duration || 45} min</span>
                <span className="s-lbl">DURAÇÃO TOTAL</span>
              </div>
              <div className="story-stat-card">
                <span className="s-val">{authCode}</span>
                <span className="s-lbl">AUTENTICAÇÃO</span>
              </div>
            </div>

            {/* Exercises List Breakdown */}
            <div className="story-exercises-section">
              <div className="story-sec-title">
                <span>EXERCÍCIOS REALIZADOS</span>
                <span className="confirm-tag">✓ CONFIRMADO</span>
              </div>

              <div className="story-ex-list">
                {session.exercises?.map((ex, idx) => (
                  <div key={idx} className="story-ex-item">
                    <span className="story-ex-name">{ex.name}</span>
                    <div className="story-sets-wrap">
                      {ex.setsData?.map((set, sIdx) => (
                        <div key={sIdx} className={`story-set-pill ${set.completed ? "ok" : "nok"}`}>
                          <span className="pill-num">{set.setNum || sIdx + 1}ª</span>
                          <span className="pill-val">{set.load ? `${set.load}kg` : "--"} × {set.reps || 0}</span>
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

            {/* Barcode Footer */}
            <div className="story-footer">
              <div className="story-barcode">||||| |||| |||||| ||| ||||||| |||| ||||||</div>
              <span className="story-footer-text">KademIA PWA • Resiliência & Alta Performance</span>
            </div>
          </div>
        )}

        {/* 🧾 VIEW 2: THERMAL PAPER RECEIPT */}
        {receiptStyle === 'thermal' && (
          <div id="printable-receipt" className="thermal-receipt-paper animate-fade-in">
            <div className="thermal-receipt-content">
              <div className="thermal-header">
                <span className="thermal-brand">KADEMIA FITNESS & TREINOS</span>
                <span className="thermal-subbrand">COMPROVANTE OFICIAL DE EXECUÇÃO</span>
              </div>

              <div className="receipt-line-double"></div>

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
                  <span className="t-val">{athleteName.toUpperCase()}</span>
                </div>
                <div className="thermal-info-row">
                  <span className="t-label">TREINO:</span>
                  <span className="t-val highlight">{routineName.toUpperCase()}</span>
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

              <div className="thermal-summary-row">
                <span>TOTAL DE SÉRIES: {completedSetsCount}</span>
                <span className="thermal-stamp-ok">TÁ PAGO ✓</span>
              </div>

              <div className="receipt-line-double"></div>

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
          </div>
        )}

        {/* Action Buttons */}
        <div className="receipt-actions-bar no-print" style={{ padding: "12px 4px 4px 4px" }}>
          <button 
            type="button" 
            className="btn btn-lime" 
            onClick={handleSaveOrShareJPG}
            disabled={isSharing}
            style={{ justifyContent: "center", width: "100%", fontWeight: "800", fontSize: "0.95rem" }}
          >
            <DownloadIcon size={18} /> {isSharing ? "GERANDO IMAGEM JPG..." : `COMPARTILHAR ${receiptStyle === 'story' ? 'STORY 9:16' : 'RECIBO'}`}
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
          /* Story Card 9:16 Styles */
          .story-card-preview {
            background: #0B0E14;
            color: #FFFFFF;
            border-radius: 16px;
            padding: 20px 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            flex-direction: column;
            gap: 16px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.6);
            max-height: 65vh;
            overflow-y: auto;
          }

          .story-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .story-brand {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--accent-lime);
            font-weight: 900;
            font-size: 0.95rem;
            letter-spacing: 0.5px;
          }

          .story-badge-stamp {
            background: rgba(173, 255, 47, 0.15);
            border: 1px solid var(--accent-lime);
            color: var(--accent-lime);
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 800;
          }

          .story-athlete-name {
            font-size: 1.4rem;
            font-weight: 900;
            margin: 0;
            color: #FFF;
          }

          .story-date-str {
            font-size: 0.75rem;
            color: var(--color-text-secondary);
          }

          .story-routine-banner {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 12px 14px;
            border-radius: 12px;
          }

          .banner-tag {
            font-size: 0.65rem;
            color: var(--accent-lime);
            font-weight: 800;
            display: block;
          }

          .banner-title {
            font-size: 1rem;
            font-weight: 900;
            margin: 2px 0 0 0;
            color: #FFF;
          }

          .story-stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .story-stat-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            padding: 10px;
            display: flex;
            flex-direction: column;
          }

          .story-stat-card.highlight {
            border-color: rgba(173, 255, 47, 0.4);
          }

          .story-stat-card .s-val {
            font-size: 1.05rem;
            font-weight: 900;
            color: #FFF;
          }

          .story-stat-card.highlight .s-val {
            color: var(--accent-lime);
          }

          .story-stat-card .s-lbl {
            font-size: 0.65rem;
            color: var(--color-text-secondary);
            font-weight: 700;
            margin-top: 2px;
          }

          .story-sec-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
            font-weight: 800;
            margin-bottom: 8px;
          }

          .confirm-tag {
            font-size: 0.7rem;
            color: #22c55e;
            font-weight: 800;
          }

          .story-ex-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .story-ex-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .story-ex-name {
            font-size: 0.82rem;
            font-weight: 800;
            color: #FFF;
          }

          .story-sets-wrap {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }

          .story-set-pill {
            display: flex;
            align-items: center;
            gap: 4px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            padding: 3px 8px;
            font-size: 0.72rem;
          }

          .story-set-pill.ok {
            border-color: rgba(173, 255, 47, 0.3);
          }

          .pill-num {
            color: var(--color-text-muted);
            font-weight: 600;
          }

          .pill-val {
            color: #FFF;
            font-weight: 700;
          }

          .story-set-pill .set-check-ok {
            color: #22c55e !important;
            font-weight: 900;
          }

          .story-set-pill .set-check-nok {
            color: #ef4444 !important;
            font-weight: 900;
          }

          .story-footer {
            text-align: center;
            margin-top: 8px;
            padding-top: 10px;
            border-top: 1px dashed rgba(255, 255, 255, 0.1);
          }

          .story-barcode {
            font-family: monospace;
            font-size: 0.95rem;
            letter-spacing: 2px;
            color: var(--accent-lime);
            font-weight: 900;
          }

          .story-footer-text {
            font-size: 0.65rem;
            color: var(--color-text-muted);
          }

          /* Thermal Paper Receipt Styles */
          .thermal-receipt-paper {
            background: #F8F6F0;
            color: #1E293B;
            font-family: "Courier New", Courier, monospace;
            padding: 20px 16px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            max-height: 65vh;
            overflow-y: auto;
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
            font-size: 1.05rem;
            font-weight: 900;
            letter-spacing: 1px;
            color: #0F172A;
          }

          .thermal-subbrand {
            font-size: 0.7rem;
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
            font-size: 0.72rem;
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
            font-size: 0.82rem;
            color: #0F172A;
            padding: 2px 0;
          }

          .thermal-info-block {
            display: flex;
            flex-direction: column;
            gap: 4px;
            font-size: 0.78rem;
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
            font-size: 0.82rem;
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
            font-size: 0.78rem;
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
            font-size: 0.72rem;
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

          .thermal-set-bubble .set-check-ok {
            color: #22c55e !important;
            font-weight: 900;
            font-size: 0.82rem;
          }

          .thermal-set-bubble .set-check-nok {
            color: #ef4444 !important;
            font-weight: 900;
            font-size: 0.82rem;
          }

          .thermal-summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.78rem;
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
            font-size: 1rem;
            letter-spacing: 2px;
            font-weight: 900;
            color: #0F172A;
          }

          .thermal-auth-num {
            font-size: 0.68rem;
            color: #475569;
            display: block;
          }

          .thermal-footer {
            text-align: center;
            font-size: 0.65rem;
            color: #64748B;
            font-weight: 700;
            margin-top: 4px;
          }
        `}</style>
      </div>
    </div>
  );
}

