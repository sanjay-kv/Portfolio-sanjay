import { skillsData } from '@/lib/skillsData'
import ToolboxHeader from './header'
import SkillCard from './skill-card'

const Toolbox = () => {
  return (
    <>
      <ToolboxHeader />
      <div className='relative mt-12 mb-16 min-h-[300px] sm:min-h-[400px] flex justify-center'>
        {skillsData.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </>
  )
}

export default Toolbox
