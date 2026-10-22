import type { Metadata } from "next";
import SignalReport from "@/components/SignalReport";

// Personal roadmap: never indexed.
export const metadata: Metadata = {
  title: "Your LinkedIn roadmap",
  robots: { index: false, follow: false },
};

export default function ScoreReportPage() {
  return <SignalReport />;
}
