'use client';
import Link from 'next/link'
import { Button } from '@/components/Button'

import { fetcher } from '@/lib/utils'

import useSWR from 'swr'
import { SpeakerResponse, DetailedSession } from '@/lib/types'
import SpeakerDialog from '@/components/speaker-dialog'

export default function Speakers() {
  const {
    data: speakerData,
    error: speakerError,
    isLoading: isSpeakersLoading,
  } = useSWR('https://sessionize.com/api/v2/npbq801n/view/Speakers', fetcher)
  // 議程確認後api endpoint要改
  // } = useSWR('https://sessionize.com/api/v2/qwnpmdyr/view/Speakers', fetcher)
  // const speakers = speakerData.map((speaker: SpeakerResponse) => ({
  const {
    data: sessionData,
    error: sessionError,
    isLoading: isSessionsLoading,
  } = useSWR('https://sessionize.com/api/v2/npbq801n/view/Sessions', fetcher)
  // } = useSWR('https://sessionize.com/api/v2/qwnpmdyr/view/Sessions', fetcher)
  // }))

  return (
    <main className="lg:pt-menu-height flex min-h-dvh flex-col items-center justify-center pt-10 pb-20">
      <p className="text-core-red mt-20 text-center text-5xl font-bold">！敬請期待！</p>
      <p className="my-8 text-center text-xl">詳細講者列表即將公布</p>
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {(speakerData || []).map((speaker: SpeakerResponse, index: number) => {
          // console.log(sessionData[0])
          const sessionsForSpeaker: DetailedSession[] = ((sessionData?.[0]?.sessions) || []).filter((s: any) =>
            (speaker.sessions || []).some((ss) => String(ss.id) === String(s.id))
          )
          // console.log(sessionsForSpeaker)
          return (
            <SpeakerDialog
              speaker={speaker}
              sessions={sessionsForSpeaker}
              key={index}
              index={index}
            />
          )
        })}
      </ul>
      <Link href="/">
        <Button text="回到首頁" color="blue" />
      </Link>
    </main>
  )
}
