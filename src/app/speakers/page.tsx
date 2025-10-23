'use client';
import Link from 'next/link'
import { Button } from '@/components/Button'

import { fetcher } from '@/lib/utils'

import useSWR from 'swr'
import { SpeakerResponse } from '@/lib/types'
import SpeakerDialog from '@/components/speaker-dialog'

export default function Speakers() {
  const { data, error, isLoading } = useSWR('https://sessionize.com/api/v2/qwnpmdyr/view/Speakers', fetcher)
  // const speakers = data.map((speaker: SpeakerResponse) => ({

  // }))
  return (
    <main className="lg:pt-menu-height flex min-h-dvh flex-col items-center justify-center pt-10 pb-20">
      <p className="text-core-red mt-20 text-center text-5xl font-bold">！敬請期待！</p>
      <p className="my-8 text-center text-xl">詳細講者列表即將公布</p>
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {(data || []).map((speaker: SpeakerResponse, index: number) => (
          <SpeakerDialog speaker={speaker} key={index} index={index} />
        ))}
      </ul>
      <Link href="/">
        <Button text="回到首頁" color="blue" />
      </Link>
    </main>
  )
}
