import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/component/Navbar";
import Profile from "./component/Profile";

export const metadata: Metadata = {
  title: "Collins Blog App",
  description: "Generated by Tony Collins next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* bg-gradient-to-t from-slate-200 to-white */}
      <body className="dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-400 dark:text-white min-h-screen">
        <Navbar />
        {/* <Profile /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
