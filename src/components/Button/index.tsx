import clsx from 'clsx'

interface ButtonProps {
  text: string
  shape?: 'rect' | 'pill'
  color?: 'black' | 'blue' | 'green' | 'yellow' | 'red'
  className?: string
  href?: string
  onClick?: () => void
}

export function Button({ text, className, color = 'black', shape = 'rect', href, onClick }: ButtonProps) {
  return (
    <button
      className={clsx(
        'shadow-core-black border-core-black inline-flex h-10 items-center justify-center overflow-hidden border-[3px] px-6 font-medium shadow-[0px_3px_0px] transition-all duration-200 active:translate-y-[3px] active:shadow-none',
        {
          'rounded-md': shape === 'rect',
          'rounded-full': shape === 'pill',
          'bg-white': color === 'black',
          'bg-pastel-blue': color === 'blue',
          'bg-pastel-green': color === 'green',
          'bg-pastel-yellow': color === 'yellow',
          'bg-pastel-red': color === 'red',
        },
        className
      )}
      onClick={onClick}
    >
      {href ? (
        <a href={href} target="_blank">
          {text}
        </a>
      ) : (
        <>{text}</>
      )}
    </button>
  )
}
