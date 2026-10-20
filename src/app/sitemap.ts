import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://wajosesmartwear.com';
  const products = await prisma.product.findMany({ select: { slug: true } });
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/shop`, lastModified: new Date(), priority: 0.9 },
    ...products.map(p => ({
      url: `${base}/product/${p.slug}`,
      lastModified: new Date(),
      priority: 0.8
    }))
  ];
}
