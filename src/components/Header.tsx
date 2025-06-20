
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe, User } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  onAuthClick?: () => void;
}

export const Header = ({ onAuthClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      onAuthClick?.();
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLogoClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  const scrollToServices = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleFeedbackClick = () => {
    navigate('/feedback');
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Top purple bar */}
      <div className="bg-purple-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center text-sm">
          <span className="text-white">Government of Telangana - Official Portal</span>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-cream-50" style={{ backgroundColor: '#faf9f6' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and title */}
            <div 
              className="flex items-center space-x-4 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              <img 
                src="https://www.en.etemaaddaily.com/pages/world/hyderabad/7982telangana.png" 
                alt="Telangana Government" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">T-Service</h1>
                <p className="text-sm text-gray-600">Government of Telangana</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={scrollToServices} className="text-gray-700 hover:text-purple-700 font-medium">Services</button>
              <a href="#features" className="text-gray-700 hover:text-purple-700 font-medium">Features</a>
              <button onClick={handleFeedbackClick} className="text-gray-700 hover:text-purple-700 font-medium">Feedback</button>
              <a href="#news" className="text-gray-700 hover:text-purple-700 font-medium">News</a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-purple-700 font-medium">
                  Help
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
            </nav>

            {/* Right side - CM info and auth */}
            <div className="hidden md:flex items-center space-x-6">
              {/* CM Info */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-800">Sri A. Revanth Reddy</div>
                  <div className="text-xs text-gray-600">Hon'ble Chief Minister</div>
                </div>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LPgMSCXDqdmaLGRK8YZc2GbLwEIKXX_LcQ&s" 
                  alt="Sri A. Revanth Reddy" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
              </div>

              {/* Language and Auth */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-700 hover:text-purple-700">
                  <Globe className="w-4 h-4 mr-1" />
                  English
                </button>
                
                {isAuthenticated ? (
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={handleAuthAction}
                      className="bg-purple-600 hover:bg-purple-700 text-white flex items-center"
                    >
                      <User className="w-4 h-4 mr-2" />
                      {user?.name || 'Profile'}
                    </Button>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={handleAuthAction}
                    className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full"
                  >
                    Register / Login
                  </Button>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button onClick={scrollToServices} className="text-gray-700 hover:text-purple-700 font-medium text-left">Services</button>
                <a href="#features" className="text-gray-700 hover:text-purple-700 font-medium">Features</a>
                <button onClick={handleFeedbackClick} className="text-gray-700 hover:text-purple-700 font-medium text-left">Feedback</button>
                <a href="#news" className="text-gray-700 hover:text-purple-700 font-medium">News</a>
                <a href="#help" className="text-gray-700 hover:text-purple-700 font-medium">Help</a>
                
                {isAuthenticated ? (
                  <div className="flex flex-col space-y-2">
                    <Button
                      onClick={handleAuthAction}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <User className="w-4 h-4 mr-2" />
                      {user?.name || 'Profile'}
                    </Button>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="border-purple-600 text-purple-600"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={handleAuthAction}
                    className="bg-black hover:bg-gray-800 text-white rounded-full"
                  >
                    Register / Login
                  </Button>
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
