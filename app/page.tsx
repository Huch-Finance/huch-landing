"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Gamepad2, Trophy, Users, Zap, Shield, TrendingUp, Sparkles, Crosshair } from "lucide-react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import Logo from "@/components/logo"
import DecorativeLines from "@/components/decorative-lines"
import StarsBackground from "@/components/stars-background"
import StaticBackground from "@/components/static-background"
import HowItWorksSection from "@/components/how-it-works-section"
import CS2GridBackground from "@/components/cs2-grid-background"
import WeaponShowcase from "@/components/weapon-showcase"
import ParticleField from "@/components/particle-field"
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
      <header className="py-4 relative z-50 backdrop-blur-sm bg-black/30 border-b border-orange-500/10">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 flex items-center justify-between"
        >
          {/* Logo and Brand Name with Gaming Style */}
          <a href="/" className="flex items-center group">
            <div className="relative">
              <Logo size={42} className="mr-3 transition-transform group-hover:scale-110" />
            </div>
            <div>
              <span className="text-2xl font-bold tracking-wider text-white">HUCH</span>
            </div>
          </a>

          {/* Center Navigation with Gaming Style */}
          <div className="bg-black/60 backdrop-blur-xl rounded-full border border-orange-500/20 px-8 py-3 hidden md:flex items-center shadow-lg shadow-orange-500/10">
            <div className="flex items-center gap-8">
              <a
                href="/docs"
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span className="text-sm">Docs</span>
              </a>
              <div className="w-px h-5 bg-zinc-700"></div>
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

          {/* Mobile menu button for small screens */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="/docs"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </a>
          </div>

          {/* Launch App Button with Gaming Style */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Button
              className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6 py-2.5 h-auto font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/25 border border-orange-400/20 group overflow-hidden"
            onClick={() => window.open("https://app.huch.finance/", "_blank")}
          >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Gamepad2 className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-bold">LAUNCH APP</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Button>
          </motion.div>
        </motion.div>
      </header>

      {/* Main Hero Section with Gaming Theme */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-4 pt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="w-full max-w-[1400px] min-h-[700px] sm:min-h-[800px] bg-gradient-to-br from-black via-gray-900/50 to-black rounded-3xl overflow-hidden relative border border-orange-500/20 shadow-2xl shadow-orange-500/10"
        >
          {/* Hero Content with Gaming Elements */}
          <div className="relative h-full">
            {/* CS2 Themed Gradient Background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl z-0 pointer-events-none">
              <div className="absolute -left-[45%] top-[18%] w-[55%] h-[55%] bg-orange-500/5 rounded-full blur-[100px]" />
              <div className="absolute -right-[35%] top-[12%] w-[60%] h-[60%] bg-purple-500/5 rounded-full blur-[100px]" />
              <div className="absolute -top-[25%] left-[35%] w-[35%] h-[35%] bg-cyan-500/5 rounded-full blur-[90px]" />
            </div>

            {/* Grid Background */}
            <CS2GridBackground />

            {/* Particle Effects */}
            <ParticleField />
            
            {/* Stars Background for depth */}
            {!isMobile && <StarsBackground />}

            {/* Removed hero stat badges (TVL and Active Traders) */}

            {/* Decorative lines with animated glow */}
            <DecorativeLines />

            {/* Main Hero Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 py-12">
              {/* Gachas Coming Soon Banner */}
              <motion.div
                className="mb-4" 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-1.5 backdrop-blur-xl">
                  <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">💼 Gachas Are Now Live!</span>
                </div>
              </motion.div>

              {/* Gaming Badge */}
            {/* <motion.div
                className="mb-8" 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-6 py-2 backdrop-blur-xl">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">Next-Gen CS2 Trading</span>
                  <Crosshair className="w-4 h-4 text-orange-400" />
              </div>
              </motion.div> */}

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-center mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              >
                <span className="block uppercase mb-2">
                  <span className="text-white">Turn Your </span>
                  <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent">CS2 Skins</span>
                </span>
                <span className="block">
                Into{" "}
                  <span className="inline-block relative">
                    <span className="text-chrome animate-chrome-sheen">Instant Cash</span>
                    <motion.div 
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </span>
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl leading-relaxed max-w-[700px] mx-auto text-center mb-8 px-2 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="font-semibold text-orange-400">The ultimate crypto + gaming platform.</span>{" "}
                Unlock liquidity from your CS2 inventory without selling. Get instant USDC loans backed by your skins.
              </motion.p>

              {/* CTA Buttons with Gaming Style */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-2 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 117, 0, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg px-8 py-4 font-bold text-lg w-full sm:w-auto overflow-hidden shadow-xl"
                  onClick={() => window.open("https://app.huch.finance/", "_blank")}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wide font-bold">
                    <Zap className="w-5 h-5" />
                    Start Trading
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-black/60 backdrop-blur-xl border-2 border-purple-500/50 text-white rounded-lg px-8 py-4 font-bold text-lg w-full sm:w-auto hover:bg-purple-900/30 transition-all shadow-lg"
                  onClick={() => window.open("https://discord.gg/xjhCJTfHQ9", "_blank")}
                >
                  <span className="flex items-center justify-center gap-2 uppercase tracking-wide font-bold">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                  </svg>
                    Join Community
                  </span>
                </motion.button>
              </motion.div>

              {/* Weapon Showcase */}
              {!isMobile && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="w-full max-w-4xl mx-auto hidden lg:block relative z-0 mt-4"
                >
                  <WeaponShowcase />
                </motion.div>
              )}

              {/* Gaming Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-6 md:bottom-10 left-0 right-0 hidden md:flex justify-center gap-8 px-8 z-10"
              >
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400">Secure Escrow</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-400">Instant Loans</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-400">Best Rates</span>
                </div>
              </motion.div>
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
                <span className="text-sm text-zinc-400">Introducing HUCH</span>
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
                HUCH is the first platform that lets you borrow real money using your CS2 skins as collateral — and
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
                  <h4 className="text-xl font-semibold mb-2">Why Choose HUCH</h4>
                  <p className="text-zinc-400 mb-8">
                    HUCH offers a revolutionary alternative to traditional skin marketplaces. Get cash for your valuable
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
                          Unlike marketplaces where you sell your skins permanently, with HUCH you always get your skins
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
                          While resale sites offer 70-75% of value but take your skins forever, HUCH lets you borrow up
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
                      <h4 className="text-xl font-semibold mb-2">How HUCH Works</h4>
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

      {/* Enhanced Skins Showcase Section with Gaming Theme */}
      <section className="pt-16 pb-20 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto relative">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black rounded-3xl" />
          <div className="absolute inset-0 hex-pattern opacity-10" />
          
          {/* Content Container */}
          <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-orange-500/20 p-8 md:p-12 shadow-2xl shadow-orange-500/5">
            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -left-[20%] top-[10%] w-[70%] h-[80%] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute -right-[20%] top-[10%] w-[70%] h-[80%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute top-[-30%] left-[30%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="relative z-10">
              {/* Enhanced Skins Showcase Header */}
              <div className="mb-16 relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                  className="text-center"
              >
                  <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full backdrop-blur-xl">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">Premium Collection</span>
                </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 uppercase relative z-20">
                    <span className="text-white">Legendary </span>
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">CS2 Skins</span>
                  </h3>
                  <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                    Explore our curated collection of high-value skins. Each one can unlock instant liquidity through our platform.
                </p>
              </motion.div>
              </div>

              {/* Enhanced Skin Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Premium Skin Card 1 - AWP Dragon Lore */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="gaming-card rounded-2xl overflow-hidden group relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Rarity Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full">
                    <span className="text-xs font-bold text-black uppercase">Contraband</span>
                  </div>
                  
                  {/* Image Container with 3D Effect */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-yellow-900/20 to-orange-900/20">
                    <img
                      src="/dragon-lore.png"
                      alt="AWP Dragon Lore"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Skin Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="text-xl font-bold text-white drop-shadow-lg">AWP | Dragon Lore</h4>
                          <p className="text-sm text-orange-300 font-semibold">Factory New • 0.0024 Float</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black text-green-400 drop-shadow-lg">$14,700</div>
                          <div className="text-sm text-cyan-300 font-semibold">~$9,555 loan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Stats Bar */}
                  <div className="p-5 bg-gradient-to-b from-black/80 to-black/90">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Loan Value</span>
                      <span className="text-sm font-bold text-orange-400">65% LTV</span>
                    </div>
                    <div className="relative w-full h-2 bg-black/50 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </motion.div>

                {/* Premium Skin Card 2 - Butterfly Knife */}
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
          </div>
        </div>
      </section>

      {/* Enhanced Gaming Footer Section */}
      <footer className="pt-16 pb-8 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto relative">
          {/* Footer Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent" />
          <div className="absolute inset-0 hex-pattern opacity-5" />
          
          <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl border border-orange-500/20 p-8 md:p-12 shadow-2xl shadow-orange-500/5">
            {/* Animated Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-orange-500/50 to-transparent" />
            
            <div className="relative z-10">
              {/* Gaming Stats Bar */}
              {/* Removed footer stats bar */}

              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Brand Column */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center md:items-start"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <Logo size={42} className="drop-shadow-lg" />
                    </div>
                    <div>
                      <span className="text-2xl font-extrabold text-white">HUCH</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm max-w-xs mb-6">
                    The ultimate platform for CS2 skin liquidity. Unlock value from your inventory without selling.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-green-400 font-semibold">LIVE</span>
                    </div>
                    <span className="text-xs text-gray-500">Platform Active</span>
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center md:items-start"
                >
                  <h4 className="text-lg font-bold mb-4 text-orange-400 uppercase">Quick Links</h4>
                  <div className="space-y-3">
                    <a href="/docs" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium group">
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→ Documentation</span>
                    </a>
                    <a href="https://app.huch.finance/" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium group">
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→ Launch App</span>
                    </a>
                    <a href="#how-it-works" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium group">
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→ How It Works</span>
                    </a>
                    <a href="#skins" className="block text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium group">
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→ Skin Collection</span>
                    </a>
                  </div>
                </motion.div>

                {/* Community */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center md:items-start"
                >
                  <h4 className="text-lg font-bold mb-4 text-orange-400 uppercase">Join Community</h4>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://discord.gg/xjhCJTfHQ9" 
                      target="_blank" 
                      className="gaming-card p-4 rounded-lg flex flex-col items-center justify-center gap-2 group"
                    >
                      <svg className="w-6 h-6 text-[#5865F2] group-hover:text-[#7289DA] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                      </svg>
                      <span className="text-xs font-semibold text-gray-400 group-hover:text-white">Discord</span>
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://x.com/HuchFi" 
                      target="_blank" 
                      className="gaming-card p-4 rounded-lg flex flex-col items-center justify-center gap-2 group"
                    >
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span className="text-xs font-semibold text-gray-400 group-hover:text-white">Twitter</span>
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.tiktok.com/@huchskins" 
                      target="_blank" 
                      className="gaming-card p-4 rounded-lg flex flex-col items-center justify-center gap-2 group"
                    >
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                      <span className="text-xs font-semibold text-gray-400 group-hover:text-white">TikTok</span>
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.instagram.com/huch.fi/" 
                      target="_blank" 
                      className="gaming-card p-4 rounded-lg flex flex-col items-center justify-center gap-2 group"
                    >
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-pink-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                      <span className="text-xs font-semibold text-gray-400 group-hover:text-white">Instagram</span>
                    </motion.a>
                </div>

                  <p className="text-sm text-gray-500 text-center md:text-left">
                    Join 12,000+ traders in our community
                  </p>
                </motion.div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-8 mt-8 border-t border-orange-500/10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-xs text-gray-500 text-center md:text-left max-w-md">
                    HUCH is not affiliated with Valve Corporation or Counter-Strike 2. All CS2 skin names and images are property of their respective owners.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-600">&copy; {new Date().getFullYear()} HUCH</span>
                    <div className="w-px h-4 bg-gray-700" />
                    <span className="text-xs text-gray-600">All rights reserved</span>
              </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
function useRef<T>(initialValue: T) {
  return reactUseRef<T>(initialValue)
}

