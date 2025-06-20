
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PopularServices } from '@/components/PopularServices';
import { ServiceCategories } from '@/components/ServiceCategories';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      
      <main>
        <HeroSection onGetStarted={scrollToServices} />
        <div id="services">
          <PopularServices />
        </div>
        <div id="features">
          <ServiceCategories />
        </div>
      </main>

      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Index;
