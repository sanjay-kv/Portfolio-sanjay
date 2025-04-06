import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404',
  creator: 'Sanjay Viswanathan',
  applicationName: 'Sanjay Viswanathan',
  alternates: { canonical: 'https://sanjaykv.com' },
  // metadataBase: new URL('https://sanjaykv.com'), // canonical link
  description:
    'I am Sanjay K V, Data Driven Problem solver and Head of Content at recodehive.com, currently pushing limits to make Data Science Tutorials accessible to everyone.',
  referrer: 'origin-when-cross-origin',
  keywords: ['Sanjay Viswanathan', 'tech', 'influencer', 'portfolio'],
  authors: [{ name: 'Sanjay Viswanathan', url: new URL('https://github.com/sanjay-kv') }],
  icons: {
    icon: [
      { url: '/favicon.png' },
      new URL('/favicon.png', 'https://sanjaykv.com'),
      { url: '/favicon.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [
      { url: '/assets/logo/apple-touch-icon.png' },
      { url: '/assets/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sanjaykv',
    creator: '@sanjaykv',
    title: '404',
    description:
      'I am Sanjay K V, Data Driven Problem solver and Head of Content at recodehive.com, currently pushing limits to make Data Science Tutorials accessible to everyone.',
    images: ['https://sanjaykv.com/favicon.png'], // Must be an absolute URL
  },
  openGraph: {
    type: 'website',
    url: 'https://sanjaykv.com',
    title: '404',
    description:
      'I am Sanjay K V, Data Driven Problem solver and Head of Content at recodehive.com, currently pushing limits to make Data Science Tutorials accessible to everyone.',
    siteName: 'Sanjay Viswanathan',
    images: [
      {
        url: 'https://sanjaykv.com/favicon.png',
        width: 800,
        height: 600,
        alt: 'Sanjay Viswanathan',
      },
    ],
  },
  verification: {
    google: 'google',
  },
  assets: ['https://sanjaykv.com/assets'], // url for all assets
  category: 'technology',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
      <p className='mt-4 text-lg'>Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound
