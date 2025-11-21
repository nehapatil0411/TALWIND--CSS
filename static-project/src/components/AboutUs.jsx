import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-pink-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64 md:h-80" style={{ backgroundImage: "url('https://images.pexels.com/photos/13792868/pexels-photo-13792868.jpeg?auto=compress')" }}>
        <div className="absolute inset-0 bg-pink-800 flex items-center justify-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold tracking-wide">
            About Patil Sarees
          </h1>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="https://images.pexels.com/photos/5698862/pexels-photo-5698862.jpeg?auto=compress"
            alt="Saree Shop"
            className="w-full rounded-2xl shadow-lg"
          />

        
          <div>
            <h2 className="text-3xl font-bold text-pink-800 mb-4">
              Welcome to Patil Sarees
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Patil Sarees is your trusted destination for premium sarees that
              bring tradition and modern elegance together. We specialize in
              handpicked collections including Banarasi, Kanjivaram, Paithani,
              Silk, Cotton, Designer Sarees, and more.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is to provide high-quality sarees at affordable
              prices, ensuring every woman feels confident, beautiful, and
              connected to our rich Indian heritage.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With years of trust and customer satisfaction, Patil Sarees has
              become a favorite choice for festive wear, weddings, and daily
              elegance.
            </p>
          </div>
        </div>
      </section>

     
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Our Vision & Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
        
            <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Authentic Quality
              </h3>
              <p className="text-gray-600">
                Every saree is sourced carefully to ensure genuine fabrics and
                perfect craftsmanship.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Your happiness is our priority — we promise the best designs,
                service, and shopping experience.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Affordable Luxury
              </h3>
              <p className="text-gray-600">
                High-quality sarees at prices that suit every budget, without
                compromising elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pink-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Thank You for Choosing Patil Sarees
          </h2>
          <p className="text-lg">
            We look forward to serving you with the best traditional and modern
            saree collections.
          </p>
        </div>
      </section>
    </div>
  );
}






