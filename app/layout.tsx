import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Open_Sans, Lora } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Avinya — Solving the Future",
  description:
    "Avinya provides Web, IT, Cyber Security, AI & Analytics solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${lora.variable}`}>
      <body className="bg-bg text-text antialiased font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
