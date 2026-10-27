import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { jsonLd, SITE_URL as SEO_SITE_URL } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuditModalProvider } from "@/context/AuditModalContext";
import { AuditModal } from "@/components/AuditModal";
import { BookAutoOpen } from "@/components/BookAutoOpen";
import { IntroVideoWidget } from "@/components/IntroVideoWidget";
import { SiteChrome } from "@/components/SiteChrome";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { GA_ID } from "@/lib/analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Geometric sans for headlines.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// The live domain. metadataBase resolves every canonical and og:url against
// this, so it has to match what the site is actually served on.
const SITE_URL = "https://www.withsignalhouse.com";

/** Who the site is, for search engines and AI answer engines. */
const SITE_ENTITY = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Signal House",
  url: SEO_SITE_URL,
  description: "Signal House is a LinkedIn positioning agency for founders and senior executives: narrative strategy, a content system, and the outreach engine that makes you the most credible voice in your space.",
  sameAs: ["https://www.linkedin.com/in/consult-with-umair/"],
};

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
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(SITE_ENTITY) }}
        />
        <AuditModalProvider>
          <BookAutoOpen />
          <SiteChrome><Header /></SiteChrome>
          <main className="flex-1">{children}</main>
          <SiteChrome><Footer /></SiteChrome>
          <AuditModal />
          <IntroVideoWidget />
        </AuditModalProvider>
        {GA_ID && <AnalyticsEvents />}
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
