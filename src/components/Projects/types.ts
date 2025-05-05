interface ProjectPhoto {
  src: string
  alt: string
  width: number
  height: number
}

interface ProjectInfo {
  date: string
  tools: string[]
  link: string
}

export interface Project {
  id: string
  title: string
  slug: string
  category: string
  brief: string
  description: string
  info: ProjectInfo
  mainImage: string
  photos: ProjectPhoto[]
}

export interface RelatedProjectsProps {
  currentProjectId: string
  currentCategory: string
  allProjects: Project[]
}
