import { createStore } from 'zustand'
import { Speaker, Session } from '@/lib/types'

export interface GlobalDataState {
  speakers: Speaker[]
  sessions: Session[]
  setSpeakers: (speakers: Speaker[]) => void
  setSessions: (sessions: Session[]) => void
}

export const createGlobalDataStore = () => {
  return createStore<GlobalDataState>()((set) => ({
    speakers: [],
    sessions: [],
    setSpeakers: (speakers) => set({ speakers }),
    setSessions: (sessions) => set({ sessions }),
  }))
}
