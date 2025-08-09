import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KrishiSathi | Direct-from-Farm Marketplace",
  description:
    "Buy fresh produce directly from farmers. Sell your harvest with zero middlemen on KrishiSathi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-green-600">Krishi</span>Sathi
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/market" className="hover:text-green-600">Market</Link>
              <Link href="/sell" className="hover:text-green-600">Sell Produce</Link>
              <Link href="/" className="rounded-full bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition-colors">Get Started</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left">© {new Date().getFullYear()} KrishiSathi. Empowering farmers and delighting customers.</p>
            <div className="flex items-center gap-4">
              <Link href="/market" className="hover:text-green-600">Browse</Link>
              <Link href="/sell" className="hover:text-green-600">Sell</Link>
              <a href="mailto:support@krishisathi.local" className="hover:text-green-600">Support</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
