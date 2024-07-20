//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Game Development Service | Bitswits",
  description: "Bitswits",
  //===== OG Tags =====
  openGraph: {
    title: 'Game Development Service | Bitswits',
    description: 'Bitswits',
    url: '/game-development-services',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/game-development-services' },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
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