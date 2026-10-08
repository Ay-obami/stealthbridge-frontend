import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "StealthBridge | Confidential payments. Without borders.",
  description: "A testnet-first confidential settlement and remittance infrastructure experiment built on Stellar.",
  robots: { index: false, follow: false }
};
export const viewport: Viewport = { themeColor: "#031419" };
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a>{children}</body></html>;
}
