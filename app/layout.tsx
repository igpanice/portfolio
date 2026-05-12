import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://igor-caramori.netlify.app";
const SITE_NAME = "Igor Caramori — Product Designer";
const SITE_DESCRIPTION =
  "Crio experiências digitais que ajudam empresas a se conectarem melhor com seus usuários, sem desperdiçar recursos nem tomar decisões baseadas em achismos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  authors: [{ name: "Igor Caramori", url: SITE_URL }],
  creator: "Igor Caramori",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Igor Caramori",
  jobTitle: "Product Designer",
  email: "mailto:igorpanice@gmail.com",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Franca",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.linkedin.com/in/igor-panicecaramori-b6baa8338",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={plusJakarta.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
