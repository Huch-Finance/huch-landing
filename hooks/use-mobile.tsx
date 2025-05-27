"use client"

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const [forceMobile, setForceMobile] = React.useState<boolean>(false)

  // Vérifier si le mode mobile est forcé via l'URL
  React.useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Vérifier le paramètre d'URL 'mobile=true'
    const urlParams = new URLSearchParams(window.location.search)
    const mobileParam = urlParams.get('mobile')
    setForceMobile(mobileParam === 'true')

    // Écouter les changements d'URL
    const handleUrlChange = () => {
      const newParams = new URLSearchParams(window.location.search)
      setForceMobile(newParams.get('mobile') === 'true')
    }

    window.addEventListener('popstate', handleUrlChange)
    return () => window.removeEventListener('popstate', handleUrlChange)
  }, [])

  // Détecter la taille de l'écran
  React.useEffect(() => {
    if (typeof window === 'undefined') return
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Retourner true si l'appareil est mobile OU si le mode mobile est forcé
  return forceMobile || !!isMobile
}

// Fonction utilitaire pour basculer le mode mobile
export function toggleMobileMode() {
  if (typeof window === 'undefined') return
  
  const url = new URL(window.location.href)
  const isMobileMode = url.searchParams.get('mobile') === 'true'
  
  if (isMobileMode) {
    url.searchParams.delete('mobile')
  } else {
    url.searchParams.set('mobile', 'true')
  }
  
  window.history.pushState({}, '', url.toString())
  window.dispatchEvent(new Event('popstate'))
  
  return !isMobileMode
}
