import { BrandColor } from '@/lib/types'
import { basePath } from '@/lib/constants'

type Team = '總召組' | '議程組' | '公關組' | '文宣組' | '場務組' | '紀錄組' | '開發組'

interface Member {
  name: string
  imgSrc: string
  color: BrandColor
}

const membersData: Record<Team, Member[]> = {
  總召組: [
    {
      name: 'Rainer',
      imgSrc: 'https://avatars.githubusercontent.com/u/15196250?v=4',
      color: 'red',
    },
    {
      name: 'Ruby',
      imgSrc: `${basePath}/assets/members/Ruby.jpg`,
      color: 'red',
    },
    {
      name: 'Isaac',
      imgSrc: `${basePath}/assets/members/Isaac.jpg`,
      color: 'red',
    },
  ],
  議程組: [
    {
      name: 'Dion',
      imgSrc: 'https://avatar.iran.liara.run/public',
      color: 'blue',
    },
    {
      name: 'Denny Huang',
      imgSrc: 'https://avatars.githubusercontent.com/u/963044?v=4',
      color: 'blue',
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
      name: 'Isaac',
      imgSrc: `${basePath}/assets/members/Isaac.jpg`,
      color: 'red',
    },
    {
      name: 'Joe Hung',
      imgSrc: `${basePath}/assets/members/Joe_Hung.jpg`,
      color: 'red',
    },
  ],
  紀錄組: [
    {
      name: '小群',
      imgSrc: 'https://avatars.githubusercontent.com/u/19748848',
      color: 'blue',
    },
    {
      name: '攝影海豹',
      imgSrc: `${basePath}/assets/members/攝影海豹.jpg`,
      color: 'blue',
    },

    {
      name: '月太',
      imgSrc: 'https://avatar.iran.liara.run/public',
      color: 'blue',
    },
    {
      name: 'Bun_.',
      imgSrc: 'https://avatar.iran.liara.run/public',
      color: 'blue',
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
      imgSrc: 'https://avatars.githubusercontent.com/u/33981880?v=4',
      color: 'yellow',
    },
  ],
  公關組: [
    {
      name: 'Ruby',
      imgSrc: `${basePath}/assets/members/Ruby.jpg`,
      color: 'green',
    },
  ],
}

export default membersData
