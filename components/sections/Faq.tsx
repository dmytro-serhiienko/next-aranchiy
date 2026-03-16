"use client";
import { useState } from "react";
import styles from "./Faq.module.css";

const faqs = [
  {
    id: 1,
    question: "Що входить у вартість проведення заходу?",
    answer:
      "• Проведення заходу ведучим від його початку до кінця. (6-8 годин)\n• Розробка концептуального індивідуального сценарію для вашої події\n• Допомога у підготовці заходу\n• Звукооператор",
  },
  {
    id: 2,
    question: "Як забронювати дату?",
    answer:
      "• Спершу зв'яжіться зі мною для уточнення вільних дат.\n• Якщо дата вільна, ви вносите завдаток, після чого я фіксую день за вами.",
  },
  {
    id: 3,
    question: "В яких містах ви працюєте?",
    answer:
      "• Працюю по всій Україні.\n• Виїзд за межі мого міста передбачає оплату дороги до локації та назад.",
  },
  {
    id: 4,
    question: "Чи проводите консультацію?",
    answer:
      "• Так, перша консультація безкоштовна.\n• Друга зустріч проводиться після фіксації дати (завдаток).",
  },
  {
    id: 5,
    question: "Чи проводите виїзні церемонії?",
    answer: "• Звісно! Допоможу зробити цей момент особливим.",
  },
  {
    id: 6,
    question: "Чи можна внести зміни в програму перед святом?",
    answer:
      "• Так, програму можна коригувати до самого заходу. Головне узгодити зміни заздалегідь.",
  },
  {
    id: 7,
    question: "Що робити, якщо ми плануємо перенести дату?",
    answer:
      "• Якщо нова дата вільна, ми просто вносимо зміни в календарі.\n• Якщо нова дата вже заброньована іншим замовником – завдаток не повертається.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  function toggle(id: number) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section
      id="faq"
      className={styles.faq}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Часті питання</h2>

        <div className={styles.list}>
          {faqs.map(({ id, question, answer }) => {
            const isOpen = openId === id;
            return (
              <div
                key={id}
                className={`${styles.item} ${isOpen ? styles.isOpen : ""}`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`faq-ans-${id}`}
                  id={`faq-que-${id}`}
                  onClick={() => toggle(id)}
                >
                  <span itemProp="name">{question}</span>
                  <i
                    className={`${styles.icon} ri-add-line`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={styles.answer}
                  id={`faq-ans-${id}`}
                  role="region"
                  aria-labelledby={`faq-que-${id}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p>
                      {answer.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
