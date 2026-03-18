import type { Metadata } from "next";
import { Unbounded, Inter, Montserrat } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Сергій Аранчій — Ведучий на весілля, корпоративи та івенти",
  description:
    "Сергій Аранчій — професійний ведучий заходів. Незабутня атмосфера, сучасний стиль та індивідуальний підхід до вашого свята.",
  keywords: "Сергій Аранчій, ведучий на весілля, тамада, ведучий корпоративів",
  authors: [{ name: "Сергій Аранчій" }],
  openGraph: {
    title: "Сергій Аранчій — Ведучий вашого ідеального свята",
    description:
      "Сучасний формат, щирі емоції та професійна організація вашого івенту.",
    images: ["/public/img/hero/hero-bg.png"],
    type: "website",
  },
};

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
      <body>{children}</body>
    </html>
  );
}
