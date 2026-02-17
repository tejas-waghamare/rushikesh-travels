

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
//         { id: 'nanded', name: 'Nanded', distance: '460 km', travelTime: '9-10 hours' }
//     ];

//     // Locations outside Maharashtra
//     const outsideLocations = [
//         { id: 'goa', name: 'Goa', distance: '450 km', travelTime: '9-10 hours' },
//         { id: 'surat', name: 'Surat (Gujarat)', distance: '460 km', travelTime: '9-10 hours' },
//         { id: 'indore', name: 'Indore (MP)', distance: '560 km', travelTime: '11-12 hours' },
//         { id: 'hyderabad', name: 'Hyderabad (Telangana)', distance: '560 km', travelTime: '10-11 hours' },
//         { id: 'bangalore', name: 'Bangalore (Karnataka)', distance: '840 km', travelTime: '14-15 hours' },
//         { id: 'shirdi', name: 'Shirdi', distance: '210 km', travelTime: '4-5 hours' },
//         { id: 'shaniShingnapur', name: 'Shani Shingnapur', distance: '260 km', travelTime: '5-6 hours' }
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
//         { category: '📍 Maharashtra Locations', locations: maharashtraLocations },
//         { category: '🚩 Outside Maharashtra', locations: outsideLocations }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
//             {/* Header */}
//             <div className="bg-blue-600 text-white py-12 px-4">
//                 <div className="max-w-7xl mx-auto">
//                     <h1 className="text-4xl font-bold mb-4">🚐 Pune to All Locations - Vehicle Guide</h1>
//                     <p className="text-xl opacity-90">Complete information about vehicles available from Pune to various destinations</p>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 {/* Location Selection */}
//                 <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//                     <h2 className="text-2xl font-semibold mb-4">📍 Select Your Destination</h2>
                    
//                     <div className="grid md:grid-cols-2 gap-8">
//                         {allLocations.map((category, idx) => (
//                             <div key={idx}>
//                                 <h3 className="text-lg font-semibold mb-3 text-blue-600">{category.category}</h3>
//                                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//                                     {category.locations.map((loc) => (
//                                         <button
//                                             key={loc.id}
//                                             onClick={() => setSelectedLocation(loc.id)}
//                                             className={`text-left p-2 rounded-lg transition ${
//                                                 selectedLocation === loc.id
//                                                     ? 'bg-blue-600 text-white'
//                                                     : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
//                                             }`}
//                                         >
//                                             <div className="font-medium">{loc.name}</div>
//                                             <div className="text-xs opacity-75">{loc.distance} • {loc.travelTime}</div>
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Selected Location Info */}
//                 {selectedLocation && (
//                     <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded-r-lg">
//                         <p className="text-lg">
//                             <span className="font-semibold">Selected Route:</span> Pune → {
//                                 [...maharashtraLocations, ...outsideLocations].find(l => l.id === selectedLocation)?.name
//                             } • {
//                                 [...maharashtraLocations, ...outsideLocations].find(l => l.id === selectedLocation)?.distance
//                             } • Estimated Time: {
//                                 [...maharashtraLocations, ...outsideLocations].find(l => l.id === selectedLocation)?.travelTime
//                             }
//                         </p>
//                     </div>
//                 )}

//                 {/* Vehicles Grid */}
//                 <h2 className="text-3xl font-bold mb-6">🚘 Available Vehicles from Pune</h2>
                
//                 <div className="grid lg:grid-cols-2 gap-6">
//                     {vehicles.map((vehicle) => (
//                         <div 
//                             key={vehicle.id}
//                             className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                         >
//                             {/* Vehicle Header */}
//                             <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center space-x-3">
//                                         <span className="text-4xl">{vehicle.icon}</span>
//                                         <div>
//                                             <h3 className="text-2xl font-bold">{vehicle.type}</h3>
//                                             <p className="text-sm opacity-90">{vehicle.category}</p>
//                                         </div>
//                                     </div>
//                                     <div className="text-right">
//                                         <div className="text-2xl font-bold">{vehicle.capacity.split(' ')[0]}</div>
//                                         <div className="text-sm opacity-90">Seats</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Vehicle Details */}
//                             <div className="p-6">
//                                 {/* Capacity */}
//                                 <div className="mb-4 bg-gray-50 p-3 rounded-lg">
//                                     <span className="font-semibold text-gray-700">👥 Capacity: </span>
//                                     <span className="text-gray-600">{vehicle.capacity}</span>
//                                 </div>

