import * as React from "react"
import { cn } from "../../lib/utils"
import { ChevronRight } from "lucide-react"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  onCtaClick?: (e: React.MouseEvent) => void
  bottomImage?: {
    light: string
    dark: string
  }
  backgroundImage?: string
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-transparent to-90% dark:from-black/0" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      onCtaClick,
      bottomImage,
      backgroundImage,
      gridOptions,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative min-h-[90vh] flex items-center", className)} ref={ref} {...props}>
        <div className="absolute top-0 left-0 z-[0] h-full w-full overflow-hidden">
          {backgroundImage ? (
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              />
              {/* Subtle dark overlay (50%) + gradient for text readability */}
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </>
          ) : (
            <div className="absolute inset-0 bg-thyme-green/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(63,94,79,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          )}
        </div>
        
        <section className="relative w-full z-1 pt-20 pb-20">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 gap-12 md:px-8">
            <div className="space-y-6 max-w-4xl leading-0 lg:leading-5 mx-auto text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h1 className={cn(
                  "text-xs md:text-sm group font-sans font-bold uppercase tracking-[0.2em] mx-auto px-6 py-3 border rounded-full w-fit transition-all duration-300 backdrop-blur-sm",
                  backgroundImage 
                    ? "text-white border-white/30 bg-white/10 hover:bg-white/20" 
                    : "text-thyme-green border-thyme-green/10 bg-gradient-to-tr from-thyme-beige via-white to-transparent"
                )}>
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300 opacity-80" />
              </h1>
              <h2 className="text-5xl md:text-7xl tracking-tight font-serif bg-clip-text text-transparent mx-auto font-medium drop-shadow-xl leading-[1.1]">
                <span className={cn(backgroundImage ? "text-white" : "text-thyme-charcoal")}>
                  {subtitle.regular}
                </span>
                <span className="text-thyme-gold italic block mt-2 md:inline md:mt-0">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className={cn(
                  "max-w-2xl mx-auto font-sans text-lg md:text-xl leading-relaxed font-light",
                  backgroundImage ? "text-gray-100" : "text-thyme-charcoal/80"
                )}>
                {description}
              </p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 pt-6">
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f1ece3_0%,#caaa5b_50%,#f1ece3_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      onClick={onCtaClick}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-thyme-beige/90 via-white to-thyme-beige/90 text-thyme-charcoal border-input border-[1px] hover:bg-white hover:text-thyme-green transition-all sm:w-auto py-4 px-12 font-bold uppercase tracking-widest text-sm"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
              </div>
            </div>
            {bottomImage && (
              <div className="mt-32 mx-auto relative z-10 max-w-4xl">
                <img
                  src={bottomImage.light}
                  className="w-full shadow-2xl rounded-lg border border-thyme-beige dark:hidden"
                  alt="Restaurant Ambience"
                />
                <img
                  src={bottomImage.dark}
                  className="hidden w-full shadow-lg rounded-lg border border-gray-800 dark:block"
                  alt="Restaurant Ambience"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }