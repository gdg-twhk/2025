import { BrandColor } from '@/lib/types'

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
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'red',
    },
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'red',
    },
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'red',
    },
  ],
  議程組: [
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'blue',
    },
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'blue',
    },
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'blue',
    },
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'blue',
    },
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'blue',
    },
  ],
  公關組: [
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'yellow',
    },
  ],
  文宣組: [
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'green',
    },
  ],
  場務組: [
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'blue',
    },
  ],
  紀錄組: [
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'red',
    },
  ],
  開發組: [
    {
      name: '某某某',
      imgSrc: 'https://i.pravatar.cc/300',
      color: 'yellow',
    },
  ],
}

export default membersData
