

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Blur and Gradient Overlay */}
//       <div
//         className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70 z-0"
//         style={{
//           backgroundImage: 'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.1&auto=format&fit=crop&w=1920&q=80")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           filter: 'blur(3px)'
//         }}
//       >
//         {/* Additional blur overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>
//       </div>

//       {/* Moving Road Animation */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-10">
//         <div className="absolute bottom-0 w-full h-4 bg-gray-700">
//           <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-yellow-400"></div>
//           {/* Moving Road Lines */}
//           <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1">
//             <div className="absolute w-20 h-1 bg-white animate-moveRoad"></div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Floating Bus Icon */}
//       <div className="absolute bottom-40 left-8 lg:left-16 xl:left-24 transform animate-floatBus z-20">
//         <div className="relative group">
//           {/* Glow Effect */}
//           <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse"></div>

//           {/* Bus Icon with Enhanced Styling */}
//           <svg
//             className="w-20 h-20 lg:w-24 lg:h-24 text-red-400 relative transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {/* Bus Body */}
//             <path
//               d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
//               className="group-hover:fill-yellow-300 transition-colors duration-300"
//             />

//             {/* Front Window */}
//             <path
//               d="M7 12C7 11.4477 7.44772 11 8 11H10C10.5523 11 11 11.4477 11 12V13C11 13.5523 10.5523 14 10 14H8C7.44772 14 7 13.5523 7 13V12Z"
//               className="fill-blue-200 group-hover:fill-blue-300 transition-colors duration-300"
//             />

//             {/* Side Window */}
//             <path
//               d="M13 12C13 11.4477 13.4477 11 14 11H16C16.5523 11 17 11.4477 17 12V13C17 13.5523 16.5523 14 16 14H14C13.4477 14 13 13.5523 13 13V12Z"
//               className="fill-blue-200 group-hover:fill-blue-300 transition-colors duration-300"
//             />

//             {/* Rear Wheels */}
//             <circle
//               cx="7"
//               cy="19"
//               r="3"
//               className="fill-gray-800 group-hover:fill-gray-900 transition-colors duration-300"
//             />
//             <circle
//               cx="17"
//               cy="19"
//               r="3"
//               className="fill-gray-800 group-hover:fill-gray-900 transition-colors duration-300"
//             />

//             {/* Headlight Effect */}
//             <circle
//               cx="20"
//               cy="10"
//               r="1"
//               className="fill-white opacity-30 group-hover:opacity-100 transition-opacity duration-300"
//             />
//           </svg>

//           {/* Moving Road Lines Under Bus */}
//           <div className="absolute  left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-600  overflow-hidden">
//             <div className="w-10 h-1 mt-1.5 bg-gradient-to-r from-transparent via-white to-transparent animate-moveRoadLines"></div>
//           </div>

//           {/* Floating Particles */}
//           <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-70 group-hover:opacity-100">
//             <div className="w-full h-full bg-yellow-400 rounded-full animate-ping"></div>
//           </div>

//           <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60">
//             <div className="w-full h-full bg-orange-400 rounded-full animate-pulse"></div>
//           </div>

//           <div className="absolute top-0 -left-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
//         </div>

//         {/* Tooltip Text */}

//       </div>


//       {/* Main Content */}
//       <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//         {/* Badge */}
//         <div className="inline-flex items-center bg-red-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-8 animate-fadeIn">
//           <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           Trusted by 10,000+ Customers
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slideUp">
//           <span className="bg-gradient-to-b  from-yellow-400  to-orange-600 bg-clip-text text-transparent">
//             Rushikesh
//           </span>
//           <br />
//           <span className="text-white">Tours & Travels</span>
//         </h1>

