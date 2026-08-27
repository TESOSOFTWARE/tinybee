import type { Metadata, Viewport } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import { GameStateProvider } from "@/hooks/useGameState";
import { SupabaseSyncProvider } from "@/components/SupabaseSyncProvider";

const baloo = Baloo_2({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  title: "TinyBee | Công cụ học tập cho bé",
  description: "Learn math by battling cute monsters, earning gold coins, unlocking powerful pets, and exploring magical fantasy worlds! Designed for kids aged 6-12.",
  keywords: ["math game", "gamified learning", "kids math practice", "rpg math battle", "ixl alternative", "math academy", "tinybee"],
  authors: [{ name: "TinyBee Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`h-full antialiased ${baloo.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-baloo">
        <GameStateProvider>
          <SupabaseSyncProvider>
            {children}
          </SupabaseSyncProvider>
        </GameStateProvider>
      </body>
    </html>
  );
}
