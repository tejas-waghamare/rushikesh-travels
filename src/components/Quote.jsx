

// import React, { useState } from 'react';

// const Quote = () => {
//     const [selectedLocation, setSelectedLocation] = useState('mumbai');
//     const [expandedVehicle, setExpandedVehicle] = useState(null);

//     // Pune to various locations in Maharashtra
//     const maharashtraLocations = [
//         { id: 'mumbai', name: 'Mumbai', distance: '150 km', travelTime: '3-4 hours' },
//         { id: 'nagpur', name: 'Nagpur', distance: '700 km', travelTime: '12-14 hours' },
//         { id: 'nashik', name: 'Nashik', distance: '210 km', travelTime: '4-5 hours' },
//         { id: 'aurangabad', name: 'Aurangabad', distance: '240 km', travelTime: '5-6 hours' },
//         { id: 'kolhapur', name: 'Kolhapur', distance: '230 km', travelTime: '5-6 hours' },
//         { id: 'solapur', name: 'Solapur', distance: '250 km', travelTime: '5-6 hours' },
//         { id: 'satara', name: 'Satara', distance: '120 km', travelTime: '2.5-3 hours' },
//         { id: 'sangli', name: 'Sangli', distance: '270 km', travelTime: '6-7 hours' },
//         { id: 'jalgaon', name: 'Jalgaon', distance: '360 km', travelTime: '7-8 hours' },
//         { id: 'akola', name: 'Akola', distance: '520 km', travelTime: '10-11 hours' },
//         { id: 'amravati', name: 'Amravati', distance: '600 km', travelTime: '11-12 hours' },
//         { id: 'ratnagiri', name: 'Ratnagiri', distance: '340 km', travelTime: '7-8 hours' },
//         { id: 'sindhudurg', name: 'Sindhudurg', distance: '420 km', travelTime: '9-10 hours' },
//         { id: 'latur', name: 'Latur', distance: '350 km', travelTime: '7-8 hours' },
//         { id: 'nanded', name: 'Nanded', distance: '460 km', travelTime: '9-10 hours' },
//         { id: 'shirdi', name: 'Shirdi', distance: '210 km', travelTime: '4-5 hours' },
//         { id: 'shaniShingnapur', name: 'Shani Shingnapur', distance: '260 km', travelTime: '5-6 hours' }
//     ];

//     // Locations outside Maharashtra
//     const outsideLocations = [
//         { id: 'goa', name: 'Goa', distance: '450 km', travelTime: '9-10 hours' },
//         { id: 'surat', name: 'Surat (Gujarat)', distance: '460 km', travelTime: '9-10 hours' },
//         { id: 'indore', name: 'Indore (MP)', distance: '560 km', travelTime: '11-12 hours' },
//         { id: 'hyderabad', name: 'Hyderabad (Telangana)', distance: '560 km', travelTime: '10-11 hours' },
//         { id: 'bangalore', name: 'Bangalore (Karnataka)', distance: '840 km', travelTime: '14-15 hours' },
        
//     ];

