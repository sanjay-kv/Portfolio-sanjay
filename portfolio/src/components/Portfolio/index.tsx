import Header from "./header";
import { projects, tabs } from "@/lib/projectsData";
import { Project, Props, TabId } from "./types";
import LatestWorkSection from "./latest-work";

const PortfolioPage: React.FC<Props> = ({ searchParams }) => {
  const activeTab = tabs.some(tab => tab.id === searchParams.tab) ? searchParams.tab as TabId : 'all';

  const filteredProjects: Project[] =
    activeTab === 'all'
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section className="min-h-screen text-foreground py-8 md:py-12">
      <Header />
      <LatestWorkSection
        activeTab={activeTab}
        filteredProjects={filteredProjects}
      />
    </section>
  );
}

export default PortfolioPage
