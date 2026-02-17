import BookingForm from "../components/BookingForm";

export default function Booking() {
  function handleSubmit(data) {
    console.log("Booking data:", data);
  }

  return (
    <section className="pt-24 pb-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-8">Book Your Trip</h2>
      <BookingForm onSubmit={handleSubmit} />
    </section>
  );
}