//     // Vehicle information
//     const vehicles = [
//         {
//             id: 1,
//             type: 'Sedan',
//             icon: '🚗',
//             category: 'Compact Car',
//             capacity: '4 Passengers + 1 Driver',
//             models: ['Toyota Etios', 'Maruti Suzuki Dzire', 'Honda Amaze', 'Hyundai Xcent'],
//             features: [
//                 'Air Conditioning',
//                 'Music System with Bluetooth',
//                 'Mobile Charging Points',
//                 'Comfortable Seating',
//                 'Luggage Capacity: 2 Suitcases',
//                 'Clean & Well-maintained',
//                 'Bottle Water Provided'
//             ],
//             amenities: ['AC', 'Music', 'Charging', 'Clean Car'],
//             idealFor: 'Small families, Business travelers, Couples, Airport transfers',
//             availability: '24/7 Available - Advance booking recommended',
//             driverInfo: 'Experienced local driver familiar with all routes',
//             restrictions: 'Best for up to 4 passengers with light luggage'
//         },
//         {
//             id: 2,
//             type: 'SUV',
//             icon: '🚙',
//             category: 'Sport Utility Vehicle',
//             capacity: '7 Passengers + 1 Driver',
//             models: ['Toyota Innova Crysta', 'Mahindra Scorpio', 'MG Hector', 'Hyundai Creta', 'Ford Endeavour'],
//             features: [
//                 'Powerful Engine for Hills',
//                 'Pushback Comfortable Seats',
//                 'Climate Control AC',
//                 'Premium Sound System',
//                 'Multiple USB Charging Points',
//                 'Large Luggage Space',
//                 'Sunroof (in select models)',
//                 'First Aid Kit'
//             ],
//             amenities: ['Pushback Seats', 'Premium AC', 'USB Charging', 'Music System'],
//             idealFor: 'Large families, Group travel, Hill station trips (Lonavala, Mahabaleshwar)',
//             availability: '24/7 Available - Book 2-3 days in advance',
//             driverInfo: 'Experienced hill drivers available on request',
//             restrictions: 'Comfortable for 7 passengers or 6 with heavy luggage'
//         },
//         {
//             id: 3,
//             type: 'Tempo Traveller',
//             icon: '🚐',
//             category: 'Mini Van',
//             capacity: '12 Passengers + 1 Driver',
//             models: ['Force Traveller', 'Mahindra Tourister', 'Tata Winger', 'Ashok Leyland'],
//             features: [
//                 'Pushback Luxury Reclining Seats',
//                 'Individual AC Vents',
//                 'LED TV/DVD Player',
//                 'Premium Music System',
//                 'Cooler Box for Refreshments',
//                 'Reading Lights',
//                 'Large Luggage Compartment',
//                 'Washroom Break Planning'
//             ],
//             amenities: ['Reclining Seats', 'AC', 'LCD TV', 'Music', 'Reading Lights'],
//             idealFor: 'Wedding parties, Corporate outings, Family functions, Temple tours',
//             availability: 'Prior booking essential - 5-7 days advance',
//             driverInfo: 'Two drivers provided for long distance (>500km)',
//             restrictions: 'Perfect for 12 passengers with medium luggage'
//         },
//         {
//             id: 4,
//             type: 'Mini Bus',
//             icon: '🚌',
//             category: 'Medium Bus',
//             capacity: '20-26 Passengers + 2 Drivers',
//             models: ['Force Traveller 26', 'Mahindra Comfio', 'Tata Starbus'],
//             features: [
//                 'Luxury Seating with High Back',
//                 'AC/Non-AC Options Available',
//                 'Dual AC Units',
//                 'Music System with Mic',
//                 'Ample Luggage Space',
//                 'Emergency Exits',
//                 'First Aid Kit & Fire Extinguisher',
//                 'Tour Guide Facility'
//             ],
//             amenities: ['Luxury Seats', 'Dual AC', 'Music with Mic', 'First Aid'],
//             idealFor: 'School trips, Corporate events, Temple tours, Group pilgrimages',
//             availability: 'Minimum 7 days advance booking required',
//             driverInfo: 'Two experienced drivers for all trips',
//             restrictions: 'Ideal for 20-26 passengers with luggage'
//         },
//         {
//             id: 5,
//             type: 'Luxury Bus',
//             icon: '🚍',
//             category: 'Volvo/Mercedes',
//             capacity: '45-57 Passengers + 3 Staff',
//             models: ['Volvo Multi-Axle', 'Scania Metrolink', 'Mercedes Benz', 'BharatBenz'],
//             features: [
//                 'Pushback Reclining Sleeper',
//                 'Personal AC Vents',
//                 'Reading Lights per Seat',
//                 'Entertainment Screens',
//                 'Onboard Toilet',
//                 'Pantry Area',
//                 'WiFi Connectivity',
//                 'Blankets & Pillows',
//                 'Attendant Services',
//                 'GPS Tracking'
//             ],
//             amenities: ['Sleeper', 'Personal AC', 'Entertainment', 'WiFi', 'Toilet', 'Attendant'],
//             idealFor: 'Large tour groups, Corporate events, Pilgrimage tours, Wedding parties',
//             availability: '15-20 days advance booking necessary',
//             driverInfo: '3 staff members - 2 drivers + 1 attendant',
//             restrictions: 'Full group booking only (minimum 40 passengers)'
//         }
//     ];

//     // Combine locations for display
//     const allLocations = [
//         { category: 'Maharashtra Locations', locations: maharashtraLocations },
//         { category: 'Outside Maharashtra', locations: outsideLocations }
//     ];

//     return (
//         <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-5xl font-bold text-gray-800 mb-4">
//                         Vehicle <span className="text-red-600">Guide</span>
//                     </h2>
//                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                         Complete information about vehicles available from Pune to various destinations
//                     </p>
//                 </div>

//                 {/* Location Selection */}
//                 <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">📍 Select Your Destination</h3>
                    
//                     <div className="grid md:grid-cols-2 gap-8">
//                         {allLocations.map((category, idx) => (
//                             <div key={idx}>
//                                 <h4 className="text-lg font-semibold mb-4 text-red-600 border-b border-gray-200 pb-2">
//                                     {category.category}
//                                 </h4>
//                                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                                     {category.locations.map((loc) => (
//                                         <button
//                                             key={loc.id}
//                                             onClick={() => setSelectedLocation(loc.id)}
//                                             className={`text-left p-3 rounded-xl transition-all duration-300 ${
//                                                 selectedLocation === loc.id
//                                                     ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg'
//                                                     : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
//                                             }`}
//                                         >
//                                             <div className="font-medium">{loc.name}</div>
//                                             <div className="text-xs opacity-75 mt-1">{loc.distance}</div>
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Selected Location Info */}
//                     {selectedLocation && (
//                         <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border-l-4 border-red-600">
//                             <p className="text-gray-700">
//                                 <span className="font-bold text-red-600">Selected Route:</span> Pune → {
//                                     [...maharashtraLocations, ...outsideLocations].find(l => l.id === selectedLocation)?.name
//                                 } • {[...maharashtraLocations, ...outsideLocations].find(l => l.id === selectedLocation)?.distance}
//                             </p>
//                         </div>
//                     )}
//                 </div>

