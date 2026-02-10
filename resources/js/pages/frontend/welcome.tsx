import React from 'react';
import Navbar from '@/components/frontend/Navbar';
import HeroCarousel from '@/components/frontend/HeroCarousel';
import { Head } from '@inertiajs/react';

const Welcome = () => {
  return (
    <>
      <Head title="Welcome" />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Main Content */}
        <main>
            {/* Hero Carousel */}
            <HeroCarousel />
            
            {/* Additional Content Section Placeholder */}
            <div className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Jaya Bageshwori?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">We are committed to providing quality education that empowers students to succeed in a rapidly changing world.</p>
                </div>
            </div>
        </main>
      </div>
    </>
  );
};

export default Welcome;
