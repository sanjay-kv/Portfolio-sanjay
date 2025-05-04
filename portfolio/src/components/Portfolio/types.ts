import { z } from 'zod'

export interface Props {
  searchParams: { tab?: string }
}

export interface LatestWorkSectionProps {
  activeTab: TabId
  filteredProjects: Project[]
}

export type TabId = 'all' | 'websites' | 'data-science' | 'open-source' | 'apps' | 'public-speaking'

export interface Tab {
  id: string
  label: string
}

export interface TabsNavigationProps {
  tabs: Tab[]
  activeTab: string
  handleTabClick: (id: TabId) => void
}

interface Work {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
}

export interface PortfolioWorkProps {
  work: Work
  index: number
}

interface Skill {
  title: string
  skills: string[]
}

export interface SkillCardProps {
  category: Skill
  index: number
}

export type Project = z.infer<typeof ProjectSchema>

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.enum(['all', 'websites', 'data-science', 'open-source', 'apps', 'public-speaking']),
  image: z.string(),
  link: z.string(),
})
