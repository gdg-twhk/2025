import Link from 'next/link'
import { Button } from '@/components/Button'

export default function Speakers() {
  return (
    <main className="lg:pt-menu-height flex min-h-dvh flex-col items-center justify-center pt-10 pb-20">
      <p className="text-core-red mt-20 text-center text-5xl font-bold">！敬請期待！</p>
      <p className="my-8 text-center text-xl">詳細講者列表即將公布</p>

      <Link href="/">
        <Button text="回到首頁" color="blue" />
      </Link>
    </main>
  )
}
