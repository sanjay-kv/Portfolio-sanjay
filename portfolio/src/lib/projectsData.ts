// Project data
import { Project } from '@/components/Portfolio/types'

export const projects: Project[] = [
  {
    id: 'feed-buffer',
    title: 'Feed buffer Website',
    category: 'websites',
    image: '/assets/projects/feed-buffer.png',
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
    image: '/assets/projects/srm-portal.png',
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
    id: 'adapta2021',
    title: 'Guest Speaker: Adapt2021',
    category: 'public-speaking',
    image: '/assets/projects/adapt2021-guest-speaker.png',
    link: '/projects/adapta2021',
  },
  {
    id: 'open-source-project',
    title: 'Open Source Contribution',
    category: 'open-source',
    image: '/assets/projects/open-source.png',
    link: '/projects/open-source-contribution',
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
