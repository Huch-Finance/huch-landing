"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface Weapon {
  name: string
  skin: string
  price: string
  rarity: "Common" | "Uncommon" | "Rare" | "Mythical" | "Legendary" | "Ancient" | "Contraband"
  image: string
  float: string
  pattern?: string
}

const weapons: Weapon[] = [
  {
    name: "AWP",
    skin: "Dragon Lore",
    price: "$14,700",
    rarity: "Contraband",
    image: "/dragon-lore.png",
    float: "0.0024",
    pattern: "#237"
  },
  {
    name: "Butterfly Knife",
    skin: "Freehand",
    price: "$1,407",
    rarity: "Ancient",
    image: "/Butterflyknife.png",
    float: "0.0145"
  },
  {
    name: "AK-47",
    skin: "Fire Serpent",
    price: "$4,090",
    rarity: "Ancient",
    image: "/ak47-fireserpent.png",
    float: "0.0089"
  },
  {
    name: "M4A4",
    skin: "Howl",
    price: "$9,110",
    rarity: "Contraband",
    image: "/howl.png",
    float: "0.0031"
  },
  {
    name: "Karambit",
    skin: "Fade",
    price: "$4,700",
    rarity: "Ancient",
    image: "/karambit-fade.png",
    float: "0.0067",
    pattern: "90/10"
  }
]

const rarityColors = {
  Common: "from-gray-400 to-gray-500",
  Uncommon: "from-green-400 to-green-500",
  Rare: "from-blue-400 to-blue-500",
  Mythical: "from-purple-400 to-purple-500",
  Legendary: "from-pink-400 to-pink-500",
  Ancient: "from-red-400 to-red-500",
  Contraband: "from-yellow-400 to-yellow-500"
}

export default function WeaponShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % weapons.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered])

  const activeWeapon = weapons[activeIndex]

  return (
    <div className="relative w-full h-full pb-20">
      {/* Main Weapon Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.9, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: 30 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="relative h-[400px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Weapon Image */}
          <div className="relative z-20">
            <motion.img
              src={activeWeapon.image}
              alt={`${activeWeapon.name} ${activeWeapon.skin}`}
              className="w-auto h-64 object-contain drop-shadow-2xl weapon-float"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(255, 117, 0, 0.3))"
              }}
            />
            
            {/* Rarity Glow */}
            <div 
              className={`absolute inset-0 bg-gradient-to-r ${rarityColors[activeWeapon.rarity]} opacity-30 blur-3xl -z-10 pointer-events-none`}
              style={{ transform: "scale(1.5)" }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Weapon Info Card - Moved to separate area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`info-${activeIndex}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex justify-center mt-8 mb-8 z-30"
        >
          <div className="bg-black/80 backdrop-blur-xl border border-orange-500/30 rounded-lg p-6 max-w-sm w-full mx-4 shadow-2xl">
            <div className={`inline-block px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${rarityColors[activeWeapon.rarity]} text-white mb-3`}>
              {activeWeapon.rarity}
            </div>
            
            <h3 className="text-2xl font-bold mb-1">{activeWeapon.name}</h3>
            <p className="text-orange-400 text-lg mb-4">{activeWeapon.skin}</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Price:</span>
                <span className="text-green-400 font-bold">{activeWeapon.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Float:</span>
                <span className="text-cyan-400">{activeWeapon.float}</span>
              </div>
              {activeWeapon.pattern && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Pattern:</span>
                  <span className="text-purple-400">{activeWeapon.pattern}</span>
                </div>
              )}
            </div>

            <Link href="https://app.huch.finance/" target="_blank" rel="noopener noreferrer" className="block w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                View Details
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Weapon Selector */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 pb-8 z-10">
        {weapons.map((weapon, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveIndex(index)}
            className={`relative w-20 h-20 rounded-lg border-2 transition-all ${
              index === activeIndex
                ? "border-orange-500 bg-orange-500/20"
                : "border-gray-600 bg-black/40 hover:border-orange-400"
            }`}
          >
            <img
              src={weapon.image}
              alt={weapon.name}
              className="w-full h-full object-contain p-2"
            />
            {index === activeIndex && (
              <motion.div
                layoutId="selector"
                className="absolute inset-0 border-2 border-orange-500 rounded-lg"
                style={{
                  boxShadow: "0 0 20px rgba(255, 117, 0, 0.5)"
                }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
