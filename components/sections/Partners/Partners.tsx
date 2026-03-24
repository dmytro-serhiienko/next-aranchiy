import Link from "next/link";
import Image from "next/image";
import styles from "./Partners.module.css";

const partners = [
  {
    href: "https://treskare.com/",
    src: "/img/partners-section/treskare.png",
    alt: "Партнер Treskare",
  },
  {
    href: "https://zlata-plaza.com.ua/",
    src: "/img/partners-section/zlata.png",
    alt: "Партнер Zlata Plaza",
  },
  {
    href: "https://www.instagram.com/space__transfer",
    src: "/img/partners-section/spacetransfer.png",
    alt: "Партнер Space Transfer",
  },
  {
    href: "https://www.instagram.com/ministry.of.flovers",
    src: "/img/partners-section/ministriFlowers.png",
    alt: "Партнер Ministry of flovers",
  },
  {
    href: "https://www.instagram.com/morkviana_mariana/?hl=uk",
    src: "/img/partners-section/morkviana.png",
    alt: "Партнер Морквяна",
  },
  {
    href: "https://ekvator.ua/rivne/",
    src: "/img/partners-section/ekvator.png",
    alt: "ТРЦ Екватор",
  },
  {
    href: "https://www.instagram.com/bebeauty_top100/?hl=uk",
    src: "/img/partners-section/be-beauty.png",
    alt: "Салон BeBeauty",
  },
  {
    href: "https://www.instagram.com/sembus_ua?igsh=bmlscml0eTF2dDMz",
    src: "/img/partners-section/sembus.png",
    alt: "Партнер Sem Bus",
  },
  {
    href: "https://www.metalista.com.ua/",
    src: "/img/partners-section/metalista.png",
    alt: "Компанія Metalista",
  },
  {
    href: "https://www.dybok.com.ua/",
    src: "/img/partners-section/dubok.png",
    alt: "Меблевий салон Дубок",
  },
  {
    href: "https://list.in.ua/463352/Warm-House-%D0%A0%D1%96%D0%B2%D0%BD%D0%B5",
    src: "/img/partners-section/warm-house.png",
    alt: "Меблевий салон Warm House",
  },
];

export default function Partners() {
  return (
    <section id="partners" className={styles.partners}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Компанії, та бізнеси,
          <br />
          які мені довіряють
        </h2>
      </div>

      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {/* Оригінал */}
          {partners.map(({ href, src, alt }) => (
            <Link
              key={alt}
              href={href}
              className={styles.item}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={src}
                alt={alt}
                width={190}
                height={100}
                className={styles.logo}
                loading="lazy"
              />
            </Link>
          ))}

          {/* Копія для безперервної ані */}
          {partners.map(({ href, src, alt }) => (
            <Link
              key={`copy-${alt}`}
              href={href}
              className={styles.item}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={true}
              tabIndex={-1}
            >
              <Image
                src={src}
                alt=""
                width={190}
                height={100}
                className={styles.logo}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
