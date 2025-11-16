import Image from 'next/image'
import clsx from 'clsx'
import { MapPinIcon, ClockIcon } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { topicClassnames } from '@/lib/constants'
import { formatTime } from '@/lib/utils'
import { ScheduleByRoom, Session, Speaker, Topic } from '@/lib/types'
import { SessionInfoDialog } from './SessionInfoDialog'

interface CalendarViewProps {
  sessions: Session[]
  schedules: ScheduleByRoom[]
  speakers: Speaker[]
  openSessionId: string | null
  handleOpenModal: (sessionId: string) => void
  handleCloseModal: () => void
  show: boolean
}

export function CalendarView({
  sessions,
  schedules,
  speakers,
  openSessionId,
  handleOpenModal,
  handleCloseModal,
  show,
}: CalendarViewProps) {
  return (
    <section className={clsx('relative flex w-full flex-1 overflow-auto bg-gray-50 px-5', !show && 'hidden')}>
      {schedules.map((schedule) => (
        <div key={schedule.id} className="relative w-[300px] min-w-[300px]">
          <div className="sticky top-0 z-20 flex h-12 items-center justify-center border-r border-b border-gray-400 bg-gray-200 text-center">
            <h2>{schedule.name}</h2>
          </div>

          {schedule.sessions.map((session) => {
            const minutesSince830 = session.startsAt
              ? (new Date(session.startsAt).getTime() -
                  new Date(session.startsAt.split('T')[0] + 'T08:30:00').getTime()) /
                60000
              : 0
            const durationInMinutes =
              session.startsAt && session.endsAt
                ? (new Date(session.endsAt).getTime() - new Date(session.startsAt).getTime()) / 60000
                : 0

            const sessionSpeakersId = new Set(session.speakers.map((speaker) => speaker.id))
            const speakersForSession = speakers.filter((speaker) => sessionSpeakersId.has(speaker.id))
            const hasTopicOrTags = session.categories.length > 0
            const sessionTopic =
              hasTopicOrTags && session.categories[1].categoryItems.length > 0
                ? (session.categories[1].categoryItems[0].name as Topic)
                : ''
            const sessionTags = hasTopicOrTags
              ? session.categories[0].categoryItems.filter((tag) => {
                  if (tag.name === sessionTopic) return false
                  if (sessionTopic === 'AI / Machine Learning' && tag.name === 'AI/ML') return false
                  if (sessionTopic === 'Web Technologies' && tag.name === 'Web') return false
                  if (sessionTopic === 'Go' && tag.name === 'Golang') return false
                  return true
                })
              : []

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
                    style={{
                      top: `${minutesSince830 *4 + 48}px`,
                      maxHeight: `${durationInMinutes * 4}px`,
                    }}
                    className={clsx(
                      'absolute top-0 w-full cursor-pointer overflow-hidden rounded-lg border border-slate-500 p-3 transition-transform duration-300',
                      // hover:scale-[1.02]
                      sessionTopic !== '' ? topicClassnames[sessionTopic].card : 'bg-pastel-red'
                    )}
                  >
                    {/* <div className="flex gap-2">
                        {sessionTopic !== '' && (
                          <Badge className={`text-sm ${topicClassnames[sessionTopic].badge}`}>{sessionTopic}</Badge>
                        )}
                        {sessionTags?.map((tag) => (
                          <Badge key={tag.id} className="bg-slate-400 text-sm">
                            {tag.name}
                          </Badge>
                        ))}
                      </div> */}
                    <div className="pl-0.5">
                      <p className="mt-1 flex items-center gap-1 text-sm font-medium text-slate-600">
                        <MapPinIcon className="mt-px size-4" />
                        {session.room || '尚未公布'}
                        <ClockIcon className="mt-px ml-2 size-4" />
                        {session.startsAt && session.endsAt
                          ? `${formatTime(session.startsAt)} ~ ${formatTime(session.endsAt)}`
                          : '尚未公布'}
                      </p>
                      <h3 className="mt-2 text-lg leading-tight font-bold md:text-xl">{session.title}</h3>
                      {/* <p className="mt-1.5 line-clamp-3 text-xs md:text-sm lg:line-clamp-2">{session.description}</p> */}
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

                {hasTopicOrTags && <SessionInfoDialog session={session} speakers={speakersForSession} />}
              </Dialog>
            )
          })}
        </div>
      ))}
    </section>
  )
}
