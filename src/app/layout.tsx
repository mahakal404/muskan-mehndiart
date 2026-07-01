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
  title: "Muskan Mehndi Art | Exquisite Bridal Mehndi",
  description: "Professional Mehndi Artist from Valsad. Available Worldwide. Book your special day now.",
  metadataBase: new URL("https://muskanmehndiart.netlify.app"),
  openGraph: {
    title: "Muskan Mehndi Art | Exquisite Bridal Mehndi",
    description: "Professional Mehndi Artist from Valsad. Available Worldwide. Book your special day now.",
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
    title: "Muskan Mehndi Art | Exquisite Bridal Mehndi",
    description: "Professional Mehndi Artist from Valsad. Available Worldwide. Book your special day now.",
    images: ["/mushkan.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} scroll-smooth antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
