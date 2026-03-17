import styles from "./CorporateIntro.module.css";

export default function CorporateIntro() {
  return (
    <div className={styles.intro} aria-hidden="true">
      <div className={styles.scene}>
        {/* Мікрофон */}
        <div className={styles.mic}>
          <svg
            viewBox="0 0 60 120"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            {/* стійка */}
            <rect x="27" y="85" width="6" height="20" rx="3" fill="#2c2c2c" />
            {/* основа */}
            <rect
              x="15"
              y="103"
              width="30"
              height="5"
              rx="2.5"
              fill="#2c2c2c"
            />
            {/* дуга підставки */}
            <path
              d="M20 85 Q10 70 20 55"
              stroke="#2c2c2c"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M40 85 Q50 70 40 55"
              stroke="#2c2c2c"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* корпус мікрофона */}
            <rect x="20" y="25" width="20" height="35" rx="10" fill="#292929" />
            {/* сітка */}
            <rect x="22" y="27" width="16" height="10" rx="4" fill="#444" />
            <rect x="22" y="39" width="16" height="8" rx="3" fill="#444" />
            {/* кнопка */}
            <circle cx="30" cy="20" r="6" fill="#e74c3c" />
            <circle cx="30" cy="20" r="3" fill="#c0392b" />
          </svg>
        </div>

        {/* Зірка */}
        <div className={styles.star}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
              fill="#f0c040"
            />
          </svg>
        </div>

        {/* Ноутбук / презентація */}
        <div className={styles.laptop}>
          <svg
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            {/* екран */}
            <rect x="8" y="8" width="64" height="44" rx="4" fill="#2c2c2c" />
            <rect x="12" y="12" width="56" height="36" rx="2" fill="#3a86ff" />
            {/* графік на екрані */}
            <polyline
              points="16,40 26,28 36,33 46,20 56,24"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="26" cy="28" r="2.5" fill="white" />
            <circle cx="36" cy="33" r="2.5" fill="white" />
            <circle cx="46" cy="20" r="2.5" fill="white" />
            <circle cx="56" cy="24" r="2.5" fill="white" />
            {/* основа ноутбука */}
            <rect x="4" y="52" width="72" height="6" rx="3" fill="#1a1a1a" />
            <rect x="28" y="57" width="24" height="3" rx="1.5" fill="#333" />
          </svg>
        </div>
      </div>

      <p className={styles.label}>Корпоратив</p>

      <div className={styles.sparks}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={`${styles.spark} ${styles[`spark${n}`]}`}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
