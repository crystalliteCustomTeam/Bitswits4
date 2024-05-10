//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Dubai - BitsWits",
  description: "Partner with BitsWits, your reliable mobile app development company in Dubai, for exceptional app development services perfectly suited to your needs.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Dubai - BitsWits',
    description: 'Partner with BitsWits, your reliable mobile app development company in Dubai, for exceptional app development services perfectly suited to your needs.',
    url: '/mobile-app-development-company-dubai',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-company-dubai' },
  //===== GEO Tags =====
  other: {},
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
}

export default function RootLayout({ children }) {
  return (children);
}