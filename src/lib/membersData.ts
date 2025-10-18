import { BrandColor } from '@/lib/types'
import { basePath } from '@/lib/constants'

type Team = '總籌組' | '議程組' | '公關組' | '文宣組' | '場務組' | '紀錄組' | '開發組'

interface Member {
  name: string
  imgSrc: string
  color: BrandColor
}

// TODO: 換成正式資料
const membersData: Record<Team, Member[]> = {
  總籌組: [
    {
      name: 'Ruby',
      imgSrc: `${basePath}/assets/members/Ruby.jpg`,
      color: 'red',
    },
    {
      name: '某某某',
      imgSrc: 'https://avatar.iran.liara.run/public',
      color: 'red',
    },
    {
      name: '某某某',
      imgSrc: 'https://avatar.iran.liara.run/public',
      color: 'red',
    },
  ],
  議程組: [
    {
      name: '某某某',
      imgSrc: 'https://avatar.iran.liara.run/public',
      color: 'blue',
    },
  ],
  公關組: [
    {
      name: '某某某',
      imgSrc: 'https://avatar.iran.liara.run/public',
      color: 'yellow',
    },
  ],
  文宣組: [
    {
      name: 'Skye',
      imgSrc: `${basePath}/assets/members/Skye.jpg`,
      color: 'green',
    },
    {
      name: 'Claudia',
      imgSrc: `${basePath}/assets/members/Claudia.jpg`,
      color: 'green',
    },
    {
      name: 'YuHan',
      imgSrc: `${basePath}/assets/members/YuHan.jpg`,
      color: 'green',
    },
    {
      name: '至真',
      imgSrc: `${basePath}/assets/members/至真.webp`,
      color: 'green',
    },
    {
      name: 'Peko Lee',
      imgSrc: `${basePath}/assets/members/Peko_Lee.jpg`,
      color: 'green',
    },
  ],

  場務組: [
    {
      name: '某某某',
      imgSrc: 'https://avatar.iran.liara.run/public',
      color: 'blue',
    },
  ],
  紀錄組: [
    {
      name: '某某某',
      imgSrc: 'https://avatar.iran.liara.run/public',
      color: 'red',
    },
  ],
  開發組: [
    {
      name: 'Alex Su',
      imgSrc: 'https://avatars.githubusercontent.com/u/98323303?v=4',
      color: 'yellow',
    },
    {
      name: 'Hank Yu',
      imgSrc: `${basePath}/assets/members/Hank_Yu.jpg`,
      color: 'yellow',
    },
    {
      name: 'Kashiwa',
      imgSrc: 'https://avatars.githubusercontent.com/u/13825170?v=4',
      color: 'yellow',
    },
    {
      name: 'YuYu1015',
      imgSrc: 'https://avatars.githubusercontent.com/u/44525760?v=4',
      color: 'yellow',
    },
    {
      name: 'Eric Hsiao',
      imgSrc: `${basePath}/assets/members/Eric_Hsiao.jpg`,
      color: 'yellow',
    },
    {
      name: '小羊',
      imgSrc: 'https://avatar.iran.liara.run/public',
      color: 'yellow',
    },
  ],
}

export default membersData
