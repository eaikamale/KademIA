/**
 * Gera uma imagem JPG de alta definição do Comprovante de Treino KademIA
 * utilizando o estilo de comprovante térmico (Estilo Lotérica / Caixa).
 */
export function generateWorkoutReceiptImage(session, profile) {
  return new Promise((resolve, reject) => {
    try {
      const athleteName = (profile?.name || "Wagner").toUpperCase();
      const routineName = (session.routineName || "TREINO").toUpperCase();
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

      const totalVolume = session.exercises?.reduce((acc, ex) => {
        return acc + (ex.setsData?.reduce((sum, set) => sum + (parseFloat(set.load) || 0) * (parseInt(set.reps) || 0), 0) || 0);
      }, 0) || 0;

      const completedSetsCount = session.exercises?.reduce((acc, ex) => {
        return acc + (ex.setsData?.filter(s => s.completed).length || 0);
      }, 0) || 0;

      const authCode = `#KDM-${dateObj.getTime().toString(36).toUpperCase()}`;

      // Canvas dimensions (HD resolution for thermal receipt)
      const width = 640;
      const exercises = session.exercises || [];
      
      // Calculate dynamic height based on exercise sets count
      let extraHeight = 0;
      exercises.forEach(ex => {
        const setsCount = ex.setsData?.length || 0;
        const setRows = Math.ceil(setsCount / 3) || 1;
        extraHeight += 32 + setRows * 28;
      });

      const height = Math.max(580, 360 + extraHeight);

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Não foi possível inicializar o contexto 2D do Canvas."));
        return;
      }

      // Background thermal paper color
      ctx.fillStyle = "#F8F6F0";
      ctx.fillRect(0, 0, width, height);

      // Outer margin border
      const margin = 20;
      const contentW = width - margin * 2;

      let y = margin + 30;

      // Thermal Receipt Header
      ctx.fillStyle = "#0F172A";
      ctx.font = "bold 22px 'Courier New', Courier, monospace";
      ctx.textAlign = "center";
      ctx.fillText("KADEMIA FITNESS & TREINOS", width / 2, y);

      y += 20;
      ctx.fillStyle = "#475569";
      ctx.font = "bold 13px 'Courier New', Courier, monospace";
      ctx.fillText("COMPROVANTE OFICIAL DE EXECUÇÃO", width / 2, y);

      y += 18;

      // Double Line Divider
      ctx.strokeStyle = "#0F172A";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(margin, y);
      ctx.lineTo(width - margin, y);
      ctx.stroke();

      y += 22;

      // Meta Grid Date & Time
      ctx.fillStyle = "#334155";
      ctx.font = "bold 13px 'Courier New', Courier, monospace";
      ctx.textAlign = "left";
      ctx.fillText(`DATA: ${formattedDate}`, margin, y);
      ctx.textAlign = "right";
      ctx.fillText(`HORA DF: ${formattedTime}`, width - margin, y);

      y += 20;
      ctx.textAlign = "left";
      ctx.fillText(`AUTENTICAÇÃO: ${authCode}`, margin, y);

      y += 20;
      ctx.fillText(`LOCALIDADE: SÃO PAULO`, margin, y);
      ctx.textAlign = "right";
      ctx.fillText(`TERM: 021930`, width - margin, y);

      y += 16;

      // Dashed Line Separator
      ctx.strokeStyle = "#64748B";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(margin, y);
      ctx.lineTo(width - margin, y);
      ctx.stroke();
      ctx.setLineDash([]);

      y += 22;

      // Section Title
      ctx.fillStyle = "#0F172A";
      ctx.font = "bold 15px 'Courier New', Courier, monospace";
      ctx.textAlign = "center";
      ctx.fillText("COMPROVANTE DE CONCLUSAO DE TREINO", width / 2, y);

      y += 24;

      // Athlete and Workout Info Block
      ctx.textAlign = "left";
      ctx.font = "bold 14px 'Courier New', Courier, monospace";
      
      const drawThermalRow = (label, val, isGreen = false) => {
        ctx.fillStyle = "#475569";
        ctx.fillText(label, margin, y);

        ctx.fillStyle = isGreen ? "#047857" : "#0F172A";
        ctx.fillText(val, margin + 140, y);
        y += 22;
      };

      drawThermalRow("ATLETA:", athleteName);
      drawThermalRow("TREINO:", routineName, true);
      drawThermalRow("DURAÇÃO:", `${session.duration || 0} MINUTOS`);
      drawThermalRow("VOLUME:", `${totalVolume.toLocaleString("pt-BR")} KG`);

      y += 6;

      // Double Line Divider
      ctx.strokeStyle = "#0F172A";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(margin, y);
      ctx.lineTo(width - margin, y);
      ctx.stroke();

      y += 24;

      // Exercises List Title
      ctx.fillStyle = "#0F172A";
      ctx.font = "bold 15px 'Courier New', Courier, monospace";
      ctx.fillText("EXERCÍCIOS REALIZADOS", margin, y);

      y += 24;

      // Render Exercises with Set Bubbles & Green Checkmarks
      exercises.forEach((ex) => {
        ctx.fillStyle = "#0F172A";
        ctx.font = "bold 14px 'Courier New', Courier, monospace";
        ctx.fillText(ex.name, margin, y);

        y += 20;

        const sets = ex.setsData || [];
        let curX = margin;

        sets.forEach((set, sIdx) => {
          // Set bubble box dimensions
          const bubbleW = 145;
          const bubbleH = 26;

          if (curX + bubbleW > width - margin) {
            curX = margin;
            y += 30;
          }

          // Draw set bubble background
          ctx.fillStyle = set.completed ? "#1E293B" : "#475569";
          ctx.beginPath();
          if (typeof ctx.roundRect === "function") {
            ctx.roundRect(curX, y - 18, bubbleW, bubbleH, 4);
          } else {
            ctx.rect(curX, y - 18, bubbleW, bubbleH);
          }
          ctx.fill();

          // Set text
          ctx.font = "12px sans-serif";
          ctx.fillStyle = "#94A3B8";
          ctx.fillText(`${set.setNum || sIdx + 1}ª`, curX + 6, y - 1);

          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 12px sans-serif";
          const valStr = `${set.load ? set.load + 'kg' : '--'} × ${set.reps || 0}`;
          ctx.fillText(valStr, curX + 24, y - 1);

          // Green checkmark (v em verde no comprovante!)
          if (set.completed) {
            ctx.fillStyle = "#22c55e"; // VERDE
            ctx.font = "bold 14px sans-serif";
            ctx.fillText("✓", curX + bubbleW - 16, y - 1);
          } else {
            ctx.fillStyle = "#ef4444"; // VERMELHO
            ctx.font = "bold 14px sans-serif";
            ctx.fillText("✗", curX + bubbleW - 16, y - 1);
          }

          curX += bubbleW + 8;
        });

        y += 32;
      });

      y += 6;

      // Dashed Line
      ctx.strokeStyle = "#64748B";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(margin, y);
      ctx.lineTo(width - margin, y);
      ctx.stroke();
      ctx.setLineDash([]);

      y += 22;

      // Summary & Stamp Row
      ctx.fillStyle = "#0F172A";
      ctx.font = "bold 13px 'Courier New', Courier, monospace";
      ctx.fillText(`TOTAL DE SÉRIES: ${completedSetsCount}`, margin, y);

      ctx.fillStyle = "#15803d";
      ctx.textAlign = "right";
      ctx.fillText("TÁ PAGO ✓", width - margin, y);

      y += 16;

      // Double Line
      ctx.strokeStyle = "#0F172A";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(margin, y);
      ctx.lineTo(width - margin, y);
      ctx.stroke();

      y += 24;

      // Simulated Barcode
      ctx.textAlign = "center";
      ctx.fillStyle = "#0F172A";
      ctx.font = "bold 18px 'Courier New', Courier, monospace";
      ctx.fillText("||||| |||| |||||| ||| ||||||| |||| ||||||", width / 2, y);

      y += 18;
      ctx.fillStyle = "#475569";
      ctx.font = "11px 'Courier New', Courier, monospace";
      ctx.fillText(`AUTENTICAÇÃO: ${authCode}`, width / 2, y);

      y += 18;
      ctx.fillText("1ª VIA - KADEMIA RESILIÊNCIA & PERFORMANCE", width / 2, y);

      // Export to JPEG Blob
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Falha ao gerar a imagem JPG do comprovante."));
          }
        },
        "image/jpeg",
        0.95
      );
    } catch (err) {
      reject(err);
    }
  });
}

