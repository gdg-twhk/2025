'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BEVY_RSVP_URL, socialLinks } from '@/lib/constants'
import { Button } from '@/components/Button'

const navItems = [
  { name: '首頁', href: '/' },
  { name: '參與資訊', href: '/info' },
  { name: '平面圖', href: '/map' },
  { name: '議程表', href: '/sessions' },
  { name: '講者列表', href: '/speakers' },
  { name: '籌備團隊', href: '/team' },
]

export function Menu() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isPageTop0, setIsPageTop0] = useState(true)
  const [isPageTop300, setIsPageTop300] = useState(true)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const updatePageTop = () => {
      setIsPageTop0(window.scrollY < 5)
      setIsPageTop300(window.scrollY < 300)
    }
    updatePageTop()
    window.addEventListener('scroll', updatePageTop)
    return () => window.removeEventListener('scroll', updatePageTop)
  }, [pathname])

  return (
    <div className="fixed top-0 z-50 flex w-full justify-end lg:justify-between">
      {/* Desktop Menu */}
      <nav
        className={clsx(
          'h-menu-height relative hidden w-full items-center justify-center gap-5 border-b border-gray-200 bg-white pt-2 pb-3 lg:flex',
          pathname === '/' && !isPageTop0 && 'transition-colors duration-300',
          pathname === '/' && isPageTop300 && 'border-none !bg-transparent'
        )}
      >
        {navItems.map((item) => (
          <Link
            className="hover:text-core-blue mt-1 font-medium transition-colors duration-200"
            key={item.name}
            href={item.href}
            onClick={toggleMenu}
          >
            {item.name}
          </Link>
        ))}

        <div
          className={clsx(
            'absolute top-2 right-4',
            pathname === '/' && !isPageTop0 && 'transition-opacity duration-300',
            pathname === '/' && isPageTop300 && 'pointer-events-none opacity-0'
          )}
        >
          <Button text="立刻報名" shape="pill" color="blue" onClick={() => window.open(BEVY_RSVP_URL, '_blank')} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'fixed top-0 left-0 flex h-dvh w-screen flex-col items-center justify-center gap-6 bg-white/90 backdrop-blur-[1px] transition-opacity duration-300 lg:hidden',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <Button
          className="h-11 text-xl"
          text="立刻報名"
          shape="pill"
          color="blue"
          onClick={() => window.open(BEVY_RSVP_URL, '_blank')}
        />

        {navItems.map((item) => (
          <Link className="text-xl" key={item.name} href={item.href} onClick={toggleMenu}>
            {item.name}
          </Link>
        ))}

        <div className="mt-6 flex items-center gap-4">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
              <Icon
                icon={link.icon}
                style={{
                  width: `${link.size}px`,
                  height: `${link.size}px`,
                }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="group mt-1 mr-1 flex size-12 flex-col items-center justify-center gap-1 lg:hidden"
        onClick={toggleMenu}
      >
        <span
          className={clsx(
            'h-1 w-7 bg-black transition-all duration-200 group-hover:w-4',
            isOpen && 'translate-y-2 rotate-45 group-hover:w-7'
          )}
        />
        <span className={clsx('h-1 w-7 bg-black transition-opacity duration-200', isOpen && 'opacity-0')} />
        <span
          className={clsx(
            'h-1 w-7 bg-black transition-all duration-200 group-hover:w-4',
            isOpen && '-translate-y-2 -rotate-45 group-hover:w-7'
          )}
        />
      </button>
    </div>
  )
}
