import HeartIcon from 'public/assets/icons/heart.svg'
import PollIcon from 'public/assets/icons/poll.svg'
import CalendarIcon from 'public/assets/icons/heart.svg'
import { ElementType } from 'react'

export const SidebarContent: {
    discoverCategory: string
    genresCategory: string
    discover: { name: string, Icon: ElementType }[]
} = {
  discoverCategory: 'discover',
  genresCategory: 'genres',
  discover: [
    {
      name: 'popular',
      Icon:  HeartIcon,
    },
    {
      name: 'top rated',
      Icon: PollIcon,
    },
    {
      name: 'upcoming',
      Icon: CalendarIcon,
    }
  ]
}

export const QUERY_PARAMS:{
  CATEGORY: string,
  PAGE: string
} = {
  CATEGORY: 'category',
  PAGE: 'page'
}

export const defaultCategory: string = 'popular'
export const defaultPage: number = 1
