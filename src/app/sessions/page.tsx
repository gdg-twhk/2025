'use client'
import { useState } from 'react'
import useSWR from 'swr'
import { SectionTitle } from '@/components/SectionTitle'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { fetcher } from '@/lib/utils'
import type { Session } from '@/lib/types'

export default function Sessions() {
  const { data, error, isLoading } = useSWR('https://sessionize.com/api/v2/npbq801n/view/GridSmart', fetcher)
  const [viewMode, setViewMode] = useState('calendar')

  if (data) console.log('data:', data)

  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>Failed to load</div>

  function formatTime(isoString: string) {
    return new Date(isoString).toLocaleTimeString('zh-TW', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }

  return (
    <main className="lg:pt-menu-height px-5 pb-20">
      <SectionTitle className="mt-10 lg:mt-5" color="red">
        議程表
      </SectionTitle>

      <Select value={viewMode} onValueChange={setViewMode}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="檢視模式" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="calendar">行事曆</SelectItem>
          <SelectItem value="compact-calendar">緊湊行事曆</SelectItem>
          <SelectItem value="list">列表</SelectItem>
        </SelectContent>
      </Select>

      <div className="relative overflow-scroll rounded-lg border border-gray-300">
        {/* 教室軸標題 */}

        <div className='flex'>
          <section className="size-12 min-w-12 border border-gray-400 bg-gray-200"></section>

          {/* <section className="flex">
            {data[0].rooms.map((room: any) => (
              <div key={room.id}>
                <div className="sticky top-0 min-w-[200px] bg-gray-200">
                  <h2 className="text-center text-lg">{room.name}</h2>
                </div>
              </div>
            ))}
          </section> */}
        </div>

        {/* 時間軸標題 */}

        <section>
          {/* <h2 className="text-center text-lg">時間</h2> */}
        </section>

        {/* <section className="flex">
          {data[0].rooms.map((room: any) => (
            <div key={room.id}>
              <div className="sticky top-0 min-w-[200px] bg-gray-200">
              <h2 className="text-center text-lg">{room.name}</h2>
            </div>

              <div className="pl-4">
                {room.sessions.map((session: Session) => (
                  <div key={session.id} className="mb-1">
                    <h3 className="text-sm font-semibold">{session.title}</h3>
                    <time>
                      {formatTime(session.startsAt)} ~ {formatTime(session.endsAt)}
                    </time>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section> */}
      </div>
    </main>
  )
}
