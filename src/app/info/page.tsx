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

        {/* TODO: 這邊可以再改進排版 */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-2xl font-semibold">一、大眾運輸</h3>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">1. 捷運：</h4>
              <p className="ml-4">
                搭乘捷運新店線至公館站 → 從 3 號出口出站 → 右轉沿羅斯福路前行至新生南路 → 右側可見臺大校門入口 →
                進入校園後沿椰林大道直行 → 遇左側第二條叉路左轉 → 直走至十字路口 → 右斜前方即為博雅教學館（步行時間約
                10–15 分鐘）
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold">2. 公車：</h4>
              <p className="mb-2 ml-4">
                搭乘 0南、52、109、207、253、280、284、290、311、505、642、643、668、675、676、907、敦化幹線
                1501、1505、1550、1728 公車至臺大站下車 → 由新生南路之側門進入校園 → 直走至十字路口 →
                左斜前方即為博雅教學館（步行時間約 5 分鐘）
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-2xl font-semibold">二、自行開車</h3>

            <div className="mb-4">
              <h4 className="mb-2 font-semibold">1. 校內停車場：</h4>
              <p className="mb-2 ml-4">
                沿新生南路三段（往辛亥路方向）依路標進入臺大新南地下停車場 → 領取計時票卡後停放車輛（汽車費率為 20
                元/半小時、機車費率為 20 元/次，以校方公告為主）→ 再由出口至地面 → 左前方即為博雅教學館
              </p>
              <p className="ml-4 text-gray-600">
                參考資料 -{' '}
                <a
                  className="text-sky-600 hover:underline"
                  href="https://ga.ntu.edu.tw/main_ch/fileRename/fileRename.aspx?uid=1501&fid=477&kid=2&site_id=3"
                  target="_blank"
                >
                  校園車輛計時收費標準
                </a>
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold">2. 校外停車：</h4>
              <p className="mb-3 ml-4">可自行尋覓周邊停車位停放車輛後，依下方地圖指示步行前往博雅教學館</p>
              <p className="ml-4 text-gray-600">
                參考資料 -{' '}
                <a
                  className="text-sky-600 hover:underline"
                  href="https://map.ntu.edu.tw/index.html?layer=build&uid=AT1044&scale=19"
                  target="_blank"
                >
                  臺大校園地圖
                </a>
              </p>
            </div>
          </div>
        </div>
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

        <p className="mt-6">【GDG 活動報到 黑名單機制公告】</p>
        <p className="mt-2">
          因應近期 GDG 活動數量增加，並確保所有活動報名者皆能順利參與活動，自 2025 年 3
          月起，我們將正式實施出席紀錄機制，以維護其他參與者的權益。
        </p>
        <p className="mt-2">
          自 2024 年 4
          月起，若活動報名者曾報名活動但未到場，將被列入黑名單，並從後續活動的報名名冊中移除。如無法出席，請務必提前取消報名，可至
          GDG 官方網站 的 My Ticket 頁面點擊 Un-RSVP 進行取消，以釋放名額給其他有意願參與的活動報名者。
        </p>

        <p className="mt-6">
          GDG Taipei & GDG Cloud Taipei
          擁有活動最終解釋權，並保留判斷參加者是否符合參與資格之權利。請於活動全程配合工作人員指示，如有不符合場地或活動規範之行為，主辦單位有權請該參與者離場。
          感謝您的理解與配合，與我們一起維護 GDG 活動的參與品質與秩序！
        </p>
      </section>
    </main>
  )
}
