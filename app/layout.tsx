import type { Metadata } from "next";
import "../styles/globals.css";

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
    images: ["/images/og-preview.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="image"
          href="/img/hero/hero-bg.png"
          fetchPriority="high"
        />
        <link rel="icon" href="/img/favicon/favicon.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
