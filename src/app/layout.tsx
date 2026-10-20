import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Wajose Smartwear — Step Into Style. Wear the Future.',
    template: '%s | Wajose Smartwear'
  },
  description:
    'Premium shoes and clothing in Kenya. Shop sneakers, formal shoes, streetwear and smart-casual. Pay securely with M-Pesa.',
  keywords: ['shoes Kenya', 'sneakers Nairobi', 'clothing', 'M-Pesa shop', 'Wajose'],
  openGraph: {
    title: 'Wajose Smartwear',
    description: 'Step Into Style. Wear the Future.',
    type: 'website',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200']
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Wajose Smartwear',
              telephone: '+254799182120',
              url: 'https://wajosesmartwear.com'
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
