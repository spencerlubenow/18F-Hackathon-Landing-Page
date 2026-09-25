import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celonis Automation Hackathon Prep Site",
  description: "Password-protected hackathon prep portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
