import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'GDG DevFest Taipei 2025',
    template: '%s | GDG DevFest Taipei 2025',
  },
  description:
    'DevFest Taipei 涵蓋廣泛 Mobile、Web、Cloud 及 AI，內容豐富多元。活動形式包括精彩的演講、實作工作坊、互動體驗等，並提供與 Google 工程師及其他開發者面對面交流的寶貴機會。作為開發者社群的重要活動，DevFest 為開發者提供了一個學習新知、拓展人脈，並共同成長的絕佳盛會。',
  openGraph: {
    title: 'GDG DevFest Taipei 2025',
    siteName: 'GDG DevFest Taipei 2025',
    description:
      'DevFest Taipei 涵蓋廣泛 Mobile、Web、Cloud 及 AI，內容豐富多元。活動形式包括精彩的演講、實作工作坊、互動體驗等，並提供與 Google 工程師及其他開發者面對面交流的寶貴機會。作為開發者社群的重要活動，DevFest 為開發者提供了一個學習新知、拓展人脈，並共同成長的絕佳盛會。',
    url: 'https://2025.devfest-taipei.gdg.tw',
    images: [{ url: 'https://2025.devfest-taipei.gdg.tw/og.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
