import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="min-vh-100 position-relative overflow-hidden">
      <div
        className="global-bg position-fixed top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('/images/backgrounds/programs.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2,
          pointerEvents: 'none',
        }}
      />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
