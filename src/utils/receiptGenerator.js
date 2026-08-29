/**
 * Gera uma imagem JPG de alta definição do Comprovante de Treino KademIA.
 * Suporta o estilo 'story' (Instagram / WhatsApp Story 9:16) e 'thermal' (Recibo Térmico).
 * 
 * @param {Object} session Dados do treino realizado
 * @param {Object} profile Perfil do usuário
 * @param {string} style Estilo do comprovante ('story' | 'thermal')
 * @returns {Promise<Blob>} Blob da imagem JPG
 */
export function generateWorkoutReceiptImage(session, profile, style = 'story') {
  return new Promise((resolve, reject) => {
    try {
      if (style === 'thermal') {
        generateThermalReceiptCanvas(session, profile, resolve, reject);
      } else {
        generateStoryReceiptCanvas(session, profile, resolve, reject);
      }
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * ⚡ Gerador do Card de Performance Strava Cyberpunk 9:16 (1080x1920 px)
 */
function generateStoryReceiptCanvas(session, profile, resolve, reject) {
  const athleteName = (profile?.name || "Wagner").toUpperCase();
  const routineName = (session.routineName || "TREINO A - PEITO & TRÍCEPS").toUpperCase();
  const dateObj = new Date(session.date || Date.now());

  const formattedDate = dateObj.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).toUpperCase();

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

  // Canvas HD 9:16 Dimensions
  const width = 1080;
  const height = 1920;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    reject(new Error("Não foi possível inicializar o contexto 2D do Canvas."));
    return;
  }

  // 1. OLED Dark Background
  ctx.fillStyle = "#0B0E14";
  ctx.fillRect(0, 0, width, height);

  // Radial Background Glow (Neon Accent Lime Glow at Top Right)
  const gradTop = ctx.createRadialGradient(850, 250, 50, 850, 250, 700);
  gradTop.addColorStop(0, "rgba(173, 255, 47, 0.12)");
  gradTop.addColorStop(1, "rgba(11, 14, 20, 0)");
  ctx.fillStyle = gradTop;
  ctx.fillRect(0, 0, width, height);

  // Radial Background Glow (Purple Glow at Bottom Left)
  const gradBot = ctx.createRadialGradient(200, 1600, 50, 200, 1600, 600);
  gradBot.addColorStop(0, "rgba(168, 85, 247, 0.10)");
  gradBot.addColorStop(1, "rgba(11, 14, 20, 0)");
  ctx.fillStyle = gradBot;
  ctx.fillRect(0, 0, width, height);

  const pad = 64;
  let y = pad + 40;

  // 2. Top Header Brand
  ctx.fillStyle = "#ADFF2F";
  ctx.font = "900 32px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("KADEMIA ATHLETICS", pad, y);

  ctx.fillStyle = "#64748B";
  ctx.font = "700 22px sans-serif";
  ctx.fillText("HIGH PERFORMANCE TRACKER", pad, y + 32);

  // Badge "TÁ PAGO ✓" (Top Right)
  const stampText = "TÁ PAGO ✓";
  ctx.font = "900 24px sans-serif";
  const stampW = ctx.measureText(stampText).width + 36;
  const stampX = width - pad - stampW;

  ctx.fillStyle = "rgba(173, 255, 47, 0.15)";
  ctx.strokeStyle = "#ADFF2F";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(stampX, y - 24, stampW, 54, 27);
  } else {
    ctx.rect(stampX, y - 24, stampW, 54);
  }
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#ADFF2F";
  ctx.textAlign = "center";
  ctx.fillText(stampText, stampX + stampW / 2, y + 10);

  y += 100;

  // 3. User & Date Info
  ctx.textAlign = "left";
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 48px sans-serif";
  ctx.fillText(athleteName, pad, y);

  ctx.fillStyle = "#94A3B8";
  ctx.font = "600 22px sans-serif";
  ctx.fillText(`${formattedDate} • ${formattedTime}`, pad, y + 36);

  y += 90;

  // 4. Routine Main Banner Box (Glassmorphism)
  const bannerH = 110;
  ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(pad, y, width - pad * 2, bannerH, 20);
  } else {
    ctx.rect(pad, y, width - pad * 2, bannerH);
  }
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#ADFF2F";
  ctx.font = "900 18px sans-serif";
  ctx.fillText("FICHA DE TREINO", pad + 28, y + 38);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 32px sans-serif";
  ctx.fillText(routineName, pad + 28, y + 78);

  y += bannerH + 40;

  // 5. Stat Cards 2x2 Grid
  const cardW = (width - pad * 2 - 24) / 2;
  const cardH = 130;

  const drawStatCard = (x, yPos, title, val, isHighlight = false) => {
    ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
    ctx.strokeStyle = isHighlight ? "rgba(173, 255, 47, 0.4)" : "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    if (typeof ctx.roundRect === "function") {
      ctx.roundRect(x, yPos, cardW, cardH, 20);
    } else {
      ctx.rect(x, yPos, cardW, cardH);
    }
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = isHighlight ? "#ADFF2F" : "#FFFFFF";
    ctx.font = "900 36px sans-serif";
    ctx.fillText(val, x + 24, yPos + 58);

    ctx.fillStyle = "#94A3B8";
    ctx.font = "700 18px sans-serif";
    ctx.fillText(title, x + 24, yPos + 96);
  };

  // Row 1
  drawStatCard(pad, y, "VOLUME TOTAL", `${totalVolume.toLocaleString("pt-BR")} kg`, true);
  drawStatCard(pad + cardW + 24, y, "SÉRIES CONCLUÍDAS", `${completedSetsCount}`);

  y += cardH + 20;

  // Row 2
  drawStatCard(pad, y, "DURAÇÃO TOTAL", `${session.duration || 45} min`);
  drawStatCard(pad + cardW + 24, y, "AUTENTICAÇÃO", authCode);

  y += cardH + 50;

  // 6. Section Title: EXERCÍCIOS REALIZADOS
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 28px sans-serif";
  ctx.fillText("EXERCÍCIOS REALIZADOS", pad, y);

  ctx.fillStyle = "#22c55e";
  ctx.font = "900 24px sans-serif";
  ctx.fillText("✓ EXECUÇÃO CONFIRMADA", width - pad - 320, y);

  y += 36;

  // 7. Exercises Breakdown List
  const exercises = session.exercises || [];
  exercises.forEach((ex) => {
    if (y > height - 200) return; // Prevent overflow

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 24px sans-serif";
    ctx.fillText(ex.name, pad, y);

    y += 32;

    const sets = ex.setsData || [];
    let curX = pad;

    sets.forEach((set, sIdx) => {
      const bubbleW = 220;
      const bubbleH = 44;

      if (curX + bubbleW > width - pad) {
        curX = pad;
        y += 54;
      }

      ctx.fillStyle = set.completed ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)";
      ctx.strokeStyle = set.completed ? "rgba(173, 255, 47, 0.3)" : "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(curX, y - 30, bubbleW, bubbleH, 10);
      } else {
        ctx.rect(curX, y - 30, bubbleW, bubbleH);
      }
      ctx.fill();
      ctx.stroke();

      ctx.font = "700 18px sans-serif";
      ctx.fillStyle = "#94A3B8";
      ctx.fillText(`${set.setNum || sIdx + 1}ª`, curX + 12, y - 1);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "900 19px sans-serif";
      const valStr = `${set.load ? set.load + 'kg' : '--'} × ${set.reps || 0}`;
      ctx.fillText(valStr, curX + 44, y - 1);

      // Checkmark (✓) VERDE VIBRANTE
      if (set.completed) {
        ctx.fillStyle = "#22c55e"; // VERDE
        ctx.font = "900 22px sans-serif";
        ctx.fillText("✓", curX + bubbleW - 28, y - 1);
      } else {
        ctx.fillStyle = "#ef4444"; // VERMELHO
        ctx.font = "900 22px sans-serif";
        ctx.fillText("✗", curX + bubbleW - 28, y - 1);
      }

      curX += bubbleW + 12;
    });

    y += 58;
  });

  // 8. Bottom Barcode & Footer
  y = height - pad - 60;

  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(pad, y);
  ctx.lineTo(width - pad, y);
  ctx.stroke();

  y += 40;
  ctx.textAlign = "center";
  ctx.fillStyle = "#ADFF2F";
  ctx.font = "900 22px monospace";
  ctx.fillText("||||| |||| |||||| ||| ||||||| |||| ||||||", width / 2, y);

  y += 28;
  ctx.fillStyle = "#64748B";
  ctx.font = "700 18px sans-serif";
  ctx.fillText("KademIA PWA • Resiliência & Alta Performance", width / 2, y);

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
}

