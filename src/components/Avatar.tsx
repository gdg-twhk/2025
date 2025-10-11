interface AvatarProps {
  src: string
}

export function Avatar({ src }: AvatarProps) {
  // TODO: 點擊後會出現工人或講者 badge
  return (
    <img
      className="size-12 bg-gray-200 cursor-pointer rounded-full object-cover transition-transform duration-300 ease-[cubic-bezier(.35,1.72,.58,.95)] active:scale-110"
      src={src}
      alt=""
      width={32}
      height={32}
    />
  )
}
