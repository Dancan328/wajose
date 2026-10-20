export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 mt-20 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-extrabold text-xl mb-4">
            <span className="w-8 h-8 bg-accent rounded-lg grid place-items-center">W</span>
            Wajose
          </div>
          <p className="text-sm opacity-70 max-w-xs">Step into style. Wear the future. Premium shoes and clothing for the modern Kenyan.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 opacity-90 uppercase tracking-wide">Shop</h4>
          <a href="/shop" className="block text-sm opacity-70 mb-2 hover:opacity-100">All Products</a>
          <a href="/shop?cat=Shoes" className="block text-sm opacity-70 mb-2 hover:opacity-100">Shoes</a>
          <a href="/shop?cat=Clothing" className="block text-sm opacity-70 mb-2 hover:opacity-100">Clothing</a>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 opacity-90 uppercase tracking-wide">Support</h4>
          <p className="text-sm opacity-70 mb-2">Shipping</p>
          <p className="text-sm opacity-70 mb-2">Returns</p>
          <p className="text-sm opacity-70 mb-2">FAQ</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 opacity-90 uppercase tracking-wide">Contact</h4>
          <p className="text-sm opacity-70 mb-2">📞 +254 799 182 120</p>
          <p className="text-sm opacity-70 mb-2">✉️ hello@wajose.co.ke</p>
          <p className="text-sm opacity-70">📍 Nairobi, Kenya</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs opacity-60">
        <span>© 2025 Wajose Smartwear. All rights reserved.</span>
        <div className="flex gap-2">
          <span className="bg-white/10 px-2.5 py-1 rounded">M-PESA</span>
          <span className="bg-white/10 px-2.5 py-1 rounded">VISA</span>
        </div>
      </div>
    </footer>
  );
}
