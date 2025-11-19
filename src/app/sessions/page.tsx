'use client'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useGlobalDataStore } from '@/store/GlobalDataProvider'
import { SectionTitle } from '@/components/SectionTitle'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import { ListView } from './ListView'
import { CalendarView } from './CalendarView'
import { Button } from '@/components/ui/button'
import { clsx } from 'clsx'

export default function SessionsPage() {
  return (
    <Suspense>
      <SessionsContent />
    </Suspense>
  )
}

function SessionsContent() {
  const { speakers, sessions, schedules } = useGlobalDataStore((state) => state)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [openSessionId, setOpenSessionId] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('calendar')

  // 當搜尋參數 id 變動時，自動打開對應 Dialog
  useEffect(() => {
    const sessionId = searchParams.get('id')
    setOpenSessionId(sessionId)
  }, [searchParams])

  function handleOpenModal(sessionId: string) {
    router.replace(`?id=${sessionId}`, { scroll: false })
    setOpenSessionId(sessionId)
  }

  // 關閉 Dialog 時清除搜尋參數 id
  function handleCloseModal() {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('id')
    router.replace(`?${params.toString()}`, { scroll: false })
    setOpenSessionId(null)
  }

  return (
    <main
      className={clsx(
        'lg:pt-menu-height flex flex-col justify-center pb-5',
        viewMode === 'calendar' ? 'h-dvh' : 'min-h-dvh'
      )}
    >
      <SectionTitle className="mt-10 lg:mt-5" color="yellow">
        議程表
      </SectionTitle>

      {speakers.length === 0 ? (
        <p className="mt-20 text-center text-xl">議程資料載入中......</p>
      ) : (
        <>
          <div className="mx-auto w-full max-w-2xl px-5">
            <ButtonGroup className="mx-auto mb-5">
              <Button
                className={viewMode === 'calendar' ? 'text-core-blue hover:text-core-blue' : ''}
                variant="outline"
                onClick={() => setViewMode('calendar')}
              >
                行事曆
              </Button>
              <Button
                className={viewMode === 'list' ? 'text-core-blue hover:text-core-blue' : ''}
                variant="outline"
                onClick={() => setViewMode('list')}
              >
                列表
              </Button>
            </ButtonGroup>
            <ListView
              show={viewMode === 'list'}
              sessions={sessions}
              speakers={speakers}
              openSessionId={openSessionId}
              handleOpenModal={handleOpenModal}
              handleCloseModal={handleCloseModal}
            />
          </div>
          <CalendarView
            show={viewMode === 'calendar'}
            sessions={sessions}
            schedules={schedules}
            speakers={speakers}
            openSessionId={openSessionId}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        </>
      )}
    </main>
  )
}
