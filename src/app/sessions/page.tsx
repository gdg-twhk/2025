import Link from 'next/link'
import { Button } from '@/components/Button'
import { SectionTitle } from '@/components/SectionTitle'

export default function Sessions() {
  return (
    <main className="lg:pt-menu-height flex min-h-dvh flex-col items-center justify-center pt-10 pb-20">
      {/* <SectionTitle className="mt-10 lg:mt-5" color="red">
        議程表
      </SectionTitle> */}

      <p className="text-core-red mt-20 text-center text-5xl font-bold">！敬請期待！</p>
      <p className="my-8 text-center text-xl">詳細議程表即將公布</p>

      <Link href="/">
        <Button text="回到首頁" color="blue" />
      </Link>
    </main>
  )
}
