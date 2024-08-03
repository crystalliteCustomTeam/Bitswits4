//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top-Tier 2D Game Development Company",
  description: "BitsWits is a leading 2D game development company with 200+ expert-vetted developers, designers, and artists creating breathtaking gaming experiences",
  //===== OG Tags =====
  openGraph: {
    title: 'Top-Tier 2D Game Development Company',
    description: 'BitsWits is a leading 2D game development company with 200+ expert-vetted developers, designers, and artists creating breathtaking gaming experiences',
    url: '/bitswits-services-page-4',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website'
  },
  //===== Canonical =====
  alternates: { canonical: '/bitswits-services-page-4' },
  //===== No-Index =====
  robots: {
    index: false,
    follow: true,
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
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}