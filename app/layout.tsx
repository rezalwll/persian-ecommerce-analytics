import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Persian RTL", description: "Persian UI" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
