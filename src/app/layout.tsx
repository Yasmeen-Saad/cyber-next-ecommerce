import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import {Montserrat} from 'next/font/google';
import { SessionProvider } from "next-auth/react";

const montserrat = Montserrat({ subsets: ['latin'] });
console.log(montserrat);

export const metadata = {
  title: "cyber",
  description: "E-commerce website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SessionProvider>
          <NavBar />
          <div className="min-h-screen flex flex-col">
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
