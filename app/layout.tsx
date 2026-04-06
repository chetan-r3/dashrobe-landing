import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteDescription =
  "Clothes from the best local boutiques and brands around you — at your door in under 60 minutes.";

/** Required for absolute og:image / og:url — WhatsApp & social scrapers reject relative URLs. */
function getMetadataBase(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    const u = explicit.replace(/\/$/, "");
    return new URL(u.startsWith("http") ? u : `https://${u}`);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Dashrobe — Your wardrobe, delivered",
    template: "%s | Dashrobe",
  },
  description: siteDescription,
  applicationName: "Dashrobe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dashrobe",
    title: "Dashrobe — Your wardrobe, delivered",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashrobe — Your wardrobe, delivered",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
