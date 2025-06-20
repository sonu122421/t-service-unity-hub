
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  School, 
  FileText, 
  CreditCard,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Users,
  Download,
  MapPin,
  Phone
} from 'lucide-react';
import { ScholarshipServices } from '@/components/education/ScholarshipServices';
import { AdmissionServices } from '@/components/education/AdmissionServices';
import { DigitalMarkSheets } from '@/components/education/DigitalMarkSheets';
import { TransferCertificates } from '@/components/education/TransferCertificates';
import { ApplicationStatusTracker } from '@/components/education/ApplicationStatusTracker';

const mainServices = [
  {
    id: 'scholarship-applications',
    title: 'Scholarship Applications',
    description: 'Apply for government scholarship schemes',
    icon: GraduationCap,
    color: 'bg-blue-500',
  },
  {
    id: 'admission-services',
    title: 'Admission Services',
    description: 'School and intermediate admission services',
    icon: School,
    color: 'bg-green-500',
  },
  {
    id: 'digital-mark-sheets',
    title: 'Digital Mark Sheets',
    description: 'Download 10th, 11th, 12th mark sheets',
    icon: FileText,
    color: 'bg-purple-500',
  },
  {
    id: 'transfer-certificates',
    title: 'Transfer Certificates',
    description: 'Download official transfer certificates',
    icon: CreditCard,
    color: 'bg-orange-500',
  },
];

const additionalServices = [
  {
    id: 'application-status',
    title: 'Application Status Tracking',
    description: 'Track your education application status',
    icon: CheckCircle,
    color: 'bg-indigo-500',
  },
  {
    id: 'hall-tickets',
    title: 'Exam Hall Ticket Downloads',
    description: 'Download exam hall tickets',
    icon: Download,
    color: 'bg-red-500',
  },
  {
    id: 'counselling',
    title: 'Online Counselling Services',
    description: 'Access online counselling services',
    icon: Users,
    color: 'bg-teal-500',
  },
  {
    id: 'coaching-admission',
    title: 'Coaching Admission Services',
    description: 'Apply for coaching center admissions',
    icon: MapPin,
    color: 'bg-pink-500',
  },
];

const EducationServices = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showStatusDialog, setShowStatusDialog] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleCloseService = () => {
    setSelectedService(null);
  };

  const allServices = [...mainServices, ...additionalServices];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Education Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access various education services online. Apply for scholarships, admissions, download certificates and track your applications seamlessly.
            </p>
          </div>

          {/* Main Services */}
          <section className="mb-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* Service Components */}
          {selectedService === 'scholarship-applications' && (
            <ScholarshipServices onClose={handleCloseService} />
          )}
          {selectedService === 'admission-services' && (
            <AdmissionServices onClose={handleCloseService} />
          )}
          {selectedService === 'digital-mark-sheets' && (
            <DigitalMarkSheets onClose={handleCloseService} />
          )}
          {selectedService === 'transfer-certificates' && (
            <TransferCertificates onClose={handleCloseService} />
          )}
          {selectedService === 'application-status' && (
            <ApplicationStatusTracker onClose={handleCloseService} />
          )}

          {/* Application Status Modal */}
          <ApplicationStatusTracker
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
    </PageTransition>
  );
};

export default EducationServices;
