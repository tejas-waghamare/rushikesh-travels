// export default function Highlights() {
//   const features = [
//     { title: "20+ Vehicles", desc: "Tempo Travellers, AC/Non-AC Buses" },
//     { title: "Lowest Fare", desc: "Budget-friendly pricing" },
//     { title: "Experienced Drivers", desc: "Professional and trained" },
//     { title: "24×7 Service", desc: "Always available for you" },
//   ];

//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
//         {features.map((f, i) => (
//           <div key={i} className="bg-white p-6 text-center rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold text-red-600 mb-2">{f.title}</h3>
//             <p className="text-gray-600">{f.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


export default function Highlights() {
  const features = [
    { 
      title: "20+ Vehicles", 
      desc: "Tempo Travellers, AC/Non-AC Buses",
      icon: "🚐"
    },
    { 
      title: "Lowest Fare", 
      desc: "Budget-friendly pricing",
      icon: "💰"
    },
    { 
      title: "Experienced Drivers", 
      desc: "Professional and trained",
      icon: "👨‍✈️"
    },
    { 
      title: "24×7 Service", 
      desc: "Always available for you",
      icon: "⏰"
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-red-600">Us</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of comfort, safety, and affordability in your travels
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-t-2xl"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  {f.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-red-600 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {f.desc}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-200 group-hover:border-opacity-50 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}