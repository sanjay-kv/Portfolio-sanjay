import Header from './header'
import { projects, tabs } from '@/lib/projects/projects'
import { Project, Props, TabId } from './types'
import LatestWorkSection from './latest-work'
import SelectedWorkSection from './selected-work'
import ContactSection from './contact'
import Toolbox from './toolbox'

const PortfolioPage: React.FC<Props> = ({ searchParams }) => {
  const activeTab = tabs.some((tab) => tab.id === searchParams.tab)
    ? (searchParams.tab as TabId)
    : 'all'

  const filteredProjects: Project[] =
    activeTab === 'all' ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section className='min-h-screen text-foreground bg-background py-8 md:py-12 space-y-16'>
      <Header />
      <LatestWorkSection activeTab={activeTab} filteredProjects={filteredProjects} />
      <SelectedWorkSection />
      <Toolbox />
      <ContactSection />
    </section>
  )
}

export default PortfolioPage
