
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  MapPin, 
  DollarSign, 
  Calendar,
  User,
  Users,
  Home,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Eye,
  RefreshCw,
  BookOpen,
  CreditCard,
  Map,
  RotateCcw,
  FileCheck,
  Navigation
} from 'lucide-react';
import { ViewLandRecords } from '@/components/dharani/ViewLandRecords';
import { MutationServices } from '@/components/dharani/MutationServices';
import { PassbookStatus } from '@/components/dharani/PassbookStatus';
import { FarmerLoanDetails } from '@/components/dharani/FarmerLoanDetails';

const mainServices = [
  {
    id: 'view-records',
    title: 'View Land Records',
    description: 'Access comprehensive land record information',
    icon: Eye,
    color: 'bg-blue-500',
    popular: true
  },
  {
    id: 'mutation',
    title: 'Mutation Services',
    description: 'Update ownership and property details',
    icon: RefreshCw,
    color: 'bg-green-500',
    popular: true
  },
  {
    id: 'passbook',
    title: 'Passbook Issuance',
    description: 'Get your land passbook issued',
    icon: BookOpen,
    color: 'bg-purple-500',
    popular: true
  },
  {
    id: 'farmer-loan',
    title: 'Farmer Loan Details',
    description: 'Check loan eligibility based on land holdings',
    icon: CreditCard,
    color: 'bg-orange-500',
    popular: false
  }
];

const additionalServices = [
  {
    id: 'encumbrance',
    title: 'Encumbrance Certificate',
    description: 'Apply for property encumbrance certificate',
    icon: FileCheck,
    color: 'bg-indigo-500'
  },
  {
    id: 'survey',
    title: 'Survey/Resurvey',
    description: 'Request land survey and resurvey services',
    icon: Map,
    color: 'bg-teal-500'
  },
  {
    id: 'gis-mapping',
    title: 'GIS Mapping View',
    description: 'Access geographical information system mapping',
    icon: Navigation,
    color: 'bg-cyan-500'
  },
  {
    id: 'land-conversion',
    title: 'Land Conversion',
    description: 'Apply for land use conversion',
    icon: RotateCcw,
    color: 'bg-pink-500'
  },
  {
    id: 'succession',
    title: 'Succession Updates',
    description: 'Update property succession details',
    icon: Users,
    color: 'bg-red-500'
  }
];

const Dharani = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [showAdditionalServices, setShowAdditionalServices] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const renderServiceContent = () => {
    switch (activeService) {
      case 'view-records':
        return <ViewLandRecords />;
      case 'mutation':
        return <MutationServices />;
      case 'passbook':
        return <PassbookStatus />;
      case 'farmer-loan':
        return <FarmerLoanDetails />;
      default:
        return null;
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Dharani Land Records Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive land recor` management and services for farmers and landowners
            </p>
          </div>

          {/* Main Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Main Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {mainServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.id}
                    className={`hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 ${
                      activeService === service.id ? 'ring-2 ring-purple-500 bg-purple-50' : ''
                    }`}
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
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center text-purple-600 text-sm font-medium">
                        Access Service
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Service Content */}
            {activeService && (
              <div className="mt-8 animate-fade-in">
                {renderServiceContent()}
              </div>
            )}
          </section>

          {/* Additional Services */}
          <section className="mb-12">
            <div className="text-center mb-6">
              <Button
                onClick={() => setShowAdditionalServices(!showAdditionalServices)}
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                {showAdditionalServices ? 'Hide' : 'View More'} Additional Services
                {showAdditionalServices ? (
                  <ChevronUp className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 ml-2" />
                )}
              </Button>
            </div>

            {showAdditionalServices && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Additional Services</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {additionalServices.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Card 
                        key={service.id}
                        className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                        onClick={() => console.log(`Additional service clicked: ${service.id}`)}
                      >
                        <CardHeader className="pb-3">
                          <div className={`p-3 rounded-lg ${service.color} text-white group-hover:scale-110 transition-transform w-fit`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <CardTitle className="text-lg font-semibold group-hover:text-purple-700 transition-colors">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            {service.description}
                          </p>
                          <div className="flex items-center text-purple-600 text-sm font-medium">
                            Coming Soon
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* Quick Stats */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Dharani Services Overview</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Land Records</h4>
                <p className="text-gray-600 text-sm">Digital land documentation</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <RefreshCw className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Mutations</h4>
                <p className="text-gray-600 text-sm">Ownership transfers</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Passbooks</h4>
                <p className="text-gray-600 text-sm">Land ownership documents</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-800">Loans</h4>
                <p className="text-gray-600 text-sm">Farmer loan eligibility</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Dharani;
