import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stake Promo Code - BONUS2025 | Best Casino Offers",
  description:
    "Use Stake Promo Code BONUS2025 for exclusive offers. Compare Stake with Roobet, BC.Game, and more. Daily sports predictions and news.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black text-white min-h-screen"}>
        <header className="p-4 border-b border-gray-800 flex justify-between">
          <h1 className="text-xl font-bold">
            <Link href="/">Stake Promo Code</Link>
          </h1>
          <nav className="flex gap-6">
            <Link href="/casinos">Casinos</Link>
            <Link href="/predictions">Predictions</Link>
            <Link href="/news">News</Link>
          </nav>
        </header>
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
        <footer className="text-center p-4 text-sm border-t border-gray-800 mt-10">
          &copy; 2025 Stake Promo Code Site. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
