import { Hero } from './Hero'
import { SectionTitle } from '@/components/SectionTitle'

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="content-container">
        <section className="mb-10 md:mb-20">
          <SectionTitle color="green">合作夥伴</SectionTitle>

          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-5 sm:flex-row md:gap-8">
            <img
              className="w-full max-w-72"
              src="https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.png"
              alt="JetBrains logo"
            ></img>
          </div>
        </section>

        <section className="mb-10 md:mb-20">
          <SectionTitle color="blue">社群夥伴</SectionTitle>
        </section>
      </div>
    </main>
  )
}
