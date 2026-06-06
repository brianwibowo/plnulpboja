import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "PLN ULP Boja - Layanan Kelistrikan Modern & Handal",
  description: "Website Resmi Unit Layanan Pelanggan (ULP) Boja, Kabupaten Kendal. Temukan informasi layanan pasang baru, tambah daya, pengaduan gangguan, dan tips keselamatan kelistrikan.",
  keywords: ["PLN Boja", "PLN ULP Boja", "Kelistrikan Boja", "Pasang Baru PLN", "Tambah Daya PLN", "PLN Kendal"],
  authors: [{ name: "PLN ULP Boja" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
