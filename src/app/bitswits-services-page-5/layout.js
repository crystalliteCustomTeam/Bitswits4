//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Leading Android App Development Company - BitsWits",
  description: "BitsWits is a premier Android app development company that makes user-friendly and premium android apps for all types of businesses.",
  //===== OG Tags =====
  openGraph: {
    title: 'Leading Android App Development Company - BitsWits',
    description: 'BitsWits is a premier Android app development company that makes user-friendly and premium android apps for all types of businesses.',
    url: '/bitswits-services-page-5',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website'
  },
  //===== Canonical =====
  alternates: { canonical: '/bitswits-services-page-5' },
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