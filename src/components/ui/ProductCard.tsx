import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.slug}`} className="flex flex-col group cursor-pointer w-full">
      <div className="relative h-[240px] md:h-[300px] w-full bg-white mb-3 border border-[#D4A574]/20 p-2 lg:p-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {(product.isNew || product.salePrice) && (
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-[#D4A574] text-white text-[8px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full shadow-sm">
                New
              </span>
            )}
            {product.salePrice && (
              <span className="bg-[#E76F51] text-white text-[8px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full shadow-sm">
                Sale
              </span>
            )}
          </div>
        )}
      </div>
      
      <div className="text-[10px] uppercase tracking-widest text-[#D4A574] mb-1 italic">
        {product.category}
      </div>
      <div className="text-xs font-serif font-bold tracking-wide text-[#8B7355] truncate group-hover:text-[#D4A574] transition-colors">
        {product.name}
      </div>
      <div className="text-[11px] mt-1 font-medium opacity-80 text-[#8B7355]">
        {product.salePrice ? (
          <>
            <span className="line-through mr-2 opacity-50">${product.price.toFixed(2)}</span>
            <span>${product.salePrice.toFixed(2)}</span>
          </>
        ) : (
          <span>${product.price.toFixed(2)}</span>
        )}
      </div>
    </Link>
  );
};
