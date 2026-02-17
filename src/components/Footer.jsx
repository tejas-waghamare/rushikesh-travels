// export default function Footer() {
//   return (
//     <footer className="bg-red-600 text-white py-6 text-center mt-12">
//       <p>© {new Date().getFullYear()} Rushikesh Tours & Travels. All Rights Reserved.</p>
//     </footer>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const busTypes = [
    "20 seater Traveller on rent in Pune",
    "17 seater Tempo Traveller on rent in Pune",
    "13 seater Tempo Traveller on rent in Pune",
    "Non A/C bus rental in Pune",
    "A/C Bus rental in Pune",
    "Luxury Bus rental in Pune",
    "Tempo Traveller on rent in Pune",
    "14 seater bus on rent in Pune",
    "17 seater bus on rent in Pune",
    "20 seater bus on rent in Pune",
    "25 seater bus on rent in Pune",
    "32 seater bus on rent in Pune",
    "35 seater bus on rent in Pune",
    "40 seater bus on rent in Pune",
    "45 seater bus on rent in Pune",
    "50 seater bus on rent in Pune",
    "10 seater bus on rent in Pune",
    "12 seater bus on rent in Pune",
    "22 Seater bus hire in Pune",
    "26 seater Tempo traveller on rent",
    "Mini Bus hire in Pune",
    "Tourist Bus on hire in Pune"
  ];

  const services = [
    "Bus hire for wedding in Pune",
    "Pune local Bus rent",
    "Bus rental for Picnic in Pune",
    "Bus hire for School trips in Pune",
    "Bus hire for School Picnic in Pune",
    "Bus hire for Corporate events in Pune",
    "Bus service for corporate in Pune",
    "Bus hire for Marriage in Pune",
    "Bus hire for events in Pune",
    "Bus Rental For Wedding in Pune",
    "Monthly Bus hire service in Pune",
    "Tourist bus rental services in Pune",
    "Bus hire for Corporate travel in Pune"
  ];

  const locations = [
    "Bus on rent in Kharadi Pune",
    "Bus on rent in Hinjewadi Pune",
    "Bus hire in Karve Nagar Pune",
    "Bus hire for rent in Baner Pune",
    "Tempo Traveller on rent in Pimpri Chinchwad",
    "Bus hire near me in Pune",
    "Pune to Lonavala Bus hire",
    "Pune to Kokan Bus hire",
    "Pune to Goa Bus hire",
    "Pune to Shirdi Bus hire",
    "Pune to Bhimashankar Jyotirlinga",
    "Pune to 5 jyotirlinga Bus on rent",
    "Pune to 12 Jyotirlinga Bus hire",
    "Pune to Maharashtra Darshan Bus",
    "Pune to Asthavinayak Darshan Bus",
    "Bus hire for Kedarnath Trip",
    "Bus hire for Devkund",
    "Bus hire for Akkalkot",
    "Bus Hire for Sade Teen Shakti peeth"
  ];


  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Rushikesh Tours</h3>
            <p className="text-gray-400 mb-4">
              Your trusted travel partner in Pune for comfortable, safe, and affordable bus and tempo traveller rentals.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="text-red-500 mr-3">📞</span>
                <a href="tel:+919765494008" className="hover:text-red-500 transition">+91 9765494008</a>
              </p>
              <p className="flex items-center">
                <span className="text-red-500 mr-3">✉️</span>
                <a href="mailto:rushikeshtransport4008@gmail.com" className="hover:text-red-500 transition">rushikeshtransport4008@gmail.com</a>
              </p>
              <p className="flex items-center">
                <span className="text-red-500 mr-3">📍</span>
                <span>Hingane Home Colony,Karve Nagar,Pune 411052</span>
              </p>
            </div>
          </div>

          {/* Bus Types */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Bus Types</h3>
            <ul className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
              {busTypes.slice(0, 12).map((item, index) => (
                <li key={index}>
                  <a href="/services" className="text-gray-400 hover:text-red-500 transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Locations */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
              {services.slice(0, 8).map((item, index) => (
                <li key={index}>
                  <a href="/quote" className="text-gray-400 hover:text-red-500 transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-red-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-red-500 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-red-500 transition">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition">
                  Contact Us
                </Link>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Additional Keywords Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-4">Popular Searches</h4>
              <ul className="space-y-2">
                {busTypes.slice(12, 18).map((item, index) => (
                  <li key={index}>
                    <a href="/services" className="text-gray-400 hover:text-red-500 transition text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Popular Routes</h4>
              <ul className="space-y-2">
                {locations.slice(8, 14).map((item, index) => (
                  <li key={index}>
                    <a href="/quote" className="text-gray-400 hover:text-red-500 transition text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Near You</h4>
              <ul className="space-y-2">
                {locations.slice(0, 6).map((item, index) => (
                  <li key={index}>
                    <a href="/contact" className="text-gray-400 hover:text-red-500 transition text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Full Keywords Strip */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-white font-semibold mb-4 text-center">Find Us🔎</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {busTypes.concat(services).concat(locations).slice(0, 30).map((item, index) => (
              <a
                key={index}
                href="/contact"
                className="text-xs bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white px-3 py-1.5 rounded-full transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="/about" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <span className="text-xl">📘</span>
              </a>
              <a href="/gallery" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <span className="text-xl">📷</span>
              </a>
              
            </div>
            <p className="text-gray-400 text-center">
              © {currentYear} Rushikesh Tours & Travels. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;