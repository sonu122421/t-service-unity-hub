
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home,
  Bank,
  Briefcase,
  Book,
  Health,
  Housing,
  Justice,
  Science,
  Skills,
  Women,
  Sports,
  Transport,
  Travel,
  Utility
} from 'lucide-react';

const schemes = [
  {
    title: 'Agriculture, Rural & Environment',
    schemes: '523 Schemes',
    icon: Home,
    color: 'bg-green-50 border-green-200 hover:border-green-400',
    iconColor: 'text-green-600 bg-green-100'
  },
  {
    title: 'Banking, Financial Services and Insurance',
    schemes: '226 Schemes',
    icon: Bank,
    color: 'bg-orange-50 border-orange-200 hover:border-orange-400',
    iconColor: 'text-orange-600 bg-orange-100'
  },
  {
    title: 'Business & Entrepreneurship',
    schemes: '518 Schemes',
    icon: Briefcase,
    color: 'bg-purple-50 border-purple-200 hover:border-purple-400',
    iconColor: 'text-purple-600 bg-purple-100'
  },
  {
    title: 'Education & Learning',
    schemes: '881 Schemes',
    icon: Book,
    color: 'bg-pink-50 border-pink-200 hover:border-pink-400',
    iconColor: 'text-pink-600 bg-pink-100'
  },
  {
    title: 'Health & Wellness',
    schemes: '216 Schemes',
    icon: Health,
    color: 'bg-green-50 border-green-200 hover:border-green-400',
    iconColor: 'text-green-600 bg-green-100'
  },
  {
    title: 'Housing & Shelter',
    schemes: '99 Schemes',
    icon: Housing,
    color: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    iconColor: 'text-blue-600 bg-blue-100'
  },
  {
    title: 'Public Safety, Law & Justice',
    schemes: '10 Schemes',
    icon: Justice,
    color: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    iconColor: 'text-blue-600 bg-blue-100'
  },
  {
    title: 'Science, IT & Communications',
    schemes: '71 Schemes',
    icon: Science,
    color: 'bg-orange-50 border-orange-200 hover:border-orange-400',
    iconColor: 'text-orange-600 bg-orange-100'
  },
  {
    title: 'Skills & Employment',
    schemes: '287 Schemes',
    icon: Skills,
    color: 'bg-red-50 border-red-200 hover:border-red-400',
    iconColor: 'text-red-600 bg-red-100'
  },
  {
    title: 'Social welfare & Empowerment',
    schemes: '1321 Schemes',
    icon: Women,
    color: 'bg-purple-50 border-purple-200 hover:border-purple-400',
    iconColor: 'text-purple-600 bg-purple-100'
  },
  {
    title: 'Sports & Culture',
    schemes: '131 Schemes',
    icon: Sports,
    color: 'bg-green-50 border-green-200 hover:border-green-400',
    iconColor: 'text-green-600 bg-green-100'
  },
  {
    title: 'Transport & Infrastructure',
    schemes: '53 Schemes',
    icon: Transport,
    color: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    iconColor: 'text-blue-600 bg-blue-100'
  },
  {
    title: 'Travel & Tourism',
    schemes: '38 Schemes',
    icon: Travel,
    color: 'bg-orange-50 border-orange-200 hover:border-orange-400',
    iconColor: 'text-orange-600 bg-orange-100'
  },
  {
    title: 'Utility & Sanitation',
    schemes: '35 Schemes',
    icon: Utility,
    color: 'bg-red-50 border-red-200 hover:border-red-400',
    iconColor: 'text-red-600 bg-red-100'
  },
  {
    title: 'Women and Child',
    schemes: '383 Schemes',
    icon: Women,
    color: 'bg-green-50 border-green-200 hover:border-green-400',
    iconColor: 'text-green-600 bg-green-100'
  }
];

export const Schemes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-between items-center mb-6">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center">
                Schemes
              </h2>
            </div>
            <Button 
              variant="ghost" 
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              View All
            </Button>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of government schemes organized by Telangana Government. 
            Find what you need quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme, index) => {
            const IconComponent = scheme.icon;
            return (
              <Card 
                key={index}
                className={`border-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 ${scheme.color}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-3">
                    <div className={`p-3 rounded-lg ${scheme.iconColor}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                        {scheme.title}
                      </CardTitle>
                      <p className="text-orange-600 font-medium text-sm">
                        {scheme.schemes}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
