"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Logo from "@/components/logo"
import StarsBackground from "@/components/stars-background"
import DecorativeLines from "@/components/decorative-lines"
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Coins, 
  TrendingUp, 
  Users, 
  ChevronRight,
  Lock,
  DollarSign,
  RefreshCw,
  Globe,
  Rocket,
  Heart,
  ArrowLeft,
  Menu,
  X,
  Search,
  Wallet
} from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("problem")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Navigation sections
  const sections = [
    { id: "problem", title: "The Problem", icon: <Lock className="w-4 h-4" /> },
    { id: "solution", title: "Our Solution", icon: <Zap className="w-4 h-4" /> },
    { id: "benefits", title: "Benefits", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "features", title: "Features", icon: <Shield className="w-4 h-4" /> },
    { id: "solana", title: "Why Solana?", icon: <Rocket className="w-4 h-4" /> },
    { id: "future", title: "Future of Gaming", icon: <Globe className="w-4 h-4" /> },
    { id: "community", title: "Community", icon: <Users className="w-4 h-4" /> }
  ]

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're at the bottom of the page
      if (window.scrollY + windowHeight >= documentHeight - 10) {
        setActiveSection("community")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#070809] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070809]/90 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo size={36} className="mr-2" />
            <span className="text-xl font-semibold bg-clip-text text-white">HUCH</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/docs" className="text-white font-medium">
              Documentation
            </Link>
            <Button
              className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-4 py-1.5 h-auto text-xs flex items-center gap-1.5"
              onClick={() => window.open("https://app.huch.finance/", "_blank")}
            >
              <span>Go to App</span>
              <ArrowRight className="w-3 h-3" />
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0B0C0E] border-t border-zinc-800/50">
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/" 
                className="block text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/docs" 
                className="block text-white font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Button
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-4 py-1.5 h-auto text-xs flex items-center justify-center gap-1.5"
                onClick={() => {
                  window.open("https://app.huch.finance/", "_blank")
                  setIsMobileMenuOpen(false)
                }}
              >
                <span>Go to App</span>
                <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          </div>
        )}
      </header>

      <div className="flex pt-16">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 fixed left-0 top-16 bottom-0 bg-[#0B0C0E] border-r border-zinc-800/50 overflow-y-auto">
          <nav className="p-6">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Documentation</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-all ${
                      activeSection === section.id
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                    }`}
                  >
                    {section.icon}
                    <span className="text-sm">{section.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="max-w-4xl mx-auto px-4 py-12">
            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  HUCH Documentation
                </span>
              </h1>
              <p className="text-xl text-zinc-400">
                Learn about the future of CS2 skin financing and trading
              </p>
            </motion.div>

            {/* The Problem Section */}
            <section id="problem" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#0B0C0E] rounded-3xl p-8 border border-zinc-800/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold">The Problem</h2>
                </div>

                <div className="space-y-6 text-zinc-300">
                  <p className="text-lg leading-relaxed">
                    CS2 players have millions of dollars locked in their skin inventories, but accessing this value has always meant one thing: <span className="text-white font-semibold">permanently selling your prized skins</span>.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/30 rounded-xl p-6 border border-zinc-800/50">
                      <h3 className="text-xl font-semibold text-white mb-3">Traditional Marketplaces</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Take 10-30% commission fees</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Force you to sell skins permanently</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Lose sentimental value and rare items</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          <span>Can't benefit from future price appreciation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6 border border-zinc-800/50">
                      <h3 className="text-xl font-semibold text-white mb-3">Player Dilemmas</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Need quick cash but don't want to sell</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Rare skins took years to acquire</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Market prices fluctuate wildly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>No way to leverage skin value temporarily</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-500/20">
                    <p className="text-lg">
                      <span className="text-white font-semibold">The result?</span> Players are forced to make an impossible choice: keep their valuable skins locked away or sell them forever when they need liquidity.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Our Solution Section */}
            <section id="solution" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#0B0C0E] rounded-3xl p-8 border border-zinc-800/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8564FA]/20 to-[#4FD1C5]/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#8564FA]" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Solution</h2>
                </div>

                <div className="space-y-6 text-zinc-300">
                  <p className="text-lg leading-relaxed">
                    HUCH revolutionizes CS2 skin ownership by introducing <span className="text-white font-semibold">collateralized lending</span> - get instant cash using your skins as collateral, then get them back after repayment.
                  </p>

                  <div className="bg-gradient-to-r from-[#8564FA]/10 to-[#4FD1C5]/10 rounded-xl p-6 border border-[#8564FA]/20">
                    <h3 className="text-2xl font-bold text-white mb-4">How HUCH Works</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-black/50 border-2 border-[#8564FA] flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold">1</span>
                        </div>
                        <h4 className="font-semibold text-white mb-1">Connect</h4>
                        <p className="text-sm">Link your Steam account & wallet</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-black/50 border-2 border-[#8564FA] flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold">2</span>
                        </div>
                        <h4 className="font-semibold text-white mb-1">Tokenize</h4>
                        <p className="text-sm">Convert skins to blockchain NFTs</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-black/50 border-2 border-[#4FD1C5] flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold">3</span>
                        </div>
                        <h4 className="font-semibold text-white mb-1">Borrow</h4>
                        <p className="text-sm">Get up to 65% of skin value in USDC</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-black/50 border-2 border-[#4FD1C5] flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold">4</span>
                        </div>
                        <h4 className="font-semibold text-white mb-1">Redeem</h4>
                        <p className="text-sm">Repay loan & get your skins back</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Tokenization Deep Dive */}
                    <div className="bg-gradient-to-br from-[#8564FA]/10 to-transparent rounded-xl p-6 border border-[#8564FA]/20">
                      <div className="flex items-start gap-4">
                        <Coins className="w-10 h-10 text-[#8564FA] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">Steam-to-NFT Tokenization Process</h3>
                          <p className="text-lg mb-4">
                            Our revolutionary tokenization system bridges Steam's centralized ecosystem with decentralized blockchain technology.
                          </p>
                          
                          <div className="bg-black/30 rounded-lg p-4 mb-4">
                            <h4 className="text-lg font-semibold text-[#8564FA] mb-3">How Tokenization Works:</h4>
                            <ol className="space-y-3 text-sm">
                              <li className="flex items-start gap-2">
                                <span className="text-[#8564FA] font-bold">1.</span>
                                <div>
                                  <span className="font-semibold text-white">Steam Trade Initiation:</span> Select skins from your Steam inventory and initiate a trade to our secure bot system.
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-[#8564FA] font-bold">2.</span>
                                <div>
                                  <span className="font-semibold text-white">7-Day Security Hold:</span> Steam's mandatory trade hold ensures security and prevents fraud. Your skins are safely stored during this period.
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-[#8564FA] font-bold">3.</span>
                                <div>
                                  <span className="font-semibold text-white">Metadata Capture:</span> All skin attributes are preserved - float value, wear rating, stickers, patterns, and StatTrak™ counts.
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-[#8564FA] font-bold">4.</span>
                                <div>
                                  <span className="font-semibold text-white">NFT Minting:</span> After the hold period, your skin is minted as a unique NFT on Solana with all metadata intact.
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-[#8564FA] font-bold">5.</span>
                                <div>
                                  <span className="font-semibold text-white">Instant Availability:</span> Your NFT appears in your wallet and can be traded, sold, or used as loan collateral immediately.
                                </div>
                              </li>
                            </ol>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-black/20 rounded-lg p-3">
                              <h5 className="text-sm font-semibold text-[#8564FA] mb-2">Supported Items</h5>
                              <ul className="space-y-1 text-xs">
                                <li className="flex items-center gap-1">
                                  <ChevronRight className="w-3 h-3 text-[#8564FA]" />
                                  <span>All CS2 weapon skins</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <ChevronRight className="w-3 h-3 text-[#8564FA]" />
                                  <span>Knives and gloves</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <ChevronRight className="w-3 h-3 text-[#8564FA]" />
                                  <span>Stickers and cases</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Burn to Redeem Deep Dive */}
                    <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl p-6 border border-orange-500/20">
                      <div className="flex items-start gap-4">
                        <RefreshCw className="w-10 h-10 text-orange-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">Burn-to-Redeem System</h3>
                          <p className="text-lg mb-4">
                            The first-ever system allowing NFT holders to convert their blockchain assets back into actual Steam items.
                          </p>
                          
                          <div className="bg-black/30 rounded-lg p-4 mb-4">
                            <h4 className="text-lg font-semibold text-orange-400 mb-3">Redemption Process:</h4>
                            <ol className="space-y-3 text-sm">
                              <li className="flex items-start gap-2">
                                <span className="text-orange-400 font-bold">1.</span>
                                <div>
                                  <span className="font-semibold text-white">Initiate Burn:</span> Select the NFT you want to redeem and provide your Steam trade URL.
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-orange-400 font-bold">2.</span>
                                <div>
                                  <span className="font-semibold text-white">NFT Verification:</span> Smart contract verifies NFT authenticity and ownership before burning.
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-orange-400 font-bold">3.</span>
                                <div>
                                  <span className="font-semibold text-white">Burn Transaction:</span> NFT is permanently burned on-chain, triggering the redemption process.
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-orange-400 font-bold">4.</span>
                                <div>
                                  <span className="font-semibold text-white">Steam Trade:</span> Our bot automatically sends the exact skin to your Steam account within 24 hours.
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-orange-400 font-bold">5.</span>
                                <div>
                                  <span className="font-semibold text-white">Confirmation:</span> Receive the skin in your Steam inventory with all original attributes preserved.
                                </div>
                              </li>
                            </ol>
                          </div>

                          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 mb-4">
                            <h5 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                              <Shield className="w-4 h-4" />
                              Why Burn-to-Redeem Matters
                            </h5>
                            <ul className="space-y-2 text-sm">
                              <li>• <span className="font-semibold">True Ownership:</span> Proves NFTs are backed by real items</li>
                              <li>• <span className="font-semibold">Exit Strategy:</span> Always able to return to Steam ecosystem</li>
                              <li>• <span className="font-semibold">Trust Building:</span> Transparent 1:1 backing system</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Marketplace Deep Dive */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-6 border border-blue-500/20">
                      <div className="flex items-start gap-4">
                        <TrendingUp className="w-10 h-10 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">NFT Marketplace</h3>
                          <p className="text-lg mb-4">
                            A decentralized marketplace designed specifically for tokenized gaming assets with zero sellers fees.
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-black/30 rounded-lg p-4">
                              <h4 className="text-lg font-semibold text-blue-400 mb-3">For Sellers</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <DollarSign className="w-4 h-4 text-green-400 mt-0.5" />
                                  <div>
                                    <span className="font-semibold text-white">List Your NFTs:</span> Set your price in USDC with instant listing
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Zap className="w-4 h-4 text-yellow-400 mt-0.5" />
                                  <div>
                                    <span className="font-semibold text-white">Instant Settlement:</span> Receive payment immediately upon sale
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Shield className="w-4 h-4 text-purple-400 mt-0.5" />
                                  <div>
                                    <span className="font-semibold text-white">No Sellers Fees:</span> Keep 100% of your sale price
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <TrendingUp className="w-4 h-4 text-blue-400 mt-0.5" />
                                  <div>
                                    <span className="font-semibold text-white">Price Discovery:</span> Real-time market data and price history
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-black/30 rounded-lg p-4">
                              <h4 className="text-lg font-semibold text-blue-400 mb-3">For Buyers</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <Search className="w-4 h-4 text-cyan-400 mt-0.5" />
                                  <div>
                                    <span className="font-semibold text-white">Advanced Filters:</span> Find exact skins by wear, float, pattern
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Lock className="w-4 h-4 text-green-400 mt-0.5" />
                                  <div>
                                    <span className="font-semibold text-white">Verified Assets:</span> All NFTs backed by real CS2 skins
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Wallet className="w-4 h-4 text-purple-400 mt-0.5" />
                                  <div>
                                    <span className="font-semibold text-white">USDC Payments:</span> All transactions processed in USDC
                                  </div>
                                </li>
                                <li className="flex items-start gap-2">
                                  <RefreshCw className="w-4 h-4 text-orange-400 mt-0.5" />
                                  <div>
                                    <span className="font-semibold text-white">Instant Transfer:</span> NFT delivered to wallet immediately
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-black/20 rounded-lg p-4">
                            <h5 className="text-sm font-semibold text-blue-400 mb-3">Marketplace Features</h5>
                            <div className="grid md:grid-cols-3 gap-3">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-white">0%</div>
                                <p className="text-xs text-zinc-400">Sellers Fees</p>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-white">&lt;1s</div>
                                <p className="text-xs text-zinc-400">Transaction Time</p>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-white">24/7</div>
                                <p className="text-xs text-zinc-400">Market Access</p>
                              </div>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-zinc-800">
                              <p className="text-xs text-zinc-400 mb-2">Additional Features:</p>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">Collection Offers</span>
                                <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">Bulk Listings</span>
                                <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">Price Alerts</span>
                                <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">Trade History</span>
                                <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">Rarity Rankings</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#0B0C0E] rounded-3xl p-8 border border-zinc-800/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Benefits</h2>
                </div>

                <div className="space-y-6 text-zinc-300">
                  <p className="text-lg leading-relaxed">
                    HUCH offers unprecedented advantages for CS2 players and investors alike.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-xl p-6 border border-green-500/20">
                      <DollarSign className="w-10 h-10 text-green-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Keep Ownership</h3>
                      <p className="text-sm">
                        Never lose your rare skins permanently. Get liquidity while maintaining long-term ownership.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-6 border border-blue-500/20">
                      <Zap className="w-10 h-10 text-blue-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Instant Liquidity</h3>
                      <p className="text-sm">
                        Access up to 65% of your skin's value in minutes, not days. No credit checks required.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl p-6 border border-purple-500/20">
                      <Shield className="w-10 h-10 text-purple-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Secure & Transparent</h3>
                      <p className="text-sm">
                        Built on Solana blockchain with smart contracts ensuring complete transparency and security.
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6 border border-zinc-800/50">
                    <h3 className="text-xl font-semibold text-white mb-4">Comparison with Traditional Methods</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-zinc-700">
                            <th className="text-left py-3 px-4 text-white">Feature</th>
                            <th className="text-center py-3 px-4 text-[#8564FA]">HUCH</th>
                            <th className="text-center py-3 px-4 text-zinc-400">Marketplaces</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-zinc-800">
                            <td className="py-3 px-4">Keep Your Skins</td>
                            <td className="text-center py-3 px-4 text-green-400">✓</td>
                            <td className="text-center py-3 px-4 text-red-400">✗</td>
                          </tr>
                          <tr className="border-b border-zinc-800">
                            <td className="py-3 px-4">Instant Cash</td>
                            <td className="text-center py-3 px-4 text-green-400">✓</td>
                            <td className="text-center py-3 px-4 text-yellow-400">~</td>
                          </tr>
                          <tr className="border-b border-zinc-800">
                              <td className="py-3 px-4">Future Price Gains</td>
                            <td className="text-center py-3 px-4 text-green-400">✓</td>
                            <td className="text-center py-3 px-4 text-red-400">✗</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">Reversible</td>
                            <td className="text-center py-3 px-4 text-green-400">✓</td>
                            <td className="text-center py-3 px-4 text-red-400">✗</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Features Section */}
            <section id="features" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#0B0C0E] rounded-3xl p-8 border border-zinc-800/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Features</h2>
                </div>

                <div className="space-y-8 text-zinc-300">

                  <div className="grid gap-6">
                    <div className="bg-black/30 rounded-xl p-6 border border-zinc-800/50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center flex-shrink-0">
                          <Coins className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">Steam-to-NFT Tokenization</h3>
                          <p className="mb-3">
                            Seamlessly convert your CS2 skins from your Steam inventory into Solana NFTs.
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-[#8564FA]" />
                              <span>Automated Steam API integration</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-[#8564FA]" />
                              <span>Real-time price feeds from multiple sources</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-[#8564FA]" />
                              <span>Metadata preservation (float, patterns, stickers)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6 border border-zinc-800/50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <DollarSign className="w-6 h-6 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">Collateralized Lending</h3>
                          <p className="mb-3">
                            Borrow USDC against your tokenized skins with competitive loan-to-value ratios and flexible repayment terms.
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-green-400" />
                              <span>Up to 65% LTV on premium skins</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-green-400" />
                              <span>No credit checks or KYC required</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-green-400" />
                              <span>Instant approval and disbursement</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6 border border-zinc-800/50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center flex-shrink-0">
                          <RefreshCw className="w-6 h-6 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">Burn-to-Redeem System</h3>
                          <p className="mb-3">
                            Revolutionary feature allowing NFT holders to burn their tokens and receive the actual CS2 skin back in their Steam inventory.
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-orange-400" />
                              <span>Automated Steam trade bot delivery</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-orange-400" />
                              <span>24/7 redemption availability</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-orange-400" />
                              <span>Guaranteed skin authenticity</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6 border border-zinc-800/50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">NFT Marketplace</h3>
                          <p className="mb-3">
                            Trade tokenized CS2 skins on our MagicEden marketplace with zero sellers fees and instant settlement.
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-blue-400" />
                              <span>P2P trading with escrow protection</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-blue-400" />
                              <span>Advanced filtering and search</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-blue-400" />
                              <span>Price history and analytics</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Why Solana Section */}
            <section id="solana" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#0B0C0E] rounded-3xl p-8 border border-zinc-800/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#14F195]/20 to-[#9945FF]/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-[#14F195]" />
                  </div>
                  <h2 className="text-3xl font-bold">Why Solana?</h2>
                </div>

                <div className="space-y-6 text-zinc-300">
                  <p className="text-lg leading-relaxed">
                    We chose Solana as our blockchain infrastructure for its unmatched speed, low costs, and growing gaming ecosystem.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#14F195]/10 to-transparent rounded-xl p-6 border border-[#14F195]/20">
                      <h3 className="text-xl font-semibold text-white mb-4">Technical Advantages</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Zap className="w-5 h-5 text-[#14F195] mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Lightning Fast</p>
                            <p className="text-sm">400ms block times, 65,000 TPS capability</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <DollarSign className="w-5 h-5 text-[#14F195] mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Minimal Fees</p>
                            <p className="text-sm">$0.00025 average transaction cost</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-[#14F195] mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Battle-Tested</p>
                            <p className="text-sm">Proven security with billions in TVL</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-[#9945FF]/10 to-transparent rounded-xl p-6 border border-[#9945FF]/20">
                      <h3 className="text-xl font-semibold text-white mb-4">Ecosystem Benefits</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Users className="w-5 h-5 text-[#9945FF] mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Gaming Focus</p>
                            <p className="text-sm">Leading blockchain for gaming projects</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Globe className="w-5 h-5 text-[#9945FF] mt-0.5" />
                          <div>
                            <p className="font-medium text-white">Global Reach</p>
                            <p className="text-sm">Millions of active wallets worldwide</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 text-[#9945FF] mt-0.5" />
                          <div>
                            <p className="font-medium text-white">DeFi Integration</p>
                            <p className="text-sm">Seamless connection to lending protocols</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6 border border-zinc-800/50">
                    <p className="text-center text-lg">
                      <span className="text-white font-semibold">Solana's infrastructure</span> enables HUCH to offer instant transactions, negligible fees, and seamless user experience - critical for gaming applications.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Future of Gaming Section */}
            <section id="future" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#0B0C0E] rounded-3xl p-8 border border-zinc-800/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Future of Gaming</h2>
                </div>

                <div className="space-y-6 text-zinc-300">
                  <p className="text-lg leading-relaxed">
                    HUCH is pioneering the convergence of gaming and DeFi, creating new possibilities for digital asset ownership.
                  </p>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-lg mb-4">
                      We envision a future where every in-game asset is a financial instrument, where players truly own their digital items, and where gaming economies are as sophisticated as traditional financial markets.
                    </p>
                  </div>


                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Transforming Gaming Economics</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                        <div>
                          <p className="font-medium text-white">True Digital Ownership</p>
                          <p className="text-sm">Players control their assets with cryptographic proof</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                        <div>
                          <p className="font-medium text-white">Liquid Gaming Markets</p>
                          <p className="text-sm">Instant liquidity for any valuable gaming asset</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                        <div>
                          <p className="font-medium text-white">Cross-Game Economies</p>
                          <p className="text-sm">Assets and value flowing between different games</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                        <div>
                          <p className="font-medium text-white">Player Empowerment</p>
                          <p className="text-sm">Gamers as stakeholders in gaming economies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Community Section */}
            <section id="community" className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#0B0C0E] rounded-3xl p-8 border border-zinc-800/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-pink-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Community</h2>
                </div>

                <div className="space-y-6 text-zinc-300">
                  <p className="text-lg leading-relaxed">
                    HUCH is built by gamers, for gamers. Our community is at the heart of everything we do.
                  </p>


                  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-black/30 rounded-xl p-6 border border-zinc-800/50">
                      <Heart className="w-8 h-8 text-red-400 mb-3" />
                      <h3 className="text-xl font-semibold text-white mb-2">Community First</h3>
                      <p className="text-sm">
                        Every feature is designed based on community feedback and needs.
                      </p>
                    </div>


                    <div className="bg-black/30 rounded-xl p-6 border border-zinc-800/50">
                      <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                      <h3 className="text-xl font-semibold text-white mb-2">Revenue Sharing</h3>
                      <p className="text-sm">
                        50% of royalties are used to buy back $HUCH.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#8564FA]/20 to-[#4FD1C5]/20 rounded-xl p-6 border border-[#8564FA]/30 text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Ready to Get Started?</h3>
                    <p className="mb-6">
                      Join thousands of players already using HUCH to unlock the value of their CS2 skins.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-6 py-3 h-auto"
                        onClick={() => window.open("https://app.huch.finance/", "_blank")}
                      >
                        Launch App <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button
                        className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full px-6 py-3 h-auto"
                        onClick={() => window.open("https://discord.gg/xjhCJTfHQ9", "_blank")}
                      >
                        Join Discord <Users className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Mobile Navigation */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0B0C0E]/95 backdrop-blur-md border-t border-zinc-800/50 p-4 z-40">
              <div className="flex gap-2 overflow-x-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-3 py-2 rounded-lg whitespace-nowrap text-sm transition-all ${
                      activeSection === section.id
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <StarsBackground />
        </div>
        <div className="absolute inset-0 opacity-30">
          <DecorativeLines />
        </div>
      </div>
    </div>
  )
}
