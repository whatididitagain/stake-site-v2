import '../styles/globals.css';

export const metadata = {
  title: "Stake Promo Code - BONUS2025",
  description: "Compare Stake with top casinos. Get predictions and news.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Stake Promo Code</h1>
          <nav>
            <a href="/news">News</a>
            <a href="/predictions">Predictions</a>
            <a href="/casinos">Casinos</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>&copy; 2025 Stake Promo</footer>
      </body>
    </html>
  );
}