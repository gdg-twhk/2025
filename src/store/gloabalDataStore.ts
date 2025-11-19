import { createStore } from 'zustand'
import { Speaker, Session, ScheduleByRoom } from '@/lib/types'

export interface GlobalDataState {
  speakers: Speaker[]
  sessions: Session[]
  schedules: ScheduleByRoom[]
  setSpeakers: (speakers: Speaker[]) => void
  setSessions: (sessions: Session[]) => void
  setSchedules: (schedule: ScheduleByRoom[]) => void
}

export const createGlobalDataStore = () => {
  return createStore<GlobalDataState>()((set) => ({
    speakers: [],
    sessions: [],
    schedules: [],
    setSpeakers: (speakers) => set({ speakers }),
    setSessions: (sessions) => set({ sessions }),
    setSchedules: (schedules) => set({ schedules }),
  }))
}
