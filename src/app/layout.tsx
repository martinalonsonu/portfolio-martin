import type { Metadata } from "next";
import { Bebas_Neue, Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hola, soy Martin Nuñez. ¿Qué vamos a crear hoy?",
  description:
    "Descubre mi portafolio como ingeniero de sistemas especializado en desarrollo web. Experto en frontend, backend y soluciones full stack. Crea proyectos accesibles y de alto rendimiento.",
  keywords: [
    "ingeniero de sistemas",
    "desarrollador web",
    "full stack developer",
    "frontend developer",
    "backend developer",
    "React",
    "Next.js",
    "TypeScript",
    "desarrollo web profesional",
  ],
  authors: [{ name: "Martin Nuñez" }],
  creator: "Martin Nuñez",
  publisher: "Martin Nuñez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://martinalonsonu.netlify.app/",
    siteName: "Martin Nuñez - Portafolio",
    title: "Hola, soy Martin Nuñez. ¿Qué vamos a crear hoy?",
    description:
      "Descubre mi portafolio como ingeniero de sistemas especializado en desarrollo web. Experto en frontend, backend y soluciones full stack.",
    images: [
      {
        url: "https://martinalonsonu.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Martin Nuñez - Ingeniero de Sistemas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hola, soy Martin Nuñez. ¿Qué vamos a crear hoy?",
    description:
      "Portafolio profesional de Martin Nuñez. Especialista en desarrollo web full stack.",
    images: ["https://martinalonsonu.netlify.app/og-image.jpg"],
    creator: "@martin_nunez",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: "https://martinalonsonu.netlify.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body
        className={`${poppins.variable} ${bebasNeue.variable} ${inter.variable} ${manrope.variable}`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
