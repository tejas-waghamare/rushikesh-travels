// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/RTlogo2.png";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [navbarHeight, setNavbarHeight] = useState(73); // Default height
//   const location = useLocation();

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   // Handle scroll effect and navbar height
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       setScrolled(isScrolled);
//     };

//     // Update navbar height based on scroll state
//     const updateNavbarHeight = () => {
//       // When scrolled, navbar height is smaller (py-2 vs py-4)
//       setNavbarHeight(scrolled ? 65 : 73); // Approximate heights
//     };

//     window.addEventListener("scroll", handleScroll);
//     updateNavbarHeight();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrolled]);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     closeMenu();
//   }, [location]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
    
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   const isActiveRoute = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-md shadow-xl py-2"
//           : "bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <Link 
//           to="/" 
//           className="flex items-center space-x-2 group flex-1 md:flex-none"
//           onClick={closeMenu}
//         >
//           <div className="relative">
//             <div className="w-15 h-15 bg-gradient-to-br from-yellow-100 to-white rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
//               <span className="text-white font-bold text-lg"><img src={logo} alt="Rushikesh Logo" className="w-15 h-15 rounded-lg" /></span>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent truncate max-w-[180px] sm:max-w-none">
//               Shri Rushikesh Tours & Transport Pune
//             </h1>
//             <p className="text-xs text-gray-500 -mt-1 hidden sm:block">
//               Explore the World with Us
//             </p>
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-1">
//           {[
//             { path: "/", label: "Home" },
//             { path: "/about", label: "About" },
//             { path: "/services", label: "Services" },
//             { path: "/gallery", label: "Gallery" },
//             { path: "/booking", label: "Booking" },
//             { path: "/contact", label: "Contact" },
//           ].map((item) => (
//             <li key={item.path}>
//               <Link
//                 to={item.path}
//                 className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group ${
//                   isActiveRoute(item.path)
//                     ? "text-red-600 bg-red-50"
//                     : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
//                 }`}
//               >
//                 {item.label}
//                 {isActiveRoute(item.path) && (
//                   <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-red-600 rounded-full"></span>
//                 )}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button for Desktop */}
//         <div className="hidden md:block">
//           <Link
//             to="/booking"
//             className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-red-700"
//           >
//             Book Now
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className={`md:hidden p-2 rounded-lg transition-colors duration-300 ml-2 ${
//             isOpen ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
//           }`}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu - Full Screen Overlay - FIXED VERSION */}
//       <div
//         className={`fixed left-0 right-0 md:hidden transition-all duration-500 ease-in-out ${
//           isOpen
//             ? "opacity-100 visible"
//             : "opacity-0 invisible pointer-events-none"
//         }`}
//         style={{ 
//           top: scrolled ? '65px' : '73px', // Dynamic top based on scroll state
//           height: `calc(100vh - ${scrolled ? '65px' : '73px'})` // Full height minus navbar
//         }}
//       >
//         {/* Backdrop */}
//         <div 
//           className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
//             isOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={closeMenu}
//         />
        
//         {/* Menu Panel */}
//         <div
//           className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white/80 shadow-2xl transform transition-transform duration-500 ease-out ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="h-full overflow-y-auto py-6 px-5">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-yellow-100 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-sm"><img src={logo} alt="" /></span>
//                 </div>
//                 <span className="font-semibold text-gray-800">Menu</span>
//               </div>
//               <button
//                 onClick={closeMenu}
//                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
            
//             {/* Booking CTA */}
//             <div className="mb-6">
//               <Link
//                 to="/booking"
//                 className="block w-full bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
//                 onClick={closeMenu}
//               >
//                 <div className="flex items-center justify-center space-x-2">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
//                   </svg>
//                   <span>Book Your Trip Now</span>
//                 </div>
//               </Link>
//             </div>
            
