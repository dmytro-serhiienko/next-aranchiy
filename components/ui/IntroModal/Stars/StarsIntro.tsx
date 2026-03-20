import styles from "./StarsIntro.module.css";

export default function StarsIntro() {
  return (
    <div className={styles.intro} aria-hidden="true">
      <div className={styles.scene}>
        {/* Камера */}
        <div className={styles.camera}>
          <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="24" width="86" height="56" rx="8" fill="#212121" />
            <defs>
              <linearGradient id="cameraGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#424242" />
                <stop offset="100%" stopColor="#212121" />
              </linearGradient>
            </defs>
            <rect
              x="8"
              y="24"
              width="86"
              height="56"
              rx="8"
              fill="url(#cameraGrad)"
            />
            <rect x="28" y="14" width="30" height="14" rx="5" fill="#333" />
            <circle cx="50" cy="52" r="22" fill="#1a1a1a" />
            <circle cx="50" cy="52" r="18" fill="#111" />
            <circle cx="50" cy="52" r="13" fill="#1565c0" />
            <circle cx="50" cy="52" r="9" fill="#0d47a1" />
            <circle cx="50" cy="52" r="5" fill="#000" />
            <ellipse
              cx="44"
              cy="46"
              rx="4"
              ry="3"
              fill="white"
              opacity="0.15"
            />
            <circle cx="82" cy="32" r="5" fill="#e53935" />
            <circle cx="82" cy="32" r="3" fill="#ef9a9a" />
            <rect
              x="16"
              y="32"
              width="20"
              height="14"
              rx="2"
              fill="#1565c0"
              opacity="0.7"
            />
            <rect
              x="18"
              y="34"
              width="16"
              height="10"
              rx="1"
              fill="#1976d2"
              opacity="0.5"
            />
            <rect x="70" y="28" width="16" height="8" rx="3" fill="#ffd54f" />
            <rect x="72" y="30" width="12" height="4" rx="1" fill="#fff9c4" />
          </svg>
        </div>

        {/* Зірка — медійна особа */}
        <div className={styles.star}>
          <svg viewBox="0 0 80 130" xmlns="http://www.w3.org/2000/svg">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <line
                key={i}
                x1="40"
                y1="22"
                x2={40 + 20 * Math.cos((angle * Math.PI) / 180)}
                y2={22 + 20 * Math.sin((angle * Math.PI) / 180)}
                stroke="#ffd54f"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.7"
              />
            ))}
            <circle cx="40" cy="22" r="14" fill="#ffe0b2" />
            <rect x="24" y="18" width="13" height="8" rx="4" fill="#212121" />
            <rect x="43" y="18" width="13" height="8" rx="4" fill="#212121" />
            <line
              x1="37"
              y1="21"
              x2="43"
              y2="21"
              stroke="#212121"
              strokeWidth="1.5"
            />
            <line
              x1="24"
              y1="21"
              x2="20"
              y2="22"
              stroke="#212121"
              strokeWidth="1.5"
            />
            <line
              x1="56"
              y1="21"
              x2="60"
              y2="22"
              stroke="#212121"
              strokeWidth="1.5"
            />
            <path
              d="M33 29 Q40 35 47 29"
              stroke="#e64a19"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M27 16 Q40 6 53 16 Q50 8 40 6 Q30 8 27 16Z"
              fill="#4a148c"
            />
            <path
              d="M22 36 Q18 70 20 95 L36 95 L40 65 L44 95 L60 95 Q62 70 58 36 Q50 44 40 42 Q30 44 22 36Z"
              fill="#4a148c"
            />
            <polygon
              points="40,48 42,54 48,54 43,58 45,64 40,60 35,64 37,58 32,54 38,54"
              fill="#ffd54f"
              transform="scale(0.7) translate(17,22)"
            />
            <rect x="22" y="93" width="14" height="28" rx="5" fill="#4a148c" />
            <rect x="44" y="93" width="14" height="28" rx="5" fill="#4a148c" />
            <ellipse cx="29" cy="121" rx="9" ry="5" fill="#212121" />
            <ellipse cx="51" cy="121" rx="9" ry="5" fill="#212121" />
            <rect x="8" y="38" width="14" height="7" rx="4" fill="#ffe0b2" />
            <rect x="58" y="38" width="14" height="7" rx="4" fill="#ffe0b2" />
          </svg>
        </div>

        {/* Мікрофон */}
        <div className={styles.mic}>
          <svg viewBox="0 0 60 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="27" y="75" width="6" height="32" rx="3" fill="#555" />
            <rect x="14" y="104" width="32" height="6" rx="3" fill="#444" />
            <path
              d="M16 75 Q5 58 16 44"
              stroke="#555"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M44 75 Q55 58 44 44"
              stroke="#555"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <rect x="18" y="12" width="24" height="38" rx="12" fill="#ffd54f" />
            <rect x="20" y="14" width="20" height="12" rx="7" fill="#ffe57f" />
            <rect
              x="20"
              y="28"
              width="20"
              height="10"
              rx="4"
              fill="#ffe57f"
              opacity="0.5"
            />
            <circle cx="30" cy="10" r="8" fill="#ffca28" />
            <circle cx="30" cy="10" r="5" fill="#ffd54f" />
            <circle cx="30" cy="10" r="2" fill="white" opacity="0.6" />
          </svg>
        </div>
      </div>

      <p className={styles.label}>Медійні люди</p>

      <div className={styles.sparks}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <span key={n} className={`${styles.spark} ${styles[`spark${n}`]}`}>
            {["⭐", "📸", "✨", "🎬", "💫", "🌟"][n - 1]}
          </span>
        ))}
      </div>
    </div>
  );
}
