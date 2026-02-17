// import HeroSection from "../components/HeroSection";
// import Highlights from "../components/Highlights";
// import Services from "../components/Services";

// export default function Home() {
//   return (
//     <div className="pt-12">
//       <HeroSection />
//       <div>

//       </div>
//       <Highlights />
//       <Services />
//     </div>
//   );
// }


// import React from 'react';
// import { Link } from 'react-router-dom';
// import HeroSection from "../components/HeroSection";
// import Highlights from "../components/Highlights";
// import Services from "../components/Services";

// export default function Home() {
//   return (
//     <div className="pt-12">
//       <HeroSection />
      
//       {/* Get Quote Button Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12">
//         <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 text-white text-center">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
//             Need a Vehicle Quote?
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
//             Get the best rates for your journey from Pune to anywhere in Maharashtra and beyond
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/quote"
//               className="bg-white text-red-600 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
//             >
//               <span>📋</span>
//               Get Instant Quote
//             </Link>
//             <Link
//               to="/booking"
//               className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
//             >
//               <span>🚐</span>
//               Book Now
//             </Link>
//           </div>
//           <p className="text-sm sm:text-base mt-4 sm:mt-6 opacity-75">
//             ⚡ 24/7 Support • Best Price Guarantee • Safe & Comfortable Rides
//           </p>
//         </div>
//       </div>

//       {/* Floating Get Quote Button for Mobile */}
//       <div className="fixed bottom-6 right-6 z-50 sm:hidden">
//         <Link
//           to="/quote"
//           className="bg-red-600 text-white w-14 h-14 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center text-2xl animate-bounce"
//           title="Get Quote"
//         >
//           📋
//         </Link>
//       </div>

//       <Highlights />
//       <Services />

