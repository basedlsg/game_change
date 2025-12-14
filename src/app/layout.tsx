import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'GameChangers Labs | See The Whole Board',
    template: '%s | GameChangers Labs',
  },
  description:
    'Technology implementation studio that turns research into shipped products across AI, spatial computing, neurotech, and product development.',
  keywords: [
    'AI implementation',
    'spatial computing',
    'neurotech',
    'product development',
    'technology studio',
    'RAG systems',
    'VR experiences',
  ],
  authors: [{ name: 'GameChangers Labs' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'GameChangers Labs',
    title: 'GameChangers Labs | See The Whole Board',
    description:
      'Technology implementation studio that turns research into shipped products across AI, spatial computing, neurotech, and product development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameChangers Labs | See The Whole Board',
    description:
      'Technology implementation studio that turns research into shipped products.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts loaded via link tag for production */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
