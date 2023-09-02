import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Superdao",
  description: "Superdao landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-black text-white selection:bg-500 selection:text-bg w-screen h-screen overflow-x-hidden bg-gradient-to-t `}>
        <div className="w-[24rem] h-[15rem] -z-10 rounded-[24rem] bg-300 blur-[280px] absolute top-28 left-1/2 -translate-x-1/2"></div>
        <div className="w-[24rem] h-[15rem] -z-10 rounded-[24rem] bg-300 blur-[280px] absolute top-[50rem] left-1/2 -translate-x-1/2"></div>
        <div className="w-[24rem] h-[15rem] -z-10 rounded-[24rem] bg-300 blur-[280px] absolute top-[100rem] left-1/2 -translate-x-1/2"></div>
        {children}
      </body>
    </html>
  );
}
