import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anidesu : Nonton anime sub Indonesia kesukaan kamu pasti terupdate!",
  description:
    "Nonton anime sub Indonesia tanpa ribet, anime terupdate setiap hari dengan kualitas yang Full HD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
