//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Flutter App Development Company - BitsWits",
  description: "BitsWits is a leading Flutter app development company, creating high-quality, cross-platform apps that offer exceptional performance and user experience!",
  //===== OG Tags =====
  openGraph: {
    title: 'Flutter App Development Company - BitsWits',
    description: 'BitsWits is a leading Flutter app development company, creating high-quality, cross-platform apps that offer exceptional performance and user experience!',
    url: '/bitswits-services-page-10',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website'
  },
  //===== Canonical =====
  alternates: { canonical: '/bitswits-services-page-10' },
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