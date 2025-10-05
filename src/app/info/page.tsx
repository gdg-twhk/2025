import { SectionTitle } from '@/components/SectionTitle'

export default function HowTo() {
  return (
    <main className="lg:pt-menu-height pb-20">
      <SectionTitle className="mt-10 lg:mt-5" color="blue">
        活動公告
      </SectionTitle>

      <SectionTitle className="mt-10 lg:mt-5" color="green">
        交通方式
      </SectionTitle>

      <SectionTitle className="mt-10 lg:mt-5" color="red">
        注意事項
      </SectionTitle>
    </main>
  )
}
