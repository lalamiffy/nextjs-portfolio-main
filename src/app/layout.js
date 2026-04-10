import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Jianna's Portfolio Website",
  description: 'AWS Certified Developer & IT Professional - Showcasing projects in web development, cloud architecture, and programming',
  keywords: 'AWS, Developer, Portfolio, Cloud Architecture, Web Development, JavaScript, React, C#, .NET, Linux',
  authors: [{ name: 'Jianna Huang' }],
  creator: 'Jianna Huang',
  
  // Open Graph tags for social media sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com', // Update with your actual domain
    title: "Jianna's Portfolio Website",
    description: 'AWS Certified Developer & IT Professional - Showcasing projects in web development, cloud architecture, and programming',
    siteName: "Jianna's Portfolio",
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: "Jianna's Portfolio Website - AWS Certified Developer & IT Professional",
      },
    ],
  },
  
  // Twitter Card tags
  twitter: {
    card: 'summary_large_image',
    title: "Jianna's Portfolio Website",
    description: 'AWS Certified Developer & IT Professional - Showcasing projects in web development, cloud architecture, and programming',
    images: ['/images/og-image.svg'],
    creator: '@lalamiffy', // Update with your Twitter handle if you have one
  },
  
  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Additional meta tags */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
