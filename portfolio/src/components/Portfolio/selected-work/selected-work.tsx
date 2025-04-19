import PortfolioCard from './selected-work-card';
import { workData } from '@/lib/workData';

const SelectedWorkSection = () => {
  return (
    <section className="space-y-8 container mx-auto px-4">
      {workData.map((work, index) => (
        <PortfolioCard
          key={work.id}
          work={work}
          index={index}
        />
      ))}
    </section>
  )
}

export default SelectedWorkSection;
