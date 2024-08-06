//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Leading iOS App Development Company - BitsWits",
  description: "BitsWits is a leading iOS app development company offering cutting-edge iOS app development services to ambitious startups and SMEs across industries.",
  //===== OG Tags =====
  openGraph: {
    title: 'Leading iOS App Development Company - BitsWits',
    description: 'BitsWits is a leading iOS app development company offering cutting-edge iOS app development services to ambitious startups and SMEs across industries.',
    url: '/bitswits-services-page-6',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website'
  },
  //===== Canonical =====
  alternates: { canonical: '/bitswits-services-page-6' },
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