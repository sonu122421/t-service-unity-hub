
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { AuthModal } from '@/components/AuthModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuthStore } from '@/store/authStore';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { 
  Heart, 
  Hospital, 
  FileText,
  Shield,
  CreditCard,
  UserCheck,
  Stethoscope,
  Calendar,
  Building,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

// Import service components
import { AarogyasriServices } from '@/components/health/AarogyasriServices';
import { HospitalAdmissionTracking } from '@/components/health/HospitalAdmissionTracking';
import { MedicalCertificateIssuance } from '@/components/health/MedicalCertificateIssuance';
import { COVIDVaccinationRecords } from '@/components/health/COVIDVaccinationRecords';
import { HealthCardApplications } from '@/components/health/HealthCardApplications';

const mainServices = [
  {
    id: 'aarogyasri',
    title: 'Aarogyasri Services',
    description: 'Check eligibility and benefits status',
    icon: Heart,
    color: 'bg-red-500',
    popular: true
  },
  {
    id: 'hospital-admission',
    title: 'Hospital Admission Tracking',
    description: 'Track patient admission status',
    icon: Hospital,
    color: 'bg-blue-500',
    popular: true
  },
  {
    id: 'medical-certificate',
    title: 'Medical Certificate Issuance',
    description: 'Issue official medical certificates',
    icon: FileText,
    color: 'bg-green-500',
    popular: true
  },
  {
    id: 'covid-vaccination',
    title: 'COVID Vaccination Records',
    description: 'Download vaccination certificates',
    icon: Shield,
    color: 'bg-purple-500',
    popular: true
  },
  {
    id: 'health-card',
    title: 'Health Card Applications',
    description: 'Apply for various health schemes',
    icon: CreditCard,
    color: 'bg-orange-500',
    popular: false
  }
];

const additionalServices = [
  {
    id: 'health-scheme-registration',
    title: 'Health Scheme Registration',
    description: 'Register for government health schemes',
    icon: UserCheck,
    color: 'bg-teal-500'
  },
  {
    id: 'medical-reimbursement',
    title: 'Medical Reimbursement Claims',
    description: 'Submit and track reimbursement claims',
    icon: FileText,
    color: 'bg-indigo-500'
  },
  {
    id: 'specialist-appointments',
    title: 'Specialist Appointments',
    description: 'Book appointments with specialists',
    icon: Stethoscope,
    color: 'bg-pink-500'
  },
  {
    id: 'diagnostic-center',
    title: 'Diagnostic Center Registrations',
    description: 'Register diagnostic centers',
    icon: Building,
    color: 'bg-cyan-500'
  }
];

const HealthServices = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showAdditionalServices, setShowAdditionalServices] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const { t } = useLanguage();

  const handleServiceClick = (serviceId: string) => {
    if (!isAuthenticated) {
      toast.error('Please log in to access this service');
      setIsAuthModalOpen(true);
      return;
    }
    setSelectedService(serviceId);
  };

  const renderServiceComponent = () => {
    if (!selectedService) return null;

    switch (selectedService) {
      case 'aarogyasri':
        return <AarogyasriServices onClose={() => setSelectedService(null)} />;
      case 'hospital-admission':
        return <HospitalAdmissionTracking onClose={() => setSelectedService(null)} />;
      case 'medical-certificate':
        return <MedicalCertificateIssuance onClose={() => setSelectedService(null)} />;
      case 'covid-vaccination':
        return <COVIDVaccinationRecords onClose={() => setSelectedService(null)} />;
      case 'health-card':
        return <HealthCardApplications onClose={() => setSelectedService(null)} />;
      default:
        return null;
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <Header onAuthClick={() => setIsAuthModalOpen(true)} />
        
        <main className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-12 h-12 text-red-600 mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Health Services
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive healthcare services and benefits provided by the Government of Telangana
            </p>
          </div>

          {/* Main Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <Hospital className="w-6 h-6 mr-2 text-red-600" />
              Main Services
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.id}
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-3 rounded-lg ${service.color} text-white group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        {service.popular && (
                          <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-500">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg font-semibold group-hover:text-red-700 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center text-red-600 group-hover:text-red-700 transition-colors">
                        <span className="text-sm font-medium">Access Service</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Additional Services */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <Stethoscope className="w-6 h-6 mr-2 text-red-600" />
                Additional Services
              </h2>
              <Button
                onClick={() => setShowAdditionalServices(!showAdditionalServices)}
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                {showAdditionalServices ? (
                  <>
                    Show Less <ChevronDown className="w-4 h-4 ml-2 rotate-180" />
                  </>
                ) : (
                  <>
                    View More <ChevronDown className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>

            {showAdditionalServices && (
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
                        <div className={`p-3 rounded-lg ${service.color} text-white group-hover:scale-110 transition-transform w-fit mb-2`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-base font-semibold group-hover:text-red-700 transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <div className="flex items-center text-red-600 group-hover:text-red-700 transition-colors">
                          <span className="text-sm font-medium">Access</span>
                          <ChevronRight className="w-3 h-3 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </section>

          {/* Service Information */}
          <section className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Required Documents</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Aadhaar Card</li>
                  <li>• Health Card (if applicable)</li>
                  <li>• Income Certificate</li>
                  <li>• Medical Reports</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Contact Support</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Helpline: +91-40-2345-6789</p>
                  <p>Email: health@telangana.gov.in</p>
                  <p>Hours: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        {renderServiceComponent()}
      </div>
    </PageTransition>
  );
};

export default HealthServices;
