import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "engix",
  description: "Para nós, a excelência é um hábito.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-branco">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
