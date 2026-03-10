import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cenit Security Doors | Bespoke Security Doors for Luxury Residences",
  description: "London-standard security engineering for Costa del Sol's most prestigious properties. Bespoke security doors for villas and apartments in Marbella, Puerto Banús, Benahavís, and beyond.",
  keywords: "security doors, luxury security, Marbella, Costa del Sol, Puerto Banús, Benahavís, high security doors, villa security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
