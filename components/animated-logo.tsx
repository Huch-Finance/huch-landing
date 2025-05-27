interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#8564FA] to-[#4FD1C5] rounded-md opacity-20 blur-[2px]" />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L4 6V18L12 22L20 18V6L12 2Z"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 22V16" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16L20 12" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16L4 12" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2V8" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="gradient" x1="4" y1="12" x2="20" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8564FA" />
              <stop offset="1" stopColor="#4FD1C5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
