

// import { useState } from "react";

// export default function BookingForm({ onSubmit }) {
//   const [form, setForm] = useState({ 
//     name: "", 
//     phone: "", 
//     email: "", 
//     pickup: "", 
//     date: "", 
//     vehicle: "", 
//     message: "" 
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   }

//   function generateWhatsAppMessage(formData) {
//     const vehicleTypes = {
//       "13": "13 Seater A/C",
//       "17": "17 Seater A/C", 
//       "20": "20 Seater A/C",
//       "27": "27 Seater Non-A/C"
//     };

//     const message = `🚗 *New Booking Request - Rushikesh Travels* 🚗

// *Customer Details:*
// 📛 Name: ${formData.name}
// 📞 Phone: ${formData.phone}
// 📧 Email: ${formData.email}

// *Trip Details:*
// 📍 Pickup Location: ${formData.pickup}
// 📅 Date: ${formData.date}
// 🚐 Vehicle: ${vehicleTypes[formData.vehicle] || formData.vehicle}

// *Additional Requirements:*
// ${formData.message || "No additional requirements"}

// *Booking Time:* ${new Date().toLocaleString()}`;

//     return encodeURIComponent(message);
//   }

//   function sendWhatsAppMessage(formData) {
//     const phoneNumber = "9876543210"; // Replace with your actual WhatsApp number
//     const message = generateWhatsAppMessage(formData);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
//     // Open WhatsApp in a new tab
//     window.open(whatsappUrl, '_blank');
//   }

//   async function submit(e) {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Validate required fields
//       if (!form.name || !form.phone || !form.pickup || !form.date || !form.vehicle) {
//         alert("Please fill in all required fields: Name, Phone, Pickup Location, Date, and Vehicle Type");
//         setIsSubmitting(false);
//         return;
//       }

//       // Validate phone number (basic validation)
//       const phoneRegex = /^[0-9]{10}$/;
//       if (!phoneRegex.test(form.phone.replace(/\D/g, ''))) {
//         alert("Please enter a valid 10-digit phone number");
//         setIsSubmitting(false);
//         return;
//       }

//       // Call onSubmit callback if provided
//       if (onSubmit) {
//         await onSubmit(form);
//       }

//       // Show success message
//       alert("Booking submitted successfully! Opening WhatsApp to send confirmation...");
      
//       // Send WhatsApp message
//       sendWhatsAppMessage(form);
      
//       // Reset form
//       setForm({ 
//         name: "", 
//         phone: "", 
//         email: "", 
//         pickup: "", 
//         date: "", 
//         vehicle: "", 
//         message: "" 
//       });

//     } catch (error) {
//       console.error("Booking submission error:", error);
//       alert("There was an error submitting your booking. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <form onSubmit={submit} className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8">
//       <div className="mb-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-2">Book Your Ride</h2>
//         <p className="text-gray-600">Fill the form and we'll contact you on WhatsApp</p>
//       </div>

//       <div className="grid grid-cols-1 gap-4">
//         <div>
//           <input 
//             name="name" 
//             value={form.name} 
//             onChange={handleChange} 
//             type="text" 
//             placeholder="Full Name *" 
//             className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
//             required
//           />
//         </div>
        
//         <div>
//           <input 
//             name="phone" 
//             value={form.phone} 
//             onChange={handleChange} 
//             type="tel" 
//             placeholder="Phone Number *" 
//             className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
//             required
//           />
//         </div>
        
//         <div>
//           <input 
//             name="email" 
//             value={form.email} 
//             onChange={handleChange} 
//             type="email" 
//             placeholder="Email Address" 
//             className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
//           />
//         </div>
        
//         <div>
//           <input 
//             name="pickup" 
//             value={form.pickup} 
//             onChange={handleChange} 
//             type="text" 
//             placeholder="Pickup Location *" 
//             className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
//             required
//           />
//         </div>
        
//         <div>
//           <input 
//             name="date" 
//             value={form.date} 
//             onChange={handleChange} 
//             type="date" 
//             className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
//             required
//           />
//         </div>
        