//                 {/* Vehicles Grid */}
//                 <h3 className="text-3xl font-bold text-gray-800 mb-8">🚘 Available Vehicles from Pune</h3>
                
//                 <div className="grid lg:grid-cols-2 gap-8">
//                     {vehicles.map((vehicle) => (
//                         <div 
//                             key={vehicle.id}
//                             className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
//                         >
//                             {/* Vehicle Header */}
//                             <div className="bg-gradient-to-r from-red-600 to-orange-500 p-6 text-white">
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-4">
//                                         <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-sm">
//                                             {vehicle.icon}
//                                         </div>
//                                         <div>
//                                             <h4 className="text-2xl font-bold">{vehicle.type}</h4>
//                                             <p className="text-sm opacity-90">{vehicle.category}</p>
//                                         </div>
//                                     </div>
//                                     <div className="text-right">
//                                         <div className="text-3xl font-bold">{vehicle.capacity.split(' ')[0]}</div>
//                                         <div className="text-sm opacity-90">Seats</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Vehicle Details */}
//                             <div className="p-6">
//                                 {/* Capacity Badge */}
//                                 <div className="mb-4 bg-gray-50 rounded-xl p-3 border border-gray-100">
//                                     <span className="font-semibold text-gray-700">👥 Capacity: </span>
//                                     <span className="text-gray-600">{vehicle.capacity}</span>
//                                 </div>

//                                 {/* Models */}
//                                 <div className="mb-4">
//                                     <span className="font-semibold text-gray-700 block mb-3">Available Models:</span>
//                                     <div className="flex flex-wrap gap-2">
//                                         {vehicle.models.map((model, idx) => (
//                                             <span key={idx} className="bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-700 border border-gray-200">
//                                                 {model}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Features Preview */}
//                                 <div className="mb-4">
//                                     <span className="font-semibold text-gray-700 block mb-3">Key Features:</span>
//                                     <ul className="grid grid-cols-2 gap-2">
//                                         {vehicle.features.slice(0, 4).map((feature, idx) => (
//                                             <li key={idx} className="flex items-center text-sm text-gray-600">
//                                                 <span className="text-green-500 mr-2">✓</span>
//                                                 {feature}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                                 {/* Amenities Badges */}
//                                 <div className="mb-4 flex flex-wrap gap-2">
//                                     {vehicle.amenities.map((item, idx) => (
//                                         <span key={idx} className="bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-xs font-medium">
//                                             {item}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 {/* Info Cards */}
//                                 <div className="space-y-3 mb-4">
//                                     <div className="bg-green-50 rounded-xl p-3 border border-green-100">
//                                         <span className="font-semibold text-green-700 block mb-1">💡 Ideal For:</span>
//                                         <p className="text-sm text-gray-700">{vehicle.idealFor}</p>
//                                     </div>

//                                     <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-100">
//                                         <span className="font-semibold text-yellow-700 block mb-1">👨‍✈️ Driver:</span>
//                                         <p className="text-sm text-gray-700">{vehicle.driverInfo}</p>
//                                     </div>

//                                     <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
//                                         <span className="font-semibold text-purple-700 block mb-1">📅 Availability:</span>
//                                         <p className="text-sm text-gray-700">{vehicle.availability}</p>
//                                     </div>
//                                 </div>

//                                 {/* Expandable Section */}
//                                 <button
//                                     onClick={() => setExpandedVehicle(expandedVehicle === vehicle.id ? null : vehicle.id)}
//                                     className="w-full text-center py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
//                                 >
//                                     {expandedVehicle === vehicle.id ? 'Show Less ▲' : 'View All Features ▼'}
//                                 </button>

