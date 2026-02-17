import { useState, useEffect } from "react";
import bus2 from "../assets/traveller/13seater.jpeg"

export default function Services() {
  const buses = [
    { 
      name: "7 Seater SUV", 
      img: "https://www.dubicars.com/images/93e3f2/400x234/alsheraa-almalaki-motors-fze/aa8d3b75-8809-482b-8895-243b6466a59e.jpg",
      features: ["AC", "Luxury", "Family Trip"],
      seats: 7,
      ac: true,
      type: "SUV"
    },
    { 
      name: "13 Seater A/C Tempo Traveller", 
      img: "https://res.cloudinary.com/dnreeobav/image/fetch/c_scale,q_30,w_350,f_auto/l_text:Arial_20_bold:TrucksBuses.com,x_70,y_100,co_rgb:ffffff/https://www.trucksbuses.com/uploads/Force%20Tempo%20Traveller%203350%20Super(1)(2)(3).jpg",
      features: ["AC", "Comfortable", "Luggage Space"],
      seats: 13,
      ac: true,
      type: "Tempo Traveller"
    },
    { 
      name: "13 Seater Non-A/C Tempo Traveller", 
      img: bus2,
      features: ["Economical", "Spacious", "Reliable"],
      seats: 13,
      ac: false,
      type: "Tempo Traveller"
    },
    { 
      name: "17 Seater A/C Bus", 
      img: "https://www.pawarcarrentals.com/uploads/page-images/1688817927_23)%20Tempo%20Traveller%2017%20Seater%20on%20Rent%20in%20Pune.jpg",
      features: ["AC", "Premium", "Entertainment"],
      seats: 17,
      ac: true,
      type: "Mini Bus"
    },
    { 
      name: "17 Seater Non-A/C Bus", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6FZmBMQKNuZeRPNxKiMEiqGMU9ynPGwQ6g&s",
      features: ["Economical", "Spacious", "Reliable"],
      seats: 17,
      ac: false,
      type: "Mini Bus"
    },
    { 
      name: "20 Seater A/C Bus", 
      img: "https://heritagecabs.in/assets/uploads/product_images/20-Seater-Bus-Hire-Jaipur.jpg",
      features: ["AC", "Premium", "Entertainment"],
      seats: 20,
      ac: true,
      type: "Mini Bus"
    },
    { 
      name: "20 Seater Non-A/C Bus", 
      img: "https://www.selectbus.in/_next/static/media/non-ac-32-side-view.ec1c7021.webp",
      features: ["Large Group", "Comfortable", "Economical"],
      seats: 20,
      ac: false,
      type: "Mini Bus"
    },
    { 
      name: "32 Seater A/C Bus", 
      img: "https://buscdn.cardekho.com/in/eicher/skyline-pro-3010-l/eicher-skyline-pro-3010-l.jpg",
      features: ["AC", "Spacious", "Comfortable"],
      seats: 32,
      ac: true,
      type: "Coach Bus"
    },
    { 
      name: "32 Seater Non-A/C Bus", 
      img: "https://5.imimg.com/data5/SELLER/Default/2025/9/547488556/HO/YK/JX/252062133/untitled-design-89-500x500.png",
      features: ["Large Group", "Comfortable", "Economical"],
      seats: 32,
      ac: false,
      type: "Coach Bus"
    },
    { 
      name: "50 Seater A/C Bus", 
      img: "https://buscdn.cardekho.com/in/eicher/skyline-pro-3011-k-wider/eicher-skyline-pro-3011-k-wider.jpg?impolicy=resize&imwidth=480",
      features: ["AC", "Luxury", "Entertainment"],
      seats: 50,
      ac: true,
      type: "Luxury Coach"
    },
    { 
      name: "50 Seater Non-A/C Bus", 
      img: "https://buscdn.cardekho.com/in/eicher/1112-k-starline-staff-bus/eicher-1112-k-starline-staff-bus.jpg?impolicy=resize&imwidth=480",
      features: ["Large Capacity", "Economical", "Reliable"],
      seats: 50,
      ac: false,
      type: "Coach Bus"
    }
  ];

  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredBuses, setFilteredBuses] = useState(buses);

  const filters = [
    { id: "all", label: "All Vehicles" },
    { id: "ac", label: "AC Vehicles" },
    { id: "non-ac", label: "Non-AC Vehicles" },
    { id: "small", label: "Small (7-13)" },
    { id: "medium", label: "Medium (17-20)" },
    { id: "large", label: "Large (32-50)" }
  ];

  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredBuses(buses);
    } else if (selectedFilter === "ac") {
      setFilteredBuses(buses.filter(bus => bus.ac));
    } else if (selectedFilter === "non-ac") {
      setFilteredBuses(buses.filter(bus => !bus.ac));
    } else if (selectedFilter === "small") {
      setFilteredBuses(buses.filter(bus => bus.seats <= 13));
    } else if (selectedFilter === "medium") {
      setFilteredBuses(buses.filter(bus => bus.seats > 13 && bus.seats <= 20));
    } else if (selectedFilter === "large") {
      setFilteredBuses(buses.filter(bus => bus.seats > 20));
    }
  }, [selectedFilter]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-red-600">Fleet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles perfect for any group size and budget
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedFilter === filter.id
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-red-300 hover:bg-red-50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBuses.map((bus, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={bus.img} 
                  alt={bus.name} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* AC Badge */}
                <div className={`absolute top-4 left-4 ${
                  bus.ac ? "bg-blue-600" : "bg-gray-600"
                } text-white text-xs px-3 py-1 rounded-full font-medium`}>
                  {bus.ac ? "AC" : "Non-AC"}
                </div>
                
                {/* Seat Badge */}
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {bus.seats} Seats
                </div>

                {/* Quick Features */}
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  {bus.features.slice(0, 2).map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                  {bus.name}
                </h3>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span className="bg-gray-100 px-2 py-1 rounded-md">{bus.type}</span>
                </div>
                
                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {bus.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Call to Action */}
                <div className="flex gap-2">
                  <a 
                    href="tel:+919765494008" 
                    className="flex-1 bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 px-3 rounded-lg font-semibold text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm"
                  >
                    Call Now
                  </a>
                  <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 text-sm">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
            <p className="mb-4 opacity-90">We have more vehicles in our fleet. Contact us for special requirements and large group bookings.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919765494008" 
                className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                📞 +91 97654 94008
              </a>
              <a 
                href="https://wa.me/919765494008" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center gap-2"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}