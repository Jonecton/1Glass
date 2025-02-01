// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import Navbar

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
      <body className="antialiased pt-28"> {/* Push content below navbar */}
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}

