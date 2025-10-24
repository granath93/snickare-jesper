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
  weight: "400",
});

const title = "Snickare Jesper Pettersson | Alingsås";
const description =
  "Snickare i och runtom Alingsås. Bygger, renoverar och underhåller.";
const url = "https://snickare-jesper.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  robots: { index: true, follow: true },
  keywords: ["snickare", "jesper", "pettersson", "alingsås", "snickeri"],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url,
    siteName: title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
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
        {/* Google search console tag: https://search.google.com/search-console/welcome?utm_source=about-page */}
        <meta
          name="google-site-verification"
          content="WYPHTODT4ibQ9OLeb4xwOtDBpxDVOSKXiFHP302-pXo"
        />

        {/* WebSite structured data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: title,
              url,
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${bebas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
