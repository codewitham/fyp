import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from '@clerk/nextjs'
import { EdgeStoreProvider } from '../lib/edgestore';

const font = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "porto-ai",
  description: "Generate AI websites in seconds...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#F97316"
        }
      }}
    >
      <html lang="en">
        <body className={font.className}>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
