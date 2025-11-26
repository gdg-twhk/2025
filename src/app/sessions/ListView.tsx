import Image from 'next/image'
import clsx from 'clsx'
import { MapPinIcon, ClockIcon } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { topicClassnames } from '@/lib/constants'
import { formatTime } from '@/lib/utils'
import { Session, Speaker, Topic } from '@/lib/types'
import { SessionInfoDialog } from './SessionInfoDialog'

interface ListViewProps {
  sessions: Session[]
  speakers: Speaker[]
  openSessionId: string | null
  handleOpenModal: (sessionId: string) => void
  handleCloseModal: () => void
  show: boolean
}

export function ListView({
  sessions,
  speakers,
  openSessionId,
  handleOpenModal,
  handleCloseModal,
  show,
}: ListViewProps) {
  return (
    <section className={clsx('flex flex-col gap-4 lg:gap-6', !show && 'hidden')}>
      {sessions.map((session) => {
        // EXPLAIN: 一場議程可能有多位講者
        const sessionSpeakersId = new Set(session.speakers.map((speaker) => speaker.id))
        const speakersForSession = speakers.filter((speaker) => sessionSpeakersId.has(speaker.id))
        const sessionTopic =
          session.categories.find((cat) => cat.name === 'Topic')?.categoryItems.length! > 0
            ? (session.categories.find((cat) => cat.name === 'Topic')?.categoryItems[0].name as Topic)
            : ''
        const sessionTags = session.categories.find((cat) => cat.name === 'Tags')!.categoryItems.filter((tag) => {
          if (tag.name === sessionTopic) return false
          if (sessionTopic === 'AI / Machine Learning' && tag.name === 'AI/ML') return false
          if (sessionTopic === 'Web Technologies' && tag.name === 'Web') return false
          if (sessionTopic === 'Go' && tag.name === 'Golang') return false
          return true
        })

        return (
          <Dialog
            key={session.id}
            open={openSessionId === session.id}
            onOpenChange={(open) => {
              if (open) handleOpenModal(session.id)
              else handleCloseModal()
            }}
          >
            <DialogTrigger asChild>
              <div
                className={clsx(
                  'cursor-pointer rounded-lg border border-slate-500 p-3 transition-transform duration-300 hover:scale-[1.02]',
                  sessionTopic !== '' ? topicClassnames[sessionTopic].card : 'bg-pastel-red'
                )}
              >
                <div className="flex gap-2">
                  {sessionTopic !== '' && (
                    <Badge className={`text-sm ${topicClassnames[sessionTopic].badge}`}>{sessionTopic}</Badge>
                  )}
                  {sessionTags.map((tag) => (
                    <Badge key={tag.id} className="bg-slate-400 text-sm">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
                <div className="pl-0.5">
                  <h3 className="mt-2 text-lg leading-tight font-bold md:text-xl">{session.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm font-medium text-slate-600">
                    <MapPinIcon className="mt-px size-4" />
                    {session.room || '尚未公布'}
                    <ClockIcon className="mt-px ml-2 size-4" />
                    {session.startsAt && session.endsAt
                      ? `${formatTime(session.startsAt)} ~ ${formatTime(session.endsAt)}`
                      : '尚未公布'}
                  </p>
                  <p className="mt-1.5 line-clamp-3 text-xs md:text-sm lg:line-clamp-2">{session.description}</p>
                  <div className="mt-2 flex gap-2 pl-0.5">
                    {speakersForSession.map((speaker) => (
                      <div key={speaker.id} className="flex items-center gap-1.5">
                        <Image
                          className="size-6 rounded-full bg-gray-50 md:size-8"
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
    </section>
  )
}
