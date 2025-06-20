import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { 
  Car, 
  FileText, 
  CreditCard, 
  Receipt, 
  Users, 
  Shield, 
  AlertTriangle,
  BookOpen,
  Award,
  Settings,
  Phone,
  Clipboard
} from 'lucide-react';
import { LearnerLicenseBooking } from '@/components/rta/LearnerLicenseBooking';
import { DrivingLicense } from '@/components/rta/DrivingLicense';
import { RoadTaxPayment } from '@/components/rta/RoadTaxPayment';
import { ChallanPayment } from '@/components/rta/ChallanPayment';

const mainServices = [
  {
    id: 'learners-license',
    title: "Learner's License Booking",
    description: 'Apply for learner\'s license with slot booking',
    icon: BookOpen,
    color: 'bg-blue-500',
    popular: true
  },
  {
    id: 'driving-license',
    title: 'Driving License',
    description: 'Apply, renew, duplicate, and manage DL',
    icon: Award,
    color: 'bg-green-500',
    popular: true
  },
  {
    id: 'road-tax',
    title: 'Road Tax Payment',
    description: 'Pay vehicle road tax online',
    icon: CreditCard,
    color: 'bg-orange-500',
    popular: true
  },
  {
    id: 'challan-payment',
    title: 'Challan Payment',
    description: 'Pay traffic challans and view history',
    icon: Receipt,
    color: 'bg-red-500',
    popular: true
  }
];

const additionalServices = [
  {
    id: 'vehicle-transfer',
    title: 'Vehicle Transfer of Ownership',
    description: 'Transfer vehicle ownership',
    icon: Users,
    color: 'bg-purple-500'
  },
  {
    id: 'vehicle-registration',
    title: 'Vehicle Registration',
    description: 'Register new vehicle',
    icon: Car,
    color: 'bg-teal-500'
  },
  {
    id: 'fancy-number',
    title: 'Fancy Number Booking',
    description: 'Book special vehicle numbers',
    icon: Phone,
    color: 'bg-pink-500'
  },
  {
    id: 'fitness-certificate',
    title: 'Vehicle Fitness Certificate',
    description: 'Get vehicle fitness certificate',
    icon: Shield,
    color: 'bg-indigo-500'
  },
  {
    id: 'pollution-certificate',
    title: 'Pollution Certificate',
    description: 'Pollution under control certificate',
    icon: AlertTriangle,
    color: 'bg-yellow-500'
  }
];

const RTAServices = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  const renderServiceComponent = () => {
    switch (selectedService) {
      case 'learners-license':
        return <LearnerLicenseBooking onBack={handleBackToServices} />;
      case 'driving-license':
        return <DrivingLicense onBack={handleBackToServices} />;
      case 'road-tax':
        return <RoadTaxPayment onBack={handleBackToServices} />;
      case 'challan-payment':
        return <ChallanPayment onBack={handleBackToServices} />;
      default:
        return null;
    }
  };

  if (selectedService) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="bg-gray-50">
          {renderServiceComponent()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              RTA Transport Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete online portal for all your vehicle and license related services. 
              Quick, secure, and hassle-free processing.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mainServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg ${service.color} text-white group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {service.popular && (
                        <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-500">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-purple-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Services */}
          <div className="text-center mb-8">
            <Button 
              onClick={() => setShowMore(!showMore)}
              variant="outline"
              className="bg-purple-600 text-white hover:bg-purple-700 border-purple-600"
            >
              {showMore ? 'Show Less' : 'View More Services'}
            </Button>
          </div>

          {showMore && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {additionalServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.id}
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                    onClick={() => console.log(`${service.title} clicked - Coming Soon!`)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-lg ${service.color} text-white group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge variant="outline" className="text-gray-500">
                          Coming Soon
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold group-hover:text-purple-700 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Information Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Important Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Required Documents</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Aadhaar Card (Original + Photocopy)</li>
                  <li>• Age Proof (Birth Certificate/10th Certificate)</li>
                  <li>• Address Proof (Aadhaar/Utility Bill)</li>
                  <li>• Passport Size Photographs</li>
                  <li>• Medical Certificate (if applicable)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Support & Helpline</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>📞 Helpline: 040-2345-6789</p>
                  <p>📧 Email: support@tsrta.gov.in</p>
                  <p>🕒 Office Hours: 10:00 AM - 5:00 PM</p>
                  <p>📱 WhatsApp: +91-9876543210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTAServices;
