// export default function About() {
//   return (
//     <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
//       <h2 className="text-4xl font-bold text-center text-red-600 mb-8">About Us</h2>
//       <div className="text-gray-700 leading-relaxed space-y-6">
//         <p>
//           <strong>Rushikesh Tours & Travels</strong> is one of Pune’s most trusted names in
//           bus and traveller rental services. With a strong commitment to safety,
//           comfort, and punctuality, we provide vehicles suitable for every occasion —
//           from corporate trips and family tours to wedding functions and pilgrimage tours.
//         </p>
//         <p>
//           We offer a wide range of travel options including <strong>13-seater, 17-seater,
//           20-seater, and 27-seater</strong> AC and Non-AC vehicles. All our vehicles are
//           well-maintained, clean, and equipped with professional drivers to ensure
//           a hassle-free travel experience.
//         </p>
//         <p>
//           Our team is available <strong>24×7</strong> for support and bookings. We aim to
//           make your journey memorable, comfortable, and affordable.
//         </p>
//       </div>
//       <div className="mt-10 flex justify-center">
//         <a href="/booking" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
//           Book Your Ride
//         </a>
//       </div>
//     </div>
//   );
// }


export default function About() {
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Trips Monthly" },
    { number: "24/7", label: "Service Available" },
    { number: "15+", label: "Years Experience" }
  ];

  const features = [
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Regular vehicle maintenance and trained drivers ensure your safety"
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Competitive rates without compromising on quality and comfort"
    },
    {
      icon: "⏱️",
      title: "Punctuality",
      description: "We value your time with on-time pickups and drop-offs"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Friendly",
      description: "Perfect vehicles for family trips and group travels"
    }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-red-600">Rushikesh Tours</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted travel partner in Pune for comfortable, safe, and affordable journeys
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-gray-900">Rushikesh Tours & Travels</strong> is one of Pune's most trusted names in
                  bus and traveller rental services. With a strong commitment to safety,
                  comfort, and punctuality, we provide vehicles suitable for every occasion —
                  from corporate trips and family tours to wedding functions and pilgrimage tours.
                </p>

                <p>
                  We offer a wide range of travel options including <strong className="text-red-600">13-seater, 17-seater,
                    20-seater, 32-seater and 50-seater</strong> AC and Non-AC vehicles. All our vehicles are
                  well-maintained, clean, and equipped with professional drivers to ensure
                  a hassle-free travel experience.
                </p>

                <p>
                  Our team is available <strong className="text-red-600">24×7</strong> for support and bookings. We aim to
                  make your journey memorable, comfortable, and affordable.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl p-1 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80"
                alt="Luxury bus interior"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">15+ Years</div>
                  <div className="text-sm text-gray-600">Of Trusted Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Travel with Comfort?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Book your perfect vehicle today and experience the Rushikesh Tours difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg"
              >
                🚐 Book Your Ride
              </a>
              <a
                href="tel:+919765494008"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}