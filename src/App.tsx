/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:slug" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          {/* Fallback mock routes */}
          <Route path="about" element={<div className="py-32 text-center text-3xl font-serif">About Us (Coming Soon)</div>} />
          <Route path="contact" element={<div className="py-32 text-center text-3xl font-serif">Contact (Coming Soon)</div>} />
          <Route path="account" element={<div className="py-32 text-center text-3xl font-serif">Account Login (Coming Soon)</div>} />
          <Route path="*" element={<div className="py-32 text-center text-3xl font-serif">Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

