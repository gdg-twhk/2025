import Image from 'next/image'
import { SectionTitle } from '@/components/SectionTitle'
import { basePath } from '@/lib/constants'

export const metadata = {
    title: '主視覺介紹 | DevFest Taipei 2025',
}

export default function MainVisualPage() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center pt-24 pb-20 lg:pt-32">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionTitle color="blue">主視覺介紹</SectionTitle>

                <div className="mt-10 flex flex-col gap-12 lg:mt-16 lg:flex-row lg:items-start lg:gap-16">
                    {/* Image Section */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                            <Image
                                src={`${basePath}/main.png`}
                                alt="DevFest Taipei 2025 Main Visual - 鯤島巨鯨"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <p className="mt-4 text-center text-sm text-gray-500 lg:text-left">
                            主視覺設計師：謝郭耀
                        </p>
                    </div>

                    {/* Text Content Section */}
                    <div className="flex flex-col gap-6 lg:w-1/2">
                        <div className="prose prose-lg text-gray-700">
                            <p className="leading-relaxed">
                                這次設計的靈感來自一個特別且美麗的意象。在古地圖上，臺灣的形狀看起來很像一條巨大的鯨魚，所以我們有一個很美的別稱，叫做「鯤島」。
                            </p>

                            <p className="leading-relaxed">
                                從很久以前的「大航海時代」開始，臺灣這塊土地上就不斷誕生出很多很有開創精神的人。因此，主視覺設計師：謝郭耀，這次就是以此為啟發，把這座島嶼化作開創精神的代表圖騰。
                            </p>

                            <p className="leading-relaxed">
                                這隻巨鯨不只是臺灣的象徵，它更像是一個巨大、穩重的身影，在前面引導著所有開創者穩健前行。
                            </p>

                            <p className="leading-relaxed">
                                鯨魚會深潛、會遠航，這正是我們開發者探索未知領域所需要的勇氣；它同時也代表著我們運用 Google 技術去推動創新，並在不斷的探索中實現自我成長的壯闊旅程。
                            </p>

                            <div className="mt-8 rounded-xl bg-blue-50 p-6">
                                <p className="font-medium text-blue-900 leading-relaxed">
                                    簡單來說，這個設計就是在告訴大家：我們就像這隻鯤島巨鯨一樣，擁有探索未知、不斷創新的力量！
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
