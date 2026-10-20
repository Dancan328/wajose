import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const products = [
  { name: 'Air Runner Pro X', slug: 'air-runner-pro-x', price: 8500, oldPrice: 11000, cat: 'Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', sizes: ['40','41','42','43','44'], featured: true },
  { name: 'Urban Street Sneakers', slug: 'urban-street-sneakers', price: 6500, cat: 'Shoes', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80', sizes: ['39','40','41','42','43'], featured: true },
  { name: 'Classic Leather Oxford', slug: 'classic-leather-oxford', price: 12500, oldPrice: 15000, cat: 'Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80', sizes: ['40','41','42','43','44','45'], featured: true },
  { name: 'Premium Hoodie', slug: 'premium-hoodie', price: 4500, cat: 'Clothing', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80', sizes: ['S','M','L','XL'], featured: true },
  { name: 'Cotton Tee Classic', slug: 'cotton-tee-classic', price: 1800, oldPrice: 2200, cat: 'Clothing', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', sizes: ['S','M','L','XL'], featured: true },
  { name: 'Denim Jacket Premium', slug: 'denim-jacket-premium', price: 7800, oldPrice: 9500, cat: 'Clothing', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80', sizes: ['S','M','L','XL'], featured: true },
  { name: 'Sport Runner Elite', slug: 'sport-runner-elite', price: 9800, cat: 'Shoes', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80', sizes: ['40','41','42','43','44'], featured: true },
  { name: 'Slim Fit Chinos', slug: 'slim-fit-chinos', price: 3500, cat: 'Clothing', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80', sizes: ['30','32','34','36'], featured: true },
  { name: 'Leather Belt Premium', slug: 'leather-belt-premium', price: 2200, cat: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', sizes: ['M','L','XL'] },
  { name: 'Canvas Tote Bag', slug: 'canvas-tote-bag', price: 1500, oldPrice: 2000, cat: 'Accessories', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80', sizes: [] },
  { name: 'Sunglasses Aviator', slug: 'sunglasses-aviator', price: 3200, cat: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80', sizes: [] },
  { name: 'Running Shorts Pro', slug: 'running-shorts-pro', price: 2400, cat: 'Clothing', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80', sizes: ['S','M','L','XL'] }
];

async function main() {
  const cats = ['Shoes', 'Clothing', 'Accessories'];
  const catMap: Record<string, string> = {};

  for (const name of cats) {
    const c = await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name, slug: name.toLowerCase() }
    });
    catMap[name] = c.id;
  }

  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        name: p.name,
        slug: p.slug,
        description: `Premium ${p.name.toLowerCase()} — crafted for comfort and style. Perfect for the modern Kenyan.`,
        price: p.price,
        oldPrice: p.oldPrice,
        image: p.image,
        images: [p.image],
        sizes: p.sizes,
        featured: p.featured || false,
        categoryId: catMap[p.cat]
      }
    });
  }

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@wajose.co.ke';
  const adminPass = process.env.ADMIN_PASSWORD || 'ChangeMe123!';
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: 'Wajose Admin',
      password: await bcrypt.hash(adminPass, 10),
      role: 'ADMIN'
    }
  });

  console.log('✅ Seeded:', products.length, 'products + admin user');
}

main().catch(console.error).finally(() => prisma.$disconnect());
