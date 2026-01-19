import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Public_Sans, Lora } from "next/font/google";
import { Toaster } from "sonner";

<Toaster richColors />
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-primary",
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
    <html lang="en" className={`${publicSans.variable}`}>
      <body className="bg-bg text-text antialiased font-primary">
        <Toaster richColors />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
