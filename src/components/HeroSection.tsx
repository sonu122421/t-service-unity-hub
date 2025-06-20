
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              GOVERNMENT OF<br />
              TELANGANA
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-yellow-300">
              Unified Citizen Services Portal
            </h2>
            
            <p className="text-lg lg:text-xl text-purple-100 leading-relaxed max-w-lg">
              One app for all your government services. Access Dharani, 
              MeeSeva, T-Wallet, TS-bPASS and more through a single unified 
              platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={onGetStarted}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg rounded-full flex items-center"
              >
                Access Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-800 px-8 py-3 text-lg rounded-full flex items-center"
              >
                Download App
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* User count */}
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-purple-600"></div>
                <div className="w-8 h-8 rounded-full bg-white border-2 border-purple-600"></div>
                <div className="w-8 h-8 rounded-full bg-white border-2 border-purple-600"></div>
                <div className="w-8 h-8 rounded-full bg-white border-2 border-purple-600"></div>
              </div>
              <div className="text-white">
                <span className="font-bold">1M+</span> citizens already using T-Service App
              </div>
            </div>
          </div>

          {/* Right side - App mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl max-w-sm w-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* App header */}
                  <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">T-Service</h3>
                  </div>

                  {/* App buttons */}
                  <div className="space-y-3">
                    <div className="bg-green-500 text-white p-4 rounded-lg text-center font-semibold">
                      Access Services
                    </div>
                    <div className="bg-blue-500 text-white p-4 rounded-lg text-center font-semibold">
                      Download App
                    </div>
                  </div>

                  {/* App features */}
                  <div className="text-center text-gray-600 text-sm space-y-2">
                    <p>✓ All government services in one place</p>
                    <p>✓ Secure Aadhaar-based authentication</p>
                    <p>✓ Real-time service tracking</p>
                    <p>✓ Multiple language support</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating "New" badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              New
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