//         <div>
//           <select 
//             name="vehicle" 
//             value={form.vehicle} 
//             onChange={handleChange} 
//             className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
//             required
//           >
//             <option value="">Select Vehicle Type *</option>
//             <option value="13">13 Seater A/C Tempo Traveller</option>
//             <option value="17">17 Seater A/C Tempo Traveller</option>
//             <option value="20">20 Seater A/C Tempo Traveller</option>
//             <option value="27">27 Seater Non-A/C Bus</option>
//           </select>
//         </div>
        
//         <div>
//           <textarea 
//             name="message" 
//             value={form.message} 
//             onChange={handleChange} 
//             rows="4" 
//             placeholder="Additional Requirements / Special Requests" 
//             className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
//           ></textarea>
//         </div>
//       </div>

//       <button 
//         type="submit" 
//         disabled={isSubmitting}
//         className={`mt-6 w-full py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
//           isSubmitting 
//             ? 'bg-gray-400 cursor-not-allowed' 
//             : 'bg-red-600 hover:bg-red-700 transform hover:scale-105'
//         } text-white shadow-lg hover:shadow-xl`}
//       >
//         {isSubmitting ? (
//           <span className="flex items-center justify-center">
//             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Processing...
//           </span>
//         ) : (
//           <span className="flex items-center justify-center">
//             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
//             </svg>
//             Submit & Send WhatsApp
//           </span>
//         )}
//       </button>

//       <div className="mt-4 text-center">
//         <p className="text-sm text-gray-600">
//           📱 We'll open WhatsApp to confirm your booking details
//         </p>
//       </div>
//     </form>
//   );
// }

// import { useState } from "react";

// export default function BookingForm({ onSubmit }) {
//   const [form, setForm] = useState({ 
//     name: "", 
//     phone: "", 
//     email: "", 
//     pickup: "", 
//     date: "", 
//     vehicle: "", 
//     message: "" 
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   }

//   function generateWhatsAppMessage(formData) {
//     const vehicleTypes = {
//       "13": "13 Seater A/C Tempo Traveller",
//       "17": "17 Seater A/C Tempo Traveller", 
//       "20": "20 Seater A/C Tempo Traveller",
//       "27": "27 Seater Non-A/C Bus"
//     };

//     const message = `🚗 *New Booking Request - Rushikesh Travels* 🚗

// *Customer Details:*
// 📛 Name: ${formData.name}
// 📞 Phone: ${formData.phone}
// 📧 Email: ${formData.email}

// *Trip Details:*
// 📍 Pickup Location: ${formData.pickup}
// 📅 Date: ${formData.date}
// 🚐 Vehicle: ${vehicleTypes[formData.vehicle] || formData.vehicle}

// *Additional Requirements:*
// ${formData.message || "No additional requirements"}

// *Booking Time:* ${new Date().toLocaleString()}`;

//     return encodeURIComponent(message);
//   }

//   function sendWhatsAppMessage(formData) {
//     const phoneNumber = "9637587224"; // Replace with your actual WhatsApp number
//     const message = generateWhatsAppMessage(formData);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
//     window.open(whatsappUrl, '_blank');
//   }

//   async function submit(e) {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       if (!form.name || !form.phone || !form.pickup || !form.date || !form.vehicle) {
//         alert("Please fill in all required fields: Name, Phone, Pickup Location, Date, and Vehicle Type");
//         setIsSubmitting(false);
//         return;
//       }

//       const phoneRegex = /^[0-9]{10}$/;
//       if (!phoneRegex.test(form.phone.replace(/\D/g, ''))) {
//         alert("Please enter a valid 10-digit phone number");
//         setIsSubmitting(false);
//         return;
//       }

//       if (onSubmit) {
//         await onSubmit(form);
//       }

//       // Success animation effect
//       const button = e.target.querySelector('button[type="submit"]');
//       button.classList.add('animate-pulse');
      
//       setTimeout(() => {
//         alert("Booking submitted successfully! Opening WhatsApp to send confirmation...");
//         sendWhatsAppMessage(form);
//         setForm({ name: "", phone: "", email: "", pickup: "", date: "", vehicle: "", message: "" });
//         button.classList.remove('animate-pulse');
//       }, 800);

