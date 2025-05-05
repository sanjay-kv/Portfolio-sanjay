import { z } from 'zod'

// Zod Schema
export const SkillCategorySchema = z.object({
  title: z.string(),
  skills: z.array(z.string()),
})

export const SkillsDataSchema = z.array(SkillCategorySchema)

// TypeScript Interface
export interface ISkillCategory {
  title: string
  skills: string[]
}

export type SkillsData = ISkillCategory[]

export const skillsData: SkillsData = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    title: 'Front End',
    skills: ['React', 'Next.js', 'Bootstrap', 'Tailwind'],
  },
  {
    title: 'Back End',
    skills: ['Express.js', 'Node.js', 'Flask', 'REST APIs'],
  },
]
