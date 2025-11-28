import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rohantaneja.dev",
  description: "Rohan Taneja - CTO/Founding Engineer @ mesolab.ai",
  icons: {
    icon: [
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