//                                 {/* Models */}
//                                 <div className="mb-4">
//                                     <span className="font-semibold text-gray-700 block mb-2">🚘 Available Models:</span>
//                                     <div className="flex flex-wrap gap-2">
//                                         {vehicle.models.map((model, idx) => (
//                                             <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
//                                                 {model}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Features */}
//                                 <div className="mb-4">
//                                     <span className="font-semibold text-gray-700 block mb-2">✨ Key Features:</span>
//                                     <ul className="grid grid-cols-2 gap-2">
//                                         {vehicle.features.slice(0, 6).map((feature, idx) => (
//                                             <li key={idx} className="flex items-center text-sm text-gray-600">
//                                                 <span className="text-green-500 mr-2">✓</span>
//                                                 {feature}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                                 {/* Amenities Badges */}
//                                 <div className="mb-4">
//                                     <div className="flex flex-wrap gap-2">
//                                         {vehicle.amenities.map((item, idx) => (
//                                             <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
//                                                 {item}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Ideal For */}
//                                 <div className="mb-4 p-3 bg-green-50 rounded-lg">
//                                     <span className="font-semibold text-green-700 block mb-1">💡 Ideal For:</span>
//                                     <p className="text-sm text-gray-700">{vehicle.idealFor}</p>
//                                 </div>

//                                 {/* Driver Info */}
//                                 <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
//                                     <span className="font-semibold text-yellow-700 block mb-1">👨‍✈️ Driver Details:</span>
//                                     <p className="text-sm text-gray-700">{vehicle.driverInfo}</p>
//                                 </div>

//                                 {/* Availability */}
//                                 <div className="mb-4 p-3 bg-purple-50 rounded-lg">
//                                     <span className="font-semibold text-purple-700 block mb-1">📅 Availability:</span>
//                                     <p className="text-sm text-gray-700">{vehicle.availability}</p>
//                                 </div>

//                                 {/* Restrictions */}
//                                 <div className="p-3 bg-gray-50 rounded-lg">
//                                     <span className="font-semibold text-gray-700 block mb-1">📋 Important Notes:</span>
//                                     <p className="text-sm text-gray-600">{vehicle.restrictions}</p>
//                                 </div>

//                                 {/* Expandable Section */}
//                                 <button
//                                     onClick={() => setExpandedVehicle(expandedVehicle === vehicle.id ? null : vehicle.id)}
//                                     className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center"
//                                 >
//                                     {expandedVehicle === vehicle.id ? 'Show Less ▲' : 'View All Features ▼'}
//                                 </button>

