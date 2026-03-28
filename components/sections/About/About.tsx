import Image from "next/image";
import styles from "./About.module.css";

const facts = [
  "Більше 100 проведених заходів, різного формату та масштабу",
  "Співпрацював із визнаними компаніями та надійними підрядниками",
  "Веду не шаблонно, а живо з спілкуванням, гумором, стилем і харизмою",
  "Відкритий до нових ідей та трендів, втілимо це у ваш день",
  "Ораторське мистецтво, стендап, сцена, ліга сміху, викладання, дипломований режисер",
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Про мене</h2>

        <div className={`${styles.row} ${styles.rowImageLeft}`}>
          <div className={styles.imageWrap}>
            <Image
              src="/img/about-section/about-1.jpg"
              alt="Ведучий"
              className={`${styles.image} ${styles.imgFirst}`}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 480px, 45vw"
            />
          </div>
          <div className={styles.textBlock}>
            <p className={styles.lead}>
              Професійний ведучий з режисерською освітою. Органічно поєдную
              творчість, харизму та чітку організацію, щоб кожна подія звучала
              особливо.
            </p>
          </div>
        </div>

        <div className={`${styles.row} ${styles.rowImageRight}`}>
          <div className={styles.facts}>
            <ul className={styles.list}>
              {facts.map((fact, i) => (
                <li key={i} className={styles.item}>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageWrap}>
            <Image
              src="/img/about-section/about-2.jpg"
              alt="Ведучий на заході"
              className={`${styles.image} ${styles.imgSecond}`}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 480px, 45vw"
            />
          </div>
        </div>

        <div className={styles.closing}>
          <div>
            <p className={styles.closingText}>
              Давайте зробимо ваш день разом!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
