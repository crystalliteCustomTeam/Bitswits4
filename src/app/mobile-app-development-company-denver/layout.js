//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Denver - BitsWits",
  description: "BitsWits is a leading mobile app development company in Denver offering innovative solutions customized to your business needs for unparalleled success!",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Denver - BitsWits',
    description: 'BitsWits is a leading mobile app development company in Denver offering innovative solutions customized to your business needs for unparalleled success!',
    url: '/mobile-app-development-company-denver',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-company-denver' },
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