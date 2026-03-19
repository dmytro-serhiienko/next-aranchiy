import styles from "./PresentationIntro.module.css";

export default function PresentationIntro() {
  return (
    <div className={styles.intro} aria-hidden="true">
      <div className={styles.scene}>
        {/* Екран презентації */}
        <div className={styles.screen}>
          <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
            {/* стійка */}
            <rect x="76" y="95" width="8" height="12" fill="#ccc" />
            <rect x="60" y="105" width="40" height="4" rx="2" fill="#bbb" />
            {/* рамка екрана */}
            <rect x="4" y="4" width="152" height="92" rx="6" fill="#e8e0f7" />
            <rect x="8" y="8" width="144" height="84" rx="4" fill="#fff" />
            {/* заголовок слайду */}
            <rect x="16" y="16" width="80" height="8" rx="3" fill="#ede9fe" />
            <rect x="16" y="16" width="55" height="8" rx="3" fill="#7c3aed" />
            {/* графік — стовпчики */}
            <rect
              x="20"
              y="60"
              width="14"
              height="24"
              rx="2"
              fill="#7c3aed"
              opacity="0.7"
            />
            <rect
              x="40"
              y="48"
              width="14"
              height="36"
              rx="2"
              fill="#a78bfa"
              opacity="0.8"
            />
            <rect
              x="60"
              y="52"
              width="14"
              height="32"
              rx="2"
              fill="#7c3aed"
              opacity="0.6"
            />
            <rect
              x="80"
              y="40"
              width="14"
              height="44"
              rx="2"
              fill="#6d28d9"
              opacity="0.8"
            />
            <rect
              x="100"
              y="55"
              width="14"
              height="29"
              rx="2"
              fill="#a78bfa"
              opacity="0.7"
            />
            {/* лінія тренду */}
            <polyline
              points="27,68 47,56 67,60 87,48 107,62"
              stroke="#292929"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[
              [27, 68],
              [47, 56],
              [67, 60],
              [87, 48],
              [107, 62],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="#292929" />
            ))}
            {/* текст справа */}
            <rect
              x="128"
              y="30"
              width="20"
              height="3"
              rx="1.5"
              fill="#292929"
              opacity="0.15"
            />
            <rect
              x="128"
              y="37"
              width="16"
              height="3"
              rx="1.5"
              fill="#292929"
              opacity="0.1"
            />
            <rect
              x="128"
              y="44"
              width="18"
              height="3"
              rx="1.5"
              fill="#292929"
              opacity="0.1"
            />
            <rect
              x="128"
              y="51"
              width="14"
              height="3"
              rx="1.5"
              fill="#292929"
              opacity="0.08"
            />
            {/* курсор */}
            <polygon
              points="130,70 138,76 134,77 136,84 132,83 130,90 126,76"
              fill="#7c3aed"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Мікрофон спікера */}
        <div className={styles.mic}>
          <svg viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
            {/* стійка */}
            <rect x="22" y="70" width="6" height="22" rx="3" fill="#ccc" />
            <rect x="12" y="90" width="26" height="5" rx="2.5" fill="#bbb" />
            {/* дуга */}
            <path
              d="M14 70 Q4 55 14 42"
              stroke="#ccc"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M36 70 Q46 55 36 42"
              stroke="#ccc"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* мікрофон */}
            <rect x="16" y="16" width="18" height="32" rx="9" fill="#7c3aed" />
            <rect x="18" y="18" width="14" height="10" rx="5" fill="#a78bfa" />
            <rect
              x="18"
              y="30"
              width="14"
              height="8"
              rx="3"
              fill="#a78bfa"
              opacity="0.6"
            />
            {/* кнопка */}
            <circle cx="25" cy="10" r="7" fill="#ede9fe" />
            <circle cx="25" cy="10" r="4" fill="#c4b5fd" />
            <circle cx="25" cy="10" r="2" fill="#7c3aed" />
          </svg>
        </div>
      </div>

      <p className={styles.label}>Конференції & Форуми</p>

      <div className={styles.sparks}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={`${styles.spark} ${styles[`spark${n}`]}`}>
            {["💡", "📊", "🎤", "⚡", "🚀"][n - 1]}
          </span>
        ))}
      </div>
    </div>
  );
}