//                                 {expandedVehicle === vehicle.id && (
//                                     <div className="mt-4 pt-4 border-t border-gray-200">
//                                         <h5 className="font-semibold mb-3 text-gray-800">Complete Features:</h5>
//                                         <ul className="space-y-2">
//                                             {vehicle.features.map((feature, idx) => (
//                                                 <li key={idx} className="text-sm text-gray-600 flex items-start">
//                                                     <span className="text-red-500 mr-2">•</span>
//                                                     {feature}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                         <div className="mt-3 p-3 bg-gray-50 rounded-xl">
//                                             <span className="font-semibold text-gray-700 block mb-1">📋 Note:</span>
//                                             <p className="text-sm text-gray-600">{vehicle.restrictions}</p>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Route Information */}
//                 <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">🗺️ Route Information</h3>
//                     <div className="grid md:grid-cols-2 gap-8">
//                         <div>
//                             <h4 className="font-semibold text-lg mb-4 text-red-600 border-b border-gray-200 pb-2">
//                                 Maharashtra Routes
//                             </h4>
//                             <ul className="space-y-3">
//                                 {maharashtraLocations.map((loc) => (
//                                     <li key={loc.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
//                                         <span className="font-medium text-gray-800">{loc.name}</span>
//                                         <div className="text-right">
//                                             <span className="text-sm text-gray-600 block">{loc.distance}</span>
//                                             <span className="text-xs text-gray-500">{loc.travelTime}</span>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-lg mb-4 text-red-600 border-b border-gray-200 pb-2">
//                                 Outside Maharashtra
//                             </h4>
//                             <ul className="space-y-3">
//                                 {outsideLocations.map((loc) => (
//                                     <li key={loc.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
//                                         <span className="font-medium text-gray-800">{loc.name}</span>
//                                         <div className="text-right">
//                                             <span className="text-sm text-gray-600 block">{loc.distance}</span>
//                                             <span className="text-xs text-gray-500">{loc.travelTime}</span>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Booking Tips */}
//                 <div className="mt-8 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white shadow-2xl">
//                     <h3 className="text-2xl font-bold mb-6">📝 Important Booking Tips</h3>
//                     <div className="grid md:grid-cols-2 gap-4">
//                         <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
//                             <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-lg">✓</span>
//                             Book at least 3-7 days in advance for best vehicle selection
//                         </div>
//                         <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
//                             <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-lg">✓</span>
//                             Provide exact passenger count for comfortable journey
//                         </div>
//                         <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
//                             <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-lg">✓</span>
//                             Specify luggage requirements while booking
//                         </div>
//                         <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
//                             <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-lg">✓</span>
//                             Mention any special requests (halts, food preferences)
//                         </div>
//                     </div>
//                 </div>

//                 {/* CTA Section */}
//                 <div className="mt-12 text-center">
//                     <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//                         <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Book Your Journey?</h3>
//                         <p className="text-gray-600 mb-6">Choose your vehicle and destination for a comfortable ride</p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                             <a
//                                 href="/booking"
//                                 className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
//                             >
//                                 🚐 Book Your Vehicle
//                             </a>
//                             <a
//                                 href="tel:+919765494008"
//                                 className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-lg"
//                             >
//                                 📞 Call for Inquiry
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Quote;

import React, { useState } from 'react';

