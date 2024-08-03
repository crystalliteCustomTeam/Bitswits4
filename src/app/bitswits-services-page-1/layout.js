//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "3D Game Development Company | BitsWits",
  description: "Hire the top 1% game developers in USA to create immersive games with our 3D game development company, offering end-to-end services to ambitious clients!",
  //===== OG Tags =====
  openGraph: {
    title: '3D Game Development Company | BitsWits',
    description: 'Hire the top 1% game developers in USA to create immersive games with our 3D game development company, offering end-to-end services to ambitious clients!',
    url: '/bitswits-services-page-1',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/bitswits-services-page-1' },
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