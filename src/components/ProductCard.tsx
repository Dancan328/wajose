'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

const KES = (n: number) => 'KES ' + n.toLocaleString('en-KE');

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('wj_cart') || '[]');
    const existing = cart.find((i: any) => i.productId === product.id);
    if (existing) existing.qty++;
    else
      cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1,
        size: product.sizes[0]
      });
    localStorage.setItem('wj_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-update'));
  };

  return (
    <div className="card group hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/product/${product.slug}`} className="block relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-4">
        <div className="text-[11px] text-gray-400 uppercase tracking-wide font-semibold mb-1">
          {product.category.name}
        </div>
        <Link href={`/product/${product.slug}`} className="block font-semibold text-[15px] mb-2 hover:text-accent">
          {product.name}
        </Link>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-display font-extrabold text-accent">{KES(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">{KES(product.oldPrice)}</span>
          )}
        </div>
        <button
          onClick={addToCart}
          className="w-full py-2.5 bg-gray-100 rounded-lg text-sm font-semibold hover:bg-accent hover:text-white transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