const Quote = () => {
    const [selectedLocation, setSelectedLocation] = useState('mumbai');
    const [expandedVehicle, setExpandedVehicle] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [randomCity, setRandomCity] = useState(null);
    const [noResults, setNoResults] = useState(false);

    // Pune to various locations in Maharashtra
    const maharashtraLocations = [
        { id: 'mumbai', name: 'Mumbai', distance: '150 km', travelTime: '3-4 hours' },
        { id: 'nagpur', name: 'Nagpur', distance: '700 km', travelTime: '12-14 hours' },
        { id: 'lonavla', name: 'Lonavla', distance: '65 km', travelTime: '1:30-2 hours' },
        { id: 'nashik', name: 'Nashik', distance: '210 km', travelTime: '4-5 hours' },
        { id: 'aurangabad', name: 'Aurangabad', distance: '240 km', travelTime: '5-6 hours' },
        { id: 'kolhapur', name: 'Kolhapur', distance: '230 km', travelTime: '5-6 hours' },
        { id: 'solapur', name: 'Solapur', distance: '250 km', travelTime: '5-6 hours' },
        { id: 'satara', name: 'Satara', distance: '120 km', travelTime: '2.5-3 hours' },
        { id: 'sangli', name: 'Sangli', distance: '270 km', travelTime: '6-7 hours' },
        { id: 'jalgaon', name: 'Jalgaon', distance: '360 km', travelTime: '7-8 hours' },
        { id: 'akola', name: 'Akola', distance: '520 km', travelTime: '10-11 hours' },
        { id: 'amravati', name: 'Amravati', distance: '600 km', travelTime: '11-12 hours' },
        { id: 'ratnagiri', name: 'Ratnagiri', distance: '340 km', travelTime: '7-8 hours' },
        { id: 'sindhudurg', name: 'Sindhudurg', distance: '420 km', travelTime: '9-10 hours' },
        { id: 'latur', name: 'Latur', distance: '350 km', travelTime: '7-8 hours' },
        { id: 'nanded', name: 'Nanded', distance: '460 km', travelTime: '9-10 hours' },
        { id: 'shirdi', name: 'Shirdi', distance: '210 km', travelTime: '4-5 hours' },
        { id: 'shaniShingnapur', name: 'Shani Shingnapur', distance: '260 km', travelTime: '5-6 hours' }
    ];

    // Locations outside Maharashtra
    const outsideLocations = [
        { id: 'goa', name: 'Goa', distance: '450 km', travelTime: '9-10 hours' },
        { id: 'surat', name: 'Surat (Gujarat)', distance: '460 km', travelTime: '9-10 hours' },
        { id: 'indore', name: 'Indore (MP)', distance: '560 km', travelTime: '11-12 hours' },
        { id: 'hyderabad', name: 'Hyderabad (Telangana)', distance: '560 km', travelTime: '10-11 hours' },
        { id: 'bangalore', name: 'Bangalore (Karnataka)', distance: '840 km', travelTime: '14-15 hours' },
    ];

    // Combine all locations for search
    const allLocationsList = [...maharashtraLocations, ...outsideLocations];

    // Random Indian cities for suggestions
    const randomIndianCities = [
        "Delhi", "Chennai", "Kolkata", "Jaipur", "Lucknow", "Chandigarh", 
        "Bhopal", "Patna", "Ranchi", "Bhubaneswar", "Guwahati", "Dehradun",
        "Shimla", "Srinagar", "Leh", "Agra", "Varanasi", "Prayagraj",
        "Gaya", "Bodh Gaya", "Rishikesh", "Haridwar", "Mathura", "Vrindavan",
        "Udaipur", "Jodhpur", "Jaisalmer", "Ajmer", "Pushkar", "Mount Abu",
        "Mysore", "Coorg", "Ooty", "Kodaikanal", "Munnar", "Alleppey",
        "Kochi", "Trivandrum", "Madurai", "Rameswaram", "Kanyakumari",
        "Pondicherry", "Mahabalipuram", "Kanchipuram", "Tirupati",
        "Hampi", "Badami", "Gokarna", "Murudeshwar", "Udupi",
        "Mangalore", "Karwar", "Dandeli", "Jog Falls", "Chikmagalur",
        "Wayanad", "Kozhikode", "Kumarakom", "Thekkady", "Vagamon",
        "Daman", "Diu", "Silvassa", "Porbandar", "Dwarka", "Somnath",
        "Gir National Park", "Kutch", "Bhuj", "Mandvi", "Ahmedabad",
        "Vadodara", "Surat", "Vapi", "Valsad", "Navsari", "Bharuch",
        "Ankleshwar", "Rajkot", "Jamnagar", "Junagadh", "Veraval",
        "Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda",
        "Manali", "Dharamshala", "Dalhousie", "Khajjiar", "Kullu",
        "Kasol", "Tosh", "Bir Billing", "Mcleodganj", "Palampur",
        "Gangtok", "Pelling", "Namchi", "Yuksom", "Lachen", "Lachung",
        "Darjeeling", "Kalimpong", "Kurseong", "Mirik", "Siliguri",
        "Shillong", "Cherrapunji", "Mawsynram", "Tawang", "Bomdila",
        "Ziro", "Itanagar", "Kohima", "Kaziranga", "Majuli", "Jorhat",
        "Dibrugarh", "Tezpur", "Haflong", "Silchar", "Agartala",
        "Udaipur (Tripura)", "Aizawl", "Lunglei", "Imphal", "Ukhrul",
        "Port Blair", "Havelock", "Neil Island", "Baratang", "Diglipur"
    ];

    // Vehicle information
    const vehicles = [
        {
            id: 1,
            type: 'Sedan',
            icon: '🚗',
            category: 'Compact Car',
            capacity: '4 Passengers + 1 Driver',
            models: ['Toyota Etios', 'Maruti Suzuki Dzire', 'Honda Amaze', 'Hyundai Xcent'],
            features: [
                'Air Conditioning',
                'Music System with Bluetooth',
                'Mobile Charging Points',
                'Comfortable Seating',
                'Luggage Capacity: 2 Suitcases',
                'Clean & Well-maintained',
                'Bottle Water Provided'
            ],
            amenities: ['AC', 'Music', 'Charging', 'Clean Car'],
            idealFor: 'Small families, Business travelers, Couples, Airport transfers',
            availability: '24/7 Available - Advance booking recommended',
            driverInfo: 'Experienced local driver familiar with all routes',
            restrictions: 'Best for up to 4 passengers with light luggage'
        },
        {
            id: 2,
            type: 'SUV',
            icon: '🚙',
            category: 'Sport Utility Vehicle',
            capacity: '7 Passengers + 1 Driver',
            models: ['Toyota Innova Crysta', 'Mahindra Scorpio', 'MG Hector', 'Hyundai Creta', 'Ford Endeavour'],
            features: [
                'Powerful Engine for Hills',
                'Pushback Comfortable Seats',
                'Climate Control AC',
                'Premium Sound System',
                'Multiple USB Charging Points',
                'Large Luggage Space',
                'Sunroof (in select models)',
                'First Aid Kit'
            ],
            amenities: ['Pushback Seats', 'Premium AC', 'USB Charging', 'Music System'],
            idealFor: 'Large families, Group travel, Hill station trips (Lonavala, Mahabaleshwar)',
            availability: '24/7 Available - Book 2-3 days in advance',
            driverInfo: 'Experienced hill drivers available on request',
            restrictions: 'Comfortable for 7 passengers or 6 with heavy luggage'
        },
        {
            id: 3,
            type: 'Tempo Traveller',
            icon: '🚐',
            category: 'Mini Van',
            capacity: '12 Passengers + 1 Driver',
            models: ['Force Traveller', 'Mahindra Tourister', 'Tata Winger', 'Ashok Leyland'],
            features: [
                'Pushback Luxury Reclining Seats',
                'Individual AC Vents',
                'LED TV/DVD Player',
                'Premium Music System',
                'Cooler Box for Refreshments',
                'Reading Lights',
                'Large Luggage Compartment',
                'Washroom Break Planning'
            ],
            amenities: ['Reclining Seats', 'AC', 'LCD TV', 'Music', 'Reading Lights'],
            idealFor: 'Wedding parties, Corporate outings, Family functions, Temple tours',
            availability: 'Prior booking essential - 5-7 days advance',
            driverInfo: 'Two drivers provided for long distance (>500km)',
            restrictions: 'Perfect for 12 passengers with medium luggage'
        },
        {
            id: 4,
            type: 'Mini Bus',
            icon: '🚌',
            category: 'Medium Bus',
            capacity: '20-26 Passengers + 2 Drivers',
            models: ['Force Traveller 26', 'Mahindra Comfio', 'Tata Starbus'],
            features: [
                'Luxury Seating with High Back',
                'AC/Non-AC Options Available',
                'Dual AC Units',
                'Music System with Mic',
                'Ample Luggage Space',
                'Emergency Exits',
                'First Aid Kit & Fire Extinguisher',
                'Tour Guide Facility'
            ],
            amenities: ['Luxury Seats', 'Dual AC', 'Music with Mic', 'First Aid'],
            idealFor: 'School trips, Corporate events, Temple tours, Group pilgrimages',
            availability: 'Minimum 7 days advance booking required',
            driverInfo: 'Two experienced drivers for all trips',
            restrictions: 'Ideal for 20-26 passengers with luggage'
        },
        {
            id: 5,
            type: 'Luxury Bus',
            icon: '🚍',
            category: 'Volvo/Mercedes',
            capacity: '45-57 Passengers + 3 Staff',
            models: ['Volvo Multi-Axle', 'Scania Metrolink', 'Mercedes Benz', 'BharatBenz'],
            features: [
                'Pushback Reclining Sleeper',
                'Personal AC Vents',
                'Reading Lights per Seat',
                'Entertainment Screens',
                'Onboard Toilet',
                'Pantry Area',
                'WiFi Connectivity',
                'Blankets & Pillows',
                'Attendant Services',
                'GPS Tracking'
            ],
            amenities: ['Sleeper', 'Personal AC', 'Entertainment', 'WiFi', 'Toilet', 'Attendant'],
            idealFor: 'Large tour groups, Corporate events, Pilgrimage tours, Wedding parties',
            availability: '15-20 days advance booking necessary',
            driverInfo: '3 staff members - 2 drivers + 1 attendant',
            restrictions: 'Full group booking only (minimum 40 passengers)'
        }
    ];

    // Combine locations for display
    const allLocations = [
        { category: 'Maharashtra Locations', locations: maharashtraLocations },
        { category: 'Outside Maharashtra', locations: outsideLocations }
    ];

    // Handle search input change
    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        
        if (term.length > 0) {
            const results = allLocationsList.filter(location =>
                location.name.toLowerCase().includes(term.toLowerCase())
            );
            setSearchResults(results);
            setShowSearchResults(true);
            setNoResults(results.length === 0);
        } else {
            setSearchResults([]);
            setShowSearchResults(false);
            setNoResults(false);
        }
        setRandomCity(null);
    };

    // Handle search result selection
    const handleSelectLocation = (location) => {
        setSelectedLocation(location.id);
        setSearchTerm(location.name);
        setShowSearchResults(false);
        setNoResults(false);
        setRandomCity(null);
    };

    // Handle random city search
    const handleRandomSearch = () => {
        const randomIndex = Math.floor(Math.random() * randomIndianCities.length);
        const randomCityName = randomIndianCities[randomIndex];
        setSearchTerm(randomCityName);
        
        // Check if random city exists in our locations
        const exists = allLocationsList.some(loc => 
            loc.name.toLowerCase() === randomCityName.toLowerCase()
        );
        
        if (!exists) {
            setRandomCity({
                name: randomCityName,
                suggestion: "We don't currently serve this city, but we can arrange special transport! Contact us for custom quotes."
            });
            setSearchResults([]);
            setNoResults(true);
        } else {
            const city = allLocationsList.find(loc => 
                loc.name.toLowerCase() === randomCityName.toLowerCase()
            );
            setSelectedLocation(city.id);
            setRandomCity(null);
            setNoResults(false);
        }
        setShowSearchResults(false);
    };

    // Clear search
    const clearSearch = () => {
        setSearchTerm('');
        setSearchResults([]);
        setShowSearchResults(false);
        setNoResults(false);
        setRandomCity(null);
    };

    return (
        <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header Section */}
                <div className="text-center mb-10 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                        Vehicle <span className="text-red-600">Guide</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Complete information about vehicles available from Pune to various destinations
                    </p>
                </div>

                {/* Search Section */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">🔍 Search Destination</h2>
                        <button
                            onClick={handleRandomSearch}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                            🎲 Search Random City
                        </button>
                    </div>
                    
                    <div className="relative">
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    placeholder="Search for any city in India..."
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-20 sm:pr-24 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:border-red-500 focus:outline-none text-sm sm:text-base"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={clearSearch}
                                        className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg sm:text-xl"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Search Results Dropdown */}
                        {showSearchResults && searchResults.length > 0 && (
                            <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 max-h-64 sm:max-h-80 overflow-y-auto">
                                {searchResults.map((result) => (
                                    <button
                                        key={result.id}
                                        onClick={() => handleSelectLocation(result)}
                                        className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="font-medium text-gray-800 text-sm sm:text-base">{result.name}</span>
                                                <span className="text-xs sm:text-sm text-gray-500 ml-2">{result.distance}</span>
                                            </div>
                                            <span className="text-xs text-gray-400">{result.travelTime}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* No Results Message */}
                        {noResults && searchTerm && !randomCity && (
                            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 rounded-lg">
                                <p className="text-yellow-700 text-sm sm:text-base">
                                    ⚠️ No matching cities found. Try a different search or use the random city feature! <br />
                                    <span className='text-cyan-800'>♻️Please contact us if you have a specific city in mind that you'd like us to serve.</span>
                                </p>
                            </div>
                        )}

                        {/* Random City Not Found Message */}
                        {randomCity && (
                            <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl sm:text-3xl">🏙️</span>
                                    <div>
                                        <h3 className="font-bold text-blue-800 text-base sm:text-lg mb-1">
                                            {randomCity.name}
                                        </h3>
                                        <p className="text-blue-700 text-sm sm:text-base mb-3">
                                            {randomCity.suggestion}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a
                                                href="tel:+919765494008"
                                                className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                                            >
                                                📞 Call for Quote
                                            </a>
                                            <a
                                                href="https://wa.me/919765494008"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
                                            >
                                                💬 WhatsApp Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Location Selection */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">📍 Select Your Destination</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {allLocations.map((category, idx) => (
                            <div key={idx}>
                                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-red-600 border-b border-gray-200 pb-2">
                                    {category.category}
                                </h3>
                                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                    {category.locations.map((loc) => (
                                        <button
                                            key={loc.id}
                                            onClick={() => {
                                                setSelectedLocation(loc.id);
                                                setSearchTerm(loc.name);
                                                setRandomCity(null);
                                            }}
                                            className={`text-left p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                                                selectedLocation === loc.id
                                                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg'
                                                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                                            }`}
                                        >
                                            <div className="font-medium text-xs sm:text-sm truncate">{loc.name}</div>
                                            <div className="text-[10px] sm:text-xs opacity-75 mt-0.5 sm:mt-1">{loc.distance}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Selected Location Info */}
                    {selectedLocation && !randomCity && (
                        <div className="mt-4 sm:mt-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-4 border-red-600">
                            <p className="text-gray-700 text-sm sm:text-base">
                                <span className="font-bold text-red-600">Selected Route:</span> Pune → {
                                    allLocationsList.find(l => l.id === selectedLocation)?.name
                                } • {allLocationsList.find(l => l.id === selectedLocation)?.distance}
                            </p>
                        </div>
                    )}
                </div>

                {/* Vehicles Grid */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">🚘 Available Vehicles from Pune</h2>
                
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                    {vehicles.map((vehicle) => (
                        <div 
                            key={vehicle.id}
                            className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                        >
                            {/* Vehicle Header */}
                            <div className="bg-gradient-to-r from-red-600 to-orange-500 p-4 sm:p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-4xl backdrop-blur-sm">
                                            {vehicle.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-bold">{vehicle.type}</h3>
                                            <p className="text-xs sm:text-sm opacity-90">{vehicle.category}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl sm:text-3xl font-bold">{vehicle.capacity.split(' ')[0]}</div>
                                        <div className="text-xs sm:text-sm opacity-90">Seats</div>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle Details */}
                            <div className="p-4 sm:p-6">
                                {/* Capacity Badge */}
                                <div className="mb-3 sm:mb-4 bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-gray-100">
                                    <span className="font-semibold text-gray-700 text-sm sm:text-base">👥 Capacity: </span>
                                    <span className="text-gray-600 text-sm sm:text-base">{vehicle.capacity}</span>
                                </div>

                                {/* Models */}
                                <div className="mb-3 sm:mb-4">
                                    <span className="font-semibold text-gray-700 block mb-2 sm:mb-3 text-sm sm:text-base">Available Models:</span>
                                    <div className="flex flex-wrap gap-1 sm:gap-2">
                                        {vehicle.models.map((model, idx) => (
                                            <span key={idx} className="bg-gray-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700 border border-gray-200">
                                                {model}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features Preview */}
                                <div className="mb-3 sm:mb-4">
                                    <span className="font-semibold text-gray-700 block mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</span>
                                    <ul className="grid grid-cols-2 gap-1 sm:gap-2">
                                        {vehicle.features.slice(0, 4).map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                                                <span className="text-green-500 mr-1 sm:mr-2">✓</span>
                                                <span className="truncate">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Amenities Badges */}
                                <div className="mb-3 sm:mb-4 flex flex-wrap gap-1 sm:gap-2">
                                    {vehicle.amenities.map((item, idx) => (
                                        <span key={idx} className="bg-red-100 text-red-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Info Cards */}
                                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                                    <div className="bg-green-50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-green-100">
                                        <span className="font-semibold text-green-700 block mb-0.5 sm:mb-1 text-xs sm:text-sm">💡 Ideal For:</span>
                                        <p className="text-xs sm:text-sm text-gray-700">{vehicle.idealFor}</p>
                                    </div>

                                    <div className="bg-yellow-50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-yellow-100">
                                        <span className="font-semibold text-yellow-700 block mb-0.5 sm:mb-1 text-xs sm:text-sm">👨‍✈️ Driver:</span>
                                        <p className="text-xs sm:text-sm text-gray-700">{vehicle.driverInfo}</p>
                                    </div>

                                    <div className="bg-purple-50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-purple-100">
                                        <span className="font-semibold text-purple-700 block mb-0.5 sm:mb-1 text-xs sm:text-sm">📅 Availability:</span>
                                        <p className="text-xs sm:text-sm text-gray-700">{vehicle.availability}</p>
                                    </div>
                                </div>

                                {/* Expandable Section */}
                                <button
                                    onClick={() => setExpandedVehicle(expandedVehicle === vehicle.id ? null : vehicle.id)}
                                    className="w-full text-center py-2 sm:py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {expandedVehicle === vehicle.id ? 'Show Less ▲' : 'View All Features ▼'}
                                </button>

                                {expandedVehicle === vehicle.id && (
                                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                                        <h4 className="font-semibold mb-2 sm:mb-3 text-gray-800 text-sm sm:text-base">Complete Features:</h4>
                                        <ul className="space-y-1 sm:space-y-2">
                                            {vehicle.features.map((feature, idx) => (
                                                <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start">
                                                    <span className="text-red-500 mr-1 sm:mr-2">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                                            <span className="font-semibold text-gray-700 block mb-0.5 sm:mb-1 text-xs sm:text-sm">📋 Note:</span>
                                            <p className="text-xs sm:text-sm text-gray-600">{vehicle.restrictions}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Route Information */}
                <div className="mt-12 sm:mt-16 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">🗺️ Route Information</h2>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-red-600 border-b border-gray-200 pb-2">
                                Maharashtra Routes
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {maharashtraLocations.map((loc) => (
                                    <li key={loc.id} className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                                        <span className="font-medium text-gray-800 text-sm sm:text-base">{loc.name}</span>
                                        <div className="text-right">
                                            <span className="text-xs sm:text-sm text-gray-600 block">{loc.distance}</span>
                                            <span className="text-[10px] sm:text-xs text-gray-500">{loc.travelTime}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-red-600 border-b border-gray-200 pb-2">
                                Outside Maharashtra
                            </h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {outsideLocations.map((loc) => (
                                    <li key={loc.id} className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                                        <span className="font-medium text-gray-800 text-sm sm:text-base">{loc.name}</span>
                                        <div className="text-right">
                                            <span className="text-xs sm:text-sm text-gray-600 block">{loc.distance}</span>
                                            <span className="text-[10px] sm:text-xs text-gray-500">{loc.travelTime}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Booking Tips */}
                <div className="mt-6 sm:mt-8 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-2xl">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">📝 Important Booking Tips</h2>
                    <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                        <div className="flex items-center bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                            <span className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                            <span className="text-xs sm:text-sm">Book at least 3-7 days in advance for best vehicle selection</span>
                        </div>
                        <div className="flex items-center bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                            <span className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                            <span className="text-xs sm:text-sm">Provide exact passenger count for comfortable journey</span>
                        </div>
                        <div className="flex items-center bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                            <span className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                            <span className="text-xs sm:text-sm">Specify luggage requirements while booking</span>
                        </div>
                        <div className="flex items-center bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                            <span className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-base sm:text-lg flex-shrink-0">✓</span>
                            <span className="text-xs sm:text-sm">Mention any special requests (halts, food preferences)</span>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-8 sm:mt-12 text-center">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Ready to Book Your Journey?</h2>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Choose your vehicle and destination for a comfortable ride</p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <a
                                href="/booking"
                                className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                            >
                                🚐 Book Your Vehicle
                            </a>
                            <a
                                href="tel:+919765494008"
                                className="border-2 border-red-600 text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                            >
                                📞 Call for Inquiry
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quote;