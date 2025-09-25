'use client'
import { useState } from 'react'
import clsx from 'clsx'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { socialLinks } from '@/lib/contants'

const navItems = [
  { name: '首頁', href: '/' },
  { name: '參與資訊', href: '/how-to' },
  { name: '議程表', href: '/sessions' },
  { name: '講者列表', href: '/speakers' },
  { name: '籌備團隊', href: '/team' },
]

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed top-0 z-50 flex w-full justify-end px-1.5 pt-3 lg:justify-between">
      <nav className="hidden lg:block">Menu</nav>

      <div
        className={clsx(
          'fixed top-0 left-0 flex h-dvh w-screen flex-col items-center justify-center gap-6 bg-white/80 transition-opacity duration-300 lg:hidden',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <button></button>

        {navItems.map((item) => (
          <Link className="text-xl" key={item.name} href={item.href} onClick={toggleMenu}>
            {item.name}
          </Link>
        ))}

        <div className="mt-8 flex gap-4">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
              <Icon icon={link.icon} className="size-7" />
            </a>
          ))}
        </div>
      </div>

      <button className="group flex size-12 flex-col items-center justify-center gap-1" onClick={toggleMenu}>
        <span
          className={clsx(
            'h-[3px] w-7 bg-black transition-all duration-200 group-hover:w-4',
            isOpen && 'translate-y-[7px] rotate-45 group-hover:w-7'
          )}
        />
        <span className={clsx('h-[3px] w-7 bg-black transition-opacity duration-200', isOpen && 'opacity-0')} />
        <span
          className={clsx(
            'h-[3px] w-7 bg-black transition-all duration-200 group-hover:w-4',
            isOpen && '-translate-y-[7px] -rotate-45 group-hover:w-7'
          )}
        />
      </button>
    </div>
  )
}
