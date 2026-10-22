import type { Metadata } from "next";
import SignalScore from "@/components/SignalScore";

export const metadata: Metadata = {
  title: "LinkedIn Signal Score",
  description: "Nine questions, two minutes. See whether your LinkedIn is working for you, and the three things to fix first.",
};

export default function ScorePage() {
  return <SignalScore />;
}
