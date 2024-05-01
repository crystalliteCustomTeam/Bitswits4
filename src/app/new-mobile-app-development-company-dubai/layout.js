//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Dubai | BitsWits",
  description: "Looking for a reliable mobile app development company in Dubai to get your mobile app developed right away? Partner with us at BitsWits and experience the difference firsthand.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Dubai | BitsWits',
    description: 'Looking for a reliable mobile app development company in Dubai to get your mobile app developed right away? Partner with us at BitsWits and experience the difference firsthand.',
    url: '/new-mobile-app-development-company-dubai',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/new-mobile-app-development-company-dubai' },
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