//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Dallas | BitsWits",
  description: "Trust our leading mobile app development company in Dallas to deliver expert solutions meeting your business needs with top-notch app development services.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Dallas | BitsWits',
    description: 'Trust our leading mobile app development company in Dallas to deliver expert solutions meeting your business needs with top-notch app development services.',
    url: '/new-mobile-app-development-company-dallas',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/new-mobile-app-development-company-dallas' },
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