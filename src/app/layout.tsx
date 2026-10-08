import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "StealthBridge | Confidential payments. Without borders.",
  description: "A testnet-first confidential settlement and remittance infrastructure experiment built on Stellar.",
  robots: { index: false, follow: false }
};
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
