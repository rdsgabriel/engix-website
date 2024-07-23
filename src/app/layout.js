import { Inter } from "next/font/google";
import "./globals.css";
import {GoogleAnalytics} from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "engix",
  description: "Para nós, a excelência é um hábito.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-branco">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-0B0V2RFSBH"/>
    </html>
  );
}
