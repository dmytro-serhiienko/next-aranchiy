import styles from "./OneYearIntro.module.css";

export default function OneYearIntro() {
  return (
    <div className={styles.intro} aria-hidden="true">
      <div className={styles.scene}>
        {/* Дитина з кулькою */}
        <div className={styles.baby}>
          <svg viewBox="0 0 80 130" xmlns="http://www.w3.org/2000/svg">
            {/* куля */}
            <circle cx="40" cy="12" r="11" fill="#ff8a80" />
            <ellipse
              cx="36"
              cy="9"
              rx="4"
              ry="3"
              fill="#ffab91"
              opacity="0.6"
            />
            <line
              x1="40"
              y1="23"
              x2="40"
              y2="35"
              stroke="#bbb"
              strokeWidth="1.5"
              strokeDasharray="2,2"
            />
            {/* голова */}
            <circle cx="40" cy="46" r="16" fill="#ffe0b2" />
            {/* вушка */}
            <circle cx="24" cy="46" r="5" fill="#ffe0b2" />
            <circle cx="56" cy="46" r="5" fill="#ffe0b2" />
            {/* очі */}
            <circle cx="34" cy="43" r="3.5" fill="#5d4037" />
            <circle cx="46" cy="43" r="3.5" fill="#5d4037" />
            <circle cx="35" cy="42" r="1.2" fill="white" />
            <circle cx="47" cy="42" r="1.2" fill="white" />
            {/* носик */}
            <ellipse cx="40" cy="48" rx="2" ry="1.2" fill="#ffb74d" />
            {/* посмішка */}
            <path
              d="M34 52 Q40 58 46 52"
              stroke="#e64a19"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* щічки */}
            <circle cx="28" cy="50" r="4" fill="#ffb3b3" opacity="0.5" />
            <circle cx="52" cy="50" r="4" fill="#ffb3b3" opacity="0.5" />
            {/* волосся */}
            <path
              d="M26 38 Q40 28 54 38 Q50 30 40 28 Q30 30 26 38Z"
              fill="#8d6e63"
            />
            {/* тіло — ромпер */}
            <path
              d="M24 62 Q20 90 22 110 L38 110 L40 85 L42 110 L58 110 Q60 90 56 62 Q48 68 40 66 Q32 68 24 62Z"
              fill="#81d4fa"
            />
            {/* комірець */}
            <path
              d="M30 62 Q40 70 50 62 Q46 66 40 66 Q34 66 30 62Z"
              fill="#4fc3f7"
            />
            {/* "1" на тілі */}
            <text
              x="35"
              y="92"
              fontSize="18"
              fontWeight="900"
              fill="white"
              fontFamily="Arial"
            >
              1
            </text>
            {/* ручки */}
            <rect x="10" y="64" width="14" height="8" rx="4" fill="#ffe0b2" />
            <rect x="56" y="64" width="14" height="8" rx="4" fill="#ffe0b2" />
            {/* ніжки */}
            <rect x="24" y="108" width="13" height="16" rx="6" fill="#81d4fa" />
            <rect x="43" y="108" width="13" height="16" rx="6" fill="#81d4fa" />
            {/* взуття */}
            <ellipse cx="30" cy="124" rx="8" ry="5" fill="#ff8a80" />
            <ellipse cx="50" cy="124" rx="8" ry="5" fill="#ff8a80" />
          </svg>
        </div>

        {/* Торт з цифрою 1 */}
        <div className={styles.cake}>
          <svg viewBox="0 0 90 100" xmlns="http://www.w3.org/2000/svg">
            {/* підставка */}
            <ellipse cx="45" cy="92" rx="40" ry="6" fill="#ffe0b2" />
            {/* ярус */}
            <rect x="8" y="60" width="74" height="32" rx="8" fill="#ce93d8" />
            <rect x="8" y="60" width="74" height="12" rx="6" fill="#ba68c8" />
            {/* крем */}
            <path
              d="M8 60 Q18 50 28 60 Q38 50 48 60 Q58 50 68 60 Q78 50 82 60"
              stroke="white"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* свічка */}
            <rect x="40" y="32" width="10" height="30" rx="5" fill="#fff9c4" />
            {/* вогник */}
            <ellipse
              cx="45"
              cy="30"
              rx="6"
              ry="8"
              fill="#ff6f00"
              opacity="0.9"
            />
            <ellipse cx="45" cy="27" rx="4" ry="6" fill="#ffeb3b" />
            <ellipse cx="45" cy="25" rx="2" ry="3" fill="white" opacity="0.8" />
            {/* цифра 1 */}
            <text
              x="30"
              y="86"
              fontSize="22"
              fontWeight="900"
              fill="white"
              fontFamily="Arial"
            >
              1
            </text>
            {/* зірочки */}
            <text x="12" y="78" fontSize="12" fill="#fff9c4">
              ★
            </text>
            <text x="68" y="78" fontSize="12" fill="#fff9c4">
              ★
            </text>
          </svg>
        </div>

        {/* Зірки та кульки збоку */}
        <div className={styles.balloons}>
          <svg viewBox="0 0 60 120" xmlns="http://www.w3.org/2000/svg">
            {/* куля 1 */}
            <circle cx="20" cy="20" r="16" fill="#a5d6a7" />
            <ellipse
              cx="15"
              cy="15"
              rx="5"
              ry="4"
              fill="#c8e6c9"
              opacity="0.6"
            />
            <line
              x1="20"
              y1="36"
              x2="20"
              y2="50"
              stroke="#bbb"
              strokeWidth="1.5"
              strokeDasharray="2,2"
            />
            {/* куля 2 */}
            <circle cx="42" cy="35" r="14" fill="#fff176" />
            <ellipse
              cx="37"
              cy="30"
              rx="4"
              ry="3"
              fill="#fffde7"
              opacity="0.6"
            />
            <line
              x1="42"
              y1="49"
              x2="38"
              y2="65"
              stroke="#bbb"
              strokeWidth="1.5"
              strokeDasharray="2,2"
            />
            {/* мотузка до руки дитини */}
            <path
              d="M20 50 Q25 80 30 100 Q35 115 40 120"
              stroke="#bbb"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="2,2"
            />
            <path
              d="M38 65 Q35 85 36 100 Q37 112 40 120"
              stroke="#bbb"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="2,2"
            />
          </svg>
        </div>
      </div>

      <p className={styles.label}>Рочок дитині 🎂</p>

      <div className={styles.sparks}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <span key={n} className={`${styles.spark} ${styles[`spark${n}`]}`}>
            {["⭐", "🎈", "✨", "🌸", "💛", "🎀"][n - 1]}
          </span>
        ))}
      </div>
    </div>
  );
}
