// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import ServicesPage from "./pages/ServicesPage";
// import Gallery from "./pages/Gallery";
// import Booking from "./pages/Booking";
// import Contact from "./pages/Contact";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppToggle from "./components/WhatsAppToggle"; // Add this import
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import { BrowserRouter } from "react-router-dom";
import Quote from "./components/Quote";

export default function App() {
  return (
    <BrowserRouter 
    
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}
>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />

      </Routes>
      <Footer />
      <WhatsAppToggle /> {/* Add this line */}
    </BrowserRouter>
  );
}