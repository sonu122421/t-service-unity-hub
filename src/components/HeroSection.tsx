
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20 lg:py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                GOVERNMENT OF<br />TELANGANA
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-yellow-300">
                Unified Citizen Services Portal
              </h2>
              <p className="text-lg lg:text-xl text-purple-100 leading-relaxed max-w-2xl">
                One app for all your government services. Access Dharani, MeeSeva, T-Wallet, TS-bPASS and more through a single unified platform.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onGetStarted}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Access Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Usage stats */}
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-white rounded-full border-2 border-purple-600"></div>
                <div className="w-10 h-10 bg-white rounded-full border-2 border-purple-600"></div>
                <div className="w-10 h-10 bg-white rounded-full border-2 border-purple-600"></div>
                <div className="w-10 h-10 bg-purple-400 rounded-full border-2 border-purple-600 flex items-center justify-center text-white text-sm font-bold">+</div>
              </div>
              <p className="text-purple-100 font-medium">
                <span className="text-white font-bold">1M+</span> citizens already using T-Service App
              </p>
            </div>
          </div>

          {/* Right side - Service card */}
          <div className="relative">
            {/* "New" badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold z-10">
              New
            </div>
            
            {/* Main service card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {/* Telangana Government Logo */}
              <div className="text-center mb-8">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Emblem_of_Telangana.svg/1200px-Emblem_of_Telangana.svg.png" 
                  alt="Government of Telangana" 
                  className="h-20 w-20 object-contain mx-auto"
                />
              </div>

              {/* Action buttons */}
              <div className="space-y-4 mb-8">
                <Button 
                  onClick={onGetStarted}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Access Services
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Download App
                </Button>
              </div>

              {/* Features list */}
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>All government services in one place</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Secure Aadhaar-based authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Real-time service tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Multiple language support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