//       {/* Another CTA Section at the bottom */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12">
//         <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8 text-center">
//           <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
//             Don't know which vehicle to choose?
//           </h3>
//           <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
//             Check our comprehensive vehicle guide to find the perfect ride for your journey
//           </p>
//           <Link
//             to="/quote"
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
//           >
//             <span>📊</span>
//             View Vehicle Guide
//             <span>→</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from "../components/HeroSection";
import Highlights from "../components/Highlights";
import Services from "../components/Services";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState({
    vehicles: 0,
    customers: 0,
    cities: 0,
    trips: 0
  });

  // Counter animation for stats
  useEffect(() => {
    const targets = {
      vehicles: 50,
      customers: 10000,
      cities: 100,
      trips: 50000
    };

    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setStats({
          vehicles: Math.floor((targets.vehicles / steps) * (currentStep + 1)),
          customers: Math.floor((targets.customers / steps) * (currentStep + 1)),
          cities: Math.floor((targets.cities / steps) * (currentStep + 1)),
          trips: Math.floor((targets.trips / steps) * (currentStep + 1))
        });
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const testimonials = [
    {
      name: "Rajesh Patil",
      rating: 5,
      comment: "Excellent service! Booked a Tempo Traveller for my family trip to Shirdi. Vehicle was clean and driver was very professional.",
      location: "Pune",
      image: "👨‍💼"
    },
    {
      name: "Priya Deshmukh",
      rating: 5,
      comment: "Best transport service in Pune! Used them for my wedding guest transportation. Everything was perfect and on time.",
      location: "Mumbai",
      image: "👩‍💼"
    },
    {
      name: "Suresh Kulkarni",
      rating: 5,
      comment: "Regular customer for office employee transportation. Always reliable and great communication. Highly recommended!",
      location: "Nagpur",
      image: "👨‍💼"
    }
  ];

  const popularDestinations = [
    { name: "Mumbai", distance: "150 km", icon: "🏙️", color: "from-blue-500 to-cyan-500" },
    { name: "Goa", distance: "450 km", icon: "🏖️", color: "from-green-500 to-teal-500" },
    { name: "Shirdi", distance: "210 km", icon: "🛕", color: "from-orange-500 to-red-500" },
    { name: "Nashik", distance: "210 km", icon: "🍇", color: "from-purple-500 to-pink-500" },
    { name: "Kolhapur", distance: "230 km", icon: "⚔️", color: "from-yellow-500 to-amber-500" },
    { name: "Chhatrapati Sambhajinagar", distance: "240 km", icon: "🏛️", color: "from-indigo-500 to-blue-500" },
    { name: "Lonavala", distance: "64 km", icon: "⛰️", color: "from-emerald-500 to-green-500" },
    { name: "Mahabaleshwar", distance: "120 km", icon: "🏔️", color: "from-sky-500 to-blue-500" }
  ];

  const vehicleTypes = [
    { icon: "🚗", name: "Sedan", capacity: "4+1", price: "Starting ₹10/km" },
    { icon: "🚙", name: "SUV", capacity: "7+1", price: "Starting ₹14/km" },
    { icon: "🚐", name: "Tempo Traveller", capacity: "12+1", price: "Starting ₹22/km" },
    { icon: "🚌", name: "Mini Bus", capacity: "26+2", price: "Starting ₹35/km" },
    { icon: "🚍", name: "Luxury Bus", capacity: "57+3", price: "Starting ₹50/km" }
  ];

  const features = [
    { icon: "⭐", title: "Best Price Guarantee", description: "We match any genuine quote" },
    { icon: "🚀", title: "Instant Confirmation", description: "Get booking confirmation instantly" },
    { icon: "🛡️", title: "Safe & Hygienic", description: "Sanitized vehicles with safety kits" },
    { icon: "📍", title: "GPS Tracked", description: "Real-time vehicle tracking" },
    { icon: "👨‍✈️", title: "Professional Drivers", description: "Experienced and courteous staff" },
    { icon: "💬", title: "24/7 Support", description: "Round-the-clock customer service" }
  ];

  return (
    <div className="pt-12 overflow-x-hidden">
      <HeroSection />
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          to="/quote"
          className="group relative flex items-center justify-center"
        >
          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></span>
          {/* Main button */}
          <div className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center text-3xl cursor-pointer group">
            📋
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-gray-900 font-bold px-2 py-1 rounded-full animate-bounce">
              FREE
            </span>
          </div>
          {/* Tooltip */}
          <span className="absolute right-20 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
            Get Instant Quote →
          </span>
        </Link>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-4 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚐</span>
              <span className="font-semibold">50+ Vehicles</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold">4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold">10+ Years</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="font-semibold">10k+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div id="stats-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-2">🚗</div>
            <div className="text-3xl font-bold text-red-600 mb-1">{stats.vehicles}+</div>
            <div className="text-gray-600">Vehicles</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-2">👥</div>
            <div className="text-3xl font-bold text-red-600 mb-1">{stats.customers.toLocaleString()}+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-2">📍</div>
            <div className="text-3xl font-bold text-red-600 mb-1">{stats.cities}+</div>
            <div className="text-gray-600">Destinations</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-2">🛣️</div>
            <div className="text-3xl font-bold text-red-600 mb-1">{stats.trips.toLocaleString()}+</div>
            <div className="text-gray-600">Trips Completed</div>
          </div>
        </div>
      </div>

      {/* Main Quote Banner with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-500 my-12">
        {/* Animated background shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <div className="text-center text-white">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              ⚡ LIMITED TIME OFFER ⚡
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Need a Vehicle <br className="hidden sm:block" />
              <span className="relative">
                Quote?
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
              Get the best rates for your journey from Pune to anywhere in Maharashtra and beyond
            </p>
            
            {/* Price tags */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-bold">🚗 Sedan</span> from ₹10/km
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-bold">🚙 SUV</span> from ₹14/km
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-bold">🚐 Tempo</span> from ₹22/km
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/quote"
                className="group relative bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl hover:shadow-3xl inline-flex items-center gap-3 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-2xl group-hover:rotate-12 transition-transform">📋</span>
                  Get Instant Quote
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                </span>
              </Link>
              <Link
                to="/booking"
                className="group border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-red-600 transition-all duration-500 transform hover:-translate-y-2 inline-flex items-center gap-3"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">🚐</span>
                Book Now
                <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> 24/7 Support
              </span>
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Best Price Guarantee
              </span>
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Safe & Hygienic
              </span>
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> GPS Tracked
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="text-center mb-10">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Popular Routes</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Most Booked <span className="text-red-600">Destinations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular routes from Pune with competitive prices and comfortable rides
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularDestinations.map((dest, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${dest.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative p-6 text-white">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{dest.icon}</div>
                <h3 className="text-xl font-bold mb-1">{dest.name}</h3>
                <p className="text-sm opacity-90 mb-3">{dest.distance} from Pune</p>
                <Link
                  to="/quote"
                  className="inline-flex items-center text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/30 transition-all"
                >
                  Check Prices →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Types Showcase */}
      <div className="bg-gray-50 py-16 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Fleet</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Choose Your <span className="text-red-600">Perfect Ride</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wide range of well-maintained vehicles for every need and budget
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {vehicleTypes.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform group-hover:rotate-12">
                  {vehicle.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{vehicle.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{vehicle.capacity}</p>
                <p className="text-xs text-red-600 font-semibold mb-3">{vehicle.price}</p>
                <Link
                  to="/quote"
                  className="text-xs bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="text-center mb-10">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-4">
            We Make Travel <span className="text-red-600">Simple & Safe</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform group-hover:rotate-12">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-red-600 to-orange-500 py-16 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-10">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ 4.9/5 Rating
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our <span className="text-yellow-300">Customers Say</span>
            </h2>
          </div>

          <div className="relative">
            <div className="flex justify-center gap-6 overflow-x-auto pb-8 px-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 bg-white rounded-2xl shadow-2xl p-6 transform transition-all duration-500 hover:-translate-y-4 cursor-pointer ${
                    activeTestimonial === index ? 'scale-105 ring-4 ring-yellow-400' : ''
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl bg-gradient-to-br from-red-600 to-orange-500 rounded-full p-2">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Highlights />
      <Services />

      {/* Bottom CTA with Parallax */}
      <div className="relative overflow-hidden bg-gray-900 my-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Don't know which vehicle to choose?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Check our comprehensive vehicle guide to find the perfect ride for your journey
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/quote"
                className="group relative bg-gradient-to-r from-red-600 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 inline-flex items-center gap-3 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <span>📊</span>
                  View Vehicle Guide
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </span>
              </Link>
              <a
                href="tel:+919765494008"
                className="group border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:-translate-y-2 inline-flex items-center gap-3"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
                Call for Expert Advice
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>Free Cancellation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}