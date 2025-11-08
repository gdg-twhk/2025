import Image from 'next/image'
import clsx from 'clsx'
import { SectionTitle } from '@/components/SectionTitle'
import membersData from '@/lib/membersData'

export default function Team() {
  return (
    <main className="lg:pt-menu-height min-h-dvh justify-center pb-20">
      <SectionTitle className="mt-10 lg:mt-5" color="yellow">
        籌備團隊
      </SectionTitle>

      <div className="space-y-10">
        {Object.entries(membersData).map(([teamName, members]) => (
          <div key={teamName}>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
              {members.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    className="size-12 cursor-pointer rounded-full border border-gray-200 bg-gray-200 object-cover transition-transform duration-300 ease-[cubic-bezier(.35,1.72,.58,.95)] active:scale-110"
                    src={member.imgSrc}
                    alt={member.name}
                    width={48}
                    height={48}
                  />
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
      </div>
    </main>
  )
}
