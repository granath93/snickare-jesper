import type { Metadata } from "next";
import { Inter, Bebas_Neue as BebasNeue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = BebasNeue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Snickare Jesper Pettersson",
  description: "Snickare Jesper Pettersson | Alingsås",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${bebas.variable} antialiased`}>{children}</body>
    </html>
  );
}
