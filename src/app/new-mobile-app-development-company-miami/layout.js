//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company Miami | BitsWits",
  description: "Looking for a top-rated web app development company? Our team of skilled web app developers specializes in crafting high-quality and customized web applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company Miami | BitsWits',
    description: 'Looking for a top-rated web app development company? Our team of skilled web app developers specializes in crafting high-quality and customized web applications.',
    url: '/new-mobile-app-development-company-miami',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/new-mobile-app-development-company-miami' },
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