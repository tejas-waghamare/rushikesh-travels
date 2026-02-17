export default function GalleryGrid({ images = [] }) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
      {images.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-2xl shadow-lg">
          <img src={src} alt={`Image ${i + 1}`} className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
        </div>
      ))}
    </div>
  );
}
