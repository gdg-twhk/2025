import clsx from 'clsx'
import { BrandColor } from '@/lib/types'

interface ButtonProps {
  text: string
  shape?: 'rect' | 'pill'
  color?: 'black' | BrandColor
  shineAnimation?: boolean
  className?: string
  onClick?: () => void
}

export function Button({
  text,
  className,
  color = 'black',
  shape = 'rect',
  shineAnimation = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'shadow-core-black border-core-black group relative inline-flex h-10 items-center justify-center overflow-hidden border-[3px] px-6 font-medium whitespace-nowrap shadow-[0px_3px_0px] transition-all duration-200 active:translate-y-[3px] active:shadow-none',
        {
          'rounded-md': shape === 'rect',
          'rounded-full': shape === 'pill',
          'bg-white': color === 'black',
          'bg-pastel-blue hover:bg-halftone-blue': color === 'blue',
          'bg-pastel-green hover:bg-halftone-green': color === 'green',
          'bg-pastel-yellow hover:bg-halftone-yellow': color === 'yellow',
          'bg-pastel-red hover:bg-halftone-red': color === 'red',
        },
        className
      )}
      onClick={onClick}
    >
      {text}

      {shineAnimation && (
        <div className="absolute inset-0 flex h-full w-full animate-[button-shine_5s_infinite] justify-center">
          <div className="bg-core-yellow/20 relative h-full w-8"></div>
        </div>
      )}
    </button>
  )
}
