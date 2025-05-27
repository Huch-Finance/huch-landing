"use client"
import { useEffect, useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function DecorativeLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajuster la taille du canvas pour qu'elle corresponde à sa taille d'affichage
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      ctx.translate(0, 0)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Configuration des barres
    const barCount = 3
    const barWidth = 0.5
    const spacing = 60
    const startX = canvas.width / (2 * window.devicePixelRatio) - ((barCount - 1) * spacing) / 2
    const barHeight = (canvas.height * 0.7) / window.devicePixelRatio
    const startY = (canvas.height / window.devicePixelRatio - barHeight) / 2

    // Configuration des points lumineux - démarrage séquentiel
    const glowPoints = Array(barCount)
      .fill(0)
      .map((_, index) => ({
        // Positions initiales décalées pour un démarrage séquentiel
        position: -40 * index, // Chaque barre commence avec un décalage
        // Vitesse réduite pour un mouvement plus lent
        speed: 0.3,
      }))

    // Animation
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dessiner les barres et les points lumineux
      for (let i = 0; i < barCount; i++) {
        const x = startX + i * spacing

        // Dessiner la barre
        ctx.beginPath()
        ctx.moveTo(x, startY)
        ctx.lineTo(x, startY + barHeight)
        ctx.strokeStyle = "rgba(50, 50, 50, 0.5)"
        ctx.lineWidth = barWidth
        ctx.stroke()

        // Mettre à jour la position du point lumineux
        glowPoints[i].position += glowPoints[i].speed
        if (glowPoints[i].position > barHeight) {
          glowPoints[i].position = -40 // Réinitialiser au-dessus de la barre avec un décalage
        }

        // Ne dessiner le point lumineux que s'il est visible sur la barre
        if (glowPoints[i].position > 0 && glowPoints[i].position < barHeight) {
          // Dessiner le point lumineux et sa traînée avec une intensité augmentée
          const gradient = ctx.createLinearGradient(
            x,
            startY + glowPoints[i].position - 40,
            x,
            startY + glowPoints[i].position + 5,
          )
          gradient.addColorStop(0, "rgba(255, 255, 255, 0)")
          gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.6)") // Intensité augmentée de 0.4 à 0.6
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

          ctx.beginPath()
          ctx.moveTo(x, startY + glowPoints[i].position - 40)
          ctx.lineTo(x, startY + glowPoints[i].position + 5)
          ctx.strokeStyle = gradient
          ctx.lineWidth = barWidth + 0.5
          ctx.stroke()
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Rendu conditionnel dans le JSX au lieu du retour conditionnel
  return isMobile ? null : (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
  )
}
