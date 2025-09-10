"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Logo from "@/components/logo"

/**
 * Version ultra-simplifiée et optimisée pour mobile
 * Sans animations, sans canvas, sans effets complexes
 */
export default function MobileOptimizedView() {
  return (
    <div className="min-h-screen bg-[#070809] text-white flex flex-col">
      {/* Header simplifié */}
      <header className="py-4 px-4 border-b border-zinc-800/30">
        <div className="flex items-center justify-between">
          {/* Logo et nom de marque */}
          <a href="/" className="flex items-center">
            <Logo size={32} className="mr-2" />
            <span className="text-xl font-semibold text-white">Huch.</span>
          </a>

          {/* Bouton de liste d'attente */}
          <Button
            className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-4 py-1.5 h-auto text-xs flex items-center gap-1.5"
            onClick={() => window.open("https://app.huch.finance/", "_blank")}
          >
            <span>Go to App</span>
            <ArrowRight className="w-3 h-3" />
          </Button>
        </div>
      </header>

      {/* Contenu principal simplifié */}
      <main className="flex-grow flex flex-col justify-center p-4">
        <div className="w-full bg-[#0B0C0E] rounded-2xl overflow-hidden relative border border-zinc-800/50 p-6">
          {/* Contenu héro simplifié */}
          <div className="py-8">
            <h1 className="text-3xl font-bold tracking-tight leading-tight text-center mb-4">
              Turn Your CS2 Skins Into{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                Instant Cash
              </span>
            </h1>

            <p className="text-sm leading-relaxed max-w-[600px] mx-auto text-center mb-8 text-zinc-300">
              The smart alternative to selling. Get cash now and keep your valuable skins. 
              Repay when you're ready and get them back.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 w-full">
              <Button
                className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-6 py-2.5 h-auto text-sm w-full"
                onClick={() => window.open("https://app.huch.finance/", "_blank")}
              >
                Go to App <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              
              <Button
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full px-6 py-2.5 h-auto text-sm flex items-center gap-2 w-full"
                onClick={() => window.open("https://discord.gg/xjhCJTfHQ9", "_blank")}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                </svg>
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Section À propos simplifiée */}
      <section className="p-4 pb-12">
        <div className="w-full bg-[#0B0C0E] rounded-2xl overflow-hidden relative border border-zinc-800/50 p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">About Huch</h2>
          <p className="text-sm text-zinc-300 mb-6">
            Huch is a revolutionary platform that allows CS2 players to leverage their valuable 
            skins without selling them. Get instant cash loans using your skins as collateral.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
              <h3 className="text-lg font-medium mb-2">Keep Your Skins</h3>
              <p className="text-sm text-zinc-400">
                Unlike selling, you'll get your skins back when you repay the loan.
              </p>
            </div>
            
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
              <h3 className="text-lg font-medium mb-2">Instant Cash</h3>
              <p className="text-sm text-zinc-400">
                Get funds quickly without the hassle of traditional selling platforms.
              </p>
            </div>
            
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
              <h3 className="text-lg font-medium mb-2">Flexible Repayment</h3>
              <p className="text-sm text-zinc-400">
                Repay your loan on your own schedule and get your skins back.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer simplifié */}
      <footer className="py-6 px-4 border-t border-zinc-800/30">
        <div className="flex flex-col items-center">
          <Logo size={24} className="mb-2" />
          <p className="text-xs text-zinc-500 mb-4 text-center">
            © 2025 Huch. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://discord.gg/xjhCJTfHQ9" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02z" />
              </svg>
            </a>
            <a href="https://x.com/HuchFi" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@huchskins" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/huch.fi/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
