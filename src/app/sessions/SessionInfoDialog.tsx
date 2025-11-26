import Image from 'next/image'
import Link from 'next/link'
import { ClockIcon, MapPinIcon, LanguagesIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Speaker, Session, Topic } from '@/lib/types'
import { formatTime } from '@/lib/utils'
import { topicClassnames } from '@/lib/constants'

interface SessionInfoDialogProps {
  session: Session
  speakers: Speaker[]
}

export function SessionInfoDialog({ session, speakers }: SessionInfoDialogProps) {
  const topicCategory = session.categories.find((cat) => cat.name === 'Topic')
  const sessionTopic =
    topicCategory?.categoryItems && topicCategory.categoryItems.length > 0
      ? (topicCategory.categoryItems[0].name as Topic)
      : ''
  const sessionTags = session.categories
    .find((cat) => cat.name === 'Tags')
    ?.categoryItems?.filter((tag) => {
      if (tag.name === sessionTopic) return false
      if (sessionTopic === 'AI / Machine Learning' && tag.name === 'AI/ML') return false
      if (sessionTopic === 'Web Technologies' && tag.name === 'Web') return false
      if (sessionTopic === 'Go' && tag.name === 'Golang') return false
      return true
    }) || []
  const language = session.categories.find((cat) => cat.name === 'Language')?.categoryItems[0].name

  return (
    <DialogContent className="h-3/4 max-h-3/4 overflow-y-auto px-4 md:px-5 lg:h-3/5 lg:max-h-3/5">
      <DialogHeader className="flex flex-col gap-2 p-0 text-left">
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
        <DialogTitle className="text-2xl leading-tight font-bold lg:text-3xl">{session.title}</DialogTitle>
        <p className="flex items-center text-sm font-medium text-slate-500 md:text-base">
          <MapPinIcon className="mt-px mr-2 size-4" />
          {session.room || '尚未公布'}
        </p>
        <p className="flex items-center text-sm font-medium text-slate-500 md:text-base">
          <ClockIcon className="mt-px mr-2 size-4" />
          {session.startsAt && session.endsAt
            ? `${formatTime(session.startsAt)} ~ ${formatTime(session.endsAt)}`
            : '尚未公布'}
        </p>
        {language && (
          <p className="flex items-center text-sm font-medium text-slate-500 md:text-base">
            <LanguagesIcon className="mt-px mr-2 size-4" />
            {language}
          </p>
        )}
        <div className="mt-2 flex gap-3 pl-0.5">
          {speakers.map((speaker) => (
            <Link
              key={speaker.id}
              className="flex items-center gap-1.5 underline-offset-4 hover:underline md:gap-2"
              href={`/speakers?name=${speaker.questionAnswers?.[0]?.answer}`}
            >
              <Image
                className="size-8 rounded-full bg-gray-50 md:size-8"
                src={speaker.profilePicture}
                alt={speaker.questionAnswers?.[0]?.answer}
                width={40}
                height={40}
              />
              <p className="text-base font-medium md:text-lg">{speaker.questionAnswers?.[0]?.answer}</p>
            </Link>
          ))}
        </div>
      </DialogHeader>

      <hr className="my-3 md:my-5" />

      <p className="px-1 text-base text-zinc-800 md:text-lg">{session.description}</p>
    </DialogContent>
  )
}