//                                 {expandedVehicle === vehicle.id && (
//                                     <div className="mt-4 pt-4 border-t border-gray-200">
//                                         <h4 className="font-semibold mb-2">All Features:</h4>
//                                         <ul className="space-y-1">
//                                             {vehicle.features.map((feature, idx) => (
//                                                 <li key={idx} className="text-sm text-gray-600 flex items-start">
//                                                     <span className="text-blue-500 mr-2">•</span>
//                                                     {feature}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Route Information */}
//                 <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
//                     <h2 className="text-2xl font-bold mb-4">🗺️ Route Information</h2>
//                     <div className="grid md:grid-cols-2 gap-6">
//                         <div>
//                             <h3 className="font-semibold text-lg mb-3 text-blue-600">Maharashtra Routes</h3>
//                             <ul className="space-y-2">
//                                 {maharashtraLocations.map((loc) => (
//                                     <li key={loc.id} className="flex justify-between border-b pb-2">
//                                         <span className="font-medium">{loc.name}</span>
//                                         <span className="text-gray-600">{loc.distance} • {loc.travelTime}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="font-semibold text-lg mb-3 text-green-600">Outside Maharashtra</h3>
//                             <ul className="space-y-2">
//                                 {outsideLocations.map((loc) => (
//                                     <li key={loc.id} className="flex justify-between border-b pb-2">
//                                         <span className="font-medium">{loc.name}</span>
//                                         <span className="text-gray-600">{loc.distance} • {loc.travelTime}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Booking Tips */}
//                 <div className="mt-8 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
//                     <h2 className="text-xl font-bold mb-3 text-yellow-800">📝 Important Booking Tips</h2>
//                     <ul className="grid md:grid-cols-2 gap-3">
//                         <li className="flex items-center">
//                             <span className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center mr-2">✓</span>
//                             Book at least 3-7 days in advance for best vehicle selection
//                         </li>
//                         <li className="flex items-center">
//                             <span className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center mr-2">✓</span>
//                             Provide exact passenger count for comfortable journey
//                         </li>
//                         <li className="flex items-center">
//                             <span className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center mr-2">✓</span>
//                             Specify luggage requirements while booking
//                         </li>
//                         <li className="flex items-center">
//                             <span className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center mr-2">✓</span>
//                             Mention any special requests (halts, food preferences)
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Quote;

import React, { useState } from 'react';

