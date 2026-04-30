import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

export const Cart = () => {
  const { items, removeItem, updateQuantity, subtotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center max-w-lg text-[#8B7355]">
        <h1 className="font-serif text-4xl mb-6 text-[#D4A574]">Your Cart is Empty</h1>
        <p className="opacity-80 mb-10 text-sm">
          Looks like you haven't added any products to your cart yet. Discover our adorable collections!
        </p>
        <Link 
          to="/shop" 
          className="inline-block w-full bg-[#D4A574] hover:bg-[#8B7355] text-white py-4 transition-colors duration-300 font-semibold uppercase tracking-[0.2em] text-[10px]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 lg:py-16 max-w-6xl text-[#8B7355]">
      <h1 className="font-serif text-3xl lg:text-4xl text-[#D4A574] mb-10 border-b border-[#D4A574]/30 pb-4">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-[#D4A574]/30 text-[10px] font-semibold uppercase tracking-[0.2em] opacity-80">
            <div className="col-span-6">Product</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-3 text-right">Total</div>
          </div>
          
          <div className="space-y-6 md:space-y-0 md:divide-y md:divide-[#D4A574]/20">
            {items.map((item) => {
              const itemPrice = item.product.salePrice ?? item.product.price;
              const itemTotal = itemPrice * item.quantity;
              
              return (
                <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="md:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* Mobile Product Layout */}
                  <div className="col-span-12 md:col-span-6 flex gap-4">
                    <Link to={`/product/${item.product.slug}`} className="w-24 h-32 md:w-28 md:h-36 flex-shrink-0 bg-white border border-[#D4A574]/20 overflow-hidden block relative p-1">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    </Link>
                    <div className="flex flex-col flex-1 py-1">
                      <Link to={`/product/${item.product.slug}`} className="font-medium text-sm hover:text-[#D4A574] transition-colors mb-1 font-serif">
                        {item.product.name}
                      </Link>
                      <ul className="text-[11px] opacity-70 space-y-1 mb-auto uppercase tracking-widest mt-1">
                        <li>Color: {item.selectedColor}</li>
                        <li>Size: {item.selectedSize}</li>
                      </ul>
                      <div className="text-sm font-medium mt-2 md:hidden">
                        ${itemTotal.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-12 md:col-span-3 flex justify-between md:justify-center items-center mt-2 md:mt-0">
                    <div className="flex items-center border border-[#D4A574]/30 h-8 md:h-10">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, Math.max(1, item.quantity - 1))}
                        className="w-8 h-full flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-[#D4A574]/5"
                      >-</button>
                      <div className="flex-1 flex items-center justify-center w-8 text-sm font-medium border-x border-[#D4A574]/30 h-full">
                        {item.quantity}
                      </div>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                        className="w-8 h-full flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-[#D4A574]/5"
                      >+</button>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor)}
                      className="opacity-40 hover:opacity-100 hover:text-[#E76F51] p-2 transition-colors md:hidden"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Total & Desktop Remove */}
                  <div className="hidden md:flex col-span-3 justify-end items-center space-x-6">
                    <div className="text-sm font-medium">
                      ${itemTotal.toFixed(2)}
                    </div>
                    <button 
                      onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor)}
                      className="opacity-40 hover:opacity-100 hover:text-[#E76F51] transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[380px] flex-shrink-0">
          <div className="bg-[#E5DCD3]/50 p-6 md:p-8 border border-[#D4A574]/30 sticky top-28">
            <h2 className="text-lg font-serif mb-6 text-[#D4A574]">Order Summary</h2>
            
            <div className="space-y-4 mb-6 border-b border-[#D4A574]/30 pb-6 text-sm opacity-80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8 font-serif">
              <span className="text-xl">Estimated Total</span>
              <span className="text-xl">${subtotal().toFixed(2)}</span>
            </div>

            <Link 
              to="/checkout" 
              className="w-full bg-[#D4A574] hover:bg-[#8B7355] text-white flex items-center justify-center gap-2 py-4 transition-colors duration-300 font-semibold uppercase tracking-[0.2em] text-[10px] mb-4"
            >
              Checkout <ArrowRight size={14} />
            </Link>
            
            <div className="flex items-center justify-center text-[10px] uppercase tracking-widest opacity-70">
              <ShieldCheck size={14} className="mr-1.5" />
              Secure Encrypted Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
