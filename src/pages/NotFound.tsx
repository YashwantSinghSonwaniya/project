import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto">
          <div
            data-aos="fade-up"
            className="mb-8"
          >
            <div className="w-24 h-24 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-12 w-12 text-red-400" />
            </div>
            
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to detecting fake content!
            </p>
            
            <div className="space-y-4">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Home className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
              
              <div className="text-gray-500 text-sm">
                or use the navigation above to explore our detection tools
              </div>
            </div>
          </div>
          
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link
                to="/fake-news"
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700/30"
              >
                <span>📰</span>
                <span>News Detection</span>
              </Link>
              <Link
                to="/fake-emails"
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700/30"
              >
                <span>📧</span>
                <span>Email Detection</span>
              </Link>
              <Link
                to="/fake-whatsapp"
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700/30"
              >
                <span>💬</span>
                <span>WhatsApp Detection</span>
              </Link>
              <Link
                to="/fake-social-media"
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700/30"
              >
                <span>📱</span>
                <span>Social Media</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;