/**
 * 🧾 Gerador do Recibo Térmico Clássico (640px)
 */
function generateThermalReceiptCanvas(session, profile, resolve, reject) {
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

  const width = 640;
  const exercises = session.exercises || [];
  
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

  // Background thermal paper
  ctx.fillStyle = "#F8F6F0";
  ctx.fillRect(0, 0, width, height);

  const margin = 20;
  let y = margin + 30;

  ctx.fillStyle = "#0F172A";
  ctx.font = "bold 22px 'Courier New', Courier, monospace";
  ctx.textAlign = "center";
  ctx.fillText("KADEMIA FITNESS & TREINOS", width / 2, y);

  y += 20;
  ctx.fillStyle = "#475569";
  ctx.font = "bold 13px 'Courier New', Courier, monospace";
  ctx.fillText("COMPROVANTE OFICIAL DE EXECUÇÃO", width / 2, y);

  y += 18;

  ctx.strokeStyle = "#0F172A";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(margin, y);
  ctx.lineTo(width - margin, y);
  ctx.stroke();

  y += 22;

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

  ctx.strokeStyle = "#64748B";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(margin, y);
  ctx.lineTo(width - margin, y);
  ctx.stroke();
  ctx.setLineDash([]);

  y += 22;

  ctx.fillStyle = "#0F172A";
  ctx.font = "bold 15px 'Courier New', Courier, monospace";
  ctx.textAlign = "center";
  ctx.fillText("COMPROVANTE DE CONCLUSAO DE TREINO", width / 2, y);

  y += 24;

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

  ctx.strokeStyle = "#0F172A";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(margin, y);
  ctx.lineTo(width - margin, y);
  ctx.stroke();

  y += 24;

  ctx.fillStyle = "#0F172A";
  ctx.font = "bold 15px 'Courier New', Courier, monospace";
  ctx.fillText("EXERCÍCIOS REALIZADOS", margin, y);

  y += 24;

  exercises.forEach((ex) => {
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 14px 'Courier New', Courier, monospace";
    ctx.fillText(ex.name, margin, y);

    y += 20;

    const sets = ex.setsData || [];
    let curX = margin;

    sets.forEach((set, sIdx) => {
      const bubbleW = 145;
      const bubbleH = 26;

      if (curX + bubbleW > width - margin) {
        curX = margin;
        y += 30;
      }

      ctx.fillStyle = set.completed ? "#1E293B" : "#475569";
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(curX, y - 18, bubbleW, bubbleH, 4);
      } else {
        ctx.rect(curX, y - 18, bubbleW, bubbleH);
      }
      ctx.fill();

      ctx.font = "12px sans-serif";
      ctx.fillStyle = "#94A3B8";
      ctx.fillText(`${set.setNum || sIdx + 1}ª`, curX + 6, y - 1);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 12px sans-serif";
      const valStr = `${set.load ? set.load + 'kg' : '--'} × ${set.reps || 0}`;
      ctx.fillText(valStr, curX + 24, y - 1);

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

  ctx.strokeStyle = "#64748B";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(margin, y);
  ctx.lineTo(width - margin, y);
  ctx.stroke();
  ctx.setLineDash([]);

  y += 22;

  ctx.fillStyle = "#0F172A";
  ctx.font = "bold 13px 'Courier New', Courier, monospace";
  ctx.fillText(`TOTAL DE SÉRIES: ${completedSetsCount}`, margin, y);

  ctx.fillStyle = "#15803d";
  ctx.textAlign = "right";
  ctx.fillText("TÁ PAGO ✓", width - margin, y);

  y += 16;

  ctx.strokeStyle = "#0F172A";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(margin, y);
  ctx.lineTo(width - margin, y);
  ctx.stroke();

  y += 24;

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
}