//     } catch (error) {
//       console.error("Booking submission error:", error);
//       alert("There was an error submitting your booking. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <form onSubmit={submit} className="max-w-2xl mx-auto">
//       {/* Header Section */}
//       <div className="text-center mb-8">
//         <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
//           <svg className="w-8 h-8 text-red-600" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
//           </svg>
//         </div>
//         <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-3">
//           Book Your Journey
//         </h2>
//         <p className="text-gray-600 text-lg">Complete the form below and we'll connect with you via WhatsApp</p>
//       </div>

//       {/* Form Container */}
//       <div className="bg-white/80  rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
//         {/* Decorative Header */}
//         <div className="bg-gradient-to-r from-red-600 to-orange-500 p-4 text-white text-center">
//           <div className="flex items-center justify-center space-x-2">
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
//             </svg>
//             <span className="font-semibold">WhatsApp Confirmation Available</span>
//           </div>
//         </div>

//         <div className="p-8">
//           {/* Form Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Name Input */}
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700">
//                 <span>Full Name</span>
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
//                   </svg>
//                 </div>
//                 <input 
//                   name="name" 
//                   value={form.name} 
//                   onChange={handleChange} 
//                   type="text" 
//                   placeholder="Enter your full name"
//                   className="pl-10 w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Phone Input */}
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700">
//                 <span>Phone Number</span>
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
//                   </svg>
//                 </div>
//                 <input 
//                   name="phone" 
//                   value={form.phone} 
//                   onChange={handleChange} 
//                   type="tel" 
//                   placeholder="10-digit mobile number"
//                   className="pl-10 w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email Input */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-700">Email Address</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//                   </svg>
//                 </div>
//                 <input 
//                   name="email" 
//                   value={form.email} 
//                   onChange={handleChange} 
//                   type="email" 
//                   placeholder="your.email@example.com"
//                   className="pl-10 w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
//                 />
//               </div>
//             </div>

//             {/* Pickup Location */}
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700">
//                 <span>Pickup Location</span>
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
//                   </svg>
//                 </div>
//                 <input 
//                   name="pickup" 
//                   value={form.pickup} 
//                   onChange={handleChange} 
//                   type="text" 
//                   placeholder="Enter pickup address"
//                   className="pl-10 w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Date Input */}
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700">
//                 <span>Journey Date</span>
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
//                   </svg>
//                 </div>
//                 <input 
//                   name="date" 
//                   value={form.date} 
//                   onChange={handleChange} 
//                   type="date" 
//                   className="pl-10 w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Vehicle Selection */}
//             <div className="space-y-2">
//               <label className="flex items-center text-sm font-medium text-gray-700">
//                 <span>Vehicle Type</span>
//                 <span className="text-red-500 ml-1">*</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
//                   </svg>
//                 </div>
//                 <select 
//                   name="vehicle" 
//                   value={form.vehicle} 
//                   onChange={handleChange} 
//                   className="pl-10 w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none"
//                   required
//                 >
//                   <option value="">Choose your vehicle</option>
//                   <option value="13">13 Seater A/C Tempo Traveller</option>
//                   <option value="17">17 Seater A/C Tempo Traveller</option>
//                   <option value="20">20 Seater A/C Tempo Traveller</option>
//                   <option value="27">27 Seater Non-A/C Bus</option>
//                 </select>
//                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Message Textarea */}
//           <div className="mt-6 space-y-2">
//             <label className="text-sm font-medium text-gray-700">Additional Requirements</label>
//             <div className="relative">
//               <div className="absolute top-3 left-3 pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
//                 </svg>
//               </div>
//               <textarea 
//                 name="message" 
//                 value={form.message} 
//                 onChange={handleChange} 
//                 rows="4" 
//                 placeholder="Any special requirements, additional stops, or specific needs..."
//                 className="pl-10 w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
//               ></textarea>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button 
//             type="submit" 
//             disabled={isSubmitting}
//             className={`mt-8 w-full py-4 rounded-xl text-lg font-semibold transition-all duration-500 ${
//               isSubmitting 
//                 ? 'bg-gray-400 cursor-not-allowed transform scale-95' 
//                 : 'bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
//             } text-white relative overflow-hidden group`}
//           >
//             {/* Animated background */}
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
//             <span className="relative flex items-center justify-center">
//               {isSubmitting ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Processing Your Booking...
//                 </>
//               ) : (
//                 <>
//                   <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
//                   </svg>
//                   Book Now & Send WhatsApp
//                 </>
//               )}
//             </span>
//           </button>

