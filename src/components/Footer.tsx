import { Icon } from '@iconify/react'
import { socialLinks } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="content-container grid grid-cols-1 gap-10 pt-10 pb-16 md:grid-cols-3">
        <div className="md:pt-2">
          <img src="/assets/main-logo.png" width={340} height={40} alt="DevFest Taipei 2025 - Logo" />
        </div>

        <div>
          <h3 className="mb-4 font-bold">社群連結</h3>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className="mb-3 flex items-center gap-1 text-gray-700"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex size-7 items-center justify-center">
                <Icon
                  icon={link.icon}
                  style={{
                    width: `${link.size}px`,
                    height: `${link.size}px`,
                  }}
                />
              </div>
              <span className="underline-offset-2 hover:underline">{link.name}</span>
              <Icon icon="tabler:external-link" className="size-4" />
            </a>
          ))}
        </div>

        <div>
          <h3 className="mb-4 font-bold">聯絡方式</h3>
          <a
            className="mb-3 flex gap-1 underline-offset-2 hover:underline"
            href="mailto:organizers@gdg-taipei.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:email-outline" className="size-6" />
            organizers@gdg-taipei.org
          </a>
          <a
            className="flex gap-1 underline-offset-2 hover:underline"
            href="https://gdg.tw/taipei"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mynaui:globe" className="size-6" />
            https://gdg.tw/taipei
          </a>
        </div>
      </div>
    </footer>
  )
}
