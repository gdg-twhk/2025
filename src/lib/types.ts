export type BrandColor = 'blue' | 'green' | 'yellow' | 'red'

export interface Speaker {
  id: string
  firstName: string
  lastName: string
  fullName: string
  bio: string
  tagLine: string
  profilePicture: string
  sessions: {
    id: number
    name: string
  }[]

  /** 社群連結 */
  links: {
    title: string
    url: string
    linkType: string
  }[]

  /** 自訂問答欄 */
  questionAnswers: {
    question: string
    answer: string
  }[]
  isTopSpeaker: boolean
  // categories: any[]
}

export interface Session {
  id: string
  title: string
  description: string
  startsAt: string // ISO 8601 格式的日期時間字串
  endsAt: string // ISO 8601 格式的日期時間字串
  speakers: {
    id: string
    name: string
  }[]
  roomId: number
  room: string

  // TODO: 待確認
  status: string | null
  isInformed: boolean
  isConfirmed: boolean
  isServiceSession: boolean
  isPlenumSession: boolean
  // categories: any[]
}
