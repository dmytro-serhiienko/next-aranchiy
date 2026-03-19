import styles from "./GenderIntro.module.css";

export default function GenderIntro() {
  return (
    <div className={styles.intro} aria-hidden="true">
      <div className={styles.scene}>
        {/* Дитинка синя — хлопчик */}
        <div className={`${styles.baby} ${styles.babyBlue}`}>
          <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
            {/* голова */}
            <circle cx="30" cy="18" r="14" fill="#aed6f1" />
            {/* вушка */}
            <circle cx="16" cy="18" r="5" fill="#aed6f1" />
            <circle cx="44" cy="18" r="5" fill="#aed6f1" />
            {/* очі */}
            <circle cx="24" cy="16" r="3" fill="#2980b9" />
            <circle cx="36" cy="16" r="3" fill="#2980b9" />
            <circle cx="25" cy="15" r="1" fill="white" />
            <circle cx="37" cy="15" r="1" fill="white" />
            {/* посмішка */}
            <path
              d="M24 23 Q30 28 36 23"
              stroke="#2980b9"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* тіло */}
            <rect x="14" y="32" width="32" height="28" rx="10" fill="#2980b9" />
            {/* ніжки */}
            <rect x="16" y="56" width="10" height="16" rx="5" fill="#2980b9" />
            <rect x="34" y="56" width="10" height="16" rx="5" fill="#2980b9" />
            {/* ручки */}
            <rect x="4" y="34" width="10" height="8" rx="4" fill="#aed6f1" />
            <rect x="46" y="34" width="10" height="8" rx="4" fill="#aed6f1" />
          </svg>
        </div>

        {/* Знак питання */}
        <div className={styles.question}>
          <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
            <text
              x="10"
              y="80"
              fontSize="90"
              fontWeight="900"
              fill="#292929"
              fontFamily="Arial"
            >
              ?
            </text>
          </svg>
        </div>

        {/* Дитинка рожева — дівчинка */}
        <div className={`${styles.baby} ${styles.babyPink}`}>
          <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
            {/* бантик */}
            <path
              d="M18 4 Q24 10 30 6 Q36 10 42 4 Q36 12 30 10 Q24 12 18 4Z"
              fill="#f48fb1"
            />
            <circle cx="30" cy="8" r="3" fill="#e91e8c" />
            {/* голова */}
            <circle cx="30" cy="20" r="14" fill="#f8bbd0" />
            {/* вушка */}
            <circle cx="16" cy="20" r="5" fill="#f8bbd0" />
            <circle cx="44" cy="20" r="5" fill="#f8bbd0" />
            {/* очі */}
            <circle cx="24" cy="18" r="3" fill="#c2185b" />
            <circle cx="36" cy="18" r="3" fill="#c2185b" />
            <circle cx="25" cy="17" r="1" fill="white" />
            <circle cx="37" cy="17" r="1" fill="white" />
            {/* вії */}
            <line
              x1="22"
              y1="14"
              x2="20"
              y2="12"
              stroke="#c2185b"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="25"
              y1="13"
              x2="24"
              y2="11"
              stroke="#c2185b"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="34"
              y1="13"
              x2="35"
              y2="11"
              stroke="#c2185b"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="37"
              y1="14"
              x2="39"
              y2="12"
              stroke="#c2185b"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* посмішка */}
            <path
              d="M24 25 Q30 30 36 25"
              stroke="#c2185b"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* сукня */}
            <path
              d="M14 34 Q10 58 14 72 L46 72 Q50 58 46 34 Q38 40 30 38 Q22 40 14 34Z"
              fill="#f48fb1"
            />
            {/* ручки */}
            <rect x="4" y="36" width="10" height="8" rx="4" fill="#f8bbd0" />
            <rect x="46" y="36" width="10" height="8" rx="4" fill="#f8bbd0" />
          </svg>
        </div>
      </div>

      <p className={styles.label}>Гендер паті</p>

      <div className={styles.sparks}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <span
            key={n}
            className={`${styles.spark} ${styles[`spark${n}`]} ${n % 2 === 0 ? styles.pink : styles.blue}`}
          >
            ♦
          </span>
        ))}
      </div>
    </div>
  );
}
