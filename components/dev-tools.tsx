"use client"

import { useState, useEffect } from "react"
import { useIsMobile, toggleMobileMode } from "@/hooks/use-mobile"

export function DevTools() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()
  const [isDevMode, setIsDevMode] = useState(false)

  // Vérifier si nous sommes en mode développement
  useEffect(() => {
    // process.env.NODE_ENV n'est pas accessible côté client
    // Nous utilisons donc une heuristique simple
    setIsDevMode(window.location.hostname === 'localhost' || 
                window.location.hostname === '127.0.0.1')
  }, [])

  // Ne pas afficher en production
  if (!isDevMode) return null

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-30'
      }`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="bg-black/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-3 shadow-lg">
        <div className="flex flex-col gap-2">
          <div className="text-xs text-zinc-400 mb-1">Outils de développement</div>
          
          <button 
            onClick={() => toggleMobileMode()}
            className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
              isMobile 
                ? 'bg-blue-600/30 text-blue-200 hover:bg-blue-600/40' 
                : 'bg-zinc-700/50 text-zinc-300 hover:bg-zinc-700/70'
            }`}
          >
            {isMobile ? '📱 Mode Mobile Activé' : '💻 Mode Desktop Activé'}
          </button>
          
          <div className="text-[10px] text-zinc-500 mt-1">
            {isMobile ? 'Cliquez pour passer en mode desktop' : 'Cliquez pour simuler un mobile'}
          </div>
        </div>
      </div>
    </div>
  )
}
