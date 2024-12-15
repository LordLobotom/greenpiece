import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  EcoTransportIllustration,
  RealTimeIllustration,
  CarbonTrackingIllustration,
  HeroIllustration
} from './components/IllustrationComponents';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                GreenMove
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-6">
                <button className="text-gray-600 hover:text-green-600 transition-colors">About</button>
                <button className="text-gray-600 hover:text-blue-600 transition-colors">Services</button>
                <button className="text-gray-600 hover:text-purple-600 transition-colors">Contact</button>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                className="h-6 w-6 text-gray-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pt-2 pb-1`}>
            <div className="flex flex-col space-y-2">
              <button className="text-gray-600 hover:text-green-600 transition-colors py-2">About</button>
              <button className="text-gray-600 hover:text-blue-600 transition-colors py-2">Services</button>
              <button className="text-gray-600 hover:text-purple-600 transition-colors py-2">Contact</button>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h1 className="text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Sustainable Transport
                  </span>
                  <span className="block mt-2 text-gray-800">for Tomorrow</span>
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Join us in creating a greener future with eco-friendly transportation solutions.
                </p>
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2">
                    <span>Plan Your Route</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-lg border border-gray-200 hover:border-green-500 transition-all flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
              <div className="relative h-[600px]">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-8">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
          <div className="h-32 mb-4 transform group-hover:scale-105 transition-transform">
            <EcoTransportIllustration />
          </div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">Eco-Friendly Routes</h3>
          <p className="text-gray-600">Find the most environmentally conscious paths for your journey.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
          <div className="h-32 mb-4 transform group-hover:scale-105 transition-transform">
            <RealTimeIllustration />
          </div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Real-Time Updates</h3>
          <p className="text-gray-600">Get instant updates on transportation options and schedules.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
          <div className="h-32 mb-4 transform group-hover:scale-105 transition-transform">
            <CarbonTrackingIllustration />
          </div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">Carbon Tracking</h3>
          <p className="text-gray-600">Monitor and reduce your carbon footprint with every trip.</p>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<div></div>} />
      </Routes>
    </div>
  );
}

export default App;
