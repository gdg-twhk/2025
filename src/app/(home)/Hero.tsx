'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'
import { Button } from '@/components/Button'
import { GridPattern } from '@/components/ui/grid-pattern'
import { basePath, BEVY_RSVP_URL } from '@/lib/constants'
import { Icon } from '@iconify/react'

interface Symbol {
  src: string
  x: number
  y: number
  width: number
  offsetSpeed: number
  scrollSpeed: number
  className?: string
}

// 符號數據 - 包含不同的符號、位置、大小和速度
const symbols: Symbol[] = [
  {
    src: `${basePath}/assets/kv-symbols/1.svg`,
    x: 90,
    y: 40,
    width: 18,
    scrollSpeed: 0.8,
    offsetSpeed: -0.6,
    className: 'hidden md:block',
  },
  { src: `${basePath}/assets/kv-symbols/2.svg`, x: 10, y: 60, width: 45, scrollSpeed: 0.3, offsetSpeed: -0.8 },
  { src: `${basePath}/assets/kv-symbols/3.svg`, x: 75, y: 75, width: 40, scrollSpeed: 0.6, offsetSpeed: -0.5 },
  { src: `${basePath}/assets/kv-symbols/4.svg`, x: 60, y: 15, width: 40, scrollSpeed: 0.9, offsetSpeed: -0.3 },
  { src: `${basePath}/assets/kv-symbols/5.svg`, x: 30, y: 85, width: 40, scrollSpeed: 0.4, offsetSpeed: -0.5 },
  { src: `${basePath}/assets/kv-symbols/6.svg`, x: 85, y: 15, width: 40, scrollSpeed: 0.7, offsetSpeed: -0.7 },
  { src: `${basePath}/assets/kv-symbols/7.svg`, x: 12, y: 20, width: 40, scrollSpeed: 0.5, offsetSpeed: -0.4 },
  { src: `${basePath}/assets/kv-symbols/8.svg`, x: 70, y: 30, width: 40, scrollSpeed: 1.2, offsetSpeed: -0.5 },
  { src: `${basePath}/assets/kv-symbols/9.svg`, x: 50, y: 80, width: 21, scrollSpeed: 0.8, offsetSpeed: -0.2 },
  { src: `${basePath}/assets/kv-symbols/11.svg`, x: 80, y: 60, width: 23, scrollSpeed: 1.4, offsetSpeed: -0.8 },
  {
    src: `${basePath}/assets/kv-symbols/12.svg`,
    x: 30,
    y: 10,
    width: 30,
    scrollSpeed: 0.3,
    offsetSpeed: -0.55,
    className: 'md:!top-[24%]',
  },
  { src: `${basePath}/assets/kv-symbols/15.svg`, x: 65, y: 80, width: 24, scrollSpeed: 0.6, offsetSpeed: -1.2 },
  { src: `${basePath}/assets/kv-symbols/16.svg`, x: 16, y: 76, width: 24, scrollSpeed: 1.6, offsetSpeed: -0.4 },
  { src: `${basePath}/assets/kv-symbols/18.svg`, x: 90, y: 85, width: 24, scrollSpeed: 0.8, offsetSpeed: -0.6 },
]

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const symbolRefs = useRef<(HTMLImageElement | null)[]>([])
  const scrollY = useRef(0)
  const rafId = useRef<number | undefined>(undefined)

  // 監聽游標移動
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // 使用 RAF 優化滾動效能
  useEffect(() => {
    function updateSymbols() {
      symbolRefs.current.forEach((element, index) => {
        if (element) {
          const symbol = symbols[index]
          const mouseInfluenceX = (mousePosition.x - symbol.x) * symbol.offsetSpeed
          const mouseInfluenceY = (mousePosition.y - symbol.y) * symbol.offsetSpeed
          const scrollOffset = scrollY.current * symbol.scrollSpeed

          element.style.transform = `translate(${mouseInfluenceX}px, ${mouseInfluenceY - scrollOffset}px)`
        }
      })
    }

    function handleScroll() {
      scrollY.current = window.scrollY

      if (rafId.current) cancelAnimationFrame(rafId.current)

      rafId.current = requestAnimationFrame(updateSymbols)
    }

    updateSymbols() // 初始更新
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [mousePosition.x, mousePosition.y])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-x-clip">
      <GridPattern
        width={40}
        height={40}
        className="[mask-image:linear-gradient(to_bottom,white_80%,transparent)] sm:hidden"
      />
      <GridPattern
        width={55}
        height={55}
        className="hidden [mask-image:linear-gradient(to_bottom,white_80%,transparent)] sm:block"
      />

      {symbols.map((symbol, index) => (
        <img
          key={index}
          ref={(el) => {
            symbolRefs.current[index] = el
          }}
          className={clsx('absolute will-change-transform', symbol.className)}
          src={symbol.src}
          style={{
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            width: `${symbol.width}px`,
            transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
      ))}

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-12">
        <Image
          className="mb-10 min-w-1/3"
          src={`${basePath}/assets/key-visual.png`}
          alt="logo"
          width={400}
          height={115}
          fetchPriority="high"
          loading="eager"
        />
        <p className="mb-5 flex flex-col items-center gap-2 lg:flex-row">
          <span className="text-xl font-semibold">
            <Icon className="text-core-blue mb-[3px] inline size-6" icon="mdi:map-marker" />
            <a
              className="underline-offset-4 hover:underline"
              href="https://maps.app.goo.gl/VzzuQTrRkmRoLtgu5"
              target="_blank"
            >
              台灣大學 博雅教學館
            </a>
          </span>
          <span className="text-xl font-semibold">
            <Icon className="text-core-red mr-0.5 mb-0.5 inline size-6" icon="mdi:calendar-check" />
            11月30日 8:30~18:00
          </span>
        </p>
        <Button text="立刻報名" shineAnimation onClick={() => window.open(BEVY_RSVP_URL, '_blank')} />
      </div>
    </section>
  )
}
