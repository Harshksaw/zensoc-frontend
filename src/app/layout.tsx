import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { localFont } from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const ruthligos = localFont({
  src: [
    {
      path: "../../public/fonts/ruthligos-sillentin.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ruthligos",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>

      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${ruthligos.variable}   font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