//         {/* Subheading */}
//         <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
//           Experience <span className="text-yellow-400 font-semibold">Luxury Travel</span> with Our Premium
//           Fleet of AC & Non-AC Buses. <span className="text-lime-400 font-semibold">24×7 Service</span> Across India
//         </p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto animate-slideUp delay-400">
//           <div className="text-center">
//             <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
//               <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <span className="text-sm font-semibold">24/7 Service</span>
//           </div>
//           <div className="text-center">
//             <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
//               <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//               </svg>
//             </div>
//             <span className="text-sm font-semibold">Safe Travel</span>
//           </div>
//           <div className="text-center">
//             <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
//               <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
//               </svg>
//             </div>
//             <span className="text-sm font-semibold">Affordable</span>
//           </div>
//           <div className="text-center">
//             <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
//               <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//               </svg>
//             </div>
//             <span className="text-sm font-semibold">Comfort</span>
//           </div>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp delay-600">
//           <a
//             href="/booking"
//             className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center min-w-[200px]"
//           >
//             <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//             </svg>
//             Book Now
//           </a>
//           <a
//             href="/contact"
//             className="group border-2 border-white hover:border-yellow-400 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center min-w-[200px]"
//           >
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//             </svg>
//             Contact Us
//           </a>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes moveRoad {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
//         @keyframes floatBus {
//           0%, 100% { transform: translateX(20px) translateY(0px); }
//           50% { transform: translateX(20px) translateY(-20px); }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-moveRoad {
//           animation: moveRoad 2s linear infinite;
//         }
//         .animate-floatBus {
//           animation: floatBus 3s ease-in-out infinite;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out;
//         }
//         .animate-slideUp {
//           animation: slideUp 0.8s ease-out forwards;
//         }
//         .animate-slideUp.delay-200 {
//           animation-delay: 0.2s;
//           opacity: 0;
//         }
//         .animate-slideUp.delay-400 {
//           animation-delay: 0.4s;
//           opacity: 0;
//         }
//         .animate-slideUp.delay-600 {
//           animation-delay: 0.6s;
//           opacity: 0;
//         }
//            @keyframes moveRoadLines {
//     0% { 
//       transform: translateX(-100%); 
//     }
//     100% { 
//       transform: translateX(100%); 
//     }
//   }
//   .animate-moveRoadLines {
//     animation: moveRoadLines 0.8s linear infinite;
//   }
//       `}</style>
//     </section>
//   );
// }

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Blur and Gradient Overlay */}
//       <div
//         className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70 z-0"
//         style={{
//           backgroundImage:
//             'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.1&auto=format&fit=crop&w=1920&q=80")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           filter: "blur(3px)",
//         }}
//       >
//         {/* Additional blur overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>
//       </div>

//       {/* Moving Road Animation */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-10">
//         <div className="absolute bottom-0 w-full h-4 bg-gray-700">
//           <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-yellow-400"></div>
//           {/* Moving Road Lines */}
//           <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1">
//             <div className="absolute w-20 h-1 bg-white animate-moveRoad"></div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Floating Bus Icon (Fixed for Mobile) */}
//       <div className="absolute bottom-10 sm:bottom-32 md:bottom-40 left-4 sm:left-8 lg:left-16 xl:left-24 transform animate-floatBus z-20 scale-90 sm:scale-100">
//         <div className="relative group">
//           {/* Glow Effect */}
//           <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse"></div>

//           {/* Bus Icon with Enhanced Styling */}
//           <svg
//             className="w-20 h-20 lg:w-24 lg:h-24 text-red-400 relative transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {/* Bus Body */}
//             <path
//               d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
//               className="group-hover:fill-yellow-300 transition-colors duration-300"
//             />

//             {/* Front Window */}
//             <path
//               d="M7 12C7 11.4477 7.44772 11 8 11H10C10.5523 11 11 11.4477 11 12V13C11 13.5523 10.5523 14 10 14H8C7.44772 14 7 13.5523 7 13V12Z"
//               className="fill-blue-200 group-hover:fill-blue-300 transition-colors duration-300"
//             />

//             {/* Side Window */}
//             <path
//               d="M13 12C13 11.4477 13.4477 11 14 11H16C16.5523 11 17 11.4477 17 12V13C17 13.5523 16.5523 14 16 14H14C13.4477 14 13 13.5523 13 13V12Z"
//               className="fill-blue-200 group-hover:fill-blue-300 transition-colors duration-300"
//             />

//             {/* Rear Wheels */}
//             <circle
//               cx="7"
//               cy="19"
//               r="3"
//               className="fill-gray-800 group-hover:fill-gray-900 transition-colors duration-300"
//             />
//             <circle
//               cx="17"
//               cy="19"
//               r="3"
//               className="fill-gray-800 group-hover:fill-gray-900 transition-colors duration-300"
//             />

