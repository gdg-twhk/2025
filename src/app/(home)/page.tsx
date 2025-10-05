import Link from 'next/link'
import { SectionTitle } from '@/components/SectionTitle'
import { Marquee } from '@/components/ui/marquee'
import { Hero } from './Hero'
import { Button } from '@/components/Button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { SpeakerDialogContent } from '@/components/SpeakerDialogContent'

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
      <Marquee className="mb-16 [--duration:24s]" reverse>
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

      <div className="content-container space-y-24 pb-20">
        <section>
          活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹活動介紹 lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </section>

        <section>
          <SectionTitle id="speakers" color="yellow">
            議程講者
          </SectionTitle>
          <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {/* TODO: 加入正式資料 */}
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <Dialog key={index}>
                  <DialogTrigger>
                    <div
                      key={index}
                      className="relative aspect-square w-full cursor-pointer overflow-clip rounded-xl border border-gray-300 bg-gray-50 transition-transform duration-300 hover:scale-105"
                    >
                      <img className="size-full" src="https://i.pravatar.cc/300" loading="lazy" />
                      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/50 to-transparent" />
                      <p className="absolute bottom-7 left-3 text-lg font-medium text-white">{'講者姓名'}</p>
                      <p className="absolute bottom-2 left-3 text-sm text-gray-200">{'職稱/公司'}</p>
                    </div>
                  </DialogTrigger>
                  <SpeakerDialogContent name={index} />
                </Dialog>
              ))}
          </ul>

          <div className="mt-8 flex justify-center gap-4 sm:gap-6">
            <Link href="/speakers">
              <Button text="查看所有講者" shape="pill" color="green" />
            </Link>
            <Link href="/sessions">
              <Button text="查看所有議程" shape="pill" color="red" />
            </Link>
          </div>
        </section>

        <section>
          <SectionTitle id="sponsors" color="green">
            合作夥伴
          </SectionTitle>

          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-5 sm:flex-row md:gap-8">
            <img
              className="w-full max-w-72"
              src="https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.png"
              alt="JetBrains logo"
              loading="lazy"
            ></img>
          </div>
        </section>

        <section>
          <SectionTitle id="social-partners" color="blue">
            社群夥伴
          </SectionTitle>
        </section>
      </div>
    </main>
  )
}
