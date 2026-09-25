import type { Metadata } from "next";
import { Inter, Bebas_Neue as BebasNeue, Mansalva } from "next/font/google";
import "./globals.css";
import { url } from "../content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const handwritten = Mansalva({
  variable: "--font-mansalva",
  subsets: ["latin"],
  weight: "400",
});

const bebas = BebasNeue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const title = "Snickare Jesper Pettersson | Alingsås";
const description =
  "Snickare i och runtom Alingsås. Bygger, renoverar och underhåller.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  robots: { index: true, follow: true },
  keywords: ["snickare", "jesper", "pettersson", "alingsås", "snickeri", "bygg", "renovering", "altan", "finsnickeri", "nybygge", "byggservice"],
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

const tel = process.env.NEXT_PUBLIC_TEL ?? "xxxxxxxxxx";

// WebSite structured data (JSON-LD) for Google search results
const localBusinessStructuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: title,
  url,
  "telephone": tel,
  "openingHours": "Mo-Fr 08:00-17:00",
  areaServed: ["Alingsås", "Herrljunga", "Vårgårda", "Göteborg", "Vara", "Falköping", "Borås"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Svedenborgsgatan 31",
    "addressLocality": "Alingsås",
    "postalCode": "441 43",
    "addressCountry": "SE"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tjänster",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Byggservice",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renovering",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Altanbygge",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Finsnickeri",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Golvläggning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fönster, dörr och fasadbyte",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kök",
        },
      },
    ],
  },
});

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
        {/* Google search console tag: https://search.google.com/search-console/welcome?utm_source=about-page */}
        <meta
          name="google-site-verification"
          content="WYPHTODT4ibQ9OLeb4xwOtDBpxDVOSKXiFHP302-pXo"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: localBusinessStructuredData,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${bebas.variable} ${handwritten.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
