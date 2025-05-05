import ProjectPage from '@/components/Projects'
import { Metadata } from 'next'
import projectData from '@/lib/projects/projectsData.json'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectData.projects.find((p) => p.slug === params.slug)

  // Default metadata if project is not found
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    }
  }

  // Return project-specific metadata
  return {
    title: `${project.title} | Portfolio`,
    creator: 'Sanjay Viswanathan',
    applicationName: 'Sanjay Viswanathan',
    description: project.brief,
    openGraph: {
      type: 'website',
      url: `https://sanjaykv.com/projects/${project.slug}`,
      title: project.title,
      description: project.brief,
      images: [
        {
          url: project.mainImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.brief,
      images: [project.mainImage],
    },
    verification: {
      google: 'google',
    },
    assets: ['https://sanjaykv.com/assets'], // url for all assets
    category: 'technology',
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

const Projects = ({ params }: { params: { slug: string }; searchParams: { tab?: string } }) => {
  return <ProjectPage slug={params.slug} />
}

export default Projects