//             {/* Navigation Links */}
//             <ul className="space-y-2">
//               {[
//                 { path: "/", label: "Home", icon: "🏠" },
//                 { path: "/about", label: "About", icon: "ℹ️" },
//                 { path: "/services", label: "Services", icon: "🚌" },
//                 { path: "/gallery", label: "Gallery", icon: "📸" },
//                 { path: "/booking", label: "Booking", icon: "📅" },
//                 { path: "/contact", label: "Contact", icon: "📞" },
//               ].map((item) => (
//                 <li key={item.path}>
//                   <Link
//                     to={item.path}
//                     className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
//                       isActiveRoute(item.path)
//                         ? "text-red-600 bg-red-50 border-l-4 border-red-600"
//                         : "text-gray-700 hover:text-red-600 hover:bg-gray-50 border-l-4 border-transparent"
//                     }`}
//                     onClick={closeMenu}
//                   >
//                     <span className="mr-3 text-xl">{item.icon}</span>
//                     {item.label}
//                     {isActiveRoute(item.path) && (
//                       <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                       </svg>
//                     )}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Footer */}
//             <div className="mt-8 pt-6 border-t border-gray-200">
//               <p className="text-sm text-gray-500 text-center">
//                 Explore the World with Rushikesh Tours
//               </p>
//               {/* <div className="flex justify-center space-x-4 mt-4">
//                 <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.22 1.802h-.44c-2.406 0-2.688.01-3.637.058-.954.046-1.472.203-1.817.338-.44.178-.776.393-1.115.732-.34.34-.555.675-.733 1.115-.135.345-.292.863-.338 1.817-.047.99-.057 1.284-.057 3.637v.44c0 2.353.01 2.646.057 3.637.046.954.203 1.472.338 1.817.178.44.393.776.733 1.115.34.34.675.555 1.115.733.345.135.863.292 1.817.338.99.047 1.284.057 3.637.057h.44c2.353 0 2.646-.01 3.637-.057.954-.046 1.472-.203 1.817-.338.44-.178.776-.393 1.115-.733.34-.34.555-.675.733-1.115.135-.345.292-.863.338-1.817.047-.99.057-1.284.057-3.637v-.44c0-2.353-.01-2.646-.057-3.637-.046-.954-.203-1.472-.338-1.817-.178-.44-.393-.776-.733-1.115-.34-.34-.675-.555-1.115-.733-.345-.135-.863-.292-1.817-.338-.99-.047-1.284-.057-3.637-.057z"/>
//                     <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.705a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.487-12.419c0-.213 0-.425-.015-.637.96-.695 1.795-1.56 2.455-2.548z"/>
//                   </svg>
//                 </a>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/RTlogo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(73); // Default height
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect and navbar height
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Update navbar height based on scroll state
    const updateNavbarHeight = () => {
      // When scrolled, navbar height is smaller (py-2 vs py-4)
      setNavbarHeight(scrolled ? 65 : 73); // Approximate heights
    };

    window.addEventListener("scroll", handleScroll);
    updateNavbarHeight();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl py-2"
          : "bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-1">
        {/* Logo - Desktop unchanged, mobile optimized */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 group flex-1 md:flex-none"
          onClick={closeMenu}
        >
          <div className="relative">
            <div className="w-15 h-15 bg-gradient-to-br from-yellow-100 to-white rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
              <img src={logo} alt="Rushikesh Logo" className="w-14 h-14 md:w-15 md:h-15 rounded-lg object-contain" />
            </div>
          </div>
          
          {/* Company Name - Desktop unchanged, mobile optimized */}
          <div className="flex flex-col">
            {/* Desktop heading - hidden on mobile */}
            <h1 className="hidden md:block text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Shri Rushikesh Tours & Transport Pune
            </h1>
            
            {/* Mobile heading - visible only on mobile */}
            <h1 className="md:hidden text-xs sm:text-sm font-bold leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent block">
                Shri Rushikesh
              </span>
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent block">
                Tours & Transport
              </span>
              <span className="text-[10px] text-gray-600 font-normal">
                Pune
              </span>
            </h1>
            
            {/* Tagline - hidden on mobile, visible on desktop */}
            <p className="hidden md:block text-xs text-gray-500 -mt-1">
              Explore the World with Us
            </p>
          </div>
        </Link>

        {/* Desktop Menu - UNCHANGED */}
        <ul className="hidden md:flex gap-1">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/gallery", label: "Gallery" },
            { path: "/booking", label: "Booking" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group ${
                  isActiveRoute(item.path)
                    ? "text-red-600 bg-red-50"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
                {isActiveRoute(item.path) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-red-600 rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button for Desktop - UNCHANGED */}
        <div className="hidden md:block">
          <Link
            to="/booking"
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-red-700"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ml-2 ${
            isOpen ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay - OPTIMIZED FOR MOBILE */}
      <div
        className={`fixed left-0 right-0 md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ 
          top: scrolled ? '65px' : '73px',
          height: `calc(100vh - ${scrolled ? '65px' : '73px'})`
        }}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white/95 shadow-2xl transform transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full overflow-y-auto py-4 px-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-yellow-100 rounded-lg flex items-center justify-center">
                  <img src={logo} alt="Logo" className="w-7 h-7 rounded-lg object-contain" />
                </div>
                <span className="font-semibold text-gray-800 text-sm">Menu</span>
              </div>
              <button
                onClick={closeMenu}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="space-y-2 mb-4">
              {/* Booking CTA */}
              <Link
                to="/booking"
                className="block w-full bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-3 rounded-lg font-semibold text-sm shadow-md"
                onClick={closeMenu}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                  </svg>
                  <span>Book Your Trip</span>
                </div>
              </Link>
              
              {/* Quote CTA */}
              <Link
                to="/quote"
                className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-3 rounded-lg font-semibold text-sm shadow-md"
                onClick={closeMenu}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>📋</span>
                  <span>Get Instant Quote</span>
                </div>
              </Link>
            </div>
            
            {/* Navigation Links */}
            <ul className="space-y-1">
              {[
                { path: "/", label: "Home", icon: "🏠" },
                { path: "/about", label: "About Us", icon: "ℹ️" },
                { path: "/services", label: "Services", icon: "🚌" },
                { path: "/gallery", label: "Gallery", icon: "📸" },
                { path: "/booking", label: "Booking", icon: "📅" },
                { path: "/contact", label: "Contact", icon: "📞" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                      isActiveRoute(item.path)
                        ? "text-red-600 bg-red-50 border-l-4 border-red-600"
                        : "text-gray-700 hover:text-red-600 hover:bg-gray-50 border-l-4 border-transparent"
                    }`}
                    onClick={closeMenu}
                  >
                    <span className="mr-3 text-base">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="space-y-2">
                <a href="tel:+919765494008" className="flex items-center text-xs text-gray-600 hover:text-red-600">
                  <span className="mr-2">📞</span>
                  <span>+91 97654 94008</span>
                </a>
                <a href="mailto:rushikeshtransport4008@gmail.com" className="flex items-center text-xs text-gray-600 hover:text-red-600">
                  <span className="mr-2">✉️</span>
                  <span className="truncate">rushikeshtransport4008@gmail.com</span>
                </a>
                <p className="flex items-center text-xs text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>Karve Nagar, Pune</span>
                </p>
              </div>
              <p className="text-[10px] text-gray-500 text-center mt-3">
                24/7 Available • Emergency Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}