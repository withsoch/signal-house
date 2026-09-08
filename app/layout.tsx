import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuditModalProvider } from "@/context/AuditModalContext";
import { AuditModal } from "@/components/AuditModal";
import { BookAutoOpen } from "@/components/BookAutoOpen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Editorial serif for headlines - the HubSpot brand voice.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://sochcatalyst.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Signal House: LinkedIn Growth for Founders & CEOs",
    template: "%s · Signal House",
  },
  description:
    "Signal House is a LinkedIn positioning agency for founders and senior executives. We build the narrative strategy, content system, and outreach engine that makes you the most credible voice in your space.",
  keywords: [
    "LinkedIn growth agency",
    "personal branding for founders",
    "LinkedIn lead generation",
    "LinkedIn positioning for founders and executives",
    "LinkedIn profile optimisation",
    "LinkedIn company page management",
  ],
  openGraph: {
    title: "Signal House: LinkedIn Growth for Founders & CEOs",
    description:
      "Signal House is a LinkedIn positioning agency for founders and senior executives. We build the narrative strategy, content system, and outreach engine that makes you the most credible voice in your space.",
    url: SITE_URL,
    siteName: "Signal House",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signal House: LinkedIn Growth for Founders & CEOs",
    description:
      "Signal House is a LinkedIn positioning agency for founders and senior executives. We build the narrative strategy, content system, and outreach engine that makes you the most credible voice in your space.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white">
        <AuditModalProvider>
          <BookAutoOpen />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AuditModal />
        </AuditModalProvider>
        <Script
          id="videoask-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.VIDEOASK_EMBED_CONFIG = {
        "kind": "widget",
        "url": "https://www.videoask.com/fbh8wkj96",
        "options": {
          "widgetType": "VideoThumbnailExtraLarge",
          "text": "",
          "backgroundColor": "#E8633E",
          "position": "bottom-left",
          "dismissible": false,
          "videoPosition": "center center"
        }
      }
    `,
          }}
        />
        <Script
          id="videoask-embed"
          src="https://www.videoask.com/embed/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
