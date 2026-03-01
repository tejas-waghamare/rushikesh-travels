
// import GalleryGrid from "../components/GalleryGrid";

// export default function Gallery() {
//   const images = ["/bus1.jpg", "/bus2.jpg", "/bus3.jpg", "/bus4.jpg", "/bus5.jpg", "/bus6.jpg"];

//   return (
//     <section className="pt-24 pb-16 bg-white">
//       <h2 className="text-4xl font-bold text-center text-red-600 mb-10">Gallery</h2>
//       <GalleryGrid images={images} />
//     </section>
//   );
// }


import { useState } from "react";
import GalleryGrid from "../components/GalleryGrid";
import bus1 from "../assets/interior/17seat.jpeg"
import bus2 from "../assets/interior/comseat.jpeg"
import bus3 from "../assets/interior/luxury.jpeg"
import bus4 from "../assets/interior/standard.jpeg"
import bus7 from "../assets/interior/travel.jpeg"
import bus6 from "../assets/interior/clean.jpeg"


export default function Gallery() {
  const images = [
    { src: bus1, category: "luxury", title: "Premium AC Coach" },
    { src: bus2, category: "standard", title: "Comfortable Seating" },
    { src: bus3, category: "luxury", title: "Spacious Interior" },
    { src: bus4, category: "standard", title: "Reliable Fleet" },
    // { src: "/bus5.jpg", category: "interior", title: "Modern Dashboard" },
    { src: bus6, category: "interior", title: "Clean & Maintained" },
    { src: bus7, category: "luxury", title: "Executive Travel" },
    // { src: "/bus8.jpg", category: "standard", title: "Group Travel" }
  ];

  const categories = [
    { id: "all", label: "All Vehicles" },
    { id: "luxury", label: "Luxury Coaches" },
    { id: "standard", label: "Standard Fleet" },
    { id: "interior", label: "Interior Views" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-red-600">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our well-maintained fleet and comfortable interiors designed for your perfect journey
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                selectedCategory === category.id
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <div className="flex items-center text-white/90 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      View Details
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white text-center mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-sm opacity-90">Vehicles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Maintained</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Happy Trips</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience Comfort?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book one of our premium vehicles and enjoy a comfortable, safe, and memorable journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/booking" 
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                🚐 Book Your Vehicle
              </a>
              <a 
                href="tel:+919765494008" 
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                📞 Call for Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <div className="relative">
              <button 
                className="absolute -top-12 right-0 text-white text-2xl hover:text-red-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="rounded-lg max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
                <div className="text-white/80 capitalize">{selectedImage.category} Vehicle</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}