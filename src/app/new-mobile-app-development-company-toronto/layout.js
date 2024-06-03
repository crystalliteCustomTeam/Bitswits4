//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Leading Mobile App Development Company in Toronto",
  description: "BitsWits is a top-grade mobile app development company in Toronto that specializes in creating UX-driven mobile apps for startups and Fortune 500 companies.",
  //===== OG Tags =====
  openGraph: {
    title: 'Leading Mobile App Development Company in Toronto',
    description: 'BitsWits is a top-grade mobile app development company in Toronto that specializes in creating UX-driven mobile apps for startups and Fortune 500 companies.',
    url: '/new-mobile-app-development-company-toronto',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/new-mobile-app-development-company-toronto' },
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