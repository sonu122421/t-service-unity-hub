
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PopularServices } from '@/components/PopularServices';
import { ServiceCategories } from '@/components/ServiceCategories';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  TrendingUp, 
  Award, 
  MessageSquare,
  Calendar,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const successStories = [
    { citizen: 'Rajesh Kumar', service: 'Income Certificate', time: '2 hours', rating: 5 },
    { citizen: 'Priya Sharma', service: 'Land Registration', time: '1 day', rating: 5 },
    { citizen: 'Mohammed Ali', service: 'Business License', time: '3 hours', rating: 4 },
  ];

  const newsUpdates = [
    { title: 'New Digital Services Launched', date: '2024-12-18', category: 'Launch' },
    { title: 'System Maintenance Schedule', date: '2024-12-17', category: 'Notice' },
    { title: 'Holiday Service Hours', date: '2024-12-16', category: 'Info' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onAuthClick={() => setIsAuthModalOpen(true)} />
      
      <main>
        <HeroSection onGetStarted={() => setIsAuthModalOpen(true)} />
        <PopularServices />
        <ServiceCategories />
        
        {/* Vision & Impact Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Vision & Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming governance through digital innovation, making services accessible to every citizen
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">50L+</h3>
                  <p className="text-gray-600">Citizens Served</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">95%</h3>
                  <p className="text-gray-600">Service Efficiency</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">4.8/5</h3>
                  <p className="text-gray-600">Citizen Satisfaction</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">24/7</h3>
                  <p className="text-gray-600">Support Available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Citizen Success Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Citizen Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real experiences from our citizens who have benefited from T-Service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-800">{story.citizen}</h4>
                      <div className="flex">
                        {[...Array(story.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">
                      "Got my {story.service} in just {story.time}. The process was seamless and user-friendly."
                    </p>
                    <Badge className="bg-green-100 text-green-800">
                      Completed in {story.time}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Grievance Redressal */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Grievance Redressal
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We value your feedback and are committed to resolving your concerns promptly
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-purple-800">Submit Complaint</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Having an issue with our services? Submit your complaint and track its progress in real-time.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-600" />
                      Online complaint registration
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-600" />
                      Real-time status tracking
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-600" />
                      SMS and email notifications
                    </div>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Register Complaint
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-purple-800">Track Complaint</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Already submitted a complaint? Track its status and get updates on the resolution progress.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-600" />
                      Complaint ID-based tracking
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-600" />
                      Detailed status updates
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-600" />
                      Resolution timeline
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    Track Status
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Need Immediate Help?</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="font-medium">+91-40-2345-6789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="font-medium">grievance@tservice.telangana.gov.in</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News & Updates */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                News & Updates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest updates and announcements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {newsUpdates.map((news, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={
                        news.category === 'Launch' ? 'bg-green-100 text-green-800' :
                        news.category === 'Notice' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }>
                        {news.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {news.date}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{news.title}</h4>
                    <Button variant="ghost" className="p-0 h-auto text-purple-600 hover:text-purple-800">
                      Read More <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                View All Updates
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Join Digital Telangana Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the convenience of unified government services. 
              Register now and be part of the digital transformation.
            </p>
            <Button 
              onClick={() => setIsAuthModalOpen(true)}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-800 font-semibold px-8 py-3 text-lg"
            >
              Get Started Now
            </Button>
            
            <div className="flex justify-center items-center mt-8 space-x-8 text-sm opacity-75">
              <span>✓ 100% Secure</span>
              <span>✓ 24/7 Available</span>
              <span>✓ Multi-language Support</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Index;
