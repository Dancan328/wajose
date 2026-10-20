import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

export const revalidate = 300;

export default async function HomePage() {
  const featured = await prisma.product.findMany({
    where: { featured: true, published: true },
    include: { category: true },
    take: 8
  });

  return (
    <>
      <section className="bg-gradient-to-br from-charcoal to-gray-800 text-white py-20 md:py-24 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 px-4 py-2 rounded-full text-sm font-semibold text-orange-200 mb-6">
              🔥 New Season 2025
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-5">
              Step Into Style.<br />
              Wear the <span className="text-accent">Future.</span>
            </h1>
            <p className="text-lg text-white/70 mb-9 max-w-lg">
              Premium shoes and clothing engineered for the modern Kenyan. Crafted for comfort, built to last.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/shop" className="btn-primary">Shop Collection →</Link>
              <a href="https://wa.me/254799182120" target="_blank" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/10 transition">
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" alt="Featured sneaker" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest">Featured</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-1">Trending Now</h2>
            </div>
            <Link href="/shop" className="btn-outline">View All →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(featured as unknown as Product[]).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
