//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top NFT Game Development Company | BitsWits",
  description: "Partner with a leading NFT game development company providing custom NFT game solutions to enhance user engagement and achieve business growth.",
  //===== OG Tags =====
  openGraph: {
    title: 'Top NFT Game Development Company | BitsWits',
    description: 'Partner with a leading NFT game development company providing custom NFT game solutions to enhance user engagement and achieve business growth.',
    url: '/bitswits-services-page-7',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website'
  },
  //===== Canonical =====
  alternates: { canonical: '/bitswits-services-page-7' },
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