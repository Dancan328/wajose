export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number | null;
  image: string;
  images: string[];
  sizes: string[];
  stock: number;
  featured: boolean;
  category: { id: string; name: string; slug: string };
};

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  size?: string;
};

export type MpesaStatus = 'idle' | 'requesting' | 'waiting' | 'success' | 'error';
