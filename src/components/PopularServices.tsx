import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Home, 
  Car, 
  Wallet, 
  GraduationCap, 
  Heart,
  Briefcase,
  Shield
} from 'lucide-react';

const services = [
  {
    id: 'meeseva',
    title: 'MeeSeva',
    description: 'Birth, Death, Income, Caste certificates',
    icon: FileText,
    color: 'bg-blue-500',
    popular: true,
    route: '/meeseva'
  },
  {
    id: 'dharani',
    title: 'Dharani',
    description: 'Land records, mutations, passbooks',
    icon: Home,
    color: 'bg-green-500',
    popular: true,
    route: '/dharani'
  },
  {
    id: 'rta',
    title: 'RTA Services',
    description: 'Vehicle registration, driving license',
    icon: Car,
    color: 'bg-orange-500',
    popular: true,
    route: null
  },
  {
    id: 'twallet',
    title: 'T-Wallet',
    description: 'Digital payments and transactions',
    icon: Wallet,
    color: 'bg-purple-500',
    popular: true,
    route: '/twallet-services'
  },
  {
    id: 'education',
    title: 'Education Services',
    description: 'Scholarships, admissions, certificates',
    icon: GraduationCap,
    color: 'bg-indigo-500',
    popular: false,
    route: null
  },
  {
    id: 'health',
    title: 'Health Services',
    description: 'Aarogyasri, medical certificates',
    icon: Heart,
    color: 'bg-red-500',
    popular: false,
    route: null
  },
  {
    id: 'employment',
    title: 'Employment',
    description: 'Job registration, unemployment allowance',
    icon: Briefcase,
    color: 'bg-teal-500',
    popular: false,
    route: null
  },
  {
    id: 'welfare',
    title: 'Welfare Schemes',
    description: 'Pensions, subsidies, social security',
    icon: Shield,
    color: 'bg-pink-500',
    popular: false,
    route: null
  }
];

export const PopularServices = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.route) {
      navigate(service.route);
    } else {
      console.log(`Service clicked: ${service.id}`);
      // Handle other service clicks here
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Popular Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick access to the most commonly used government services. 
            Everything you need, all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                onClick={() => handleServiceClick(service)}
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

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};
