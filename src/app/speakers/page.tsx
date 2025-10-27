'use client'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { fetcher } from '@/lib/utils'
import useSWR from 'swr'
import { SpeakerResponse, Session } from '@/lib/types'
import { SpeakerCard } from './SpeakerCard'

const SPEAKER_API_URL = 'https://sessionize.com/api/v2/qwnpmdyr/view/Speakers'
const SESSION_API_URL = 'https://sessionize.com/api/v2/qwnpmdyr/view/Sessions'

export default function Speakers() {
  const { data: speakerData, error: speakerError, isLoading: isSpeakersLoading } = useSWR(SPEAKER_API_URL, fetcher)
  const { data: sessionData, error: sessionError, isLoading: isSessionsLoading } = useSWR(SESSION_API_URL, fetcher)

  return (
    <main className="lg:pt-menu-height flex min-h-dvh flex-col items-center justify-center pt-10 pb-20">
      {/* <p className="text-core-red mt-20 text-center text-5xl font-bold">！敬請期待！</p>
      <p className="my-8 text-center text-xl">詳細講者列表即將公布</p>
      <Link href="/">
        <Button text="回到首頁" color="blue" />
      </Link> */}

      {isSpeakersLoading ? (
        <p className="mt-20 text-center text-xl">講者資料載入中...</p>
      ) : (
        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 px-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {(speakerData || []).map((speaker: SpeakerResponse, index: number) => {
            const sessionsForSpeaker: Session[] = (sessionData?.[0]?.sessions || []).filter((s: any) =>
              (speaker.sessions || []).some((ss) => String(ss.id) === String(s.id))
            )

            return <SpeakerCard speaker={speaker} sessions={sessionsForSpeaker} key={index} index={index} />
          })}
        </ul>
      )}
    </main>
  )
}
