import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockProducts, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory ? initialCategory.toLowerCase() : null
  );
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = mockProducts.filter(p => {
    if (!selectedCategory) return true;
    if (selectedCategory === 'sale') return p.salePrice !== undefined;
    return p.category.toLowerCase().includes(selectedCategory);
  });

  return (
    <div className="container mx-auto px-4 py-10 lg:py-16 text-[#8B7355]">
      
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="font-serif text-4xl lg:text-5xl text-[#D4A574] mb-4">The Collection</h1>
        <p className="opacity-80 max-w-2xl text-sm leading-relaxed">
          Discover our curated selection of premium baby and children's clothing. 
          Ethically made, incredibly soft, and designed for lasting comfort.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between border-y border-[#D4A574]/30 py-4 uppercase tracking-widest text-[11px] font-semibold">
          <button 
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center"
          >
            <Filter size={16} className="mr-2" />
            FILTER & SORT
          </button>
          <div className="opacity-70">{filteredProducts.length} Products</div>
        </div>

        {/* Sidebar Filters */}
        <aside className={`w-full lg:w-48 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="sticky top-28 space-y-10">
            
            {/* Category Filter */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#D4A574]/30 opacity-70">Category</h3>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => {
                      setSelectedCategory(null);
                      setSearchParams({});
                    }}
                    className={`text-[11px] uppercase tracking-widest hover:text-[#D4A574] transition-colors ${!selectedCategory ? 'text-[#D4A574] font-medium' : 'opacity-80'}`}
                  >
                    All Products
                  </button>
                </li>
                {CATEGORIES.map(cat => {
                  const val = cat.split(' ')[0].toLowerCase();
                  return (
                    <li key={cat}>
                      <button 
                        onClick={() => {
                          setSelectedCategory(val);
                          setSearchParams({ category: val });
                        }}
                        className={`text-[11px] uppercase tracking-widest text-left hover:text-[#D4A574] transition-colors ${selectedCategory === val ? 'text-[#D4A574] font-medium' : 'opacity-80'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Price Filter Mock */}
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[#D4A574]/30 opacity-70">Price</h3>
              <ul className="space-y-4">
                <li><button className="text-[11px] uppercase tracking-widest opacity-80 hover:text-[#D4A574]">Under $50</button></li>
                <li><button className="text-[11px] uppercase tracking-widest opacity-80 hover:text-[#D4A574]">$50 - $100</button></li>
                <li><button className="text-[11px] uppercase tracking-widest opacity-80 hover:text-[#D4A574]">Over $100</button></li>
              </ul>
            </div>

          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 w-full">
          {/* Desktop Toolbar */}
          <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-[#D4A574]/30">
            <div className="text-[10px] uppercase tracking-widest opacity-70">Showing {filteredProducts.length} items</div>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest">
              <span className="opacity-70">Sort by:</span>
              <button className="flex items-center font-medium">
                Featured <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="font-serif text-2xl text-[#D4A574] mb-2">No products found</h3>
              <p className="opacity-70 mb-6 text-sm">We couldn't find any products matching your criteria.</p>
              <button 
                onClick={() => { setSelectedCategory(null); setSearchParams({}); }}
                className="text-[10px] font-medium uppercase tracking-widest border-b border-[#8B7355] pb-1 hover:text-[#D4A574] hover:border-[#D4A574] transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};
