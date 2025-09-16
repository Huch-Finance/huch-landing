"use client"

import { useEffect, useRef } from "react"

export default function CS2GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid animation
    let offset = 0
    const gridSize = 50
    const lineWidth = 0.5

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(255, 117, 0, 0.03)")
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.02)")
      gradient.addColorStop(1, "rgba(79, 209, 197, 0.03)")
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = lineWidth

      // Draw vertical lines
      for (let x = offset % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines with perspective
      const horizon = canvas.height * 0.4
      const vanishingPoint = canvas.width / 2
      
      for (let y = 0; y < 20; y++) {
        const yPos = horizon + Math.pow(y, 1.5) * 10
        if (yPos > canvas.height) break
        
        ctx.beginPath()
        ctx.moveTo(0, yPos)
        ctx.lineTo(canvas.width, yPos)
        ctx.stroke()
        
        // Add perspective lines
        if (y % 3 === 0) {
          ctx.beginPath()
          ctx.moveTo(vanishingPoint, horizon)
          ctx.lineTo(0, yPos)
          ctx.stroke()
          
          ctx.beginPath()
          ctx.moveTo(vanishingPoint, horizon)
          ctx.lineTo(canvas.width, yPos)
          ctx.stroke()
        }
      }

      // Add glowing nodes at intersections
      for (let x = offset % gridSize; x < canvas.width; x += gridSize * 3) {
        for (let y = horizon; y < canvas.height; y += gridSize * 2) {
          const nodeGradient = ctx.createRadialGradient(x, y, 0, x, y, 3)
          nodeGradient.addColorStop(0, "rgba(255, 117, 0, 0.8)")
          nodeGradient.addColorStop(1, "rgba(255, 117, 0, 0)")
          
          ctx.fillStyle = nodeGradient
          ctx.beginPath()
          ctx.arc(x, y, 3, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      offset += 0.5
      requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
