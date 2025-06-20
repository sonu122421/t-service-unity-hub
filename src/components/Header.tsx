
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Globe, User } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onAuthClick?: () => void;
}

export const Header = ({ onAuthClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

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

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-purple-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              Helpline: +91-40-2345-6789
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center hover:text-yellow-300">
              <Globe className="w-4 h-4 mr-1" />
              తెలుగు | हिंदी | English
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://www.en.etemaaddaily.com/pages/world/hyderabad/7982telangana.png" 
              alt="Telangana Government" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-purple-800">T-Service</h1>
              <p className="text-sm text-gray-600">Unified Citizen Services Portal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-purple-700 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-purple-700 font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-purple-700 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-700 font-medium">Contact</a>
          </nav>

          {/* Auth Button */}
          <div className="hidden md:flex items-center space-x-4">
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
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
              >
                Register / Login
              </Button>
            )}
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
              <a href="#home" className="text-gray-700 hover:text-purple-700 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-purple-700 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-purple-700 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-700 font-medium">Contact</a>
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
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Register / Login
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
