"use client";
import { useState } from "react";
import styles from "./Services.module.css";
import ServiceModal from "@/components/modals/ServicesModal";

const cards = [
  { id: "wedding", icon: "ri-vip-diamond-line", name: "Весілля" },
  { id: "corporate", icon: "ri-building-2-line", name: "Корпоративні заходи" },
  { id: "gender", icon: "ri-genderless-line", name: "Гендер паті" },
  { id: "birthday", icon: "ri-cake-2-line", name: "Дні народження" },
  { id: "child", icon: "ri-user-6-line", name: "Хрещення, рочок дитині" },
  {
    id: "openBiz",
    icon: "ri-scissors-cut-line",
    name: "Відкриття магазинів та бізнесів",
  },
  {
    id: "presentation",
    icon: "ri-slideshow-2-line",
    name: "Презентації, конференції, форуми",
  },
  { id: "concert", icon: "ri-mic-2-line", name: "Концерти, благодійні події" },
  {
    id: "media",
    icon: "ri-camera-lens-line",
    name: "Робота з медійними людьми",
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Мої послуги</h2>

        <div className={styles.grid}>
          {cards.map(({ id, icon, name }) => (
            <div
              key={id}
              className={styles.card}
              onClick={() => setActiveModal(id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActiveModal(id)}
            >
              <i className={`${styles.icon} ${icon}`} aria-hidden="true" />
              <span className={styles.name}>{name}</span>
              <i
                className={`${styles.arrow} ri-arrow-right-up-line`}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      <ServiceModal
        modalId={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
}
