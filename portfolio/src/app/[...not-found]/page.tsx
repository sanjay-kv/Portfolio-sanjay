import { Metadata } from 'next'
import Link from 'next/link';

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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <div className="h-1 w-16 bg-blue-500 mx-auto my-4 rounded"></div>
        <h2 className="text-2xl font-medium text-gray-700 mb-2">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className='mt-8'>
          <Link href={'/'} className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound
