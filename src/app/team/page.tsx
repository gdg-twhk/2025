import { Avatar } from '@/components/Avatar'
import { SectionTitle } from '@/components/SectionTitle'
import { clsx } from 'clsx'
import membersData from '@/lib/membersData'
import Link from 'next/link'
import { Button } from '@/components/Button'

export default function Team() {
  return (
    <main className="lg:pt-menu-height flex min-h-dvh flex-col items-center justify-center pt-10 pb-20">
      {/* TODO: 等名冊都準備好再顯示 */}

      {/* <SectionTitle className="mt-10 lg:mt-5" color="yellow">
        籌備團隊
      </SectionTitle>

      <div className="space-y-10">
        {Object.entries(membersData).map(([teamName, members]) => (
          <div key={teamName}>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
              {members.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Avatar src={member.imgSrc} />
                  <p className="mt-1 text-lg font-medium">{member.name}</p>
                  <p
                    className={clsx(
                      'text-sm',
                      member.color === 'red' && 'text-core-red',
                      member.color === 'blue' && 'text-core-blue',
                      member.color === 'green' && 'text-core-green',
                      member.color === 'yellow' && 'text-core-yellow'
                    )}
                  >
                    {teamName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      <p className="text-core-red mt-20 text-center text-5xl font-bold">！敬請期待！</p>
      <p className="my-8 text-center text-xl">詳細籌備團隊即將公布</p>

      <Link href="/">
        <Button text="回到首頁" color="blue" />
      </Link>
    </main>
  )
}
