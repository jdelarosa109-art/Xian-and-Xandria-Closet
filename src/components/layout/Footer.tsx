import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#8B7355] text-white mt-auto">
      <div className="container mx-auto px-4 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 col-span-1 md:col-span-2">
          <h3 className="font-serif text-2xl tracking-[0.1em] text-[#D4A574]">XIAN & XANDRIA</h3>
          <p className="text-[11px] leading-relaxed max-w-sm opacity-80 uppercase tracking-widest">
            Timeless elegance for your little ones.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 opacity-70">Shop</h4>
          <ul className="space-y-3 text-[10px] tracking-widest uppercase">
            <li><Link to="/shop" className="hover:text-[#D4A574] transition-colors">The Collection</Link></li>
            <li><Link to="/shop?category=newborn" className="hover:text-[#D4A574] transition-colors">Newborn</Link></li>
            <li><Link to="/shop?category=toddler" className="hover:text-[#D4A574] transition-colors">Toddler</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 opacity-70">Customer Care</h4>
          <ul className="space-y-3 text-[10px] tracking-widest uppercase">
            <li><Link to="/contact" className="hover:text-[#D4A574] transition-colors">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-[#D4A574] transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-[#D4A574] transition-colors">Size Guide</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bar */}
      <div className="border-t border-white/10 h-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 text-[9px] tracking-[0.1em] uppercase py-2 md:py-0">
        <div className="opacity-70">© {new Date().getFullYear()} Xian & Xandria Closet. All Rights Reserved.</div>
        <div className="flex gap-6 opacity-70 mt-2 md:mt-0">
          <Link to="#" className="hover:opacity-100">Shipping Policy</Link>
          <Link to="#" className="hover:opacity-100">Care Instructions</Link>
          <Link to="#" className="hover:opacity-100">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};
