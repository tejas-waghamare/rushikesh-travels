// export default function Contact() {
//   return (
//     <div className=" py-45 px-6 max-w-3xl mx-auto">
//       <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
//       <p className="text-center text-gray-600 mb-6">Get in touch with us for bookings and enquiries</p>
//       <div className="bg-gray-100 p-6 rounded-xl shadow text-center">
//         <p><strong>Owner:</strong> Sanjay Paygude</p>
//         <p><strong>Phone:</strong> <a href="tel:+919765494008">+91 9765494008</a>, <a href="tel:+91888120979">+91 8888120979</a></p>
//         <p><strong>Email:</strong> <a href="mailto:rushikeshtansport4008@gmail.com">rushikeshtansport4008@gmail.com</a></p>
//         <p><strong>Address:</strong> Hingane Home Colony, Karve Nagar, Pune 411052</p>
//       </div>
//     </div>
//   );
// }


export default function Contact() {
  const contactInfo = [
    {
      icon: "👤",
      title: "Owner",
      value: "Mr. Sanjay Paygude",
      link: null
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+91 97654 94008",
      link: "tel:+919765494008",
      secondary: {
        value: "+91 88881 20979",
        link: "tel:+918888120979"
      }
    },
    {
      icon: "📧",
      title: "Email",
      value: "rushikeshtransport4008@gmail.com",
      link: "mailto:rushikeshtransport4008@gmail.com"
    },
    {
      icon: "📍",
      title: "Address",
      value: "Hingane Home Colony, Karve Nagar, Pune 411052",
      link: "https://maps.google.com/?q=Hingane+Home+Colony,Karve+Nagar,Pune+411052"
    }
  ];

  const quickActions = [
    {
      icon: "📞",
      title: "Call Now",
      description: "Speak directly with us",
      link: "tel:+919765494008",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Quick chat & quotes",
      link: "https://wa.me/919765494008",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: "🚐",
      title: "Book Now",
      description: "Instant booking",
      link: "/booking",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: "📅",
      title: "Get Quote",
      description: "Best price guarantee",
      link: "/quote",
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  return (
    <section className="py-20 mt-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Contact <span className="text-red-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for comfortable and reliable travel solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      {item.secondary ? (
                        <div className="space-y-1">
                          <a 
                            href={item.link} 
                            className="text-gray-700 hover:text-red-600 transition-colors block text-lg font-medium"
                          >
                            {item.value}
                          </a>
                          <a 
                            href={item.secondary.link} 
                            className="text-gray-600 hover:text-red-600 transition-colors block"
                          >
                            {item.secondary.value}
                          </a>
                        </div>
                      ) : item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-700 hover:text-red-600 transition-colors block text-lg font-medium"
                          target={item.link.includes('http') ? '_blank' : '_self'}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 text-lg font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Operating Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Sunday</span>
                    <span className="font-medium">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Service</span>
                    <span className="font-medium text-green-600">Always On</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions & Map */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <a
                  key={index}
                  href={action.link}
                  className={`${action.color} text-white rounded-xl p-4 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  target={action.link.includes('http') ? '_blank' : '_self'}
                >
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <div className="font-bold text-sm mb-1">{action.title}</div>
                  <div className="text-xs opacity-90">{action.description}</div>
                </a>
              ))}
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for Map */}
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="font-semibold">Hingane Home Colony</p>
                  <p className="text-sm">Karve Nagar, Pune 411052</p>
                  <a 
                    href="https://maps.google.com/?q=Hingane+Home+Colony,Karve+Nagar,Pune+411052"
                    target="_blank"
                    className="inline-block mt-3 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-6 text-white text-center">
              <div className="text-2xl mb-2">🚨</div>
              <h4 className="font-bold text-lg mb-2">Emergency Service</h4>
              <p className="text-sm opacity-90 mb-3">24/7 available for urgent bookings</p>
              <a 
                href="tel:+919765494008"
                className="bg-white text-red-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors inline-block"
              >
                Call Emergency
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Book Your Journey?</h3>
            <p className="text-gray-600 mb-6">Contact us now for the best travel experience in Pune</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919765494008"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                📞 Call +91 97654 94008
              </a>
              <a 
                href="https://wa.me/919765494008"
                target="_blank"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}