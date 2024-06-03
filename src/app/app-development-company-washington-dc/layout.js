//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "App Development Company Washington DC| BitsWits",
  description: "Create custom mobile apps with the top mobile app development company in DC. BitsWits offers professional app development services that boost your business.",
  //===== OG Tags =====
  openGraph: {
    title: 'App Development Company Washington DC| BitsWits',
    description: 'Create custom mobile apps with the top mobile app development company in DC. BitsWits offers professional app development services that boost your business.',
    url: '/app-development-company-washington-dc',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/app-development-company-washington-dc' },
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