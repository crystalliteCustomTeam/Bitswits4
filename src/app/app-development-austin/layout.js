//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Austin - BitsWits",
  description: "As an elite mobile app development company in Austin, we specialize in creating apps that enhance user experience and drive brand engagement for businesses.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Austin - BitsWits',
    description: 'As an elite mobile app development company in Austin, we specialize in creating apps that enhance user experience and drive brand engagement for businesses.',
    url: '/app-development-austin',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/app-development-austin' },
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