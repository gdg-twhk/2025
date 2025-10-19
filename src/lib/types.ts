export type BrandColor = 'blue' | 'green' | 'yellow' | 'red'

interface Session {
  id: number
  name: string
}

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
  sessions: Session[]
  isTopSpeaker: boolean
  links: any[]
  categories: any[]
  questionAnswers: QuestionAnswer[] // Display Name 在第一個 questionAnswer
}

export interface SimpleSpeaker {
  id: string
  displayName: string
  tagLine: string
  profilePicture: string
}
