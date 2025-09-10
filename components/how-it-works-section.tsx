"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Shield, 
  Coins, 
  Flame,
  Gamepad2,
  Wallet,
  Package,
  RefreshCw,
  Clock,
  CheckCircle,
  Link2,
  TrendingUp,
  Lock,
  Percent,
  Calendar,
  AlertTriangle
} from "lucide-react"

export default function HowItWorksSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto bg-[#0B0C0E] rounded-3xl overflow-hidden relative border border-zinc-800/50 p-8 md:p-12">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -left-[20%] top-[10%] w-[70%] h-[80%] bg-white/5 rounded-full blur-[120px]" />
          <div className="absolute -right-[20%] top-[10%] w-[70%] h-[80%] bg-white/10 rounded-full blur-[120px]" />
          <div className="absolute top-[-30%] left-[30%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-3 px-4 py-1.5 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800/50"
            >
              <span className="text-sm text-zinc-400">Complete Platform Guide</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              How Huch Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-zinc-400 text-lg"
            >
              Huch revolutionizes CS2 skin trading by converting your Steam skins into blockchain NFTs 
              and enabling instant redemption back to Steam. Trade freely without Steam restrictions.
            </motion.p>
          </div>

          {/* Two Core Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Feature 1: Steam to NFT Tokenization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl border border-zinc-800/50 p-8 relative overflow-hidden group hover:border-[#8564FA]/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8564FA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg bg-[#8564FA]/20 flex items-center justify-center mb-6">
                  <Coins className="w-8 h-8 text-[#8564FA]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Steam to NFT Tokenization</h3>
                <p className="text-zinc-400 text-base mb-6">
                  Convert your CS2 skins into blockchain NFTs on Solana. Trade instantly without 
                  Steam's 7-day trade holds or marketplace restrictions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">Bypass Steam trade restrictions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">Instant USDC trading on Solana</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">Lower fees than Steam marketplace</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">Automated Steam bot processing</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Burn to Redeem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-xl border border-zinc-800/50 p-8 relative overflow-hidden group hover:border-orange-500/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6">
                  <Flame className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Burn NFT to Redeem Skins</h3>
                <p className="text-zinc-400 text-base mb-6">
                  Convert your NFTs back to CS2 skins anytime. Burn the blockchain NFT to receive 
                  the original skin directly in your Steam inventory.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">24-hour processing time</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">Direct Steam inventory delivery</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">Email notifications & tracking</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-zinc-300">Secure escrow system</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Detailed Workflow Steps */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-center mb-12"
            >
Complete Tokenization & Trading Workflow
            </motion.h3>

            {/* Tokenization Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#8564FA]/20 flex items-center justify-center">
                  <Coins className="w-5 h-5 text-[#8564FA]" />
                </div>
                <h4 className="text-xl font-semibold">1. Steam to NFT Tokenization</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Step 1 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">1</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="w-4 h-4 text-[#8564FA]" />
                    <h5 className="text-sm font-medium">Connect Steam</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Link your Steam account to access your CS2 inventory
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">2</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-4 h-4 text-[#8564FA]" />
                    <h5 className="text-sm font-medium">Select Skins</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Choose CS2 skins from your inventory to tokenize
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">3</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#8564FA]" />
                    <h5 className="text-sm font-medium">Wait 7 Days</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Steam's trade hold policy requires 7-day waiting period
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">4</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <h5 className="text-sm font-medium">Receive NFT</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    NFT automatically minted to your Solana wallet
                  </p>
                </div>
              </div>
            </motion.div>

            {/* NFT Trading Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#4FD1C5]/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#4FD1C5]" />
                </div>
                <h4 className="text-xl font-semibold">2. Trade NFTs on Marketplace</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Step 1 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">1</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Wallet className="w-4 h-4 text-[#4FD1C5]" />
                    <h5 className="text-sm font-medium">Connect Wallet</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Connect your Solana wallet (Phantom, Solflare, etc.)
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">2</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#4FD1C5]" />
                    <h5 className="text-sm font-medium">Trade Instantly</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Buy/sell NFT skins instantly with USDC
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">3</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="w-4 h-4 text-[#4FD1C5]" />
                    <h5 className="text-sm font-medium">No Restrictions</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Trade as many times as you want, no Steam limits
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Burn to Redeem Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-orange-500" />
                </div>
                <h4 className="text-xl font-semibold">3. Burn NFT to Redeem CS2 Skins</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Step 1 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">1</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Link2 className="w-4 h-4 text-orange-500" />
                    <h5 className="text-sm font-medium">Add Trade Link</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Set your Steam trade URL in profile settings
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">2</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <h5 className="text-sm font-medium">Burn NFT</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Transfer NFT to escrow wallet for burning
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">3</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <h5 className="text-sm font-medium">Processing</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    24-hour processing for Steam trade delivery
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-black/20 rounded-lg p-4 border border-zinc-800/50 relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-semibold">4</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-4 h-4 text-green-400" />
                    <h5 className="text-sm font-medium">Receive Skin</h5>
                  </div>
                  <p className="text-xs text-zinc-400">
                    CS2 skin delivered directly to your Steam inventory
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Security & Technology */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900/50 to-black/30 rounded-xl p-6 border border-zinc-800/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-[#8564FA]" />
                <h3 className="text-lg font-semibold">Security & Technology</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Built on Solana blockchain for fast, cheap transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Automated Steam bot for secure trades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Metaplex NFT standard for compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Real-time Steam inventory integration</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900/50 to-black/30 rounded-xl p-6 border border-zinc-800/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-[#4FD1C5]" />
                <h3 className="text-lg font-semibold">Key Benefits</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Bypass Steam's 7-day trade restrictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Lower fees than Steam marketplace (15%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Instant USDC trading with global liquidity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">Convert back to Steam skins anytime</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                Experience the future of CS2 skin trading. Convert your Steam skins to blockchain NFTs 
                for instant, restriction-free trading, then redeem them back to Steam anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-6 py-3 h-auto text-sm"
                  onClick={() => window.open("https://app.huch.finance/", "_blank")}
                >
                  Launch App <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full px-6 py-3 h-auto text-sm flex items-center gap-2"
                  onClick={() => window.open("https://discord.gg/xjhCJTfHQ9", "_blank")}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                  </svg>
                  Join Community
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}