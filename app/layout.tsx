import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Rohan Taneja — Co-Founder & CTO, MESO Lab",
  description: "Rohan Taneja is Co-Founder & CTO of MESO Lab, an AI planning platform for teachers built in Dublin.",
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: "https://rohantaneja.dev",
  worksFor: {
    "@type": "Organization",
    name: profile.company.name,
    legalName: profile.company.legalName,
    url: profile.company.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var savedTheme = localStorage.getItem('theme');
                var theme;
                if (savedTheme) {
                  theme = savedTheme;
                } else {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
