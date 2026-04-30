import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col pt-safe px-safe pb-safe bg-[#F8F1E9]">
      <Navbar />
      <main className="flex-1 w-full max-w-[1440px] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
