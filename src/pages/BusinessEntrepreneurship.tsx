
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import { PageTransition } from '@/components/PageTransition';
import { BusinessSchemesList } from '@/components/business/BusinessSchemesList';
import { BusinessSchemeModal } from '@/components/business/BusinessSchemeModal';
import { BusinessApplicationForm } from '@/components/business/BusinessApplicationForm';
import { BusinessApplicationStatus } from '@/components/business/BusinessApplicationStatus';
import { useLanguage } from '@/contexts/LanguageContext';

export interface BusinessScheme {
  id: string;
  name: string;
  category: string;
  description: string;
  eligibility: string[];
  documents: string[];
  benefits?: string[];
  fundingRange?: string;
  applicationProcess?: string;
  type: 'incubation' | 'funding' | 'licensing' | 'training' | 'grant';
}

const BusinessEntrepreneurship = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState<BusinessScheme | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showApplicationStatus, setShowApplicationStatus] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleSchemeSelect = (scheme: BusinessScheme) => {
    setSelectedScheme(scheme);
  };

  const handleApplyNow = () => {
    setShowApplicationForm(true);
  };

  const handleFormSubmit = (applicationId: string) => {
    setApplicationId(applicationId);
    setShowApplicationForm(false);
    setShowApplicationStatus(true);
  };

  const handleCloseModal = () => {
    setSelectedScheme(null);
    setShowApplicationForm(false);
    setShowApplicationStatus(false);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header onAuthClick={() => setIsAuthModalOpen(true)} />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8">
              Business & Entrepreneurship Support Programs
            </h1>
            
            <BusinessSchemesList onSchemeSelect={handleSchemeSelect} />
          </div>
        </main>

        <Footer />
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        
        {selectedScheme && !showApplicationForm && !showApplicationStatus && (
          <BusinessSchemeModal 
            scheme={selectedScheme} 
            onClose={handleCloseModal}
            onApplyNow={handleApplyNow}
          />
        )}
        
        {showApplicationForm && selectedScheme && (
          <BusinessApplicationForm 
            scheme={selectedScheme}
            onClose={handleCloseModal}
            onSubmit={handleFormSubmit}
          />
        )}
        
        {showApplicationStatus && applicationId && (
          <BusinessApplicationStatus 
            applicationId={applicationId}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </PageTransition>
  );
};

export default BusinessEntrepreneurship;
