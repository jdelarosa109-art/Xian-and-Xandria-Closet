import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockProducts } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';

export const Home = () => {
  const newArrivals = mockProducts.filter(p => p.isNew).slice(0, 4);
  const bestSellers = mockProducts.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="flex flex-col w-full pb-20 relative">
      
      {/* Background Watermark */}
      <div className="absolute top-[-80px] right-[-40px] text-[400px] font-serif opacity-[0.03] pointer-events-none select-none text-[#8B7355]">X&X</div>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col md:flex-row p-4 md:p-12 gap-12 items-center min-h-[600px] mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-medium opacity-70 text-[#8B7355]">The SS24 Editorial</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-[#D4A574]">Timeless elegance for your <span className="italic">little ones</span>.</h2>
          <p className="max-w-md text-sm leading-relaxed opacity-80 text-[#8B7355]">
            Our curated collection of premium garments is designed with a focus on heritage craftsmanship, sustainable materials, and the utmost comfort for babies and toddlers.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Link to="/shop" className="bg-[#D4A574] text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-[#8B7355] transition-all text-center w-full sm:w-auto">Shop New Arrivals</Link>
            <Link to="/about" className="border border-[#D4A574] px-10 py-4 text-xs uppercase tracking-widest hover:bg-[#D4A574]/10 transition-all text-[#8B7355] text-center w-full sm:w-auto">Explore Lookbook</Link>
          </div>
        </motion.div>

        {/* Artistic Image Mosaic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 h-[400px] flex gap-4 relative"
        >
          <div className="w-2/3 h-full bg-[#E5DCD3] rounded-t-full border border-[#D4A574]/30 flex items-center justify-center overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1544605927-4a007fba6333?w=800&q=80" alt="Newborn" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
            <div className="text-[60px] lg:text-[100px] opacity-20 font-serif italic text-[#8B7355] relative z-10 pointer-events-none">Boutique</div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="h-1/2 bg-[#D4A574]/20 rounded-full border border-[#D4A574]/30 flex items-center justify-center overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80" alt="Details" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              <div className="w-12 h-12 border border-[#D4A574] rounded-full flex items-center justify-center text-[10px] uppercase font-bold tracking-tighter text-[#8B7355] bg-[#F8F1E9]/80 backdrop-blur-sm relative z-10">0-6m</div>
            </div>
            <div className="h-1/2 bg-[#A8D5BA]/20 rounded-lg border border-[#A8D5BA]/40 flex flex-col items-center justify-center p-4 text-[#8B7355]">
              <span className="text-[10px] uppercase tracking-widest mb-2 text-center">Sustainable</span>
              <div className="w-full h-px bg-[#A8D5BA]/40"></div>
              <span className="text-[10px] uppercase tracking-widest mt-2 text-center">Organic Cotton</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 md:px-12 py-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] mb-3 opacity-70 text-[#8B7355] block">Curated Collection</span>
            <h2 className="font-serif text-3xl text-[#D4A574]">New Arrivals</h2>
          </div>
          <Link to="/shop" className="text-[10px] uppercase tracking-widest text-[#8B7355] hover:text-[#D4A574] transition-colors border-b border-[#D4A574]/30 pb-1">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Fill if less than 4 for visual mockup purposes */}
          {newArrivals.length < 4 && mockProducts.slice(0, 4 - newArrivals.length).map(product => (
            <ProductCard key={`fill-${product.id}`} product={product} />
          ))}
        </div>
      </section>

      {/* Shop by Age Teaser (From Design HTML) */}
      <section className="container mx-auto px-4 md:px-12 py-10">
        <div className="h-[240px] flex flex-col justify-center items-center bg-[#8B7355] text-white p-6 rounded-b-full text-center">
          <div className="text-[9px] uppercase tracking-[0.3em] mb-3 opacity-70">Curated For Growth</div>
          <div className="text-2xl md:text-4xl font-serif mb-6 text-[#D4A574]">Shop by Age</div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/shop?category=newborn" className="text-[10px] uppercase tracking-widest border border-white/30 px-4 py-2 hover:bg-white text-white hover:text-[#8B7355] transition-colors">0-6m</Link>
            <Link to="/shop?category=infant" className="text-[10px] uppercase tracking-widest border border-white/30 px-4 py-2 hover:bg-white text-white hover:text-[#8B7355] transition-colors">6-12m</Link>
            <Link to="/shop?category=toddler" className="text-[10px] uppercase tracking-widest border border-white/30 px-4 py-2 hover:bg-white text-white hover:text-[#8B7355] transition-colors">1-2y</Link>
            <Link to="/shop?category=toddler" className="text-[10px] uppercase tracking-widest border border-white/30 px-4 py-2 hover:bg-white text-white hover:text-[#8B7355] transition-colors">2-3y</Link>
          </div>
        </div>
      </section>

    </div>
  );
};;
