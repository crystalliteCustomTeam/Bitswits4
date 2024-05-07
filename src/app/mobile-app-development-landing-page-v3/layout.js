//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Landing Page V3 | BitsWits",
  description: "Mobile App Development Landing Page V3",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Landing Page V3 | BitsWits',
    description: 'Mobile App Development Landing Page V3',
    url: '/mobile-app-development-landing-page-v3',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-landing-page-v3' },
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