import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Todolist",
    description: "Todo app with nextjs and tailwindcss",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-100`}>{children}</body>
        </html>
    );
}
