import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationHeader from "./components/navigation-header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lenosol",
  description: "NextGen Tech Innovators and Digital Software Solutions experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className={inter.className}>
      <body className='min-h-full flex flex-col'>
        <NavigationHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