const Quote = () => {
    const [selectedLocation, setSelectedLocation] = useState('mumbai');
    const [expandedVehicle, setExpandedVehicle] = useState(null);

    // Pune to various locations in Maharashtra
    const maharashtraLocations = [
        { id: 'mumbai', name: 'Mumbai', distance: '150 km', travelTime: '3-4 hours' },
        { id: 'nagpur', name: 'Nagpur', distance: '700 km', travelTime: '12-14 hours' },
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

    return (
        <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-800 mb-4">
                        Vehicle <span className="text-red-600">Guide</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Complete information about vehicles available from Pune to various destinations
                    </p>
                </div>

                {/* Location Selection */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">📍 Select Your Destination</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {allLocations.map((category, idx) => (
                            <div key={idx}>
                                <h4 className="text-lg font-semibold mb-4 text-red-600 border-b border-gray-200 pb-2">
                                    {category.category}
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {category.locations.map((loc) => (
                                        <button
                                            key={loc.id}
                                            onClick={() => setSelectedLocation(loc.id)}
                                            className={`text-left p-3 rounded-xl transition-all duration-300 ${
                                                selectedLocation === loc.id
                                                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg'
                                                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                                            }`}
                                        >
                                            <div className="font-medium">{loc.name}</div>
                                            <div className="text-xs opacity-75 mt-1">{loc.distance}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Selected Location Info */}
                    {selectedLocation && (
                        <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border-l-4 border-red-600">
                            <p className="text-gray-700">
                                <span className="font-bold text-red-600">Selected Route:</span> Pune → {
                                    [...maharashtraLocations, ...outsideLocations].find(l => l.id === selectedLocation)?.name
                                } • {[...maharashtraLocations, ...outsideLocations].find(l => l.id === selectedLocation)?.distance}
                            </p>
                        </div>
                    )}
                </div>

                {/* Vehicles Grid */}
                <h3 className="text-3xl font-bold text-gray-800 mb-8">🚘 Available Vehicles from Pune</h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                    {vehicles.map((vehicle) => (
                        <div 
                            key={vehicle.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                        >
                            {/* Vehicle Header */}
                            <div className="bg-gradient-to-r from-red-600 to-orange-500 p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-sm">
                                            {vehicle.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold">{vehicle.type}</h4>
                                            <p className="text-sm opacity-90">{vehicle.category}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold">{vehicle.capacity.split(' ')[0]}</div>
                                        <div className="text-sm opacity-90">Seats</div>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle Details */}
                            <div className="p-6">
                                {/* Capacity Badge */}
                                <div className="mb-4 bg-gray-50 rounded-xl p-3 border border-gray-100">
                                    <span className="font-semibold text-gray-700">👥 Capacity: </span>
                                    <span className="text-gray-600">{vehicle.capacity}</span>
                                </div>

                                {/* Models */}
                                <div className="mb-4">
                                    <span className="font-semibold text-gray-700 block mb-3">Available Models:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {vehicle.models.map((model, idx) => (
                                            <span key={idx} className="bg-gray-100 px-3 py-1.5 rounded-full text-sm text-gray-700 border border-gray-200">
                                                {model}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features Preview */}
                                <div className="mb-4">
                                    <span className="font-semibold text-gray-700 block mb-3">Key Features:</span>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {vehicle.features.slice(0, 4).map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                <span className="text-green-500 mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Amenities Badges */}
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {vehicle.amenities.map((item, idx) => (
                                        <span key={idx} className="bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-xs font-medium">
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Info Cards */}
                                <div className="space-y-3 mb-4">
                                    <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                                        <span className="font-semibold text-green-700 block mb-1">💡 Ideal For:</span>
                                        <p className="text-sm text-gray-700">{vehicle.idealFor}</p>
                                    </div>

                                    <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-100">
                                        <span className="font-semibold text-yellow-700 block mb-1">👨‍✈️ Driver:</span>
                                        <p className="text-sm text-gray-700">{vehicle.driverInfo}</p>
                                    </div>

                                    <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
                                        <span className="font-semibold text-purple-700 block mb-1">📅 Availability:</span>
                                        <p className="text-sm text-gray-700">{vehicle.availability}</p>
                                    </div>
                                </div>

                                {/* Expandable Section */}
                                <button
                                    onClick={() => setExpandedVehicle(expandedVehicle === vehicle.id ? null : vehicle.id)}
                                    className="w-full text-center py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {expandedVehicle === vehicle.id ? 'Show Less ▲' : 'View All Features ▼'}
                                </button>

                                {expandedVehicle === vehicle.id && (
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <h5 className="font-semibold mb-3 text-gray-800">Complete Features:</h5>
                                        <ul className="space-y-2">
                                            {vehicle.features.map((feature, idx) => (
                                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                                    <span className="text-red-500 mr-2">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-3 p-3 bg-gray-50 rounded-xl">
                                            <span className="font-semibold text-gray-700 block mb-1">📋 Note:</span>
                                            <p className="text-sm text-gray-600">{vehicle.restrictions}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Route Information */}
                <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">🗺️ Route Information</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-red-600 border-b border-gray-200 pb-2">
                                Maharashtra Routes
                            </h4>
                            <ul className="space-y-3">
                                {maharashtraLocations.map((loc) => (
                                    <li key={loc.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                                        <span className="font-medium text-gray-800">{loc.name}</span>
                                        <div className="text-right">
                                            <span className="text-sm text-gray-600 block">{loc.distance}</span>
                                            <span className="text-xs text-gray-500">{loc.travelTime}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-red-600 border-b border-gray-200 pb-2">
                                Outside Maharashtra
                            </h4>
                            <ul className="space-y-3">
                                {outsideLocations.map((loc) => (
                                    <li key={loc.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                                        <span className="font-medium text-gray-800">{loc.name}</span>
                                        <div className="text-right">
                                            <span className="text-sm text-gray-600 block">{loc.distance}</span>
                                            <span className="text-xs text-gray-500">{loc.travelTime}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Booking Tips */}
                <div className="mt-8 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white shadow-2xl">
                    <h3 className="text-2xl font-bold mb-6">📝 Important Booking Tips</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-lg">✓</span>
                            Book at least 3-7 days in advance for best vehicle selection
                        </div>
                        <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-lg">✓</span>
                            Provide exact passenger count for comfortable journey
                        </div>
                        <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-lg">✓</span>
                            Specify luggage requirements while booking
                        </div>
                        <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-lg">✓</span>
                            Mention any special requests (halts, food preferences)
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Book Your Journey?</h3>
                        <p className="text-gray-600 mb-6">Choose your vehicle and destination for a comfortable ride</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/booking"
                                className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
                            >
                                🚐 Book Your Vehicle
                            </a>
                            <a
                                href="tel:+919765494008"
                                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-lg"
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