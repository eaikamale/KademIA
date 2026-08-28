export function getContrastAdjustedColor(hexColor, theme = "dark") {
  if (!hexColor) return theme === "dark" ? "#ADFF2F" : "#008A47";
  const cleanHex = hexColor.replace("#", "").trim();
  if (cleanHex.length !== 6) return theme === "dark" ? "#ADFF2F" : "#008A47";

  const lowerHex = cleanHex.toLowerCase();

  // Special direct mapping for primary green accent
  if (lowerHex === "adff2f" || lowerHex === "008a47") {
    return theme === "dark" ? "#ADFF2F" : "#008A47";
  }

  let r = parseInt(cleanHex.substring(0, 2), 16);
  let g = parseInt(cleanHex.substring(2, 4), 16);
  let b = parseInt(cleanHex.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  if (theme === "light") {
    // Light theme: background is light (~#F4F6F8). Accent needs to be dark enough for contrast (luminance <= 0.38)
    if (luminance > 0.38) {
      const factor = 0.35 / luminance;
      const adjR = Math.max(0, Math.min(255, Math.floor(r * factor)));
      const adjG = Math.max(0, Math.min(255, Math.floor(g * factor)));
      const adjB = Math.max(0, Math.min(255, Math.floor(b * factor)));
      return `#${adjR.toString(16).padStart(2, '0')}${adjG.toString(16).padStart(2, '0')}${adjB.toString(16).padStart(2, '0')}`;
    }
  } else {
    // Dark theme: background is dark (~#0B0E14). Accent needs to be bright enough for contrast (luminance >= 0.45)
    if (luminance < 0.35) {
      const factor = 0.55 / Math.max(luminance, 0.05);
      const adjR = Math.max(0, Math.min(255, Math.floor(r * factor)));
      const adjG = Math.max(0, Math.min(255, Math.floor(g * factor)));
      const adjB = Math.max(0, Math.min(255, Math.floor(b * factor)));
      return `#${adjR.toString(16).padStart(2, '0')}${adjG.toString(16).padStart(2, '0')}${adjB.toString(16).padStart(2, '0')}`;
    }
  }

  return hexColor;
}

export function applyAccentColorToDOM(hexColor, theme = "dark") {
  if (!hexColor) {
    hexColor = theme === "dark" ? "#ADFF2F" : "#008A47";
  }

  // Persist raw selected hex to localStorage
  try {
    localStorage.setItem("kademia_secondary_color", hexColor);
  } catch (e) {}

  // Compute the contrast-adjusted effective hex for the current theme
  const effectiveHex = getContrastAdjustedColor(hexColor, theme);
  const cleanHex = effectiveHex.replace("#", "").trim();
  if (cleanHex.length !== 6) return;

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  // Hover color: 85% brightness
  const hoverFactor = 0.85;
  const hoverR = Math.max(0, Math.floor(r * hoverFactor));
  const hoverG = Math.max(0, Math.floor(g * hoverFactor));
  const hoverB = Math.max(0, Math.floor(b * hoverFactor));
  const hoverHex = `#${hoverR.toString(16).padStart(2, '0')}${hoverG.toString(16).padStart(2, '0')}${hoverB.toString(16).padStart(2, '0')}`;

  // Active color: 75% brightness
  const activeR = Math.max(0, Math.floor(r * 0.75));
  const activeG = Math.max(0, Math.floor(g * 0.75));
  const activeB = Math.max(0, Math.floor(b * 0.75));
  const activeHex = `#${activeR.toString(16).padStart(2, '0')}${activeG.toString(16).padStart(2, '0')}${activeB.toString(16).padStart(2, '0')}`;

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const onAccent = luminance > 0.55 ? "#071200" : "#ffffff";

  // Dynamic style injection guarantees precedence over CSS class declarations
  let styleEl = document.getElementById("theme-accent-override");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "theme-accent-override";
    document.head.appendChild(styleEl);
  }

  styleEl.innerHTML = `
    :root, body, body.dark-theme, body.light-theme {
      --accent-purple: ${effectiveHex} !important;
      --accent-lime: ${effectiveHex} !important;
      --accent-secondary: ${effectiveHex} !important;
      --border-focus: ${effectiveHex} !important;
      --status-success: ${effectiveHex} !important;
      --clay-bg-primary: ${effectiveHex} !important;
      --accent-hover: ${hoverHex} !important;
      --accent-active-color: ${activeHex} !important;
      --accent-purple-glow: rgba(${r}, ${g}, ${b}, 0.15) !important;
      --accent-lime-glow: rgba(${r}, ${g}, ${b}, 0.2) !important;
      --accent-secondary-glow: rgba(${r}, ${g}, ${b}, 0.2) !important;
      --border-hover: rgba(${r}, ${g}, ${b}, 0.3) !important;
      --accent-active: rgba(${r}, ${g}, ${b}, 0.25) !important;
      --glass-border-hover: rgba(${r}, ${g}, ${b}, 0.4) !important;
      --pulsing-shadow: rgba(${r}, ${g}, ${b}, 0.4) !important;
      --pulsing-shadow-start: rgba(${r}, ${g}, ${b}, 0.7) !important;
      --color-on-accent: ${onAccent} !important;
    }
  `;

  const targets = [document.body, document.documentElement];
  targets.forEach((target) => {
    if (!target) return;
    target.style.setProperty("--accent-purple", effectiveHex);
    target.style.setProperty("--accent-lime", effectiveHex);
    target.style.setProperty("--accent-secondary", effectiveHex);
    target.style.setProperty("--border-focus", effectiveHex);
    target.style.setProperty("--status-success", effectiveHex);
    target.style.setProperty("--clay-bg-primary", effectiveHex);
    target.style.setProperty("--accent-hover", hoverHex);
    target.style.setProperty("--accent-active-color", activeHex);
    target.style.setProperty("--accent-purple-glow", `rgba(${r}, ${g}, ${b}, 0.15)`);
    target.style.setProperty("--accent-lime-glow", `rgba(${r}, ${g}, ${b}, 0.2)`);
    target.style.setProperty("--accent-secondary-glow", `rgba(${r}, ${g}, ${b}, 0.2)`);
    target.style.setProperty("--border-hover", `rgba(${r}, ${g}, ${b}, 0.3)`);
    target.style.setProperty("--accent-active", `rgba(${r}, ${g}, ${b}, 0.25)`);
    target.style.setProperty("--glass-border-hover", `rgba(${r}, ${g}, ${b}, 0.4)`);
    target.style.setProperty("--pulsing-shadow", `rgba(${r}, ${g}, ${b}, 0.4)`);
    target.style.setProperty("--pulsing-shadow-start", `rgba(${r}, ${g}, ${b}, 0.7)`);
    target.style.setProperty("--color-on-accent", onAccent);
  });
}
