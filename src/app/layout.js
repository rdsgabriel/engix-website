import { Inter } from "next/font/google";
import "./globals.css";
import {GoogleAnalytics} from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "engix",
  description: "Engix Tech | Para nós, a excelência é um hábito. Agência Digital focada em desenvolvimento de software. Somos a força propulsora por trás de inovações tecnológicas. Criação de Websites, Aplicativos móveis e Sistemas completos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className='bg-white'>{children}</body>
      <GoogleAnalytics async gaId="G-0B0V2RFSBH"/>
    </html>
  );
}
