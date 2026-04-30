import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { ChevronRight, Heart, ShoppingBag, Truck, Info, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export const Product = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = mockProducts.find(p => p.slug === slug);
  const addItem = useCartStore((state) => state.addItem);
  
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-[#8B7355]">
        <h1 className="font-serif text-3xl mb-4 text-[#D4A574]">Product Not Found</h1>
        <Link to="/shop" className="underline">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      product,
      quantity,
      selectedSize,
      selectedColor
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 text-[#8B7355]">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center text-[9px] opacity-70 tracking-widest uppercase mb-8">
        <Link to="/" className="hover:text-[#D4A574]">Home</Link>
        <ChevronRight size={10} className="mx-2" />
        <Link to="/shop" className="hover:text-[#D4A574]">Shop</Link>
        <ChevronRight size={10} className="mx-2" />
        <span className="truncate">{product.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
        
        {/* Images */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row-reverse gap-4">
          <div className="w-full aspect-[3/4] bg-white rounded-lg border border-[#D4A574]/30 overflow-hidden relative p-4">
            <motion.img 
              key={activeImageIdx}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={product.images[activeImageIdx]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {(product.isNew || product.salePrice) && (
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {product.isNew && <span className="bg-[#D4A574] text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm">New</span>}
                {product.salePrice && <span className="bg-[#E76F51] text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm">Sale</span>}
              </div>
            )}
          </div>
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 flex-shrink-0 hide-scrollbar pb-2 md:pb-0">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`w-20 h-24 md:w-full md:h-[120px] rounded-sm overflow-hidden flex-shrink-0 transition-all border p-1 bg-white ${activeImageIdx === idx ? 'border-[#D4A574]' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 md:py-4 flex flex-col">
          <p className="text-[10px] font-semibold tracking-[0.2em] opacity-70 uppercase mb-2">
            {product.category}
          </p>
          <h1 className="font-serif text-3xl lg:text-4xl text-[#D4A574] mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center space-x-3 mb-6">
            {product.salePrice ? (
              <>
                <span className="text-xl font-medium text-[#E76F51]">${product.salePrice.toFixed(2)}</span>
                <span className="text-lg opacity-50 line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-xl font-medium">${product.price.toFixed(2)}</span>
            )}
          </div>

          <p className="opacity-80 text-sm leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="border-t border-[#D4A574]/30 pt-8 mb-8 space-y-8">
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] flex items-center">
                    Color <span className="opacity-60 font-normal ml-2 capitalize">- {selectedColor}</span>
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-2 border text-[11px] uppercase tracking-widest transition-all
                        ${selectedColor === color 
                          ? 'border-[#D4A574] bg-[#D4A574]/10 font-medium text-[#D4A574]' 
                          : 'border-[#D4A574]/30 opacity-70 hover:border-[#D4A574]/60'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Size</span>
                  <button className="text-[10px] opacity-70 underline hover:opacity-100 uppercase tracking-widest">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border text-[11px] uppercase tracking-widest transition-all
                        ${selectedSize === size 
                          ? 'border-[#D4A574] bg-[#D4A574]/10 font-medium text-[#D4A574]' 
                          : 'border-[#D4A574]/30 opacity-70 hover:border-[#D4A574]/60'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">Quantity</span>
              <div className="flex items-center w-32 border border-[#D4A574]/30 h-10">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-full flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-[#D4A574]/5"
                >-</button>
                <div className="flex-1 flex items-center justify-center text-sm font-medium border-x border-[#D4A574]/30 h-full">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-full flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-[#D4A574]/5"
                >+</button>
              </div>
            </div>

          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-auto">
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-[#D4A574] hover:bg-[#8B7355] text-white flex items-center justify-center gap-2 py-4 transition-colors duration-300 font-semibold uppercase tracking-[0.2em] text-[10px]"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 space-y-4 pt-6 border-t border-[#D4A574]/30 text-xs opacity-80 leading-relaxed">
            <div className="flex items-start gap-3">
              <Truck size={16} className="mt-0.5 flex-shrink-0 text-[#D4A574]" />
              <p>Free standard shipping on orders over $150. Expedited shipping available at checkout.</p>
            </div>
            <div className="flex items-start gap-3">
              <RefreshCw size={16} className="mt-0.5 flex-shrink-0 text-[#D4A574]" />
              <p>30-day hassle-free returns. Merchandise must be unworn and unwashed.</p>
            </div>
            <div className="flex items-start gap-3">
              <Info size={16} className="mt-0.5 flex-shrink-0 text-[#D4A574]" />
              <p>Made with organic materials. Machine wash cold, lay flat to dry to maintain shape.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
