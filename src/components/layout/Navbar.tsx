import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

export const Navbar = () => {
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <div className="flex flex-col text-[#8B7355]">
      {/* Top Utility Bar */}
      <div className="h-10 flex justify-between items-center px-4 md:px-10 text-[10px] tracking-[0.2em] uppercase font-semibold border-b border-[#D4A574]/20 hidden md:flex text-[#8B7355]">
        <div>Ships Worldwide</div>
        <div className="flex gap-8">
          <button className="hover:text-[#D4A574] transition-colors flex items-center gap-1">Search</button>
          <Link to="/account" className="hover:text-[#D4A574] transition-colors">Account</Link>
          <Link to="/cart" className="hover:text-[#D4A574] transition-colors">Cart ({totalItems})</Link>
        </div>
      </div>

      {/* Main Header & Navigation */}
      <header className="h-20 md:h-24 flex flex-col justify-center items-center px-4 md:px-10 border-b border-[#D4A574]/20 relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden">
          <button className="p-2 text-[#8B7355] hover:text-[#D4A574] transition-colors">
            <Menu size={24} />
          </button>
        </div>

        <Link to="/" className="text-2xl md:text-3xl font-serif tracking-[0.1em] text-[#D4A574] mt-1 md:mt-0">
          XIAN & XANDRIA
        </Link>
        <nav className="mt-3 hidden md:flex gap-10 text-[11px] tracking-[0.15em] uppercase">
          <Link to="/shop" className="hover:text-[#D4A574] transition-colors text-[#8B7355]">New Arrivals</Link>
          <Link to="/shop" className="hover:text-[#D4A574] transition-colors text-[#8B7355]">The Collection</Link>
          <Link to="/shop?category=newborn" className="hover:text-[#D4A574] transition-colors text-[#8B7355]">Shop by Age</Link>
          <Link to="/about" className="hover:text-[#D4A574] transition-colors text-[#8B7355]">About Us</Link>
        </nav>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden flex gap-3 text-[#8B7355]">
          <Link to="/cart" className="p-2 relative hover:text-[#D4A574] transition-colors">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-[#D4A574] text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>
    </div>
  );
};
