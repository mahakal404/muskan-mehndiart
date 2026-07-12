import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Bridal Mehndi Artist in Valsad | Destination Wedding Henna",
  description: "Premium bridal mehndi artist in Valsad, Pardi & Gujarat. Specializing in luxury bridal henna, 100% organic custom portrait mehndi, and worldwide destination weddings.",
  keywords: [
    "Best bridal mehndi artist in Valsad",
    "Portrait mehndi artist",
    "Luxury bridal henna packages",
    "Destination wedding mehndi artist",
    "100% organic bridal mehndi artist"
  ],
  metadataBase: new URL("https://muskanmehndiart.netlify.app"),
  icons: {
    icon: "/fevi.webp",
    apple: "/fevi.webp",
  },
  openGraph: {
    title: "Best Bridal Mehndi Artist in Valsad | Destination Wedding Henna",
    description: "Premium bridal mehndi artist in Valsad, Pardi & Gujarat. Specializing in luxury bridal henna, 100% organic custom portrait mehndi, and worldwide destination weddings.",
    url: "https://muskanmehndiart.netlify.app",
    siteName: "Muskan Mehndi Art",
    images: [
      {
        url: "/mushkan.jpg",
        width: 800,
        height: 800,
        alt: "Muskan Mehndi Art Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Bridal Mehndi Artist in Valsad | Destination Wedding Henna",
    description: "Premium bridal mehndi artist in Valsad, Pardi & Gujarat. Specializing in luxury bridal henna, 100% organic custom portrait mehndi, and worldwide destination weddings.",
    images: ["/mushkan.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Muskan Mehndi Art",
    "image": "https://muskanmehndiart.netlify.app/mushkan.jpg",
    "description": "100% Organic Henna Artist available worldwide. Premium bridal mehndi artist in Valsad, Pardi & Gujarat.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Valsad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "url": "https://muskanmehndiart.netlify.app",
    "telephone": "+919978089491",
    "priceRange": "$$"
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${outfit.variable} scroll-smooth antialiased font-sans`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
