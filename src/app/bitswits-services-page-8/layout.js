//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Blockchain Game Development Company | BitsWits",
  description: "Partner with BitsWits, a leading blockchain game development company, to invest in top-tier blockchain games and acquire exceptional products!",
  //===== OG Tags =====
  openGraph: {
    title: 'Blockchain Game Development Company | BitsWits',
    description: 'Partner with BitsWits, a leading blockchain game development company, to invest in top-tier blockchain games and acquire exceptional products!',
    url: '/bitswits-services-page-8',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website'
  },
  //===== Canonical =====
  alternates: { canonical: '/bitswits-services-page-8' },
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