//             {/* Headlight Effect */}
//             <circle
//               cx="20"
//               cy="10"
//               r="1"
//               className="fill-white opacity-30 group-hover:opacity-100 transition-opacity duration-300"
//             />
//           </svg>

//           {/* Moving Road Lines Under Bus */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-600 overflow-hidden">
//             <div className="w-10 h-1 mt-1.5 bg-gradient-to-r from-transparent via-white to-transparent animate-moveRoadLines"></div>
//           </div>

//           {/* Floating Particles */}
//           <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-70 group-hover:opacity-100">
//             <div className="w-full h-full bg-yellow-400 rounded-full animate-ping"></div>
//           </div>

//           <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60">
//             <div className="w-full h-full bg-orange-400 rounded-full animate-pulse"></div>
//           </div>

//           <div className="absolute top-0 -left-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//         {/* Badge */}
//         <div className="inline-flex items-center bg-red-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-8 animate-fadeIn">
//           <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           Trusted by 10,000+ Customers
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slideUp">
//           <span className="bg-gradient-to-b from-yellow-400 to-orange-600 bg-clip-text text-transparent">
//             Rushikesh
//           </span>
//           <br />
//           <span className="text-white">Tours & Travels</span>
//         </h1>

//         {/* Subheading */}
//         <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
//           Experience <span className="text-yellow-400 font-semibold">Luxury Travel</span> with Our Premium
//           Fleet of AC & Non-AC Buses.{" "}
//           <span className="text-lime-400 font-semibold">24×7 Service</span> Across India
//         </p>

