import React from "react";

export default function Home() {
  const featured = [
    {
      src: "https://cdn.exoticindia.com/images/products/original/textiles-11-2024/gak146-casal.jpg",
      title: "Designer Silk Saree",
    },
    {
      src: "https://www.luxurionworld.com/cdn/shop/files/IS1P1MO424061307_Green_Paithani_Silk_Peacock_And_Bird_Design_Saree_5.jpg?v=1718271596",
      title: "Paithani Saree",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WPFRE3Bo0JP3ABR4aj0wH1YUhqeTxVr9IA&s",
      title: "Banarasi Saree",
    },
  ];

  const categories = [
    "Silk Sarees",
    "Paithani Sarees",
    "Banarasi Sarees",
    "Cotton Sarees",
    "Wedding Collection",
    "Daily Wear",
  ];

  return (
    <div className="bg-gray-50">

  
      <section className="relative h-[70vh] md:h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ramasarees.com/wp-content/uploads/2021/05/IMG_9019-min-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Patil Sarees
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
            Discover elegance, tradition, and modern fashion in one place.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-400 text white font-medium rounded-lg shadow-md">
            Shop Now
          </button>
        </div>
      </section>

      
      <section className="py-14 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Featured Collections
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((item, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <p className="text-white text-xl font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Shop by Categories
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-pink-50 hover:bg-pink-100 border border-pink-200 rounded-full cursor-pointer text-pink-700 font-medium shadow-md"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-14 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/tulsi-1.jpg"
          className="rounded-2xl shadow-xl w-full"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-4">
            At Patil Sarees, we offer the finest traditional and modern sarees
            that reflect the rich culture of India. Each saree is handpicked for
            its quality, elegance, and unique craftsmanship.
          </p>
          <p className="text-gray-600">
            From weddings to festive seasons, we bring you the best collection
            that suits every occasion.
          </p>

          <button className="mt-6 px-6 py-3 bg-pink-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md">
            Learn More
          </button>
        </div>
      </section>

    
      <section className="bg-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                review: "Beautiful quality and very elegant sarees! Loved the shopping experience.",
                name: "Neha Patil",
              },
              {
                review: "Amazing customer service and premium designs. Highly recommended!",
                name: "Komal Jadhav",
              },
              {
                review: "Affordable and stylish collection. I bought 3 sarees and all are stunning!",
                name: "Puja Sonawane",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-600 italic mb-4">“{item.review}”</p>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink-600 text-white py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Visit Patil Sarees Today
        </h2>
        <p className="text-lg">Where tradition meets elegance 💫</p>
      </section>
    </div>
  );
}
