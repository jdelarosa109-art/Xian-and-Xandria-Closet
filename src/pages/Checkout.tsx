import React, { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { Lock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const { items, subtotal, clearCart } = useCartStore();
  const [isSuccess, setIsSuccess] = useState(false);

  const total = subtotal();
  const shipping = total > 150 ? 0 : 15;
  const taxes = total * 0.08; // Mock 8% tax
  const finalTotal = total + shipping + taxes;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-24 text-center max-w-xl text-[#8B7355]">
        <div className="w-20 h-20 bg-[#A8D5BA]/20 text-[#A8D5BA] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h1 className="font-serif text-4xl mb-4 text-[#D4A574]">Order Confirmed!</h1>
        <p className="opacity-80 mb-8 leading-relaxed text-sm">
          Thank you for shopping with Xian & Xandria Closet. Your order #XX-{Math.floor(Math.random() * 10000)} has been received and is being processed. 
          We'll send you a confirmation email shortly.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-[#D4A574] hover:bg-[#8B7355] text-white py-4 px-10 transition-colors duration-300 font-semibold uppercase tracking-[0.2em] text-[10px]"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center text-[#8B7355]">
        <h1 className="font-serif text-3xl mb-4 text-[#D4A574]">Your cart is empty</h1>
        <Link to="/shop" className="underline opacity-80 hover:opacity-100">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl text-[#8B7355]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Checkout Form */}
        <div className="flex-1">
          <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-10">
            
            {/* Contact Info */}
            <section>
              <h2 className="text-xl font-serif text-[#D4A574] border-b border-[#D4A574]/30 pb-3 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-[#D4A574]/30 bg-transparent text-[#8B7355] placeholder-[#8B7355]/40 focus:outline-none focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]" />
                </div>
                <div className="flex items-center mt-2">
                  <input type="checkbox" id="newsletter" className="w-4 h-4 text-[#D4A574] border-[#D4A574]/30 bg-transparent rounded-sm focus:ring-[#D4A574]" />
                  <label htmlFor="newsletter" className="ml-2 text-xs opacity-80 uppercase tracking-widest">Keep me up to date on news and exclusive offers</label>
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="text-xl font-serif text-[#D4A574] border-b border-[#D4A574]/30 pb-3 mb-6">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <input required type="text" placeholder="First Name" className="w-full px-4 py-3 border border-[#D4A574]/30 bg-transparent text-[#8B7355] placeholder-[#8B7355]/40 focus:outline-none focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <input required type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-[#D4A574]/30 bg-transparent text-[#8B7355] placeholder-[#8B7355]/40 focus:outline-none focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]" />
                </div>
                <div className="col-span-2">
                  <input required type="text" placeholder="Address" className="w-full px-4 py-3 border border-[#D4A574]/30 bg-transparent text-[#8B7355] placeholder-[#8B7355]/40 focus:outline-none focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]" />
                </div>
                <div className="col-span-2">
                  <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full px-4 py-3 border border-[#D4A574]/30 bg-transparent text-[#8B7355] placeholder-[#8B7355]/40 focus:outline-none focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <input required type="text" placeholder="City" className="w-full px-4 py-3 border border-[#D4A574]/30 bg-transparent text-[#8B7355] placeholder-[#8B7355]/40 focus:outline-none focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]" />
                </div>
                <div className="col-span-1 sm:col-span-1">
                  <input required type="text" placeholder="State/Province" className="w-full px-4 py-3 border border-[#D4A574]/30 bg-transparent text-[#8B7355] placeholder-[#8B7355]/40 focus:outline-none focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]" />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <input required type="text" placeholder="ZIP/Postal Code" className="w-full px-4 py-3 border border-[#D4A574]/30 bg-transparent text-[#8B7355] placeholder-[#8B7355]/40 focus:outline-none focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]" />
                </div>
              </div>
            </section>

            {/* Payment Integration Mockup */}
            <section>
              <h2 className="text-xl font-serif text-[#D4A574] border-b border-[#D4A574]/30 pb-3 mb-6">Payment</h2>
              <div className="bg-transparent border text-center opacity-70 border-[#D4A574]/30 p-6 flex flex-col items-center justify-center space-y-4">
                 <CreditCard size={32} className="text-[#D4A574]" />
                 <p className="text-xs uppercase tracking-widest">This is a frontend demo. The actual application would integrate Stripe Elements here for secure payment processing.</p>
              </div>
            </section>

          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-[420px] flex-shrink-0 mt-10 lg:mt-0">
          <div className="bg-[#E5DCD3]/50 p-6 md:p-8 border border-[#D4A574]/30 sticky top-28">
            <h2 className="text-lg font-serif mb-6 text-[#D4A574]">Order Summary</h2>
            
            <div className="space-y-4 mb-6 border-b border-[#D4A574]/30 pb-6 max-h-[300px] overflow-y-auto pr-2">
              {items.map(item => (
                <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-4">
                  <div className="relative w-16 h-20 bg-white overflow-hidden flex-shrink-0 border border-[#D4A574]/20 p-1">
                    <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                    <span className="absolute -top-1 -right-1 bg-[#D4A574] text-white text-[9px] w-5 h-5 flex items-center justify-center rounded-full z-10">{item.quantity}</span>
                  </div>
                  <div className="flex-1 flex justify-between text-sm">
                    <div>
                      <p className="font-serif leading-tight mb-1 text-[#D4A574]">{item.product.name}</p>
                      <p className="text-[10px] uppercase tracking-widest opacity-70">{item.selectedColor} / {item.selectedSize}</p>
                    </div>
                    <p className="font-medium font-serif text-[#D4A574]">${((item.product.salePrice ?? item.product.price) * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 border-b border-[#D4A574]/30 pb-6 text-sm opacity-80 uppercase tracking-widest text-[10px]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Taxes</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8 font-serif">
              <span className="text-lg">Total</span>
              <span className="text-2xl">${finalTotal.toFixed(2)}</span>
            </div>

            <button 
              type="submit"
              form="checkout-form"
              className="w-full bg-[#D4A574] hover:bg-[#8B7355] text-white flex items-center justify-center gap-2 py-4 transition-colors duration-300 font-semibold uppercase tracking-[0.2em] text-[10px] mb-4"
            >
              <Lock size={14} /> Pay ${finalTotal.toFixed(2)}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
