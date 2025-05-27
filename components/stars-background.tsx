"use client"
import { useEffect, useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const animationRef = useRef<number | null>(null)
  const starsRef = useRef<any[]>([])
  
  // Utiliser notre hook personnalisé qui prend en compte le paramètre d'URL
  const isMobile = useIsMobile()

  // Observer la visibilité pour suspendre l'animation quand hors écran
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const canvas = canvasRef.current
    if (!canvas) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(canvas)
    return () => observer.disconnect()
  }, [])

  // Gestion du canvas et de l'animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajuster la taille du canvas avec throttling
    let resizeTimeout: NodeJS.Timeout | null = null
    const resizeCanvas = () => {
      if (resizeTimeout) return
      
      resizeTimeout = setTimeout(() => {
        const { width, height } = canvas.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
        
        // Réinitialiser les étoiles après redimensionnement
        initStars()
        
        resizeTimeout = null
      }, 200) // Throttle à 200ms
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Gestionnaires d'événements de souris (uniquement sur desktop)
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return
      
      const rect = canvas.getBoundingClientRect()
      const x = (e.clientX - rect.left) * (canvas.width / rect.width / window.devicePixelRatio)
      const y = (e.clientY - rect.top) * (canvas.height / rect.height / window.devicePixelRatio)
      setMousePosition({ x, y })
    }

    const handleMouseEnter = () => {
      if (isMobile) return
      setIsMouseInCanvas(true)
    }

    const handleMouseLeave = () => {
      if (isMobile) return
      setIsMouseInCanvas(false)
    }

    // Ajouter les écouteurs d'événements uniquement sur desktop
    if (!isMobile) {
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("mouseenter", handleMouseEnter)
      canvas.addEventListener("mouseleave", handleMouseLeave)
    }

    // Classe Star optimisée
    class Star {
      x: number
      y: number
      size: number
      opacity: number
      speed: number
      originalX: number
      originalY: number
      phase: number

      constructor() {
        this.x = (Math.random() * canvas.width) / window.devicePixelRatio
        this.y = (Math.random() * canvas.height) / window.devicePixelRatio
        this.originalX = this.x
        this.originalY = this.y
        this.size = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.5 + 0.2
        this.speed = Math.random() * 0.05 + 0.01
        this.phase = Math.random() * Math.PI * 2 // Phase aléatoire pour éviter que toutes les étoiles scintillent en même temps
      }

      update(mouseX: number, mouseY: number, isMouseActive: boolean, timestamp: number) {
        // Effet de scintillement optimisé avec timestamp au lieu de Date.now()
        this.opacity = 0.4 + Math.sin(timestamp * this.speed + this.phase) * 0.2

        // Effet de répulsion par la souris (uniquement sur desktop)
        if (!isMobile && isMouseActive) {
          const dx = mouseX - this.x
          const dy = mouseY - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const repulsionRadius = 100 // Rayon de répulsion

          if (distance < repulsionRadius) {
            const force = (1 - distance / repulsionRadius) * 0.5
            this.x -= dx * force
            this.y -= dy * force
          } else {
            // Retour progressif à la position d'origine
            this.x += (this.originalX - this.x) * 0.02
            this.y += (this.originalY - this.y) * 0.02
          }
        } else if (this.x !== this.originalX || this.y !== this.originalY) {
          // Retour progressif à la position d'origine 
          this.x += (this.originalX - this.x) * 0.02
          this.y += (this.originalY - this.y) * 0.02
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    // Initialiser les étoiles
    const initStars = () => {
      // Réduire le nombre d'étoiles sur mobile pour améliorer les performances
      const starCount = isMobile ? 50 : 100
      starsRef.current = []
      
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push(new Star())
      }
    }

    initStars()

    // Animation avec requestAnimationFrame
    let lastTimestamp = 0
    const animate = (timestamp: number) => {
      // Si le composant n'est pas visible ou sur mobile en défilement, réduire le taux de rafraîchissement
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      
      // Limiter le framerate sur mobile pour économiser les ressources
      if (isMobile && lastTimestamp && timestamp - lastTimestamp < 50) { // ~20fps sur mobile
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      
      lastTimestamp = timestamp
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dessiner les étoiles
      starsRef.current.forEach((star) => {
        star.update(mousePosition.x, mousePosition.y, isMouseInCanvas, timestamp * 0.001)
        star.draw(ctx)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
      if (!isMobile) {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseenter", handleMouseEnter)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
    }
  }, [mousePosition, isMouseInCanvas, isMobile, isVisible])

  // Rendu conditionnel dans le JSX au lieu du retour conditionnel
  return isMobile ? null : (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-40" />
  )
}
