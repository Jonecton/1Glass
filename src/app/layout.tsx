// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; // ✅ Import Navbar

export const metadata: Metadata = {
  title: "Glass Shop",
  description: "Professional Glass Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}
