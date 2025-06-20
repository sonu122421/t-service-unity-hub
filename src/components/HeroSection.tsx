
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Smartphone, FileText, Globe } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-yellow-300">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Government of Telangana</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Unified Citizen Services Portal
            </h1>
            
            <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed">
              Access all government services through a single platform. 
              Secure, fast, and designed for every citizen of Telangana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={onGetStarted}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-purple-800 font-semibold px-8 py-3 text-lg"
              >
                Get Started Now
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-800 px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">50L+</div>
                <div className="text-sm text-purple-200">Citizens Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-purple-200">Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-purple-200">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-purple-200">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LPgMSCXDqdmaLGRK8YZc2GbLwEIKXX_LcQ&s" 
                      alt="Sri A. Revanth Reddy" 
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white/20"
                    />
                    <h3 className="text-xl font-bold mb-2">T-Service App</h3>
                    <p className="text-purple-100 mb-6">Your gateway to all government services</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-yellow-300" />
                      <span>Mobile-First Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-yellow-300" />
                      <span>Aadhaar-based Authentication</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-yellow-300" />
                      <span>DigiLocker Integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-yellow-300" />
                      <span>Multi-language Support</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Download
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-800">
                      Web App
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
