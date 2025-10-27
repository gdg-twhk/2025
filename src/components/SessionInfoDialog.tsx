import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import { Speaker, Session } from '@/lib/types'
import { ClockIcon, MapPinIcon } from 'lucide-react'
import clsx from 'clsx'
import type React from 'react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

interface SessionInfoDialogProps {
  speaker: Speaker
  sessions: Session[]
}

const colorClasses = ['text-core-blue', 'text-core-green', 'text-core-yellow', 'text-core-red']
const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)]

export function SessionInfoDialog({ speaker, sessions }: SessionInfoDialogProps) {
  const isBioTooLong = speaker.bio.length > 200
  const [showMoreBio, setShowMoreBio] = useState(isBioTooLong)

  function formatTime(iso?: string) {
    if (!iso) return ''
    try {
      const d = new Date(iso)
      return d.toLocaleTimeString('zh-TW', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Taipei',
      })
    } catch {
      return ''
    }
  }

  function formatDate(iso?: string) {
    if (!iso) return ''
    try {
      const d = new Date(iso)
      const year = d.toLocaleString('zh-TW', { year: 'numeric', timeZone: 'Asia/Taipei' })
      const month = d.toLocaleString('zh-TW', { month: 'numeric', timeZone: 'Asia/Taipei' })
      const day = d.toLocaleString('zh-TW', { day: '2-digit', timeZone: 'Asia/Taipei' })
      return `${year}${month}${day}`
    } catch {
      return ''
    }
  }

  function formatDateRange(start?: string, end?: string) {
    if (!start && !end) return ''
    const dateBase = formatDate(start || end)
    const s = formatTime(start)
    const e = formatTime(end)
    if (s && e) return `${dateBase} ${s} - ${e}`
    return `${dateBase} ${s || e}`.trim()
  }

  return (
    <DialogContent className="h-3/4 max-h-3/4 overflow-y-auto px-4 md:px-5 lg:h-3/5 lg:max-h-3/5">
      <DialogHeader className="flex h-fit flex-row gap-4 text-left">
        <Image
          src={speaker.profilePicture}
          alt={speaker.questionAnswers[0].answer}
          width={80}
          height={80}
          className="rounded-md object-cover"
        />
        <div>
          <DialogTitle className="text-2xl font-bold md:text-3xl">{speaker.questionAnswers[0].answer}</DialogTitle>
          <p className={clsx('mt-1 text-sm md:text-base', randomColorClass)}>{speaker.tagLine}</p>
        </div>
      </DialogHeader>

      <p className={clsx('mt-5 text-sm whitespace-pre-wrap lg:text-base', showMoreBio && 'line-clamp-[5]')}>
        {speaker.bio}
      </p>
      <div className="flex justify-end">
        {isBioTooLong && (
          <span
            className="mr-1 text-sm text-blue-400 underline underline-offset-4"
            onClick={() => setShowMoreBio(!showMoreBio)}
          >
            {showMoreBio ? '顯示更多' : '顯示較少'}
          </span>
        )}
      </div>

      <div className="mt-3 border-t border-zinc-200 pt-4">
        {sessions.map((session, index) => (
          <div key={index}>
            <h4 className="text-core-blue text-xl font-semibold md:text-2xl">{session.title}</h4>
            <div className="mt-1 space-y-1 text-sm text-zinc-700">
              <p className="flex items-center gap-1">
                <ClockIcon className="size-4 text-slate-500" />
                <span className="mr-1.5 text-slate-500">時間</span>
                {session.startsAt && session.endsAt ? formatDateRange(session.startsAt, session.endsAt) : '尚未公布'}
              </p>
              <p className="flex items-center gap-1">
                <MapPinIcon className="size-4 text-slate-500" />
                <span className="mr-1.5 text-slate-500">教室</span>
                {session.room ? session.room : '尚未公布'}
              </p>
            </div>
            <div className="mt-2 flex gap-2">
              {session.categories.map((category) => (
                <Badge key={category.id} className="bg-pastel-red text-zinc-800">
                  {category.categoryItems[0].name}
                </Badge>
              ))}
            </div>
            <p className="mt-2">{session.description}</p>
          </div>
        ))}
      </div>
    </DialogContent>
  )
}
