import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GameStateProvider } from "@/hooks/useGameState";
import { SupabaseSyncProvider } from "@/components/SupabaseSyncProvider";

export const metadata: Metadata = {
  title: "TinyBee | Gamified Math Learning for Kids",
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
    <html lang="en" className="h-full select-none">
      <body className="min-h-full flex flex-col bg-playful-dots text-slate-800 antialiased selection:bg-academy-blue/20">
        <GameStateProvider>
          <SupabaseSyncProvider>
            {children}
          </SupabaseSyncProvider>
        </GameStateProvider>
      </body>
    </html>
  );
}
