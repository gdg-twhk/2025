import { SectionTitle } from '@/components/SectionTitle'

export default function HowTo() {
  return (
    <main className="lg:pt-menu-height content-container max-w-5xl space-y-20 pb-20 text-lg">
      <section>
        <SectionTitle className="mt-10 lg:mt-5" color="blue">
          活動公告
        </SectionTitle>

        <ul>
          <li>👉 此活動為實體活動，活動當天不會有線上直播，亦不會有 YouTube 影片存檔。</li>
          <li>👉 現場提供飲水機，需自備容器。</li>
          <li>👉 可自行準備點心至現場餐飲區享用，但需自行帶走垃圾。</li>
          <li>👉 本次活動為免費入場，名額有限，先搶先贏！</li>
          <li>👉 參加工作坊需自備筆電</li>
        </ul>
      </section>

      <section>
        <SectionTitle className="mt-10 lg:mt-5" color="green">
          交通方式
        </SectionTitle>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum officiis asperiores sunt saepe quasi
          dolores corporis, accusamus obcaecati harum facere amet pariatur fuga reprehenderit perspiciatis, quos
          doloribus quod debitis.
        </p>
      </section>

      <section className="">
        <SectionTitle className="mt-10 lg:mt-5" color="red">
          注意事項
        </SectionTitle>

        <p>
          本活動將確保所有人都可以在活動中得到尊重和公平的對待。鼓勵對不同的文化、背景、性別、性向、宗教等多樣性的尊重、包容與接納。因此請帶著尊重彼此、友善與同理心前來參與，並遵守
          <a className="text-sky-600" href="https://gdg.tw/code_of_conduct/" target="_blank">
            Google 社群行為守則。
          </a>
        </p>

        <p className='mt-6'>【GDG 活動報到 黑名單機制公告】</p>
        <p className="mt-2">
          因應近期 GDG 活動數量增加，並確保所有活動報名者皆能順利參與活動，自 2025 年 3
          月起，我們將正式實施出席紀錄機制，以維護其他參與者的權益。
        </p>
        <p className="mt-2">
          自 2024 年 4
          月起，若活動報名者曾報名活動但未到場，將被列入黑名單，並從後續活動的報名名冊中移除。如無法出席，請務必提前取消報名，可至
          GDG 官方網站 的 My Ticket 頁面點擊 Un-RSVP 進行取消，以釋放名額給其他有意願參與的活動報名者。
        </p>

        <p className='mt-6'>
          GDG Taipei & GDG Cloud Taipei
          擁有活動最終解釋權，並保留判斷參加者是否符合參與資格之權利。請於活動全程配合工作人員指示，如有不符合場地或活動規範之行為，主辦單位有權請該參與者離場。
          感謝您的理解與配合，與我們一起維護 GDG 活動的參與品質與秩序！
        </p>
      </section>
    </main>
  )
}
