'use client'

import { type ReactNode, createContext, useRef, useContext, useEffect } from 'react'
import { useStore } from 'zustand'
import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import { type GlobalDataState, createGlobalDataStore } from '@/store/gloabalDataStore'

const SPEAKER_API_URL = 'https://sessionize.com/api/v2/qwnpmdyr/view/Speakers'
const SESSION_API_URL = 'https://sessionize.com/api/v2/qwnpmdyr/view/Sessions'
const SCHEDULE_API_URL = 'https://sessionize.com/api/v2/qwnpmdyr/view/GridSmart'

export type GlobalDataStoreApi = ReturnType<typeof createGlobalDataStore>

export const GlobalDataStoreContext = createContext<GlobalDataStoreApi | undefined>(undefined)

export interface GlobalDataStoreProviderProps {
  children: ReactNode
}

export const GlobalDataStoreProvider = ({ children }: GlobalDataStoreProviderProps) => {
  const storeRef = useRef<GlobalDataStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createGlobalDataStore()
  }

  const { data: speakerData } = useSWR(SPEAKER_API_URL, fetcher)
  const { data: sessionData } = useSWR(SESSION_API_URL, fetcher)
  const { data: scheduleData } = useSWR(SCHEDULE_API_URL, fetcher)

  useEffect(() => {
    if (speakerData) storeRef.current?.setState({ speakers: speakerData })
  }, [speakerData])

  useEffect(() => {
    if (sessionData) storeRef.current?.setState({ sessions: sessionData[0].sessions })
  }, [sessionData])

  useEffect(() => {
    if (scheduleData) storeRef.current?.setState({ schedules: scheduleData[0].rooms })
  }, [scheduleData])

  return <GlobalDataStoreContext.Provider value={storeRef.current}>{children}</GlobalDataStoreContext.Provider>
}

export const useGlobalDataStore = <T,>(selector: (store: GlobalDataState) => T): T => {
  const globalDataStoreContext = useContext(GlobalDataStoreContext)

  if (!globalDataStoreContext) {
    throw new Error(`useGlobalData must be used within GlobalDataStoreProvider`)
  }

  return useStore(globalDataStoreContext, selector)
}
