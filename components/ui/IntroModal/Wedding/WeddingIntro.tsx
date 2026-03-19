import styles from "./WeddingIntro.module.css";

export default function WeddingIntro() {
  return (
    <div className={styles.intro} aria-hidden="true">
      <div className={styles.scene}>
        {/* Наречений */}
        <div className={`${styles.figure} ${styles.groom}`}>
          <svg
            viewBox="0 0 60 120"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            <circle cx="30" cy="14" r="12" fill="#f5cba7" />
            <rect x="17" y="1" width="26" height="5" rx="2" fill="#2c2c2c" />
            <rect x="20" y="5" width="20" height="8" rx="1" fill="#2c2c2c" />
            <polygon points="30,28 33,40 30,46 27,40" fill="#c0392b" />
            <path
              d="M14 28 Q10 60 12 80 L28 80 L30 50 L32 80 L48 80 Q50 60 46 28 Q38 36 30 34 Q22 36 14 28Z"
              fill="#2c2c2c"
            />
            <path d="M22 28 L30 34 L38 28 L36 50 L24 50Z" fill="white" />
            <rect x="15" y="80" width="12" height="35" rx="4" fill="#2c2c2c" />
            <rect x="33" y="80" width="12" height="35" rx="4" fill="#2c2c2c" />
          </svg>
        </div>

        {/* Серце */}
        <div className={styles.heart}>
          <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 80 C20 55 5 40 5 25 A22 22 0 0 1 50 15 A22 22 0 0 1 95 25 C95 40 80 55 50 80Z"
              fill="#e74c3c"
            />
          </svg>
        </div>

        {/* Наречена */}
        <div className={`${styles.figure} ${styles.bride}`}>
          <svg
            viewBox="0 0 60 120"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            <path
              d="M18 2 Q30 0 42 2 Q50 18 46 30 L38 24 Q36 14 30 12 Q24 14 22 24 L14 30 Q10 18 18 2Z"
              fill="white"
              opacity="0.9"
            />
            <circle cx="30" cy="16" r="12" fill="#f5cba7" />
            <circle cx="20" cy="8" r="3" fill="#f9c2d0" />
            <circle cx="30" cy="5" r="3" fill="#f9c2d0" />
            <circle cx="40" cy="8" r="3" fill="#f9c2d0" />
            <path
              d="M20 28 Q18 45 10 80 L50 80 Q42 45 40 28 Q35 34 30 32 Q25 34 20 28Z"
              fill="white"
            />
            <path d="M10 80 Q5 100 8 118 L52 118 Q55 100 50 80Z" fill="white" />
            <path
              d="M22 28 L30 32 L38 28 L37 42 L23 42Z"
              fill="#f9c2d0"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      <p className={styles.label}>Весілля</p>

      <div className={styles.sparks}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={`${styles.spark} ${styles[`spark${n}`]}`}>
            ♥
          </span>
        ))}
      </div>
    </div>
  );
}
