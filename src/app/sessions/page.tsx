'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { MapPinIcon, ClockIcon } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useGlobalDataStore } from '@/store/GlobalDataProvider'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { SectionTitle } from '@/components/SectionTitle'
import { Topic } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { formatTime } from '@/lib/utils'
import { SessionInfoDialog } from './SessionInfoDialog'
import { topicClassnames } from '@/lib/constants'

export default function Sessions() {
  const { speakers, sessions } = useGlobalDataStore((state) => state)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [openSessionId, setOpenSessionId] = useState<string | null>(null)

  // 當搜尋參數 id 變動時，自動打開對應 Dialog
  useEffect(() => {
    const sessionId = searchParams.get('id')
    setOpenSessionId(sessionId)
  }, [searchParams])

  // 關閉 Dialog 時清除搜尋參數 id
  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('id')
    router.replace(`?${params.toString()}`, { scroll: false })
    setOpenSessionId(null)
  }

  return (
    <main className="lg:pt-menu-height min-h-dvh justify-center pb-20">
      <SectionTitle className="mt-10 lg:mt-5" color="yellow">
        議程表
      </SectionTitle>

      {speakers.length === 0 ? (
        <p className="mt-20 text-center text-xl">議程資料載入中......</p>
      ) : (
        <ul className="mx-auto flex max-w-2xl flex-col gap-4 px-5 lg:gap-6">
          {sessions.map((session) => {
            // EXPLAIN: 一場議程可能有多位講者
            const sessionSpeakersId = new Set(session.speakers.map((speaker) => speaker.id))
            const speakersForSession = speakers.filter((speaker) => sessionSpeakersId.has(speaker.id))
            const sessionTopic = session.categories[0].categoryItems[0].name as Topic

            return (
              <Dialog
                key={session.id}
                open={openSessionId === session.id}
                onOpenChange={(open) => {
                  if (open) {
                    router.replace(`?id=${session.id}`, { scroll: false })
                    setOpenSessionId(session.id)
                  } else {
                    handleClose()
                  }
                }}
              >
                <DialogTrigger asChild>
                  <div
                    className={clsx(
                      'cursor-pointer rounded-lg border border-slate-500 p-3 transition-transform duration-300 hover:scale-[1.02]',
                      topicClassnames[sessionTopic].card || 'bg-pastel-red'
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Badge className="bg-slate-500 text-sm">
                        <MapPinIcon /> {session.room || '尚未公布'}
                      </Badge>
                      <Badge className={`text-sm ${topicClassnames[sessionTopic].badge}`}>{sessionTopic}</Badge>
                    </div>
                    <div className="pl-0.5">
                      <h3 className="mt-2 text-lg leading-tight font-bold md:text-xl">{session.title}</h3>
                      <p className="mt-1 flex items-center text-sm text-slate-600">
                        <ClockIcon className="mr-1 inline-block size-4" />
                        {session.startsAt && session.endsAt
                          ? `${formatTime(session.startsAt)} ~ ${formatTime(session.endsAt)}`
                          : '尚未公布'}
                      </p>
                      <p className="mt-1.5 line-clamp-3 text-xs md:text-sm lg:line-clamp-2">{session.description}</p>
                      <div className="mt-2 flex gap-2 pl-0.5">
                        {speakersForSession.map((speaker) => (
                          <div key={speaker.id} className="flex items-center gap-1.5">
                            <Image
                              className="size-6 rounded-full md:size-8"
                              src={speaker.profilePicture}
                              alt={speaker.questionAnswers?.[0]?.answer}
                              width={40}
                              height={40}
                            />
                            <p className="text-base font-medium md:text-lg">{speaker.questionAnswers?.[0]?.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <SessionInfoDialog session={session} speakers={speakersForSession} />
              </Dialog>
            )
          })}
        </ul>
      )}
    </main>
  )
}
