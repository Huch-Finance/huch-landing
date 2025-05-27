interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <img src="/logo2.0.png" alt="Logo" width={size} height={size} className="w-full h-full object-contain" />
    </div>
  )
}
