/**
 * Gera uma imagem PNG transparente de alta definição do Comprovante de Treino KademIA
 * replicando exatamente o cartão de treino com as bolhas de séries (✓ verde / ✕ vermelho),
 * cabeçalho KADEMIA + TÁ PAGO ✓, resumo de séries concluídas e bordas serrilhadas.
 */
export function generateWorkoutReceiptImage(session, profile) {
  return new Promise((resolve, reject) => {
    try {
      const athleteName = profile?.name || "Wagner";
      const routineName = session.routineName || "Treino";
      const routineId = session.routineId ? String(session.routineId).toUpperCase() : "A";
      const dateObj = new Date(session.date || Date.now());
      
      const formattedDate = dateObj.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long"
      });
      const formattedTime = dateObj.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
      });

      const totalVolume = session.exercises?.reduce((acc, ex) => {
        return acc + (ex.setsData?.reduce((sum, set) => sum + (parseFloat(set.load) || 0) * (parseInt(set.reps) || 0), 0) || 0);
      }, 0) || 0;

      const totalSetsCount = session.exercises?.reduce((acc, ex) => {
        return acc + (ex.setsData?.length || 0);
      }, 0) || 0;

      const completedSetsCount = session.exercises?.reduce((acc, ex) => {
        return acc + (ex.setsData?.filter(s => s.completed).length || 0);
      }, 0) || 0;

      const authCode = `#KDM-${dateObj.getTime().toString(36).toUpperCase()}`;
      const exercises = session.exercises || [];

      // Canvas dimensions calculations (HD 2x resolution)
      const width = 640;
      const marginX = 28;
      const marginY = 24;
      const cardW = width - marginX * 2;
      const innerW = cardW - 48; // usable width inside card padding

      // Calculate dynamic height based on exercises and set bubbles
      let exercisesHeight = 40; // Title "Exercícios Realizados"
      exercises.forEach((ex) => {
        exercisesHeight += 28; // Exercise name line
        const sets = ex.setsData || [];
        // Approximate rows of set bubbles (approx 4 bubbles per row)
        const rows = Math.max(1, Math.ceil(sets.length / 4));
        exercisesHeight += rows * 36 + 12; // Set bubbles height + bottom margin
      });

      const height = marginY * 2 + 320 + exercisesHeight;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Não foi possível inicializar o contexto 2D do Canvas."));
        return;
      }

      // Ensure outer background is completely transparent PNG
      ctx.clearRect(0, 0, width, height);

      const cardYTop = marginY + 12;
      const cardYBottom = height - marginY - 12;
      const toothWidth = 14;
      const toothHeight = 10;

      // Draw Jagged Serrated Ticket Container Path
      ctx.beginPath();
      
      // Top serrated teeth
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

      // Bottom serrated teeth
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

      // Fill Ticket Card Body Background (#1A1E26 dark paper)
      ctx.fillStyle = "#1A1E26";
      ctx.fill();

      // Stroke Ticket outer serrated border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 2;
      ctx.stroke();

      let y = cardYTop + 36;

      // Header: Brand Title KADEMIA
      ctx.fillStyle = "#ADFF2F";
      ctx.font = "bold 24px sans-serif";
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

      // Dashed Line Separator
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(marginX + 24, y);
      ctx.lineTo(width - marginX - 24, y);
      ctx.stroke();
      ctx.setLineDash([]);

      y += 28;

      // Routine Header Row: Routine ID Badge + Routine Name + Time
      // Routine ID Letter Circle Badge
      const badgeX = marginX + 24;
      const badgeY = y - 14;
      const badgeR = 14;

      ctx.fillStyle = "#ADFF2F";
      ctx.beginPath();
      ctx.arc(badgeX + badgeR, badgeY + badgeR, badgeR, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#000000";
      ctx.font = "bold 15px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(routineId.charAt(0), badgeX + badgeR, badgeY + badgeR + 5);

      // Routine Name
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 18px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(routineName, badgeX + badgeR * 2 + 12, y + 4);

      // Time (e.g. 19:38)
      ctx.fillStyle = "#64748B";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(formattedTime, width - marginX - 24, y + 4);

      y += 36;

      // Summary Badges Row (Duration | Volume | Séries Concluídas)
      ctx.textAlign = "left";
      const drawBadgePill = (x, text, isGreen = false) => {
        ctx.font = "bold 12px sans-serif";
        const w = ctx.measureText(text).width + 24;
        ctx.fillStyle = isGreen ? "rgba(173, 255, 47, 0.15)" : "rgba(255, 255, 255, 0.05)";
        ctx.strokeStyle = isGreen ? "#ADFF2F" : "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (typeof ctx.roundRect === "function") {
          ctx.roundRect(x, y, w, 28, 8);
        } else {
          ctx.rect(x, y, w, 28);
        }
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isGreen ? "#ADFF2F" : "#E2E8F0";
        ctx.fillText(text, x + 12, y + 18);
        return w;
      };

      let pillX = marginX + 24;
      pillX += drawBadgePill(pillX, `⏱️ ${session.duration || 0} min`) + 10;
      pillX += drawBadgePill(pillX, `Vol: ${totalVolume.toLocaleString("pt-BR")} kg`) + 10;
      drawBadgePill(pillX, `Séries: ${completedSetsCount}/${totalSetsCount}`, true);

      y += 44;

      // Dashed Line Separator
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(marginX + 24, y);
      ctx.lineTo(width - marginX - 24, y);
      ctx.stroke();
      ctx.setLineDash([]);

      y += 28;

      // Title "Exercícios Realizados"
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText("Exercícios Realizados", marginX + 24, y);

      y += 24;

      // Exercise items with set bubbles (✓ green / ✕ red)
      exercises.forEach((ex) => {
        // Exercise Name
        ctx.fillStyle = "#F1F5F9";
        ctx.font = "bold 15px sans-serif";
        ctx.fillText(ex.name, marginX + 24, y);

        y += 10;

        // Render set bubbles
        const sets = ex.setsData || [];
        let currBubbleX = marginX + 24;

        sets.forEach((set, sIdx) => {
          const loadStr = set.load ? `${set.load}kg` : "--";
          const repsStr = set.reps || "0";
          const symbol = set.completed ? "✓" : "✕";

          ctx.font = "bold 12px sans-serif";
          const numStr = `${set.setNum || (sIdx + 1)}ª `;
          const valStr = `${loadStr} × ${repsStr} `;
          
          const numW = ctx.measureText(numStr).width;
          const valW = ctx.measureText(valStr).width;
          const symW = ctx.measureText(symbol).width;

          const bubbleW = numW + valW + symW + 20;

          // Wrap to next line if bubble exceeds inner container width
          if (currBubbleX + bubbleW > width - marginX - 24 && currBubbleX > marginX + 24) {
            currBubbleX = marginX + 24;
            y += 34;
          }

          // Draw set bubble background
          ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
          ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          if (typeof ctx.roundRect === "function") {
            ctx.roundRect(currBubbleX, y + 6, bubbleW, 26, 6);
          } else {
            ctx.rect(currBubbleX, y + 6, bubbleW, 26);
          }
          ctx.fill();
          ctx.stroke();

          // Render text inside bubble
          let txtX = currBubbleX + 10;
          ctx.fillStyle = "#94A3B8"; // set num
          ctx.fillText(numStr, txtX, y + 23);
          txtX += numW;

          ctx.fillStyle = "#FFFFFF"; // load x reps
          ctx.fillText(valStr, txtX, y + 23);
          txtX += valW;

          ctx.fillStyle = set.completed ? "#4ADE80" : "#EF4444"; // symbol ✓ green or ✕ red
          ctx.fillText(symbol, txtX, y + 23);

          currBubbleX += bubbleW + 8;
        });

        y += 40;
      });

      y += 10;

      // Dashed Line Separator
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(marginX + 24, y);
      ctx.lineTo(width - marginX - 24, y);
      ctx.stroke();
      ctx.setLineDash([]);

      y += 24;

      // Footer Auth Code & Tagline
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
