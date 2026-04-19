import type { Metadata } from "next";
import { Unbounded, Inter, Montserrat } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll/SmoothScroll";

import "../styles/globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
  variable: "--font-unbounded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

//! META
export const metadata: Metadata = {
  title: {
    default: "Сергій Аранчій — Ведучий вашого свята",
    template: "%s | Сергій Аранчій",
  },
  description:
    "Сергій Аранчій — професійний ведучий весіль, корпоративів, днів народження та інших свят по всій Україні. Сучасний стиль, щирі емоції та індивідуальний підхід до кожного заходу.",

  keywords: [
    "Сергій Аранчій",
    "ведучий на весілля",
    "тамада на весілля",
    "ведучий корпоративів",
    "ведучий на свято",
    "професійний ведучий",
    "тамада Київ",
    "ведучий Україна",
  ],

  authors: [{ name: "Сергій Аранчій" }],
  creator: "Сергій Аранчій",

  metadataBase: new URL("https://next-aranchiy.vercel.app"),

  verification: {
    google: "0cfevxYGq-zL3-EvGxpOE1UWv1TYLnyi9FID64DUpp8",
  },

  openGraph: {
    title: "Сергій Аранчій — Ведучий вашого свята",
    description:
      "Професійний ведучий заходів з сучасним підходом. Незабутня атмосфера, якісний звук та індивідуальний сценарій для вашого свята.",
    url: "https://next-aranchiy.vercel.app",
    siteName: "Сергій Аранчій",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/img/about-section/about-1.jpg",
        width: 1200,
        height: 630,
        alt: "Сергій Аранчій — професійний ведучий",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Сергій Аранчій — Ведучий вашого свята",
    description: "Професійний ведучий весіль та свят",
    images: ["/img/about-section/about-1.jpg"],
  },
};
//! META

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="uk"
      className={`${unbounded.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon/microphone.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
