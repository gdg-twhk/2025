'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { useGlobalDataStore } from '@/store/GlobalDataProvider'
import { SectionTitle } from '@/components/SectionTitle'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Speaker, Session } from '@/lib/types'
import { SpeakerInfoDialog } from './SpeakerInfoDialog'

export default function Speakers() {
  const { speakers, sessions } = useGlobalDataStore((state) => state)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [openSpeakerName, setOpenSpeakerName] = useState<string | null>(null)

  // 當搜尋參數 name 變動時，自動打開對應 Dialog
  useEffect(() => {
    const speakerName = searchParams.get('name')
    setOpenSpeakerName(speakerName)
  }, [searchParams])

  // 關閉 Dialog 時清除搜尋參數 name
  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('name')
    router.replace(`?${params.toString()}`, { scroll: false })
    setOpenSpeakerName(null)
  }

  return (
    <main className="lg:pt-menu-height min-h-dvh justify-center pb-20">
      <SectionTitle className="mt-10 lg:mt-5" color="red">
        講者列表
      </SectionTitle>

      {speakers.length === 0 ? (
        <p className="mt-20 text-center text-xl">講者資料載入中......</p>
      ) : (
        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {speakers.map((speaker: Speaker) => {
            const speakerSessionIds = new Set(speaker.sessions.map((session) => session.id.toString()))
            const sessionsForSpeaker: Session[] = sessions.filter((session: Session) =>
              speakerSessionIds.has(session.id)
            )
            const colorClasses = ['text-core-blue', 'text-core-green', 'text-core-yellow', 'text-core-red']
            const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)]
            const speakerName = speaker.questionAnswers?.[0]?.answer

            return (
              <Dialog
                key={speaker.id}
                open={openSpeakerName === speakerName}
                onOpenChange={(open) => {
                  if (open) {
                    router.replace(`?name=${encodeURIComponent(speakerName)}`, { scroll: false })
                    setOpenSpeakerName(speakerName)
                  } else {
                    handleClose()
                  }
                }}
              >
                <DialogTrigger asChild>
                  <div className="multi-border-card cursor-pointer rounded-2xl transition-transform hover:scale-[1.02]">
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        className="size-full rounded-t-2xl border-b border-slate-200 object-cover"
                        src={speaker.profilePicture}
                        alt={speakerName}
                        width={250}
                        height={250}
                      />
                    </div>
                    <div className="p-2.5 md:p-4">
                      <h3 className="text-base font-semibold md:text-lg">{speakerName}</h3>
                      <p className={clsx('line-clamp-3 text-xs md:text-sm', randomColorClass)}>{speaker.tagLine}</p>
                    </div>
                  </div>
                </DialogTrigger>

                <SpeakerInfoDialog speaker={speaker} sessions={sessionsForSpeaker} />
              </Dialog>
            )
          })}
        </ul>
      )}
    </main>
  )
}
