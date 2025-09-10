"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import Logo from "@/components/logo"
import DecorativeLines from "@/components/decorative-lines"
import StarsBackground from "@/components/stars-background"
import StaticBackground from "@/components/static-background"
import HowItWorksSection from "@/components/how-it-works-section"
import { useIsMobile } from "@/hooks/use-mobile"
import { useRef as reactUseRef } from "react"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showDeFiIndicator, setShowDeFiIndicator] = useState(false)
  const isMobile = useIsMobile()
  const shouldReduceMotion = useReducedMotion() || isMobile
  const isFirstRender = useRef(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50)
    }

    window?.addEventListener("scroll", handleScroll)
    return () => window?.removeEventListener("scroll", handleScroll)
  }, [])
  
  // Marquer le premier rendu comme terminé après le montage
  useEffect(() => {
    // Utiliser un délai court pour s'assurer que le rendu initial est terminé
    const timer = setTimeout(() => {
      isFirstRender.current = false
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Only runs on client
    const checkWidth = () => {
      setShowDeFiIndicator(window.matchMedia('(min-width: 768px)').matches)
    }
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  // Animations ultra-simplifiées pour mobile ou reduced motion
  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 5 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: "easeOut",
        // Désactiver les animations après le premier rendu sur mobile
        delay: isMobile && !isFirstRender.current ? 0 : 0
      } 
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#070809] text-white flex flex-col">
      <header className="py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo and Brand Name */}
          <a href="/" className="flex items-center">
            <Logo size={36} className="mr-2" />
            <span className="text-xl font-semibold bg-clip-text text-white">Huch.</span>
          </a>

          {/* Center Navigation with Rounded Background - Social Links */}
          <div className="bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800/50 px-6 py-2.5 hidden md:flex items-center">
            <div className="flex items-center gap-8">
              <a
                href="https://discord.gg/xjhCJTfHQ9" target="_blank" rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                aria-label="Discord"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                </svg>
                <span className="text-sm">Discord</span>
              </a>
              <a
                href="https://x.com/HuchFi" target="_blank" rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-sm">Twitter</span>
              </a>
              <a
                href="https://www.tiktok.com/@huchskins" target="_blank" rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="text-sm">TikTok</span>
              </a>
              <a
                href="https://www.instagram.com/huch.fi/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* Go to App Button */}
          <Button
            className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-4 py-1.5 h-auto text-xs flex items-center gap-1.5"
            onClick={() => window.open("https://app.huch.finance/", "_blank")}
          >
            <span>Go to App</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </header>

      {/* Le reste du code reste inchangé */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-4 pt-1">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: isMobile ? 10 : 20 },
            visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.4 : 0.8, ease: "easeOut" } }
          }}
          className="md:animate-visible w-full max-w-[1320px] h-[600px] sm:h-[700px] bg-[#0B0C0E] rounded-3xl overflow-hidden relative border border-zinc-800/50"
        >
          {/* Hero Content */}
          <div className="relative h-full">
            {/* Grands dégradés blancs/gris */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {/* Dégradé principal côté gauche */}
              <div className="absolute -left-[20%] top-[10%] w-[70%] h-[80%] bg-white/5 rounded-full blur-[120px]" />

              {/* Dégradé principal côté droit */}
              <div className="absolute -right-[20%] top-[10%] w-[70%] h-[80%] bg-white/10 rounded-full blur-[120px]" />

              {/* Dégradé supplémentaire en haut */}
              <div className="absolute top-[-30%] left-[30%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
            </div>

            {/* Effet de paillettes/étoiles - uniquement sur desktop */}
            <StarsBackground />
            
            {/* Arrière-plan statique pour mobile */}
            <StaticBackground />

            {/* Floating elements */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="absolute top-1/4 left-[15%] hidden md:flex items-center"
            >
              <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#8564FA]"></div>
              </div>
              <div className="ml-2">
                <div className="text-sm font-medium">AWP | Dragon Lore</div>
                <div className="text-xs text-zinc-500">14,700$</div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="absolute top-1/4 right-[15%] hidden md:flex items-center"
            >
              <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#4FD1C5]"></div>
              </div>
              <div className="ml-2">
                <div className="text-sm font-medium">Butterfly Knife | Freehand</div>
                <div className="text-xs text-zinc-500">1,407$</div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="absolute bottom-1/4 left-[15%] hidden md:flex items-center"
            >
              <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#8564FA]"></div>
              </div>
              <div className="ml-2">
                <div className="text-sm font-medium">M4A4 | Howl</div>
                <div className="text-xs text-zinc-500">9,110$</div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="absolute bottom-1/4 right-[15%] hidden md:flex items-center"
            >
              <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#4FD1C5]"></div>
              </div>
              <div className="ml-2">
                <div className="text-sm font-medium">Glock-18 | Fade</div>
                <div className="text-xs text-zinc-500">2,325$</div>
              </div>
            </motion.div>

            {/* Decorative lines with animated glow */}
            <DecorativeLines />

            {/* Main content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-0 overflow-y-auto">
              {/* CTA Button */}
              <motion.div className="mb-8" variants={fadeIn} initial="hidden" animate="visible">
                <Button className="bg-zinc-800/80 hover:bg-zinc-700/80 text-white rounded-full px-6 py-2 h-auto text-sm backdrop-blur-sm border border-zinc-700/50 flex items-center gap-2">
                  Elevate Your Game <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-center mb-3 sm:mb-4"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                Turn Your CS2 Skins <br/>
                Into{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                  Instant Cash
                </span>
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-xl leading-relaxed max-w-[600px] mx-auto text-center mb-6 sm:mb-8 px-2"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                The smart alternative to selling. Get cash now and keep your valuable skins. Repay when you're ready and
                get them back.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-2"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                <Button
                  className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-6 py-2.5 sm:py-3 h-auto text-sm md:text-md w-full sm:w-auto"
                  onClick={() => window.open("https://app.huch.finance/", "_blank")}
                >
                  Go to App <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full px-6 py-2.5 sm:py-3 h-auto text-sm md:text-md flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0"
                  onClick={() => window.open("https://discord.gg/xjhCJTfHQ9", "_blank")}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                  </svg>
                  Join Discord
                </Button>
              </motion.div>

              {/* DeFi horizons indicator */}
              {showDeFiIndicator && (
                <div
                  className="absolute bottom-8 right-8 hidden md:flex flex-col items-end text-sm text-zinc-500"
                  style={{
                    opacity: 1,
                    transition: 'opacity 0.5s'
                  }}
                >
                  <div className="mb-2">CS2 Collection</div>
                  <div className="w-8 h-1 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </main>

      {/* About Project Section */}
      <section className="pt-8 pb-20 relative overflow-hidden">
        <div className="w-full max-w-[1320px] mx-auto bg-[#0B0C0E] rounded-3xl overflow-hidden relative border border-zinc-800/50 p-8 md:p-12">
          {/* Grands dégradés blancs/gris */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {/* Dégradé principal côté gauche */}
            <div className="absolute -left-[20%] top-[10%] w-[70%] h-[80%] bg-white/5 rounded-full blur-[120px]" />

            {/* Dégradé principal côté droit */}
            <div className="absolute -right-[20%] top-[10%] w-[70%] h-[80%] bg-white/10 rounded-full blur-[120px]" />

            {/* Dégradé supplémentaire en haut */}
            <div className="absolute top-[-30%] left-[30%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
          </div>

          {/* Effet de paillettes/étoiles */}
          <div className="absolute inset-0 opacity-30">
            <StarsBackground />
          </div>

          {/* Lignes décoratives */}
          <div className="absolute inset-0 opacity-30">
            <DecorativeLines />
          </div>

          <div className="relative z-10">
            {/* Le reste du contenu reste inchangé */}
            <div className="text-center mb-16 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block mb-3 px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800/50"
              >
                <span className="text-sm text-zinc-400">Introducing Huch</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                Unlock Value From Your CS2 Inventory
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-zinc-400 text-lg"
              >
                Huch is the first platform that lets you borrow real money using your CS2 skins as collateral — and
                get back your ownership after repay.
              </motion.p>
            </div>
            {/* How It Works Section */}
            <div className="relative z-10 mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                {/* Left side - Why Choose Huch */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center"
                >
                  <h4 className="text-xl font-semibold mb-2">Why Choose Huch</h4>
                  <p className="text-zinc-400 mb-8">
                    Huch offers a revolutionary alternative to traditional skin marketplaces. Get cash for your valuable
                    skins without losing them forever.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-black/40 border border-zinc-800/50 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[#4FD1C5]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Keep Your Skins</h4>
                        <p className="text-zinc-400">
                          Unlike marketplaces where you sell your skins permanently, with Huch you always get your skins
                          back after repaying your loan.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-black/40 border border-zinc-800/50 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[#8564FA]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Competitive Value</h4>
                        <p className="text-zinc-400">
                          While resale sites offer 70-75% of value but take your skins forever, Huch lets you borrow up
                          to 65% while keeping ownership.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-black/40 border border-zinc-800/50 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[#4FD1C5]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Instant Processing</h4>
                        <p className="text-zinc-400">
                          Get your loan approved and funds transferred within minutes, not days. No credit checks
                          required.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="mt-8 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-6 py-3 h-auto text-sm w-fit"
                    onClick={() => window.open("https://app.huch.finance/", "_blank")}
                  >
                    Go to App <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </motion.div>

                {/* Right side - How It Works */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8564FA]/5 to-[#4FD1C5]/5 rounded-3xl"></div>

                  <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 h-full overflow-hidden">
                    {/* Background elements similar to main container */}
                    <div className="absolute -left-[30%] top-[20%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[80px]" />
                    <div className="absolute -right-[30%] bottom-[20%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[80px]" />

                    {/* Decorative lines */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800/50"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-zinc-800/50"></div>

                    {/* Concept visualization */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-semibold mb-2">How Huch Works</h4>
                      <p className="text-zinc-400 text-sm mb-6">
                        Get cash for your CS2 skins without selling them. Repay your loan to get your skins back.
                      </p>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="relative">
                          <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-black/40 border border-zinc-800/50 flex items-center justify-center">
                            <span className="text-xs font-medium text-white">1</span>
                          </div>
                          <div className="bg-black/30 rounded-xl p-5 border border-zinc-800/50">
                            <h5 className="text-sm font-medium mb-2">Connect</h5>
                            <p className="text-zinc-400 text-sm">
                              Link your Steam account to access your CS2 inventory
                            </p>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-black/40 border border-zinc-800/50 flex items-center justify-center">
                            <span className="text-xs font-medium text-white">2</span>
                          </div>
                          <div className="bg-black/30 rounded-xl p-5 border border-zinc-800/50">
                            <h5 className="text-sm font-medium mb-2">Select</h5>
                            <p className="text-zinc-400 text-sm">
                              Choose which skins to use as collateral for your loan
                            </p>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-black/40 border border-zinc-800/50 flex items-center justify-center">
                            <span className="text-xs font-medium text-white">3</span>
                          </div>
                          <div className="bg-black/30 rounded-xl p-5 border border-zinc-800/50">
                            <h5 className="text-sm font-medium mb-2">Borrow</h5>
                            <p className="text-zinc-400 text-sm">Get instant cash based on your skins' market value</p>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-black/40 border border-zinc-800/50 flex items-center justify-center">
                            <span className="text-xs font-medium text-white">4</span>
                          </div>
                          <div className="bg-black/30 rounded-xl p-5 border border-zinc-800/50">
                            <h5 className="text-sm font-medium mb-2">Return</h5>
                            <p className="text-zinc-400 text-sm">
                              Repay your loan to get your skins back in your inventory
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Featured skin example */}
                      <div className="bg-black/30 rounded-xl p-5 border border-zinc-800/50 relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-[#8564FA]/20 to-[#4FD1C5]/20 rounded-full blur-[30px]"></div>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#8564FA]/20 to-[#4FD1C5]/20 flex items-center justify-center">
                              <span className="text-xs font-medium">AWP</span>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium">Dragon Lore</h5>
                              <p className="text-xs text-zinc-500">Factory New</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">$14,700</div>
                            <div className="text-xs text-[#4FD1C5]">~$9,555 loan</div>
                          </div>
                        </div>

                        <div className="w-full bg-zinc-800/50 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#8564FA] to-[#4FD1C5] h-full rounded-full"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                        <p className="text-zinc-500 text-xs mt-2">Loan up to 65% of skin value</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed How It Works Section */}
      <HowItWorksSection />

      {/* Skins Showcase Section */}
      <section className="pt-8 pb-20 relative overflow-hidden">
        <div className="w-full max-w-[1320px] mx-auto bg-[#0B0C0E] rounded-3xl overflow-hidden relative border border-zinc-800/50 p-8 md:p-12">
          {/* Grands dégradés blancs/gris */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {/* Dégradé principal côté gauche */}
            <div className="absolute -left-[20%] top-[10%] w-[70%] h-[80%] bg-white/5 rounded-full blur-[120px]" />

            {/* Dégradé principal côté droit */}
            <div className="absolute -right-[20%] top-[10%] w-[70%] h-[80%] bg-white/10 rounded-full blur-[120px]" />

            {/* Dégradé supplémentaire en haut */}
            <div className="absolute top-[-30%] left-[30%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
          </div>

          {/* Effet de paillettes/étoiles */}
          <div className="absolute inset-0 opacity-30">
            <StarsBackground />
          </div>

          {/* Lignes décoratives */}
          <div className="absolute inset-0 opacity-30">
            <DecorativeLines />
          </div>

          <div className="relative z-10">
            {/* Skins Showcase Section */}
            <div className="relative z-10 mb-20 mt-16">
              <div className="w-full h-px bg-zinc-800/50 mb-16 bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-block mb-3 px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800/50">
                  <span className="text-sm text-zinc-400">Skin Collection</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Check the potential of your inventory</h3>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  See how much your premium skins could be worth as loan collateral.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Skin Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/30 rounded-xl border border-zinc-800/50 overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="/dragon-lore.png"
                      alt="AWP Dragon Lore"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="text-lg font-bold">AWP | Dragon Lore</h4>
                          <p className="text-sm text-zinc-400">Factory New</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">$14,700</div>
                          <div className="text-xs text-[#4FD1C5]">Up to $9,555 loan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-500">Loan-to-value ratio</span>
                      <span className="text-xs font-medium">65%</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#8564FA] to-[#4FD1C5] h-full rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>

                {/* Skin Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-black/30 rounded-xl border border-zinc-800/50 overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="/Butterflyknife.png"
                      alt="Butterfly Knife Freehand"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="text-lg font-bold">Butterfly Knife | Freehand</h4>
                          <p className="text-sm text-zinc-400">Factory New</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">$1,407</div>
                          <div className="text-xs text-[#4FD1C5]">Up to $914 loan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-500">Loan-to-value ratio</span>
                      <span className="text-xs font-medium">65%</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#8564FA] to-[#4FD1C5] h-full rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>

                {/* Skin Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-black/30 rounded-xl border border-zinc-800/50 overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="/ak47-fireserpent.png"
                      alt="AK-47 Fire Serpent"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="text-lg font-bold">AK-47 | Fire Serpent</h4>
                          <p className="text-sm text-zinc-400">Factory New</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">$4,090</div>
                          <div className="text-xs text-[#4FD1C5]">Up to $2,658 loan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-500">Loan-to-value ratio</span>
                      <span className="text-xs font-medium">65%</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#8564FA] to-[#4FD1C5] h-full rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>

                {/* Skin Card 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-black/30 rounded-xl border border-zinc-800/50 overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="/howl.png"
                      alt="M4A4 Howl"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="text-lg font-bold">M4A4 | Howl</h4>
                          <p className="text-sm text-zinc-400">Factory New</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">$9,110</div>
                          <div className="text-xs text-[#4FD1C5]">Up to $5,921 loan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-500">Loan-to-value ratio</span>
                      <span className="text-xs font-medium">65%</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#8564FA] to-[#4FD1C5] h-full rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>

                {/* Skin Card 5 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-black/30 rounded-xl border border-zinc-800/50 overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="/karambit-fade.png"
                      alt="Karambit Fade"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="text-lg font-bold">Karambit | Fade</h4>
                          <p className="text-sm text-zinc-400">Factory New</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">$4,700</div>
                          <div className="text-xs text-[#4FD1C5]">Up to $3,055 loan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-500">Loan-to-value ratio</span>
                      <span className="text-xs font-medium">65%</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#8564FA] to-[#4FD1C5] h-full rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>

                {/* Skin Card 6 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black/30 rounded-xl border border-zinc-800/50 overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="/fade.png"
                      alt="Glock-18 Fade"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="text-lg font-bold">Glock-18 | Fade</h4>
                          <p className="text-sm text-zinc-400">Factory New</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">$2,325</div>
                          <div className="text-xs text-[#4FD1C5]">Up to $1,511 loan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-500">Loan-to-value ratio</span>
                      <span className="text-xs font-medium">65%</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#8564FA] to-[#4FD1C5] h-full rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 text-center">
                <Button
                  className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-6 py-3 h-auto text-sm"
                  onClick={() => window.open("https://app.huch.finance/", "_blank")}
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Footer Section */}
            <footer className="mt-20 pt-12 pb-8 relative z-10">
              <div className="w-full h-px bg-zinc-800/50 mb-12 bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>

              <div className="flex flex-col items-center text-center max-w-md mx-auto">
                {/* Company Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center">
                    <Logo size={32} className="mr-2" />
                    <span className="text-xl font-semibold bg-clip-text text-white">Huch</span>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    The smart alternative to selling your CS2 skins. Get cash now and keep your valuable items.
                  </p>
                  <div className="flex space-x-4 justify-center">
                    <a href="https://discord.gg/xjhCJTfHQ9" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                      </svg>
                    </a>
                    <a href="https://x.com/HuchFi"  target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/huch.fi/?utm_source=ig_web_button_share_sheet" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-zinc-500 mb-4 max-w-md mx-auto">
                  Huch is not affiliated with Valve Corporation or Counter-Strike 2. All CS2 skin names and images are
                  property of their respective owners.
                </p>

                {/* Copyright */}
                <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Huch. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  )
}
function useRef<T>(initialValue: T) {
  return reactUseRef<T>(initialValue)
}