//           {/* Footer Note */}
//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600 flex items-center justify-center">
//               <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
//               </svg>
//               We'll open WhatsApp to confirm your booking instantly
//             </p>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }

import { useState } from "react";

export default function BookingForm({ onSubmit }) {
  const [form, setForm] = useState({ 
    name: "", 
    phone: "", 
    email: "", 
    pickup: "", 
    date: "", 
    vehicle: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function generateWhatsAppMessage(formData) {
    const vehicleTypes = {
      "7": "7 Seater A/C Non-A/C Bus",
      "13": "13 Seater A/C  Non-A/C Tempo Traveller",
      "17": "17 Seater A/C  Non-A/C Tempo Traveller", 
      "20": "20 Seater A/C  Non-A/C Tempo Traveller",
      "32": "32 Seater A/C  Non-A/C Bus",
      "50": "50 Seater A/C Non-A/C Bus"
    };

    const message = `🚗 *New Booking Request - Rushikesh Travels* 🚗

*Customer Details:*
📛 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

*Trip Details:*
📍 Pickup Location: ${formData.pickup}
📅 Date: ${formData.date}
🚐 Vehicle: ${vehicleTypes[formData.vehicle] || formData.vehicle}

*Additional Requirements:*
${formData.message || "No additional requirements"}

*Booking Time:* ${new Date().toLocaleString()}`;

    return encodeURIComponent(message);
  }

  function sendWhatsAppMessage(formData) {
    const phoneNumber = "9637587224";
    const message = generateWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  }

  async function submit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!form.name || !form.phone || !form.pickup || !form.date || !form.vehicle) {
        alert("Please fill in all required fields: Name, Phone, Pickup Location, Date, and Vehicle Type");
        setIsSubmitting(false);
        return;
      }

      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(form.phone.replace(/\D/g, ''))) {
        alert("Please enter a valid 10-digit phone number");
        setIsSubmitting(false);
        return;
      }

      if (onSubmit) {
        await onSubmit(form);
      }

      const button = e.target.querySelector('button[type="submit"]');
      button.classList.add('animate-pulse');
      
      setTimeout(() => {
        alert("Booking submitted successfully! Opening WhatsApp to send confirmation...");
        sendWhatsAppMessage(form);
        setForm({ name: "", phone: "", email: "", pickup: "", date: "", vehicle: "", message: "" });
        button.classList.remove('animate-pulse');
      }, 800);

    } catch (error) {
      console.error("Booking submission error:", error);
      alert("There was an error submitting your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="max-w-2xl mx-auto">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Header Section with Animation */}
      <div className="text-center mb-8 relative">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-full mb-4 animate-bounce shadow-lg">
          <svg className="w-10 h-10 text-red-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
          </svg>
        </div>
        <h2 className="text-5xl font-black bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-3 animate-gradient">
          Book Your Journey
        </h2>
        <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
          <span className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-orange-500"></span>
          Complete the form below and we'll connect with you via WhatsApp
          <span className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></span>
        </p>
      </div>

      {/* Form Container with Glassmorphism */}
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
          {/* Decorative Header with Gradient Animation */}
          <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-[length:200%_100%] animate-gradient-x p-4 text-white text-center relative overflow-hidden">
            {/* Floating particles effect */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 2}s`
                  }}
                />
              ))}
            </div>
            
            <div className="flex items-center justify-center space-x-2 relative z-10">
              <svg className="w-5 h-5 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
              </svg>
              <span className="font-semibold tracking-wide">✨ WhatsApp Confirmation Available ✨</span>
              <svg className="w-5 h-5 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
              </svg>
            </div>
          </div>

          <div className="p-8">
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2 group/input">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <span>Full Name</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5x w-5 text-gray-500 group-hover/input:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Enter your full name"
                    className="pl-10 w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-0 focus:border-red-500 transition-all duration-300 bg-white/50 hover:border-red-300"
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="space-y-2 group/input">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <span>Phone Number</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-300 group-hover/input:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <input 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange} 
                    type="tel" 
                    placeholder="10-digit mobile number"
                    className="pl-10 w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-0 focus:border-red-500 transition-all duration-300 bg-white/50  hover:border-red-300"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2 group/input">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-500 group-hover/input:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <input 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="pl-10 w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-0 focus:border-red-500 transition-all duration-300 bg-white/50  hover:border-red-300"
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div className="space-y-2 group/input">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <span>Pickup Location</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-300 group-hover/input:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    </svg>
                  </div>
                  <input 
                    name="pickup" 
                    value={form.pickup} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Enter pickup address"
                    className="pl-10 w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-0 focus:border-red-500 transition-all duration-300 bg-white/50  hover:border-red-300"
                    required
                  />
                </div>
              </div>

              {/* Date Input */}
              <div className="space-y-2 group/input">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <span>Journey Date</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-500 group-hover/input:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <input 
                    name="date" 
                    value={form.date} 
                    onChange={handleChange} 
                    type="date" 
                    className="pl-10 w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-0 focus:border-red-500 transition-all duration-300 bg-white/50  hover:border-red-300"
                    required
                  />
                </div>
              </div>

              {/* Vehicle Selection */}
              <div className="space-y-2 group/input">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <span>Vehicle Type</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-300 group-hover/input:text-red-500 transition-colors duration-300" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                    </svg>
                  </div>
                  <select 
                    name="vehicle" 
                    value={form.vehicle} 
                    onChange={handleChange} 
                    className="pl-10 w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-0 focus:border-red-500 transition-all duration-300 bg-white/50  appearance-none hover:border-red-300"
                    required
                  >
                    <option value="">Choose your vehicle</option>
                    <option value="7">7 Seater A/C Non-A/C SUV</option>
                    <option value="13">13 Seater A/C Non-A/C Tempo Traveller</option>
                    <option value="17">17 Seater A/C Non-A/C Tempo Traveller</option>
                    <option value="20">20 Seater A/C Non-A/C Tempo Traveller</option>
                    <option value="32">32 Seater A/C Non-A/C Bus</option>
                    <option value="50">50 Seater Non-A/C Bus</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-300" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mt-6 space-y-2 group/input">
              <label className="text-sm font-medium text-gray-700">Additional Requirements</label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-hover/input:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                  </svg>
                </div>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  rows="4" 
                  placeholder="Any special requirements, additional stops, or specific needs..."
                  className="pl-10 w-full border-2 border-gray-200 rounded-xl p-4 focus:ring-0 focus:border-red-500 transition-all duration-300 bg-white/50  resize-none hover:border-red-300"
                ></textarea>
              </div>
            </div>

            {/* Submit Button with Enhanced Animation */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`mt-8 w-full py-5 rounded-xl text-lg font-bold transition-all duration-500 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed transform scale-95' 
                  : 'bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-[length:200%_100%] animate-gradient-x hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/30'
              } text-white relative overflow-hidden group`}
            >
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-0 h-0 group-hover:w-full group-hover:h-full transition-all duration-500 bg-white/20 rounded-full"></div>
              </div>
              
              <span className="relative flex items-center justify-center text-lg">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Your Booking...
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6 mr-3 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                    </svg>
                    Book Now & Send WhatsApp
                    <svg className="w-6 h-6 ml-3 animate-pulse" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </>
                )}
              </span>
            </button>

            {/* Footer Note with Animation */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full">
                <div className="relative">
                  <svg className="w-5 h-5 text-green-500 animate-ping absolute" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <svg className="w-5 h-5 text-green-500 relative" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p className="text-sm text-gray-600 ml-2">
                  We'll open WhatsApp to confirm your booking instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </form>
  );
}