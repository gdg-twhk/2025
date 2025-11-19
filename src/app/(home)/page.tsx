import Link from 'next/link'
import Image from 'next/image'
import { clsx } from 'clsx'
import { Icon } from '@iconify/react'
import { SectionTitle } from '@/components/SectionTitle'
import { Marquee } from '@/components/ui/marquee'
import { Button } from '@/components/Button'
import { MagicCard } from '@/components/ui/magic-card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { basePath } from '@/lib/constants'
import partnersData from '@/lib/partnersData'
import { Hero } from './Hero'
import { TopSpeakerSection } from './TopSpeakerSection'

const marqueePhotosList = [
  `${basePath}/assets/devfest-2024/1.jpg`,
  `${basePath}/assets/devfest-2024/2.jpg`,
  `${basePath}/assets/devfest-2024/3.jpg`,
  `${basePath}/assets/devfest-2024/4.jpg`,
  `${basePath}/assets/devfest-2024/5.jpg`,
  `${basePath}/assets/devfest-2024/6.jpg`,
  `${basePath}/assets/devfest-2024/7.jpg`,
  `${basePath}/assets/devfest-2024/8.jpg`,
  `${basePath}/assets/devfest-2024/9.jpg`,
  `${basePath}/assets/devfest-2024/10.jpg`,
]

const marqueeFirstRow = marqueePhotosList.slice(0, marqueePhotosList.length / 2)
const marqueeSecondRow = marqueePhotosList.slice(marqueePhotosList.length / 2)

const featureList = [
  {
    title: '全球性',
    description: 'DevFest 在全球各地舉辦，為開發者提供了一個與世界各地的開發者交流的機會。',
    icon: 'gridicons:globe',
    colorClass: ' text-halftone-blue',
    gradientFrom: '#4285f4', // --color-core-blue: #4285f4;
    gradientTo: '#c3ecf6', //--color-pastel-blue: #c3ecf6;
  },
  {
    title: '多元化',
    description: 'DevFest 的內容涵蓋了各種技術主題，為開發者提供了一個學習新技能的機會。',
    icon: 'clarity:atom-solid',
    colorClass: ' text-halftone-red',
    gradientFrom: '#ea4335', // --color-core-red: #ea4335;
    gradientTo: '#f8d8d8', // --color-pastel-red: #f8d8d8;
  },
  {
    title: '社群驅動',
    description: 'DevFest 由 GDG 社群主辦，反映了社群的需求和興趣。',
    icon: 'fluent:people-community-20-filled',
    colorClass: ' text-halftone-yellow',
    gradientFrom: '#f9ab00', // --color-core-yellow: #f9ab00;
    gradientTo: '#ffe7a5', // --color-pastel-yellow: #ffe7a5;
  },
]

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="content-container space-y-24 pb-20 md:space-y-40 md:pb-40">
        <section>
          <Marquee className="mb-5 [--duration:60s]">
            {marqueeFirstRow.map((src, index) => (
              <Image
                key={index}
                className="aspect-video h-40 rounded-lg border bg-gray-50 object-cover"
                src={src}
                alt={`DevFest 2024 photo ${index + 1}`}
                width={256}
                height={160}
              />
            ))}
          </Marquee>
          <Marquee className="[--duration:60s]" reverse>
            {marqueeSecondRow.map((src, index) => (
              <Image
                key={index}
                className="aspect-video h-40 rounded-lg border bg-gray-50 object-cover"
                src={src}
                alt={`DevFest 2024 photo ${index + 1}`}
                width={256}
                height={160}
              />
            ))}
          </Marquee>
        </section>
        <section className="mx-auto max-w-4xl text-lg">
          <SectionTitle id="social-partners" color="green">
            活動介紹
          </SectionTitle>
          <p>
            <b>Google 開發者社群 (GDG)</b> 是一個由 Google
            創立的全球性社群網絡，成員包含世界各地的開發人員和技術專家，而 <b> DevFest </b>這個由 GDG
            主辦的年度技術大會，為開發者提供了一個聚集在一起精進技能、職涯和人脈的機會。
          </p>

          <p className="mt-4 mb-3 font-medium">以下是 DevFest 的一些主要特點：</p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {featureList.map((feature, index) => (
              <MagicCard
                key={index}
                className="rounded-lg p-5 text-center"
                gradientColor="#D9D9D955"
                gradientFrom={feature.gradientFrom}
                gradientTo={feature.gradientTo}
              >
                <Icon icon={feature.icon} className={clsx('mx-auto size-12', feature.colorClass)} />
                <p className={clsx('mt-2 text-2xl font-semibold', feature.colorClass)}>{feature.title}</p>
                <p className="mt-1">{feature.description}</p>
              </MagicCard>
            ))}
          </div>

          <div className="mt-5 space-y-3 rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">📣 相關資訊</h3>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-semibold">日期：</span>
                <span>11 月 30 日 (星期日)</span>
              </li>
              <li>
                <span className="font-semibold">時間：</span>
                <span>上午 08:30 至 下午 06:00</span>
              </li>
              <li>
                <span className="font-semibold">開始報到時間：</span>
                <span>上午 08:30 - 09:00</span>
              </li>
              <li>
                <span className="font-semibold">報到地點：</span>
                <span className="underline-offset-4 hover:underline">
                  <a href="https://maps.app.goo.gl/VzzuQTrRkmRoLtgu5" target="_blank">
                    國立臺灣大學 博雅教學館 (南側入口大廳)
                  </a>
                  <Icon icon="tabler:external-link" className="-mt-1 ml-1 inline size-5" />
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle id="speakers" color="yellow">
            議程講者
          </SectionTitle>
          <TopSpeakerSection />

          <div className="mt-8 flex justify-center gap-4 sm:gap-6">
            <Link href="/speakers">
              <Button text="查看所有講者" shape="pill" color="green" />
            </Link>
            <Link href="/sessions">
              <Button text="查看所有議程" shape="pill" color="red" />
            </Link>
          </div>
        </section>

        {partnersData.map((section) => (
          <section key={section.sectionId}>
            <SectionTitle id={section.sectionId} color={section.titleColor}>
              {section.title}
            </SectionTitle>
            <div className="flex w-full flex-col flex-wrap items-center justify-center gap-8 sm:flex-row md:gap-10">
              {section.brands.map((brand) => (
                <Dialog key={brand.name}>
                  <DialogTrigger>
                    <Image
                      className="w-full"
                      style={{ maxWidth: `${brand.maxWidth}px` }}
                      src={brand.imageSrc}
                      alt={brand.name}
                      loading="lazy"
                      width={288}
                      height={60}
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle className="sr-only">
                      {section.title} - {brand.name}
                    </DialogTitle>
                    <Image
                      className="w-full"
                      style={{ maxWidth: `${brand.maxWidth}px` }}
                      src={brand.imageSrc}
                      alt={brand.name}
                      loading="lazy"
                      width={288}
                      height={60}
                    />
                    <p className="mt-2 mb-3 whitespace-pre-wrap">{brand.description}</p>
                    <div className="flex justify-end pr-1 text-lg">
                      <a className="text-slate-700 underline underline-offset-2" href={brand.url} target="_blank">
                        品牌連結
                        <Icon icon="tabler:external-link" className="-mt-0.5 ml-1 inline size-5" />
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
