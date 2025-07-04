import { Playfair_Display, Noto_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "ZOZA",
    template: "%s | ZOZA",
  },
  description:
    "Wasfa is a recipe application that allows you to search for recipes and get detailed information about them.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${notoSans.variable} antialiased`}>
        <Providers>
          <main className="container">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
