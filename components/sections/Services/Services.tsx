"use client";
import { useState } from "react";
import styles from "./Services.module.css";
import ServicesModal from "@/components/modals/ServicesModal";

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Мої послуги</h2>

        <div className={styles.grid}>
          <div
            className={`${styles.card} ${styles.cardWedding}`}
            onClick={() => setActiveModal("wedding")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setActiveModal("wedding")}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardTop}>
                <i
                  className={`${styles.icon} ri-vip-diamond-line`}
                  aria-hidden="true"
                />
                <i
                  className={`${styles.arrow} ri-arrow-right-up-line`}
                  aria-hidden="true"
                />
              </div>
              <div className={styles.cardBottom}>
                <span className={styles.name}>Весілля</span>
                <span className={styles.desc}>
                  Незабутній день вашого кохання — з душею, стилем та харизмою
                </span>
              </div>
            </div>

            <div className={styles.tags}>
              <span className={styles.tag}>Виїзна церемонія</span>
              <span className={styles.tag}>Банкет</span>
              <span className={styles.tag}>Розпис</span>
              <span className={styles.tag}>Фуршет</span>
              <span className={styles.tag}>Камерне весілля</span>
              <span className={styles.tag}>Декор та флористика</span>
              <span className={styles.tag}>Кейтеринг</span>
              <span className={styles.tag}>Технічне забезпечення</span>
            </div>
          </div>

          <div
            className={`${styles.card} ${styles.cardEvents}`}
            onClick={() => setActiveModal("events")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setActiveModal("events")}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardTop}>
                <i
                  className={`${styles.icon} ri-sparkling-2-line`}
                  aria-hidden="true"
                />
                <i
                  className={`${styles.arrow} ri-arrow-right-up-line`}
                  aria-hidden="true"
                />
              </div>
              <div className={styles.cardBottom}>
                <span className={styles.name}>Інші заходи</span>
                <span className={styles.desc}>
                  Корпоративи, дні народження, гендер паті, конференції та інше
                </span>
              </div>
            </div>

            <div className={styles.tags}>
              <span className={styles.tag}>Корпоратив</span>
              <span className={styles.tag}>День народження</span>
              <span className={styles.tag}>Гендер паті</span>
              <span className={styles.tag}>Конференція</span>
              <span className={styles.tag}>Презентація</span>
              <span className={styles.tag}>Ювілей</span>
              <span className={styles.tag}>Конференція</span>
              <span className={styles.tag}>Концерт</span>
              <span className={styles.tag}>Відкриття</span>
            </div>
          </div>
        </div>
      </div>

      <ServicesModal
        modalId={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
}
