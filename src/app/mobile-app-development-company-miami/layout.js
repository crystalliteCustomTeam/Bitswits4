//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Miami - BitsWits",
  description: "Trust BitsWits as your go-to mobile app development company in Miami. We provide expert app development services to meet the needs of your business.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Miami - BitsWits',
    description: 'Trust BitsWits as your go-to mobile app development company in Miami. We provide expert app development services to meet the needs of your business.',
    url: '/mobile-app-development-company-miami',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-company-miami' },
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