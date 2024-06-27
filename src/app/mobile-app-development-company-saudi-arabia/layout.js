//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top Mobile App Development Company in Saudi Arabia",
  description: "BitsWits is a leading app development company in Saudi Arabia empowering businesses across 10+ industries with scalable, and feature-rich mobile apps.",
  //===== OG Tags =====
  openGraph: {
    title: 'Top Mobile App Development Company in Saudi Arabia',
    description: 'BitsWits is a leading app development company in Saudi Arabia empowering businesses across 10+ industries with scalable, and feature-rich mobile apps.',
    url: '/mobile-app-development-company-saudi-arabia',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-company-saudi-arabia' },
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