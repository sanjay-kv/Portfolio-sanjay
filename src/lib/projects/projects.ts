// Project data
import { Project } from '@/components/Portfolio/types'

export const projects: Project[] = [
  {
    id: 'feed-buffer',
    title: 'Feed buffer Website',
    category: 'websites',
    image: '/assets/projects/feed-buffer/feed-buffer.png',
    link: '/projects/feed-buffer',
  },
  {
    id: 'rightway',
    title: 'Rightway Website',
    category: 'websites',
    image: '/assets/projects/rightway.png',
    link: '/projects/rightway',
  },
  {
    id: 'srm-portal',
    title: 'Applications- SRM Portal',
    category: 'apps',
    image: '/assets/projects/srm-portal/srm-portal.png',
    link: '/projects/srm-portal',
  },
  {
    id: 'recode-hive',
    title: 'Recode Hive',
    category: 'websites',
    image: '/assets/projects/recode-hive.png',
    link: '/projects/recode-hive',
  },
  {
    id: 'stackoverflow',
    title: 'Stackoverflow Analysis',
    category: 'data-science',
    image: '/assets/projects/stackoverflow-analysis.png',
    link: '/projects/stackoverflow-analysis',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'websites',
    image: '/assets/projects/personal-portfolio.png',
    link: '/projects/personal-portfolio',
  },


    {
    id: 'googlegemini',
    title: 'Google Ambassdor Onboarding : Aug 10, 2025',
    category: 'public-speaking',
    image: '/assets/projects/google-std-amd-1/sanjay-talk-google2.jpg',
    link: '/projects/googlegemini',
  },

  {
    id: 'adapta2021',
    title: 'Guest Speaker: Adapt2021',
    category: 'public-speaking',
    image: '/assets/projects/adapt2021-guest-speaker.png',
    link: '/projects/adapta2021',
  },
]

export const tabs = [
  { id: 'all', label: 'All' },
  { id: 'websites', label: 'Websites' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'apps', label: 'Apps' },
  { id: 'public-speaking', label: 'Public Speaking' },
]
