import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Sanjay Viswanathan',
    default: 'Sanjay Viswanathan',
  },
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
    title: 'Sanjay Viswanathan',
    description:
      'I am Sanjay K V, Data Driven Problem solver and Head of Content at recodehive.com, currently pushing limits to make Data Science Tutorials accessible to everyone.',
    images: ['https://sanjaykv.com/favicon.png'], // Must be an absolute URL
  },
  openGraph: {
    type: 'website',
    url: 'https://sanjaykv.com',
    title: 'Sanjay Viswanathan',
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
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
