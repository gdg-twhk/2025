'use client'
// import Link from 'next/link'
// import { Button } from '@/components/Button'
import { Speaker, Session } from '@/lib/types'
import { SectionTitle } from '@/components/SectionTitle'
import { useGlobalDataStore } from '@/store/GlobalDataProvider'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import clsx from 'clsx'
import type React from 'react'
import { SessionInfoDialog } from '@/components/SessionInfoDialog'

export default function Speakers() {
  const { speakers, sessions } = useGlobalDataStore((state) => state)

  return (
    <main className="lg:pt-menu-height min-h-dvh justify-center pb-20">
      {/* <p className="text-core-red mt-20 text-center text-5xl font-bold">！敬請期待！</p>
      <p className="my-8 text-center text-xl">詳細講者列表即將公布</p>
      <Link href="/">
        <Button text="回到首頁" color="blue" />
      </Link> */}

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

            return (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="multi-border-card cursor-pointer rounded-2xl transition-transform hover:scale-[1.02]">
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        className="size-full rounded-t-2xl border-b border-slate-200 object-cover"
                        src={speaker.profilePicture}
                        alt={speaker.questionAnswers[0].answer}
                        width={250}
                        height={250}
                      />
                    </div>
                    <div className="p-2.5 md:p-4">
                      <h3 className="text-base font-semibold md:text-lg">{speaker.questionAnswers[0].answer}</h3>
                      <p className={clsx('line-clamp-3 text-xs md:text-sm', randomColorClass)}>{speaker.tagLine}</p>
                    </div>
                  </div>
                </DialogTrigger>

                <SessionInfoDialog speaker={speaker} sessions={sessionsForSpeaker} />
              </Dialog>
            )
          })}
        </ul>
      )}
    </main>
  )
}
