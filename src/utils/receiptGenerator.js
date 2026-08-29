/**
 * Gera uma imagem PNG transparente de alta definição do Comprovante de Treino KademIA
 * com estilo de etiqueta/cupom térmico físico (bordas denteadas/serrilhadas).
 */
export function generateWorkoutReceiptImage(session, profile) {
  return new Promise((resolve, reject) => {
    try {
      const athleteName = profile?.name || "Wagner";
      const routineName = session.routineName || "Treino";
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

      const totalVolume = session.exercises?.reduce((acc, ex) => {
        return acc + (ex.setsData?.reduce((sum, set) => sum + (parseFloat(set.load) || 0) * (parseInt(set.reps) || 0), 0) || 0);
      }, 0) || 0;

      const completedSetsCount = session.exercises?.reduce((acc, ex) => {
        return acc + (ex.setsData?.filter(s => s.completed).length || 0);
      }, 0) || 0;

      const authCode = `#KDM-${dateObj.getTime().toString(36).toUpperCase()}`;

      // Canvas dimensions (HD 2x resolution)
      const width = 640;
      const exercises = session.exercises || [];
      const baseHeight = 440;
      const exRowHeight = 42;
      const height = baseHeight + exercises.length * exRowHeight;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Não foi possível inicializar o contexto 2D do Canvas."));
        return;
      }

      // Ensure outer canvas background is completely transparent
      ctx.clearRect(0, 0, width, height);

      // Serrated Ticket Card Bounds & Teeth Settings
      const marginX = 28;
      const marginY = 24;
      const cardW = width - marginX * 2;
      const cardYTop = marginY + 12;
      const cardYBottom = height - marginY - 12;
      const toothWidth = 14;
      const toothHeight = 10;

      // Draw Jagged Serrated Ticket Container Path
      ctx.beginPath();
      
      // Top serrated teeth (left to right)
      let currentX = marginX;
      ctx.moveTo(currentX, cardYTop);
      while (currentX < marginX + cardW) {
        const nextX = Math.min(currentX + toothWidth, marginX + cardW);
        const midX = currentX + (nextX - currentX) / 2;
        ctx.lineTo(midX, cardYTop - toothHeight);
        ctx.lineTo(nextX, cardYTop);
        currentX = nextX;
      }

      // Right straight edge
      ctx.lineTo(marginX + cardW, cardYBottom);

      // Bottom serrated teeth (right to left)
      while (currentX > marginX) {
        const nextX = Math.max(currentX - toothWidth, marginX);
        const midX = currentX - (currentX - nextX) / 2;
        ctx.lineTo(midX, cardYBottom + toothHeight);
        ctx.lineTo(nextX, cardYBottom);
        currentX = nextX;
      }

      // Left straight edge
      ctx.lineTo(marginX, cardYTop);
      ctx.closePath();

      // Fill Ticket Card Body Background
      ctx.fillStyle = "#1A1E26";
      ctx.fill();

      // Stroke Ticket outer serrated border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 2;
      ctx.stroke();

      let y = cardYTop + 36;

      // Header: Brand Title
      ctx.fillStyle = "#ADFF2F";
      ctx.font = "bold 26px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("KADEMIA", marginX + 24, y);

      // Stamp Badge "TÁ PAGO ✓"
      const stampText = "TÁ PAGO ✓";
      ctx.font = "bold 13px sans-serif";
      const stampWidth = ctx.measureText(stampText).width + 24;
      const stampX = width - marginX - 24 - stampWidth;
      
      ctx.fillStyle = "rgba(173, 255, 47, 0.15)";
      ctx.strokeStyle = "#ADFF2F";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(stampX, y - 20, stampWidth, 28, 14);
      } else {
        ctx.rect(stampX, y - 20, stampWidth, 28);
      }
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ADFF2F";
      ctx.fillText(stampText, stampX + 12, y - 1);

      y += 24;

      // Title & Subtitle
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 20px sans-serif";
      ctx.fillText("COMPROVANTE DE TREINO", marginX + 24, y + 10);
      
      ctx.fillStyle = "#94A3B8";
      ctx.font = "13px sans-serif";
      ctx.fillText("Registro Oficial de Execução & Cargas", marginX + 24, y + 30);

      y += 50;

      // Dashed Line Separator
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(marginX + 24, y);
      ctx.lineTo(width - marginX - 24, y);
      ctx.stroke();
      ctx.setLineDash([]);

      y += 30;

      // Details Key-Value
      const drawDetail = (label, val, highlight = false) => {
        ctx.fillStyle = "#64748B";
        ctx.font = "bold 11px sans-serif";
        ctx.fillText(label, marginX + 24, y);

        ctx.fillStyle = highlight ? "#ADFF2F" : "#FFFFFF";
        ctx.font = "bold 15px sans-serif";
        ctx.fillText(val, marginX + 24, y + 18);

        y += 42;
      };

      drawDetail("ATLETA", athleteName);
      drawDetail("FICHA / ROTINA", routineName, true);
      drawDetail("DATA & HORÁRIO", `${formattedDate} às ${formattedTime}`);
      drawDetail("DURAÇÃO TOTAL", `${session.duration || 0} minutos`);

      y += 5;

      // Dashed Line
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(marginX + 24, y);
      ctx.lineTo(width - marginX - 24, y);
      ctx.stroke();
      ctx.setLineDash([]);

      y += 25;

      // Stats Row Boxes (Volume & Sets)
      const boxW = (cardW - 64) / 2;
      const boxH = 65;

      // Box 1 - Volume Total
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(marginX + 24, y, boxW, boxH, 12);
      } else {
        ctx.rect(marginX + 24, y, boxW, boxH);
      }
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 20px sans-serif";
      ctx.fillText(`${totalVolume.toLocaleString("pt-BR")} kg`, marginX + 36, y + 34);

      ctx.fillStyle = "#94A3B8";
      ctx.font = "11px sans-serif";
      ctx.fillText("VOLUME TOTAL", marginX + 36, y + 52);

      // Box 2 - Séries Concluídas
      const box2X = marginX + 24 + boxW + 16;
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(box2X, y, boxW, boxH, 12);
      } else {
        ctx.rect(box2X, y, boxW, boxH);
      }
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 20px sans-serif";
      ctx.fillText(`${completedSetsCount}`, box2X + 36, y + 34);

      ctx.fillStyle = "#94A3B8";
      ctx.font = "11px sans-serif";
      ctx.fillText("SÉRIES CONCLUÍDAS", box2X + 36, y + 52);

      y += boxH + 25;

      // Dashed Line
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(marginX + 24, y);
      ctx.lineTo(width - marginX - 24, y);
      ctx.stroke();
      ctx.setLineDash([]);

      y += 25;

      // Exercises List Header
      ctx.fillStyle = "#64748B";
      ctx.font = "bold 11px sans-serif";
      ctx.fillText("EXERCÍCIOS REALIZADOS", marginX + 24, y);

      y += 20;

      // Exercises Items
      exercises.forEach((ex) => {
        const doneSets = ex.setsData?.filter(s => s.completed) || [];
        const maxLoad = Math.max(...doneSets.map(s => parseFloat(s.load) || 0), 0);

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 14px sans-serif";
        ctx.fillText(ex.name, marginX + 24, y);

        ctx.fillStyle = "#94A3B8";
        ctx.font = "12px sans-serif";
        const metaStr = `${doneSets.length} séries ${maxLoad > 0 ? `• máx ${maxLoad}kg` : ""}`;
        ctx.fillText(metaStr, marginX + 24, y + 16);

        ctx.fillStyle = "#ADFF2F";
        ctx.font = "bold 16px sans-serif";
        ctx.fillText("✓", width - marginX - 36, y + 10);

        y += exRowHeight;
      });

      y += 5;

      // Dashed Line
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(marginX + 24, y);
      ctx.lineTo(width - marginX - 24, y);
      ctx.stroke();
      ctx.setLineDash([]);

      y += 25;

      // Auth Code & Footer Tagline
      ctx.fillStyle = "#64748B";
      ctx.font = "12px monospace";
      ctx.textAlign = "center";
      ctx.fillText(`AUTENTICAÇÃO: ${authCode}`, width / 2, y);

      ctx.fillStyle = "#94A3B8";
      ctx.font = "11px sans-serif";
      ctx.fillText("KademIA PWA • Resiliência & Alta Performance", width / 2, y + 18);

      // Export as PNG Blob with transparent background
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Falha ao gerar a imagem PNG do comprovante."));
          }
        },
        "image/png"
      );
    } catch (err) {
      reject(err);
    }
  });
}
