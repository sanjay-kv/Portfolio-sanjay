import PortfolioCard from './selected-work-card';
import { workData } from '@/lib/workData';

const SelectedWorkSection = () => {
  return (
    <section className="space-y-8 container mx-auto px-4">
      {/* Portfolio Header */}
      <h2 className="text-primary text-center text-3xl md:text-4xl font-bold">SELECTED WORKS</h2>

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
