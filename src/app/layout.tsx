import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Mahek Pokar",
  description: "A Mechanical Engineer who has developed innovative solutions.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-sawad-dark text-white font-['Poppins']">
        {children}
        <Analytics />
      </body>
    </html>
  );
}