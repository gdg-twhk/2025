'use client'
import clsx from 'clsx'
import useSWR from 'swr'
import { fetcher } from '@/lib/utils'

// TODO: 等正式議程出來後再補 speaker dialog
// import { Dialog, DialogTrigger } from '@/components/ui/dialog'
// import { SpeakerDialogContent } from '@/components/SpeakerDialogContent'

const topSpeakersId = [
  'b68f5688-528b-457e-bec1-01340ad3b68c',
  '744622fb-9b57-42b0-87ab-7b7254b39ea4',
  'bda34aa7-200e-4f71-9935-b3cf7e0c2ecb',
  'f6fb1aa3-f7f6-4d2e-95f9-abec5d5b8a0d',
  '2ab7a51f-5d46-4e5e-b9f1-53df68697012',
  '490adfc1-9ce5-4468-a023-3cb424b4fa38',
  '29e9ee2f-e316-4829-bdb9-2fafdf7f3e8c',
  '0f41304f-583f-4cda-8e18-cd8048b5421e',
  'a548e82d-2330-41f2-ba0c-c9177c98768c',
  '223a6e79-7441-42ad-9993-c54c559dcdb6',
  '84296b39-df28-462e-a1c1-8f0a2416c555',
  '48ecd2e5-51c3-4aec-99d4-0fa0718f92e8',
  'ededcdda-e0a5-47c9-8adc-34f759ea2271',
  '6746e447-798f-4c2d-8107-1fd5ecb7d4c2',
  'bca18558-b0fc-483e-b261-19eb53ea6e4f',
  'e2c238da-ccae-4220-8ba0-92937ba4256b',
  '55c4d43e-e1dc-4924-b4eb-15c59a5affdc',
  '245ec8d9-dd6e-499b-a9ce-b40755e2ad2b',
  'e964b091-45b0-41e5-92ed-92cef687abb2',
]

interface SimpleSpeaker {
  id: string
  fullName: string
  tagLine: string
  profilePicture: string
}

export function TopSpeakerSection() {
  const { data, error, isLoading } = useSWR('https://sessionize.com/api/v2/qwnpmdyr/view/Speakers', fetcher)

  const topSpeakers: SimpleSpeaker[] = data
    ? data
        .filter((speaker: SimpleSpeaker) => topSpeakersId.includes(speaker.id))
        .map((speaker: SimpleSpeaker) => ({
          id: speaker.id,
          fullName: speaker.fullName,
          tagLine: speaker.tagLine,
          profilePicture: speaker.profilePicture,
        }))
    : []

  return (
    <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {topSpeakers.map((speaker, index) => (
        <div
          key={index}
          className="relative aspect-square w-full overflow-clip rounded-xl border border-gray-300 bg-gray-100 transition-transform duration-300 hover:scale-105"
        >
          <img className="size-full" src={speaker.profilePicture} loading="lazy" />
          <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-gray-700/70 to-transparent" />
          <p className="absolute bottom-7 left-3 text-xl font-semibold text-white lg:bottom-8 lg:text-2xl">
            {speaker.fullName}
          </p>
          <p
            className={clsx('absolute bottom-2 left-3 w-[90%] truncate text-sm lg:text-base', {
              'text-pastel-blue': index % 4 === 0,
              'text-pastel-green': index % 4 === 1,
              'text-pastel-yellow': index % 4 === 2,
              'text-pastel-red': index % 4 === 3,
            })}
          >
            {speaker.tagLine}
          </p>
        </div>
      ))}
      <div className="flex aspect-square w-full items-center justify-center text-3xl font-bold">......還有更多！</div>
    </ul>
  )
}
