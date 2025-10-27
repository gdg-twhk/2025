export type BrandColor = 'blue' | 'green' | 'yellow' | 'red'

/** 自訂問題 */
interface QuestionAnswer {
  id: number
  question: string
  questionType: string
  answer: string
  sort: number
  answerExtra: string | null
}

export interface SpeakerResponse {
  id: string
  firstName: string
  lastName: string
  fullName: string
  bio: string
  tagLine: string
  profilePicture: string
  isTopSpeaker: boolean
  links: any[]
  categories: any[]
  sessions: {
    id: number
    name: string
  }[]
  questionAnswers: QuestionAnswer[] // Display Name 在第一個 questionAnswer
}

export interface SimpleSpeaker {
  id: string
  displayName: string
  tagLine: string
  profilePicture: string
}

export interface Session {
  id: string
  title: string
  description: string
  startsAt: string | null // 開始時間，例：2024-11-30T11:20:00
  endsAt: string | null // 結束時間
  room: string | null // 博 101
  speakers: {
    id: number
    name: string
  }[]
  categories: {
    id: number
    name: string // Topic 所在欄位
    categoryItems: {
      id: number
      name: string // Topic 名稱
    }[]
  }[]
}
