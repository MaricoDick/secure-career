import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const metadata: Metadata = {
  title: "Secure Career - Private Resume Encryption Storage",
  description: "Privacy-preserving resume storage system using FHEVM. Protect your sensitive career data while enabling encrypted skill matching.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`zama-bg text-foreground antialiased`}>
        <div className="fixed inset-0 w-full h-full zama-bg z-[-20] min-w-[850px]"></div>
        {/* Floating particles background */}
        <div className="fixed inset-0 pointer-events-none z-[-10]">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300/40 rounded-full float-animation" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-40 w-3 h-3 bg-blue-300/30 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-60 right-20 w-1.5 h-1.5 bg-pink-300/35 rounded-full float-animation" style={{ animationDelay: '3s' }}></div>
        </div>
        <Providers>
          <main className="flex flex-col max-w-screen-xl mx-auto pb-20 min-w-[850px] px-4">
            <nav className="flex w-full px-3 md:px-0 h-fit py-8 justify-between items-center fade-in-up">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-16 h-16 bg-white/90 rounded-3xl shadow-lg backdrop-blur-sm hover-lift pulse-glow cursor-pointer">
                  <span className="text-3xl float-animation">💼</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                    Secure Career
                  </h1>
                  <p className="text-sm text-white/80 font-medium flex items-center gap-2">
                    <span className="text-green-400">🔒</span>
                    Privacy-Preserving Resume Storage
                    <span className="text-xs bg-green-500/20 px-2 py-1 rounded-full">FHEVM</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="hidden md:flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium hover-lift">
                  <span className="text-yellow-400">🛡️</span>
                  <span>FHEVM Protected</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="hover-lift">
                  <ConnectButton />
                </div>
              </div>
            </nav>
            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
