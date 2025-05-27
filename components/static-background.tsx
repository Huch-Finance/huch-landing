"use client"

import { useIsMobile } from "@/hooks/use-mobile"

/**
 * Arrière-plan statique pour remplacer les animations canvas sur mobile
 * Utilise des dégradés CSS au lieu d'animations JavaScript
 */
export default function StaticBackground() {
  const isMobile = useIsMobile()
  
  // Rendu conditionnel dans le JSX au lieu du retour conditionnel
  return !isMobile ? null : (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Dégradés statiques pour remplacer les animations */}
      <div className="absolute -left-[20%] top-[10%] w-[70%] h-[80%] bg-white/5 rounded-full blur-[120px]" />
      <div className="absolute -right-[20%] top-[10%] w-[70%] h-[80%] bg-white/10 rounded-full blur-[120px]" />
      <div className="absolute top-[-30%] left-[30%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
      
      {/* Points statiques pour simuler les étoiles */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
