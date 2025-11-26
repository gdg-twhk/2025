import { basePath } from '@/lib/constants'
import { BrandColor } from '@/lib/types'

interface PartnerSection {
  sectionId: string
  title: string
  titleColor: BrandColor
  brands: {
    name: string
    description: string
    imageSrc: string
    url: string
    maxWidth: number
  }[]
}

const data: PartnerSection[] = [
  {
    sectionId: 'sponsors',
    title: '贊助廠商',
    titleColor: 'red',
    brands: [
      {
        name: 'Google For Developers',
        description:
          'Google for Developers 致力於賦能全球開發者社群，提供從 AI、雲端、行動到網頁等領域的最新技術、工具與API。透過各類活動與社群計畫，鼓勵開發者連結、創新並分享知識，將創意轉化為具影響力的實際應用。',
        imageSrc: `${basePath}/assets/brands/google-for-developers.png`,
        url: 'https://developers.google.com/?hl=zh-tw',
        maxWidth: 420,
      },
      {
        name: '國泰金控',
        description:
          '國泰金控以數位、數據與科技三大主軸推動集團轉型，將創新科技應用於各項數位產品與服務中，藉以優化營運流程與消費者體驗；同時積極佈局亞太市場，廣納跨界數位與科技人才，致力成為以金融為核心的科技公司。',
        imageSrc: `${basePath}/assets/brands/國泰金控.png`,
        url: 'https://www.cathayholdings.com/holdings/',
        maxWidth: 400,
      },
      {
        name: 'Cloudinary',
        description:
          'Cloudinary is the image and video technology platform that enables the world’s most engaging brands to deliver transformative visual experiences at global scale. Nearly 10,000 companies rely on Cloudinary’s cloud-based product suite – built for developers, digital product owners, creatives, and marketing leaders – to effortlessly manage the lifecycle of visual assets and bring their imaginations to life. ',
        imageSrc: `${basePath}/assets/brands/cloudinary.png`,
        url: 'https://cloudinary.com',
        maxWidth: 330,
      },
    ],
  },
  {
    sectionId: 'community-partners',
    title: '社群夥伴',
    titleColor: 'blue',
    brands: [
      {
        name: 'Cake',
        description:
          'Cake 從台灣出發，打造一個連結九百萬求職者與雇主的國際化專業人才社群。除了提供各種求職工具，幫助求職者完美呈現專業價值外，也提供多元的國際化人才媒合服務，扮演串連全球人才市場的重要角色。',
        imageSrc: `${basePath}/assets/brands/cake.png`,
        url: 'https://www.cake.me/about',
        maxWidth: 220,
      },
      {
        name: 'KlickKlack',
        description:
          'KlickKlack Communications 可立可股份有限公司自 2017 年成立後，陪伴著數以百計的企業面對規模化以及數位轉型，深知企業在營運與資訊需求的痛點。致力於提供全方位的資訊顧問服務，賦能企業實踐其成長目標。\n服務涵蓋：連結 Connectivity、協作 Collaboration、合規 Compliance 三大面向，以兼具韌性與彈性的服務賦能企業，協助企業隨著規模擴大而成長，並運用新世代的科技工具和管理模式來減輕企業的負擔和煩惱。透過我們的服務，企業不僅可以實現數位轉型，更能達到資安合規的目標，並享受前所未有的服務體驗。',
        imageSrc: `${basePath}/assets/brands/KlickKlack.png`,
        url: 'https://www.kkco.com.tw/',
        maxWidth: 250,
      },
      {
        name: 'JetBrains',
        description:
          'JetBrains 是一間國際化的軟體開發公司，以基於 IntelliJ Platform 打造的多款專業 IDE 聞名，包括 IntelliJ IDEA、PyCharm 與 WebStorm，同時也是創造 Kotlin 程式語言背後的公司。\n在最新推出的 IntelliJ IDEA 2025 系列版本中，AI Assistant 功能全面升級，Junie 效能表現顯著提升，並新增對多項最新技術及工具的支援，包括 Java 25、Maven 4，以及 Spring Debugger。',
        imageSrc: 'https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.png',
        url: 'https://jetbrains.com/',
        maxWidth: 250,
      },
      {
        name: '天瓏書局',
        description:
          '想學程式、想升級電腦技能，就來天瓏書局！天瓏是全台最齊全的電腦書專賣店，提供專業電腦中文書、英文書、簡體書、電子開發板等多元選擇，讓您輕鬆找到所需的書籍。\n天瓏網路專賣店提供24小時不打烊的購書服務，讓您隨時隨地都能輕鬆購書。此外，天瓏還提供滿$350免運費的優惠，讓您購書更划算。',
        imageSrc: `${basePath}/assets/brands/天瓏.jpeg`,
        url: 'https://www.tenlong.com.tw/',
        maxWidth: 80,
      },
      {
        name: 'iPASS一卡通',
        description:
          'iPASS一卡通的支付服務包含一卡通儲值卡及iPASS MONEY電子支付。iPASS MONEY用戶數破710萬，用戶數全台第一，涵蓋全台交通、消費支付、生活繳費及社群轉帳四大場域，是民眾生活中超便利的支付好幫手。',
        imageSrc: `${basePath}/assets/brands/iPASS.png`,
        url: 'https://www.i-pass.com.tw/',
        maxWidth: 250,
      },
      {
        name: '財團法人開放文化基金會',
        description:
          '開放文化基金會（Open Culture Foundation，簡稱 OCF）是一個非營利性的組織。自 2014 年創立以來，我們以法人做為組織形式，支持臺灣 40 多個開放科技社群，透過推廣開放科技和跨界合作，在臺灣持續的銜繫科技社群與其他公／私領域，來促成開放共創、保障數位人權、支持透明涵融的數位公民社會。',
        imageSrc: `${basePath}/assets/brands/ocf.png`,
        url: 'https://ocf.tw/',
        maxWidth: 250,
      },
    ],
  },
  {
    sectionId: 'community-booth',
    title: '技術社群',
    titleColor: 'green',
    brands: [
      {
        name: 'Taiwan Kotlin User Group',
        description:
          '在台灣推廣 Kotlin 程式語言，舉辦相關活動。如果對 Kotlin 有興趣，想要多瞭解一些，歡迎來我們的社群一起聚會！',
        imageSrc: 'https://taiwan-kotlin-user-group.github.io/assets/images/logo-512.webp',
        url: 'https://taiwan-kotlin-user-group.github.io/',
        maxWidth: 100,
      },
      {
        name: 'Taiwanese in Data Science / Women in Data Science',
        description:
          'WiDS Taipei 自2017年起響應史丹佛 WiDS，連結學界與產業，透過年度 Conference、A Day of Data、校園職涯咖啡廳、工作坊與專訪，推動資料科學教育、多元與性別共融。社群 TWiDS 匯聚研究者與從業者，分享最新研究與實務，提升女性能見度並歡迎所有性別參與，為台灣培育新世代資料人才與職涯機會。',
        imageSrc: `${basePath}/assets/brands/WiDS.png`,
        url: 'https://www.widstaipei.org/',
        maxWidth: 200,
      },
      {
        name: 'WordPress 台灣社群',
        description:
          'WordPress Taiwan Community 是台灣的開源社群，聚集使用者、設計師與開發者，推廣 WordPress 的應用與交流。我們舉辦 WordCamp、Meetup 等活動，分享經驗、交流技術，讓更多人善用開源工具打造網站，推動在地網路發展。',
        imageSrc: `${basePath}/assets/brands/WordPress.webp`,
        url: 'https://www.facebook.com/groups/wordpresstw',
        maxWidth: 200,
      },
      {
        name: 'Golang Taiwan',
        description:
          'Golang Taiwan 是台灣最大的 Go 語言開發者社群，致力於推廣 Go 生態圈的學習與交流。我們定期舉辦技術分享與開發者聚會，連結各領域的 Go 愛好者，讓更多人能在 Go 的世界中成長與合作。',
        imageSrc: `${basePath}/assets/brands/go.png`,
        url: 'https://www.facebook.com/GolangTaipeiGathering',
        maxWidth: 200,
      },
      {
        name: 'PyConTW',
        description:
          'PyCon，亦即 Python 年會，是全球 Python 社群年度盛會。\nPyCon 由各地同好自發籌辦，而現在台灣也有自己的 Python 年會了。這個活動旨在聚集台灣各領域應用 Python 的人，交流彼此的經驗心得，分享最新的技術發展，並親身體驗社群獨有的熱情。',
        imageSrc: `${basePath}/assets/brands/PyCon.png`,
        url: 'https://tw.pycon.org/',
        maxWidth: 250,
      },
      {
        name: 'SITCON 學生計算機年會',
        description:
          '自 2012 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。',
        imageSrc: 'https://sitcon.org/branding/assets/logos/withname.png',
        url: 'https://sitcon.org',
        maxWidth: 230,
      },
      {
        name: 'Flutter Taipei',
        description:
          '由一群 Flutter 愛好者經營的社團，分享即時的 Flutter 新聞，以舉辦 Flutter 相關活動為主，希望提供一個場域讓大家可以交流、互相學習。不論你的背景如何，也不論你是否有 Flutter 開發經驗，只要對它有興趣和有在關注 Flutter 的朋友都可以加入社團。',
        imageSrc: `${basePath}/assets/brands/flutter.png`,
        url: 'https://www.facebook.com/groups/flutter.taipei',
        maxWidth: 150,
      },
      {
        name: 'COSCUP',
        description:
          'COSCUP 是一場開放原始碼愛好者的年度大聚會，從 2006 年開始由社群自發舉辦。\n歡迎開發者、使用者和推廣者一起參加，交流技術、分享經驗，推動自由軟體理念！',
        imageSrc: 'https://avatars.githubusercontent.com/u/720461?s=200&v=4',
        url: 'https://coscup.org',
        maxWidth: 160,
      },
      {
        name: 'Women Techmakers Taipei',
        description:
          'Women Techmakers (WTM) 是由 Google 員工於 2012 年發起的全球性計畫，致力於推動科技領域的 DEI (多元、平等、共融)。WTM 透過提供能見度、社群與資源，幫助女性科技人才蓬勃發展並擔任領導者角色。該計畫成功連結了全球數萬名女性。目前 WTM 已與 Technovation.org 合作，繼續為科技界的平等與創新努力。\n\nWomen Techmakers (WTM) is a global program started by Googlers in 2012, dedicated to advancing DEI (Diversity, Equity, and Inclusion) within the technology sector. WTM provides essential visibility, community, and resources to empower women in tech to thrive and assume leadership roles. The initiative has reached over 14,000 women globally. WTM has now strategically partnered with Technovation.org to manage and execute its future initiatives.',
        imageSrc: `${basePath}/assets/brands/WTM_Taipei.png`,
        url: 'https://www.technovation.org/women-techmakers/',
        maxWidth: 300,
      },
      {
        name: 'Cloud Native Taiwan User Group',
        description:
          'Cloud Native Taiwan User Group 希望整合台灣雲端相關社群如 OpenStack, Kubernetes, Ceph, SDN 等，並利用 Meetup 定期在各台灣地區舉辦技術與推廣分享活動。目的是藉此群策群力來使該社團快速成長，以對台灣在雲端開源平台的貢獻，另外我們更希望該社群持有 Cloud Native 概念，並將此推廣至台灣企業、學校、政府單位等。',
        imageSrc: `${basePath}/assets/brands/CNTUG.png`,
        url: 'https://cloudnative.tw',
        maxWidth: 120,
      },
    ],
  },
]

export default data
