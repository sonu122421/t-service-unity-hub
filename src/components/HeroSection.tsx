
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-purple-700 via-blue-800 to-indigo-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={onGetStarted}
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              {t('hero.getStarted')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Trusted</h3>
              <p className="text-blue-100">Government-grade security for all your transactions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Available</h3>
              <p className="text-blue-100">Access services anytime, anywhere</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Citizen Friendly</h3>
              <p className="text-blue-100">Designed with citizens in mind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
