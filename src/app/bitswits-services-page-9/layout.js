//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Hybrid App Development Company - BitsWits",
  description: "Partner with a leading hybrid app development company like BitsWits to streamline operations for startups and SMEs with cost-effective mobile solutions!",
  //===== OG Tags =====
  openGraph: {
    title: 'Hybrid App Development Company - BitsWits',
    description: 'Partner with a leading hybrid app development company like BitsWits to streamline operations for startups and SMEs with cost-effective mobile solutions!',
    url: '/bitswits-services-page-9',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website'
  },
  //===== Canonical =====
  alternates: { canonical: '/bitswits-services-page-9' },
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