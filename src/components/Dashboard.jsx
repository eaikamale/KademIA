import React from "react";
import { BarbellIcon, TrophyIcon, HistoryIcon, EditIcon, PlayIcon, FlameIcon } from "./Icons";

export default function Dashboard({ workoutData, history, onStartWorkout, onSetActiveTab, profile, syncProps }) {
  // Simple weekly tracker (last 7 days)
  const getWeeklyProgress = () => {
    const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const today = new Date();
    
    return Array.from({ length: 7 }).map((_, idx) => {
      const d = new Date();
      d.setDate(today.getDate() - (6 - idx));
      const dayName = days[d.getDay()];
      const dateString = d.toDateString();
      
      // Find workout in history that occurred on this day
      const workoutOnDay = history.find(item => {
        const itemDate = new Date(item.date);
        return itemDate.toDateString() === dateString;
      });

      return {
        dayName,
        completed: !!workoutOnDay,
        routineId: workoutOnDay ? workoutOnDay.routineId : null,
        isToday: dateString === today.toDateString()
      };
    });
  };

  const weeklyProgress = getWeeklyProgress();
  
  // Order routines based on the last completed workout (rotate so that next routine is first, last completed is last)
  const getOrderedRoutines = () => {
    const routines = workoutData.routines || [];
    if (routines.length <= 1 || history.length === 0) {
      return routines;
    }

    const lastWorkoutRoutineId = history[0]?.routineId;
    if (!lastWorkoutRoutineId) {
      return routines;
    }

    const lastIdx = routines.findIndex(r => r.id === lastWorkoutRoutineId);
    if (lastIdx === -1) {
      return routines;
    }

    const after = routines.slice(lastIdx + 1);
    const upTo = routines.slice(0, lastIdx + 1);
    return [...after, ...upTo];
  };

  const orderedRoutines = getOrderedRoutines();
  
  // Calculate total stats
  const totalWorkouts = history.length;
  
  // Calculate max streak ("Sua Maior Ofensiva" - maior sequência de dias seguidos com treinos registrados)
  const getMaxStreak = () => {
    if (!history || history.length === 0) return 0;

    const uniqueDates = Array.from(
      new Set(
        history
          .map((item) => {
            const d = new Date(item.date);
            if (isNaN(d.getTime())) return null;
            return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
          })
          .filter(Boolean)
      )
    ).sort();

    if (uniqueDates.length === 0) return 0;

    let maxStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < uniqueDates.length; i++) {
      const prev = new Date(uniqueDates[i - 1] + "T00:00:00");
      const curr = new Date(uniqueDates[i] + "T00:00:00");
      const diffTime = curr.getTime() - prev.getTime();
      const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

      if (diffDays === 1) {
        currentStreak += 1;
        if (currentStreak > maxStreak) {
          maxStreak = currentStreak;
        }
      } else if (diffDays > 1) {
        currentStreak = 1;
      }
    }

    return maxStreak;
  };

  const maxStreak = getMaxStreak();
  const lastWorkout = history[0] ? new Date(history[0].date).toLocaleDateString("pt-BR") : "Nenhum";

  return (
    <div className="dashboard-container animate-fade-in">
      {/* Header */}
      <header className="dash-header">
        <div>
          <span className="welcome-text">Bora treinar,</span>
          <h2 className="user-name">{profile?.name || "Wagner"}!</h2>
        </div>
        <div className="header-actions" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {syncProps?.connected ? (
            <button
              type="button"
              className="btn-dash-sync"
              onClick={syncProps.onSync}
              title="Sincronizar com a nuvem"
              aria-label="Sincronizar com a nuvem"
              style={{
                display: "inline-flex",
                align-items: "center",
                gap: "4px",
                padding: "6px 10px",
                borderRadius: "20px",
                background: "rgba(173, 255, 47, 0.12)",
                border: "1px solid rgba(173, 255, 47, 0.3)",
                color: "#ADFF2F",
                fontSize: "0.75rem",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              🔄 Sincronizar
            </button>
          ) : (
            <button
              type="button"
              className="btn-dash-sync"
              onClick={syncProps?.onConnectGoogle}
              title="Entrar com o Google para sincronizar"
              aria-label="Entrar com o Google para sincronizar"
              style={{
                display: "inline-flex",
                align-items: "center",
                gap: "4px",
                padding: "6px 10px",
                borderRadius: "20px",
                background: "rgba(173, 255, 47, 0.18)",
                border: "1px solid rgba(173, 255, 47, 0.5)",
                color: "#ADFF2F",
                fontSize: "0.75rem",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              ☁️ Entrar c/ Google
            </button>
          )}
          <div className="streak-badge glass">
            <TrophyIcon size={18} className="badge-icon" />
            <span><strong>{totalWorkouts}</strong> treinos</span>
          </div>
        </div>
      </header>

      {/* Sync Helper Banner if 0 workouts displayed */}
      {totalWorkouts === 0 && (
        <div style={{
          background: "rgba(173, 255, 47, 0.08)",
          border: "1px solid rgba(173, 255, 47, 0.2)",
          borderRadius: "12px",
          padding: "10px 14px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          fontSize: "0.82rem",
          color: "var(--color-text-secondary)"
        }}>
          <span>
            {syncProps?.connected 
              ? `☁️ Conectado como ${syncProps.email || "Google"}. Toque ao lado para buscar seus treinos do Notebook.`
              : "☁️ Sem histórico exibido? Entre com a sua conta Google para resgatar os treinos do Notebook."}
          </span>
          <button
            type="button"
            onClick={syncProps?.connected ? syncProps.onSync : syncProps?.onConnectGoogle}
            style={{
              background: "var(--accent-lime)",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              padding: "6px 12px",
              fontWeight: "700",
              fontSize: "0.78rem",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
          >
            {syncProps?.connected ? "Baixar Dados" : "Entrar c/ Google"}
          </button>
        </div>
      )}

      {/* Weekly Progress Tracker */}
      <section className="section-container glass">
        <h3 className="section-title">Esta Semana</h3>
        <div className="week-grid">
          {weeklyProgress.map((day, idx) => (
            <div key={idx} className={`day-col ${day.isToday ? "today" : ""}`}>
              <span className="day-name">{day.dayName}</span>
              <div className={`day-dot ${day.completed ? "completed" : ""}`}>
                {day.completed ? (day.routineId || "✓") : ""}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Summary Card */}
      <section className="stats-row">
        <div className="stat-card glass">
          <HistoryIcon size={28} className="stat-icon purple" />
          <div className="stat-info">
            <span className="stat-value">{lastWorkout}</span>
            <span className="stat-label">Último Treino</span>
          </div>
        </div>
        <div className="stat-card glass">
          <FlameIcon size={28} className="stat-icon orange" />
          <div className="stat-info">
            <span className="stat-value">{maxStreak} {maxStreak === 1 ? "dia" : "dias"}</span>
            <span className="stat-label">Sua Maior Sequência</span>
          </div>
        </div>
      </section>

      {/* Routine list */}
      <section className="routines-section">
        <div className="section-header">
          <h3 className="section-title">Suas Fichas</h3>
          <button className="btn-link" onClick={() => onSetActiveTab("routines")}>
            <EditIcon size={16} /> Gerenciar
          </button>
        </div>
        
        <div className="routines-grid">
          {orderedRoutines.map((routine) => (
            <div key={routine.id} className="routine-card glass glass-interactive">
              <div className="routine-header">
                <div>
                  <h4 className="routine-name">{routine.name}</h4>
                  <span className="routine-qty">{routine.exercises.length} exercícios</span>
                </div>
                <div className="routine-tag">{routine.id}</div>
              </div>
              
              <div className="routine-preview">
                {routine.exercises.slice(0, 3).map((ex, i) => (
                  <div key={ex.id} className="preview-item">
                    <span>{ex.name}</span>
                    <span className="preview-sets">{ex.sets}x{ex.reps}</span>
                  </div>
                ))}
                {routine.exercises.length > 3 && (
                  <div className="preview-more">e mais {routine.exercises.length - 3} exercícios...</div>
                )}
              </div>

              <button className="btn btn-lime start-routine-btn" onClick={() => onStartWorkout(routine)}>
                <PlayIcon size={18} /> Iniciar Treino {routine.id}
              </button>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 20px 16px;
        }

        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .welcome-text {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        .user-name {
          font-size: 1.8rem;
          color: var(--color-text-primary);
          margin-top: -2px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .streak-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 99px;
          font-family: var(--font-title);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--accent-lime);
          border: 1px solid var(--accent-lime-glow);
          background: var(--accent-purple-glow);
        }

        .badge-icon {
          color: var(--accent-lime);
        }

        .section-container {
          padding: 16px;
        }

        .section-title {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          margin-bottom: 12px;
        }

        .week-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
          text-align: center;
        }

        .day-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .day-col.today .day-name {
          color: var(--accent-purple);
          font-weight: 700;
        }

        .day-name {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .day-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          color: transparent;
          transition: all 0.3s ease;
        }

        .day-dot.completed {
          background: var(--accent-lime);
          border-color: var(--accent-lime);
          color: var(--color-on-accent);
          font-weight: 800;
        }

        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .stat-card {
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 8px;
          border-radius: 12px;
          background: var(--bg-primary);
        }

        .stat-icon.purple {
          color: var(--accent-purple);
          background: var(--accent-purple-glow);
        }

        .stat-icon.lime {
          color: var(--accent-lime);
          background: var(--accent-purple-glow);
        }

        .stat-icon.orange {
          color: #FF6B00;
          background: rgba(255, 107, 0, 0.12);
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-primary);
          font-family: var(--font-title);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .routines-section {
          margin-top: 10px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .btn-link {
          background: none;
          border: none;
          color: var(--color-text-secondary);
          font-size: 0.85rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .btn-link:hover {
          color: var(--accent-purple);
        }

        .routines-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .routine-card {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          overflow: hidden;
        }

        .routine-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .routine-name {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          margin-bottom: 2px;
        }

        .routine-qty {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        .routine-tag {
          background: var(--accent-purple-glow);
          color: var(--accent-purple);
          border: 1px solid var(--border-hover);
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 1.1rem;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .routine-preview {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 10px 12px;
          background: var(--bg-primary);
          border-radius: 10px;
          border: 1px solid var(--border-color);
        }

        .preview-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--color-text-secondary);
        }

        .preview-sets {
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .preview-more {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-style: italic;
          margin-top: 2px;
        }

        .start-routine-btn {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
