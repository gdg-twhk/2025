import { SectionTitle } from '@/components/SectionTitle'
import { basePath } from '@/lib/constants'
import Image from 'next/image'

export default function Map() {
  return (
    <main className="lg:pt-menu-height content-container max-w-3xl pb-20">
      <SectionTitle className="mt-10 lg:mt-5" color="green">
        場地平面圖
      </SectionTitle>

      <h2 className="my-5 text-2xl">1F</h2>
      <Image
        className="w-full rounded-lg border bg-gray-50 object-cover"
        src={`${basePath}/map-1f.jpg`}
        alt="Map 1F"
        width={800}
        height={600}
      />
      <h2 className="my-5 text-2xl">2F</h2>
      <Image
        className="w-full rounded-lg border bg-gray-50 object-cover"
        src={`${basePath}/map-2f.jpg`}
        alt="Map 2F"
        width={800}
        height={600}
      />
      <h2 className="my-5 text-2xl">3F</h2>
      <Image
        className="w-full rounded-lg border bg-gray-50 object-cover"
        src={`${basePath}/map-3f.jpg`}
        alt="Map 3F"
        width={800}
        height={600}
      />
    </main>
  )
}
