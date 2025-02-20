import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import image from "../../public/opengraph-image.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unda 62",
  description:
    "UNDA 62 este un centru de tineret din Cluj-Napoca, un spațiu creat de tineri, pentru tineri. Oferim activități gratuite, un mediu sigur și primitor, unde poți învăța, socializa și da viață ideilor tale.",
  openGraph: {
    url: "https://unda62.tudorolariu.com",
    images: [
      {
        url: "https://unda62.tudorolariu.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unda 62",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
