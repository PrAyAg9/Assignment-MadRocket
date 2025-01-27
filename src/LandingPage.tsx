// LandingPage.tsx
import React from 'react';
import  Navbar  from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import Footer from './components/Footer';
import LeftSidebar from './components/LeftSidebar';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <LeftSidebar />
      <main className="ml-64 pt-[57px] p-6">
        <Hero/>
      </main>
    </div>
  );
}

export default LandingPage;
