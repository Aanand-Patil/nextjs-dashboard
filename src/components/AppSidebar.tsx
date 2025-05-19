import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'
import React from 'react'

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]

const AppSidebar = () => {
  return <div>AppSidebar</div>
}

export default AppSidebar
