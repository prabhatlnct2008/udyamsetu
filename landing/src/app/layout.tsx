import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "UdyamSetu Growth Studio - Turn Your Business Into a Lead Machine",
  description: "We build a complete growth system for Indian businesses: 30–100 local landing pages + SEO foundation + safe brand mention engine + backlinks/citations + Meta ads experiments + WhatsApp auto-replies",
  keywords: "UdyamSetu, lead generation, Indian business, SMB marketing, WhatsApp automation, SEO, landing pages",
  verification: {
    google: "6GWyM8Oi2hONRnhS7Jm6xm991c7xiTL5aiqL6Eb5RbY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Mukta:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FFF6E8]">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9QLEPNYXCH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9QLEPNYXCH');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
