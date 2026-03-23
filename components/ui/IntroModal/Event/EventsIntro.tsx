import styles from "./EventsIntro.module.css";

export default function EventsIntro() {
  return (
    <div className={styles.intro} aria-hidden="true">
      <div className={styles.scene}>
        {/* Корпоратив — будівля */}
        <div className={`${styles.item} ${styles.building}`}>
          <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="20" width="44" height="60" rx="3" fill="#e0e0e0" />
            <rect x="8" y="20" width="44" height="8" rx="3" fill="#bdbdbd" />
            <rect x="14" y="34" width="8" height="8" rx="1" fill="#90caf9" />
            <rect x="26" y="34" width="8" height="8" rx="1" fill="#90caf9" />
            <rect x="38" y="34" width="8" height="8" rx="1" fill="#fff9c4" />
            <rect x="14" y="48" width="8" height="8" rx="1" fill="#fff9c4" />
            <rect x="26" y="48" width="8" height="8" rx="1" fill="#90caf9" />
            <rect x="38" y="48" width="8" height="8" rx="1" fill="#90caf9" />
            <rect x="14" y="62" width="8" height="8" rx="1" fill="#90caf9" />
            <rect x="38" y="62" width="8" height="8" rx="1" fill="#fff9c4" />
            <rect x="24" y="60" width="12" height="20" rx="2" fill="#9e9e9e" />
            <line
              x1="30"
              y1="20"
              x2="30"
              y2="8"
              stroke="#9e9e9e"
              strokeWidth="1.5"
            />
            <polygon points="30,8 42,12 30,16" fill="#ef9a9a" />
          </svg>
        </div>

        <div className={`${styles.item} ${styles.cake}`}>
          <svg viewBox="0 0 70 90" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="35" cy="82" rx="32" ry="6" fill="#ffe0b2" />
            <rect x="6" y="52" width="58" height="30" rx="7" fill="#f48fb1" />
            <rect x="6" y="52" width="58" height="10" rx="5" fill="#f06292" />
            <path
              d="M6 52 Q16 42 26 52 Q36 42 46 52 Q56 42 64 52"
              stroke="white"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <rect x="18" y="30" width="8" height="24" rx="4" fill="#fff9c4" />
            <rect x="31" y="24" width="8" height="30" rx="4" fill="#b2ebf2" />
            <rect x="44" y="30" width="8" height="24" rx="4" fill="#dcedc8" />
            <ellipse
              cx="22"
              cy="28"
              rx="5"
              ry="7"
              fill="#ff8f00"
              opacity="0.9"
            />
            <ellipse cx="22" cy="25" rx="3" ry="5" fill="#ffeb3b" />
            <ellipse
              cx="35"
              cy="22"
              rx="5"
              ry="7"
              fill="#ff8f00"
              opacity="0.9"
            />
            <ellipse cx="35" cy="19" rx="3" ry="5" fill="#ffeb3b" />
            <ellipse
              cx="48"
              cy="28"
              rx="5"
              ry="7"
              fill="#ff8f00"
              opacity="0.9"
            />
            <ellipse cx="48" cy="25" rx="3" ry="5" fill="#ffeb3b" />
            <circle cx="18" cy="66" r="3" fill="#fff9c4" />
            <circle cx="30" cy="62" r="3" fill="#fff9c4" />
            <circle cx="42" cy="66" r="3" fill="#fff9c4" />
            <circle cx="54" cy="62" r="3" fill="#fff9c4" />
          </svg>
        </div>

        <div className={`${styles.item} ${styles.mic}`}>
          <svg viewBox="0 0 50 90" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="65" width="10" height="20" rx="5" fill="#bdbdbd" />
            <rect x="10" y="83" width="30" height="5" rx="2.5" fill="#9e9e9e" />
            <path
              d="M12 65 Q2 50 12 38"
              stroke="#bdbdbd"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M38 65 Q48 50 38 38"
              stroke="#bdbdbd"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <rect x="13" y="10" width="24" height="36" rx="12" fill="#ce93d8" />
            <rect x="15" y="12" width="20" height="12" rx="7" fill="#e1bee7" />
            <rect
              x="15"
              y="26"
              width="20"
              height="8"
              rx="3"
              fill="#e1bee7"
              opacity="0.5"
            />
            <circle cx="25" cy="7" r="8" fill="#ba68c8" />
            <circle cx="25" cy="7" r="5" fill="#ce93d8" />
            <circle cx="25" cy="7" r="2" fill="white" opacity="0.7" />
          </svg>
        </div>

        <div className={`${styles.item} ${styles.scissors}`}>
          <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="35" width="44" height="10" rx="5" fill="#ef9a9a" />
            <rect x="22" y="30" width="16" height="20" rx="2" fill="#e57373" />
            <rect x="26" y="28" width="8" height="24" rx="1" fill="#ffcdd2" />
            <circle
              cx="18"
              cy="20"
              r="7"
              fill="none"
              stroke="#9e9e9e"
              strokeWidth="3"
            />
            <circle cx="18" cy="20" r="3" fill="#bdbdbd" />
            <circle
              cx="42"
              cy="20"
              r="7"
              fill="none"
              stroke="#9e9e9e"
              strokeWidth="3"
            />
            <circle cx="42" cy="20" r="3" fill="#bdbdbd" />
            <line
              x1="23"
              y1="24"
              x2="36"
              y2="36"
              stroke="#9e9e9e"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="37"
              y1="24"
              x2="24"
              y2="36"
              stroke="#9e9e9e"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="10" cy="55" r="3" fill="#90caf9" />
            <circle cx="50" cy="55" r="3" fill="#a5d6a7" />
            <circle cx="8" cy="65" r="2" fill="#fff176" />
            <circle cx="52" cy="65" r="2" fill="#f48fb1" />
            <rect
              x="12"
              y="62"
              width="4"
              height="4"
              rx="1"
              fill="#ce93d8"
              transform="rotate(20,14,64)"
            />
            <rect
              x="44"
              y="60"
              width="4"
              height="4"
              rx="1"
              fill="#80cbc4"
              transform="rotate(-15,46,62)"
            />
          </svg>
        </div>
      </div>

      <p className={styles.label}>Інші заходи</p>

      <div className={styles.sparks}>
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <span key={n} className={`${styles.spark} ${styles[`spark${n}`]}`}>
            {["🎉", "⭐", "✨", "🎈", "🎊", "💫", "🌟"][n - 1]}
          </span>
        ))}
      </div>
    </div>
  );
}
