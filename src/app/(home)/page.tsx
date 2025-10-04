import { SectionTitle } from '@/components/SectionTitle'
import { Marquee } from '@/components/ui/marquee'
import { Hero } from './Hero'

// TODO: 這邊再挑一些照片
const marqueePhotosSrc = [
  '/assets/devfest-2024/1.JPG',
  '/assets/devfest-2024/2.JPG',
  '/assets/devfest-2024/3.JPG',
  '/assets/devfest-2024/4.JPG',
  '/assets/devfest-2024/5.JPG',
  '/assets/devfest-2024/6.JPG',
  '/assets/devfest-2024/7.JPG',
  '/assets/devfest-2024/8.JPG',
]

const marqueeFirstRow = marqueePhotosSrc.slice(0, marqueePhotosSrc.length / 2)
const marqueeSecondRow = marqueePhotosSrc.slice(marqueePhotosSrc.length / 2)

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee className="mb-5 [--duration:24s]">
        {marqueeFirstRow.map((src, index) => (
          <img
            key={index}
            className="aspect-video h-40 rounded-lg border bg-gray-50"
            src={src}
            alt={`DevFest 2024 photo ${index + 1}`}
            width={256}
            height={160}
          />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:24s]">
        {marqueeSecondRow.map((src, index) => (
          <img
            key={index}
            className="aspect-video h-40 rounded-lg border bg-gray-50"
            src={src}
            alt={`DevFest 2024 photo ${index + 1}`}
            width={256}
            height={160}
          />
        ))}
      </Marquee>

      <div className="content-container">
        <section className="mb-20">
          <SectionTitle color="green">合作夥伴</SectionTitle>

          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-5 sm:flex-row md:gap-8">
            <img
              className="w-full max-w-72"
              src="https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.png"
              alt="JetBrains logo"
            ></img>
          </div>
        </section>

        <section className="mb-20">
          <SectionTitle color="blue">社群夥伴</SectionTitle>
        </section>
      </div>
    </main>
  )
}
