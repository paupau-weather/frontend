import type { Metadata } from "next";
import Header from "@/ui/components/Header";
import Sidenav from "@/ui/components/Sidenav";
import Footer from "@/ui/components/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "PauPau Weather App",
  description: "A simple weather app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <hr/>
        <Sidenav />
        <hr/>
        {children}
        <hr/>
        <Footer />
      </body>
    </html>
  );
}
