'use client'
import useSWR from 'swr'
import { fetcher } from '@/lib/utils'

export default function Speakers() {
  const { data, error, isLoading } = useSWR('https://sessionize.com/api/v2/npbq801n/view/GridSmart', fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>

  // console.log(data)

  return (
    <main>
      <h1 className="text-4xl font-bold">Speakers page</h1>

      {data &&
        data[0].rooms.map((room: any) => (
          <div key={room.id} className="">
            <h2 className="text-xl">{room.name}</h2>
            <div className="pl-4">
              {room.sessions.map((session: any) => (
                <div key={session.id} className="mb-1">
                  <h3 className="text-sm font-semibold">{session.title}</h3>
                  <p>{session.startsAt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </main>
  )
}
