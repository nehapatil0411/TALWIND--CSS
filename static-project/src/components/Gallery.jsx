import React from "react";

export default function Gallery() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTjk15Teadtos6QbdcESnJtKmz2_RYtnyS6yTrm_6ce8KIF69pzH7Y_arHdNE3EuyMxLnlWyje9Y4Pm14giRoueLzlHZm2EmdAKblhwwhVQDDbJf6PwDRCJ",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuQ4_f7XAVuB0cKTHazvTtz8dUEfUBzrwsq7Vv5fyFqzIlm7eQJOtbE3PknOgU-T_Lf3kOtAEqKERTeqeBl3n2q8F2FwAdRxb7oa2VEl9z",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhMSiDIrXZfwKVOlLzfV0n-PHhoCHvxL5mjIRKy70l1V4XRRgxwaeIbeJ2Pzr0Jbfn_U&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5hv-N69PbSfHVA1tREP5RWsdKR1nJK_iTw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY2LEoZXHIgKfxJl888Cn0_LAOObMlI3i9A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomA8vKuD1dgyqVIbSvCrvEWMmEELNUrKCPg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcXxkHJY2On3eBoZV1j5AKd7yf-hk4z3CYQ&s",
    "https://english.cdn.zeenews.com/sites/default/files/hirankdhgd.webp",
    "https://www.vastranand.in/cdn/shop/files/1_d7824718-e329-4bb0-bb38-495aaf951e2d.jpg?v=1743074903",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmhId71_cnxLgQjy86HTQhnAlgrqsbPbzCA&s",
    "https://m.media-amazon.com/images/I/81ikc-L4BpL._AC_UY1100_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83cDki5FFcRyx-r5j5Ga_SPZ5ajZL3mhs8P8JGNTjDwklLhOGgCzWZF2JufNeby_1UFk&usqp=CAU",

   
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
    
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Gallery</h1>
        <p className="text-gray-600 mt-2">
          Explore our beautiful collection of traditional & designer sarees.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={src}
              alt={`Saree ${index + 1}`}
              className="w-full h-48 md:h-60 object-cover transform group-hover:scale-110 transition duration-500"
            />

          
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">View Saree</p>
            </div>
          </div>
        ))}
      </div>

    
      <div className="text-center mt-14 text-gray-600">
        <p className="text-lg">
          More new saree designs coming soon ❤️
        </p>
      </div>
    </div>
  );
}
