
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Heart, 
  DollarSign, 
  Users, 
  Home,
  CreditCard,
  HeartHandshake,
  Shield,
  PenTool,
  ChevronDown,
  ChevronUp,
  CheckCircle
} from 'lucide-react';
import { ServiceForm } from '@/components/ServiceForm';
import { ApplicationStatus } from '@/components/ApplicationStatus';

const mainServices = [
  {
    id: 'birth-certificate',
    title: 'Birth Certificate Services',
    description: 'Apply for official birth certificates',
    icon: FileText,
    color: 'bg-blue-500',
  },
  {
    id: 'death-certificate',
    title: 'Death Certificate Services',
    description: 'Apply for official death certificates',
    icon: Heart,
    color: 'bg-red-500',
  },
  {
    id: 'income-certificate',
    title: 'Income Certificate Issuance',
    description: 'Get income verification certificates',
    icon: DollarSign,
    color: 'bg-green-500',
  },
  {
    id: 'caste-certificate',
    title: 'Caste Certificate Issuance',
    description: 'Apply for caste verification certificates',
    icon: Users,
    color: 'bg-orange-500',
  },
  {
    id: 'residential-certificate',
    title: 'Residential Certificate',
    description: 'Get residential address verification',
    icon: Home,
    color: 'bg-purple-500',
  },
];

const additionalServices = [
  {
    id: 'echallan-payments',
    title: 'eChallan Payments',
    description: 'Pay traffic fines and challans online',
    icon: CreditCard,
    color: 'bg-indigo-500',
  },
  {
    id: 'marriage-certificate',
    title: 'Marriage Certificate',
    description: 'Apply for marriage registration certificates',
    icon: HeartHandshake,
    color: 'bg-pink-500',
  },
  {
    id: 'certificate-verification',
    title: 'Certificate Verification',
    description: 'Verify authenticity of certificates',
    icon: Shield,
    color: 'bg-teal-500',
  },
  {
    id: 'digital-signature',
    title: 'Digital Signature Applications',
    description: 'Apply for digital signature certificates',
    icon: PenTool,
    color: 'bg-yellow-500',
  },
];

const MeeSeva = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showStatusDialog, setShowStatusDialog] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleCloseForm = () => {
    setSelectedService(null);
  };

  const allServices = [...mainServices, ...additionalServices];
  const selectedServiceData = allServices.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            MeeSeva Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access various government certificate services online. Apply, track, and manage your applications seamlessly.
          </p>
        </div>

        {/* Main Services */}
        <section className="mb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {mainServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardHeader className="pb-3">
                    <div className={`p-4 rounded-lg ${service.color} text-white group-hover:scale-110 transition-transform mx-auto w-fit`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-purple-700 transition-colors text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* View More Button */}
        <div className="text-center mb-8">
          <Button
            onClick={() => setShowMore(!showMore)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {showMore ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                View Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                View More Services
              </>
            )}
          </Button>
        </div>

        {/* Additional Services */}
        {showMore && (
          <section className="mb-12 animate-fade-in">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.id}
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className={`p-4 rounded-lg ${service.color} text-white group-hover:scale-110 transition-transform mx-auto w-fit`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-lg font-semibold group-hover:text-purple-700 transition-colors text-center">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed text-center">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Service Form Modal */}
        {selectedService && selectedServiceData && (
          <ServiceForm
            service={selectedServiceData}
            isOpen={!!selectedService}
            onClose={handleCloseForm}
          />
        )}

        {/* Application Status Modal */}
        <ApplicationStatus
          isOpen={showStatusDialog}
          onClose={() => setShowStatusDialog(false)}
        />

        {/* Floating Application Status Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={() => setShowStatusDialog(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Application Status</span>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MeeSeva;
