import styles from "./BirthdayIntro.module.css";

export default function BirthdayIntro() {
  return (
    <div className={styles.intro} aria-hidden="true">
      <div className={styles.scene}>
        <div className={styles.cake}>
          <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="105" rx="46" ry="8" fill="#e0c9a6" />
            <rect x="8" y="72" width="84" height="34" rx="8" fill="#f48fb1" />
            <rect x="8" y="72" width="84" height="12" rx="6" fill="#f06292" />
            <rect x="20" y="44" width="60" height="30" rx="7" fill="#ce93d8" />
            <rect x="20" y="44" width="60" height="10" rx="5" fill="#ba68c8" />
            <path
              d="M8 72 Q18 62 28 72 Q38 62 48 72 Q58 62 68 72 Q78 62 88 72 Q92 68 92 72"
              stroke="white"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

            <path
              d="M20 44 Q27 36 34 44 Q41 36 48 44 Q55 36 62 44 Q69 36 76 44 Q80 40 80 44"
              stroke="white"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />

            <rect x="36" y="26" width="6" height="20" rx="3" fill="#fff176" />
            <rect x="58" y="26" width="6" height="20" rx="3" fill="#80deea" />
            <rect x="47" y="20" width="6" height="26" rx="3" fill="#ffcc80" />

            <ellipse
              cx="39"
              cy="24"
              rx="4"
              ry="6"
              fill="#ff6f00"
              opacity="0.9"
            />
            <ellipse cx="39" cy="22" rx="2.5" ry="4" fill="#ffeb3b" />
            <ellipse
              cx="61"
              cy="24"
              rx="4"
              ry="6"
              fill="#ff6f00"
              opacity="0.9"
            />
            <ellipse cx="61" cy="22" rx="2.5" ry="4" fill="#ffeb3b" />
            <ellipse
              cx="50"
              cy="18"
              rx="4"
              ry="6"
              fill="#ff6f00"
              opacity="0.9"
            />
            <ellipse cx="50" cy="16" rx="2.5" ry="4" fill="#ffeb3b" />
            <circle cx="22" cy="86" r="4" fill="#fff9c4" />
            <circle cx="38" cy="82" r="3" fill="#fff9c4" />
            <circle cx="54" cy="86" r="4" fill="#fff9c4" />
            <circle cx="70" cy="82" r="3" fill="#fff9c4" />
            <circle cx="86" cy="86" r="4" fill="#fff9c4" />
            <circle cx="30" cy="56" r="3" fill="#fff9c4" />
            <circle cx="50" cy="52" r="3" fill="#fff9c4" />
            <circle cx="70" cy="56" r="3" fill="#fff9c4" />
          </svg>
        </div>

        <div className={`${styles.firework} ${styles.fireworkLeft}`}>
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
              (angle, i) => (
                <line
                  key={i}
                  x1="40"
                  y1="40"
                  x2={40 + 32 * Math.cos((angle * Math.PI) / 180)}
                  y2={40 + 32 * Math.sin((angle * Math.PI) / 180)}
                  stroke={
                    [
                      "#f44336",
                      "#ff9800",
                      "#ffeb3b",
                      "#4caf50",
                      "#2196f3",
                      "#9c27b0",
                    ][i % 6]
                  }
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              ),
            )}
            <circle cx="40" cy="40" r="5" fill="#fff176" />
          </svg>
        </div>

        <div className={`${styles.firework} ${styles.fireworkRight}`}>
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map(
              (angle, i) => (
                <line
                  key={i}
                  x1="40"
                  y1="40"
                  x2={40 + 32 * Math.cos((angle * Math.PI) / 180)}
                  y2={40 + 32 * Math.sin((angle * Math.PI) / 180)}
                  stroke={
                    [
                      "#e91e63",
                      "#ff5722",
                      "#ffc107",
                      "#8bc34a",
                      "#03a9f4",
                      "#673ab7",
                    ][i % 6]
                  }
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              ),
            )}
            <circle cx="40" cy="40" r="5" fill="#f48fb1" />
          </svg>
        </div>
      </div>

      <p className={styles.label}>З Днем Народження!</p>

      <div className={styles.sparks}>
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <span key={n} className={`${styles.spark} ${styles[`spark${n}`]}`}>
            {["🎉", "⭐", "✨", "🎊", "💫", "🌟", "🎈"][n - 1]}
          </span>
        ))}
      </div>
    </div>
  );
}
