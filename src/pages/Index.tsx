
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PopularServices } from '@/components/PopularServices';
import { ServiceCategories } from '@/components/ServiceCategories';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      
      <main>
        <HeroSection onGetStarted={() => setIsAuthModalOpen(true)} />
        <PopularServices />
        <ServiceCategories />
      </main>

      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Index;
