import clsx from 'clsx'
import { BrandColor } from '@/lib/types'

interface SectionTitle {
  children: React.ReactNode
  color: BrandColor
  className?: string
}

export function SectionTitle({ children, color, className }: SectionTitle) {
  return (
    <h2
      className={clsx('mb-6 flex items-center justify-center text-3xl font-extrabold md:mb-8 md:text-4xl', className)}
    >
      <svg
        className={clsx('mt-[3px] mr-1 size-6 md:mr-1.5 md:size-7', {
          'fill-core-blue': color === 'blue',
          'fill-core-green': color === 'green',
          'fill-core-yellow': color === 'yellow',
          'fill-core-red': color === 'red',
        })}
        viewBox="0 0 246 242"
        width={246}
        height={242}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M238.96 103.71h-31.65v33.83h31.65c2.21 0 4 1.79 4 4V201c0 2.21-1.79 4-4 4h-31.65v29.76c0 2.21-1.79 4-4 4h-59.46c-2.21 0-4-1.79-4-4V205h-33.83v29.76c0 2.21-1.79 4-4 4H42.56c-2.21 0-4-1.79-4-4V205H6.91c-2.2 0-4-1.79-4-4v-59.46c0-2.21 1.8-4 4-4h31.65v-33.83H6.91c-2.2 0-4-1.79-4-4V40.25c0-2.21 1.8-4 4-4h31.65V6.49c0-2.21 1.79-4 4-4h59.46c2.21 0 4 1.79 4 4v29.76h33.83V6.49c0-2.21 1.79-4 4-4h59.46c2.21 0 4 1.79 4 4v29.76h31.65c2.21 0 4 1.79 4 4v59.46c0 2.21-1.79 4-4 4zm-99.11 0h-33.83v33.83h33.83z"
          stroke="#1e1e1e"
          strokeLinejoin="round"
          strokeWidth={5}
        />
      </svg>
      <span>{children}</span>
    </h2>
  )
}
