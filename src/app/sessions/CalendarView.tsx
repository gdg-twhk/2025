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
  schedules: ScheduleByRoom[]
  speakers: Speaker[]
  openSessionId: string | null
  handleOpenModal: (sessionId: string) => void
  handleCloseModal: () => void
  show: boolean
}

const MINUTE_HEIGHT_PX = 8
const TOTAL_DAY_MINUTES = (18 - 8.5) * 60 // 8:30 AM to 6:00 PM

export function CalendarView({
  schedules,
  speakers,
  openSessionId,
  handleOpenModal,
  handleCloseModal,
  show,
}: CalendarViewProps) {
  // 生成時間軸標籤（每30分鐘一個）
  const timeLabels = []
  for (let i = 0; i < TOTAL_DAY_MINUTES; i += 30) {
    const totalMinutes = i + 8.5 * 60
    const displayHour = Math.floor(totalMinutes / 60)
    const displayMinute = totalMinutes % 60
    timeLabels.push({
      time: `${displayHour.toString().padStart(2, '0')}:${displayMinute.toString().padStart(2, '0')}`,
      position: i * MINUTE_HEIGHT_PX + 48,
    })
  }

  return (
    <section
      className={clsx(
        'relative mx-auto max-w-[1848px] flex w-[calc(100%-24px)] flex-1 overflow-x-auto overscroll-none rounded-2xl border border-gray-400 bg-gray-50 lg:w-[calc(100%-40px)]',
        !show && 'hidden'
      )}
    >
      {/* 時間軸 */}
      <div
        className="sticky left-0 z-30 min-w-12 border-r border-gray-400 bg-gray-100"
        style={{ height: `${TOTAL_DAY_MINUTES * MINUTE_HEIGHT_PX + 48}px` }}
      >
        <div className="sticky top-0 left-0 size-12 border-r border-b border-gray-400 bg-gray-200"></div>

        {timeLabels.map((label, index) => (
          <div
            key={index}
            className="border-b border-gray-400 pt-1 text-center text-xs text-gray-600"
            style={{
              top: `${label.position}px`,
              height: `${30 * MINUTE_HEIGHT_PX}px`,
            }}
          >
            {label.time}
          </div>
        ))}
      </div>

      <div className="flex">
        {schedules.map((room, index) => (
          <div
            key={room.id}
            className="relative w-[240px] min-w-[240px] sm:w-[300px] sm:min-w-[300px]"
            style={{ height: `${TOTAL_DAY_MINUTES * MINUTE_HEIGHT_PX + 48}px` }}
          >
            <div
              className={clsx(
                'sticky top-0 z-20 flex h-12 items-center justify-center border-r border-b border-gray-400 bg-gray-200 text-center',
                index === schedules.length - 1 && 'border-r-0!'
              )}
            >
              <h2>{room.name}</h2>
            </div>

            {room.sessions.map((session) => {
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
              const topicCategory = session.categories.find((cat) => cat.name === 'Topic')
              const sessionTopic =
                hasTopicOrTags && topicCategory?.categoryItems && topicCategory.categoryItems.length > 0
                  ? (topicCategory.categoryItems[0].name as Topic)
                  : ''

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
                        top: `${minutesSince830 * MINUTE_HEIGHT_PX + 48}px`,
                        height: `${durationInMinutes * MINUTE_HEIGHT_PX}px`,
                      }}
                      className={clsx(
                        'absolute top-0 w-full cursor-pointer overflow-hidden rounded-lg border border-slate-500 px-3 py-2 transition-transform duration-300',
                        sessionTopic !== '' ? topicClassnames[sessionTopic].card : 'bg-pastel-red'
                      )}
                    >
                      <div className="flex w-full flex-col gap-1 text-slate-600 sm:flex-row sm:items-center">
                        {sessionTopic !== '' && (
                          <Badge className={`px-1 py-px text-xs ${topicClassnames[sessionTopic].badge}`}>
                            {sessionTopic}
                          </Badge>
                        )}
                        <p className="flex shrink-0 items-center">
                          <ClockIcon className="mt-px mr-1 size-4" />
                          <span className="text-sm font-medium">
                            {session.startsAt &&
                              session.endsAt &&
                              `${formatTime(session.startsAt)} ~ ${formatTime(session.endsAt)}`}
                          </span>
                        </p>
                      </div>
                      <h3 className="mt-1 line-clamp-3 text-lg leading-tight font-bold sm:line-clamp-none md:text-lg">
                        {session.title}
                      </h3>
                      <div className="mt-2 flex gap-2 pl-0.5">
                        {speakersForSession.map((speaker) => (
                          <div key={speaker.id} className="flex items-center gap-1.5">
                            <Image
                              className="size-5 rounded-full bg-gray-50 md:size-6"
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
                  </DialogTrigger>

                  {hasTopicOrTags && <SessionInfoDialog session={session} speakers={speakersForSession} />}
                </Dialog>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
