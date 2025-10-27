'use client'

import { type ReactNode, createContext, useRef, useContext, useEffect } from 'react'
import { useStore } from 'zustand'
import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import { type GlobalDataState, createGlobalDataStore } from '@/store/gloabal-data-store'

const SPEAKER_API_URL = 'https://sessionize.com/api/v2/qwnpmdyr/view/Speakers'
const SESSION_API_URL = 'https://sessionize.com/api/v2/qwnpmdyr/view/Sessions'

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

  const { data: speakerData, error: speakerError, isLoading: isSpeakersLoading } = useSWR(SPEAKER_API_URL, fetcher)
  const { data: sessionData, error: sessionError, isLoading: isSessionsLoading } = useSWR(SESSION_API_URL, fetcher)

  // 初始化時自動更新 store
  useEffect(() => {
    if (speakerData) {
      storeRef.current?.setState({ speakers: speakerData })
    }
  }, [speakerData])

  useEffect(() => {
    if (sessionData) {
      storeRef.current?.setState({ sessions: sessionData[0].sessions })
    }
  }, [sessionData])

  return <GlobalDataStoreContext.Provider value={storeRef.current}>{children}</GlobalDataStoreContext.Provider>
}

export const useGlobalDataStore = <T,>(selector: (store: GlobalDataState) => T): T => {
  const globalDataStoreContext = useContext(GlobalDataStoreContext)

  if (!globalDataStoreContext) {
    throw new Error(`useGlobalData must be used within GlobalDataStoreProvider`)
  }

  return useStore(globalDataStoreContext, selector)
}
