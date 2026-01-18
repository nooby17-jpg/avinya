import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Open_Sans, Lora } from "next/font/google";
import { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "sonner";

<Toaster richColors />


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
  metadataBase: new URL("https://avinya.tech"),
  title: {
    default: "Avinya — Solving the Future",
    template: "%s | Avinya",
  },
  description:
    "Avinya provides Web Solutions, IT Services, Cyber Security, AI & Analytics — built for scale, clarity, and trust.",
  openGraph: {
    title: "Avinya — Solving the Future",
    description:
      "Enterprise-grade Web, IT, Cyber Security, and AI solutions.",
    url: "https://avinya.tech",
    siteName: "Avinya",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avinya — Solving the Future",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinya — Solving the Future",
    description:
      "Enterprise-grade Web, IT, Cyber Security, and AI solutions.",
    images: ["/og-image.png"],
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
        <Toaster richColors />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
