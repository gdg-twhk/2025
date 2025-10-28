import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { ClockIcon, MapPinIcon, ExternalLinkIcon } from 'lucide-react'
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Speaker, Session } from '@/lib/types'
import { formatTime } from '@/lib/utils'

interface SpeakerInfoDialogProps {
  speaker: Speaker
  sessions: Session[]
}

const colorClasses = ['text-core-blue', 'text-core-green', 'text-core-yellow', 'text-core-red']
const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)]

export function SpeakerInfoDialog({ speaker, sessions }: SpeakerInfoDialogProps) {
  return (
    <DialogContent className="h-3/4 max-h-3/4 overflow-y-auto px-4 md:px-5 lg:h-3/5 lg:max-h-3/5">
      <DialogHeader className="flex h-fit flex-row gap-4 text-left">
        <Image
          className="rounded-md object-cover"
          src={speaker.profilePicture}
          alt={speaker.questionAnswers[0].answer}
          width={80}
          height={80}
        />
        <div>
          <DialogTitle className="text-2xl font-bold md:text-3xl">{speaker.questionAnswers[0].answer}</DialogTitle>
          <p className={clsx('mt-1 text-sm md:text-base', randomColorClass)}>{speaker.tagLine}</p>
        </div>
      </DialogHeader>

      <p className="mt-5 text-sm whitespace-pre-wrap lg:text-lg">{speaker.bio}</p>

      <div className="mt-6 flex items-center gap-2">
        <div className="h-px w-full bg-zinc-300" />
        <h3 className="shrink-0 text-xl font-semibold md:text-2xl">相關議程</h3>
        <div className="h-px w-full bg-zinc-300" />
      </div>

      <div className="mt-3">
        {sessions.map((session, index) => (
          <div key={index}>
            <Link href={`/sessions?id=${session.id}`}>
              <h4 className="text-core-blue text-lg font-semibold underline-offset-4 hover:underline md:text-2xl">
                {session.title}
                <ExternalLinkIcon className="-mt-[3px] ml-1 inline-block size-4 md:size-5" />
              </h4>
            </Link>
            <div className="mt-1 space-y-1 text-sm md:text-base text-zinc-700">
              <p className="flex items-center gap-1">
                <ClockIcon className="size-4 text-slate-500" />
                <span className="mr-1.5 text-slate-500">時間</span>
                {session.startsAt && session.endsAt
                  ? `${formatTime(session.startsAt)} ~ ${formatTime(session.endsAt)}`
                  : '尚未公布'}
              </p>
              <p className="flex items-center gap-1">
                <MapPinIcon className="size-4 text-slate-500" />
                <span className="mr-1.5 text-slate-500">教室</span>
                {session.room ? session.room : '尚未公布'}
              </p>
            </div>
            <p className="mt-2 text-sm md:text-lg">{session.description}</p>
          </div>
        ))}
      </div>
    </DialogContent>
  )
}
