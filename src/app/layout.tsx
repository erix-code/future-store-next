import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header/Header";
import Footer from "@/app/components/layout/Footer/Footer";
import type {Display} from "next/dist/compiled/@next/font";


export const metadata: Metadata = {
    title: "🚀 Future world",
    description: "Welcome to the future store in USA.",
    keywords: ["ecommerce", "future", "world", "technology"]
};

const roboto = Roboto({
    weight: ['100' , '300' , '400' , '500' , '700' , '900'],
    subsets: ["latin-ext", "latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={roboto.className}
      >

      <Header></Header>
      {children}
      <Footer></Footer>
      </body>
    </html>
  );
}