//         {/* Features Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto animate-slideUp delay-400">
//           {[
//             { color: "yellow", icon: "24/7 Service" logo: },
//             { color: "green", icon: "Safe Travel"logo: },
//             { color: "blue", icon: "Affordable" logo:},
//             { color: "purple", icon: "Comfort" logo: },
//           ].map((item, i) => (
//             <div key={i} className="text-center">
//               <div
//                 className={`w-12 h-12 bg-${item.color}-400/20 rounded-full flex items-center justify-center mx-auto mb-2`}
//               >
//                 
// </div>
//               <span className="text-sm font-semibold">{item.icon}</span>
//             </div>
//           ))}
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp delay-600">
//           <a
//             href="/booking"
//             className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center min-w-[200px]"
//           >
//             <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//             </svg>
//             Book Now
//           </a>
//           <a
//             href="/contact"
//             className="group border-2 border-white hover:border-yellow-400 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center min-w-[200px]"
//           >
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//             </svg>
//             Contact Us
//           </a>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes moveRoad {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//         @keyframes floatBus {
//           0%,
//           100% {
//             transform: translateX(20px) translateY(0px);
//           }
//           50% {
//             transform: translateX(20px) translateY(-20px);
//           }
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-moveRoad {
//           animation: moveRoad 2s linear infinite;
//         }
//         .animate-floatBus {
//           animation: floatBus 3s ease-in-out infinite;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out;
//         }
//         .animate-slideUp {
//           animation: slideUp 0.8s ease-out forwards;
//         }
//         .animate-slideUp.delay-200 {
//           animation-delay: 0.2s;
//           opacity: 0;
//         }
//         .animate-slideUp.delay-400 {
//           animation-delay: 0.4s;
//           opacity: 0;
//         }
//         .animate-slideUp.delay-600 {
//           animation-delay: 0.6s;
//           opacity: 0;
//         }
//         @keyframes moveRoadLines {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//         .animate-moveRoadLines {
//           animation: moveRoadLines 0.8s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur and Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(2px)' // Reduced blur for mobile performance
        }}
      >
        {/* Additional blur overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -right-16 w-64 h-64 md:w-96 md:h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 md:w-96 md:h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Moving Road Animation */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-black/80 to-transparent z-10">
        <div className="absolute bottom-0 w-full h-3 md:h-4 bg-gray-700">
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-yellow-400"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 overflow-hidden">
            <div className="absolute inset-0 flex animate-moveRoad">
              <div className="w-30 md:w-20 h-1 bg-white mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-black mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-white mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-black mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-white"></div>
              <div className="w-30 md:w-20 h-1 bg-black mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-white mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-black mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-white"></div>
              <div className="w-30 md:w-20 h-1 bg-black mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-white mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-black mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-white"></div>
              <div className="w-30 md:w-20 h-1 bg-black mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-white mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-black mr-1"></div>
              <div className="w-30 md:w-20 h-1 bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bus Icon - Responsive */}
      <div className="absolute bottom-24 md:bottom-40 left-4 md:left-8 lg:left-16 xl:left-24 transform animate-floatBus z-20">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse"></div>

          {/* Bus Icon */}
          <svg
            className="w-16 h-16 sm:w-20 md:w-20 lg:w-24 text-red-400 relative transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" className="group-hover:fill-yellow-300 transition-colors duration-300" />
            <path d="M7 12C7 11.4477 7.44772 11 8 11H10C10.5523 11 11 11.4477 11 12V13C11 13.5523 10.5523 14 10 14H8C7.44772 14 7 13.5523 7 13V12Z" className="fill-blue-200 group-hover:fill-blue-300 transition-colors duration-300" />
            <path d="M13 12C13 11.4477 13.4477 11 14 11H16C16.5523 11 17 11.4477 17 12V13C17 13.5523 16.5523 14 16 14H14C13.4477 14 13 13.5523 13 13V12Z" className="fill-blue-200 group-hover:fill-blue-300 transition-colors duration-300" />
            <circle cx="7" cy="19" r="3" className="fill-gray-800 group-hover:fill-gray-900 transition-colors duration-300" />
            <circle cx="17" cy="19" r="3" className="fill-gray-800 group-hover:fill-gray-900 transition-colors duration-300" />
            <circle cx="20" cy="10" r="1" className="fill-white opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
          </svg>

          {/* Road Lines Under Bus */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-4 bg-gray-600 overflow-hidden mt-1">
            <div className="w-8 h-1 mt-1.5 bg-gradient-to-r from-transparent via-white to-transparent animate-moveRoadLines"></div>
          </div>

          {/* Particles */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-70 group-hover:opacity-100">
            <div className="w-full h-full bg-yellow-400 rounded-full animate-ping"></div>
          </div>
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60">
            <div className="w-full h-full bg-orange-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center bg-red-600/90 backdrop-blur-sm text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full mb-6 text-sm md:text-base animate-fadeIn">
          <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Trusted by 10,000+ Customers
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight animate-slideUp">
          <span className="bg-gradient-to-b from-yellow-400 to-orange-600 bg-clip-text text-transparent">
            Rushikesh
          </span>
          <br className="block sm:hidden" />
          <span className="text-white">Tours & Transport</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
          Experience <span className="text-yellow-400 font-semibold">Luxury Travel</span> with Our Premium
          Fleet of AC & Non-AC Buses. <span className="text-lime-400 font-semibold">24×7 Service</span> Across India
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12 max-w-xl md:max-w-2xl mx-auto animate-slideUp delay-400">
          {[
            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "24/7 Service", color: "yellow" },
            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Safe Travel", color: "green" },
            { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1", label: "Affordable", color: "blue" },
            { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Comfort", color: "purple" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className={`w-10 h-10 md:w-12 md:h-12 bg-${item.color}-400/20 rounded-full flex items-center justify-center mx-auto mb-2`}>
                <svg className={`w-5 h-5 md:w-6 md:h-6 text-${item.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Stacked on Mobile */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-slideUp delay-600">
          <a
            href="/booking"
            className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center w-full sm:w-auto min-w-[180px] sm:min-w-[200px] text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Book Now
          </a>
          <a
            href="/contact"
            className="group border-2 border-white hover:border-yellow-400 hover:bg-white/10 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center w-full sm:w-auto min-w-[180px] sm:min-w-[200px] text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes moveRoad {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes floatBus {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes moveRoadLines {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-moveRoad { animation: moveRoad 10.5s linear infinite; }
        .animate-floatBus { animation: floatBus 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .animate-slideUp.delay-200 { animation-delay: 0.2s; }
        .animate-slideUp.delay-400 { animation-delay: 0.4s; }
        .animate-slideUp.delay-600 { animation-delay: 0.6s; }
        .animate-moveRoadLines { animation: moveRoadLines 0.6s linear infinite; }

        /* Improve readability on small screens */
        @media (max-width: 640px) {
          .animate-moveRoad { animation-duration: 10.2s; }
          .animate-moveRoadLines { animation-duration: 1.5s; }
        }
      `}</style>
    </section>
  );
}