'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const cart = JSON.parse(localStorage.getItem('wj_cart') || '[]');
      setCartCount(cart.reduce((s: number, i: any) => s + i.qty, 0));
    };
    update();
    window.addEventListener('storage', update);
    window.addEventListener('cart-update', update);
    return () => {
      window.removeEventListener('storage', update);
      window.removeEventListener('cart-update', update);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-xl">
          <span className="w-8 h-8 bg-accent text-white rounded-lg grid place-items-center">W</span>
          Wajose
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/shop" className="hover:text-accent transition">Shop</Link>
          <Link href="/shop?cat=Shoes" className="hover:text-accent transition">Shoes</Link>
          <Link href="/shop?cat=Clothing" className="hover:text-accent transition">Clothing</Link>
          <Link href="/shop?cat=Accessories" className="hover:text-accent transition">Accessories</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="w-10 h-10 rounded-full bg-gray-100 grid place-items-center hover:bg-gray-200 transition" aria-label="Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </Link>
          <Link href="/checkout" className="relative w-10 h-10 rounded-full bg-gray-100 grid place-items-center hover:bg-gray-200 transition" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[11px] font-bold min-w-[20px] h-5 rounded-full grid place-items-center px-1 border-2 border-cream">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
