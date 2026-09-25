import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celonis Automation Hackathon Prep Site",
  description: "Hackathon prep landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
