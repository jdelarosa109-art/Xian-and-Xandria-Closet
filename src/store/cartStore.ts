import { create } from 'zustand';
import { Product } from '../data/products';

interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string, color: string) => void;
  updateQuantity: (id: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (newItem) => set((state) => {
    const existingIdx = state.items.findIndex(
      i => i.product.id === newItem.product.id && i.selectedSize === newItem.selectedSize && i.selectedColor === newItem.selectedColor
    );
    if (existingIdx > -1) {
      const updated = [...state.items];
      updated[existingIdx].quantity += newItem.quantity;
      return { items: updated };
    }
    return { items: [...state.items, newItem] };
  }),
  removeItem: (id, size, color) => set((state) => ({
    items: state.items.filter(i => !(i.product.id === id && i.selectedSize === size && i.selectedColor === color))
  })),
  updateQuantity: (id, size, color, quantity) => set((state) => ({
    items: state.items.map(i => {
      if (i.product.id === id && i.selectedSize === size && i.selectedColor === color) {
        return { ...i, quantity };
      }
      return i;
    })
  })),
  clearCart: () => set({ items: [] }),
  totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
  subtotal: () => get().items.reduce((acc, item) => acc + (item.product.salePrice ?? item.product.price) * item.quantity, 0),
}));
