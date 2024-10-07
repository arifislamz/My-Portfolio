import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/sessionWrapper";

// Import Components 
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arif Islam - Web Developer",
  description: "Welcome to Your Website. Explore our services and products.",
  keywords: 'Arif Islam, Web developer, website designer, Full Stack Web Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta name="google-site-verification" content="z9IZbnerGnYzJFU2cfnITULt_lzOnsvr9MjWUVkVztA" />
      </Head>
      <body className={`${inter.className} bg1 w-full`} >
        <Navbar />

          <SessionWrapper>
            {children}
          </SessionWrapper>

        <Footer />
      </body>
    </html>
  );
}
