export default function Bento() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-pink-600">Exclusive Jewellery</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Discover Timeless Beauty & Modern Elegance
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Gold Necklace Section */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-semibold tracking-tight text-gray-900 max-lg:text-center">
                  Elegant Gold Necklace
                </p>
                <p className="mt-2 text-sm text-gray-600 max-lg:text-center">
                  Crafted from 22K pure gold, this necklace symbolizes grace and tradition — perfect for any occasion.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <img
                  alt="Elegant Gold Necklace"
                  src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                  className="size-full object-cover object-center rounded-t-2xl"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>

          {/* Diamond Ring Section */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-semibold tracking-tight text-gray-900 max-lg:text-center">
                  Diamond Engagement Ring
                </p>
                <p className="mt-2 text-sm text-gray-600 max-lg:text-center">
                  A symbol of eternal love — featuring a stunning solitaire diamond set in pure platinum.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 pb-6 sm:px-10">
                <img
                  alt="Diamond Ring"
                  src="https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                  className="w-full max-lg:max-w-xs rounded-xl"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>

          {/* Silver Bracelet Section */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-semibold tracking-tight text-gray-900 max-lg:text-center">
                  Sterling Silver Bracelet
                </p>
                <p className="mt-2 text-sm text-gray-600 max-lg:text-center">
                  Delicately designed with intricate detailing — a perfect everyday luxury piece.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center py-6">
                <img
                  alt="Silver Bracelet"
                  src="https://images.unsplash.com/photo-1744722093742-aad22c7fa68b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBicmFjbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
                  className="h-[min(352px,40cqw)] object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>

          {/* Earrings Section */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-semibold tracking-tight text-gray-900 max-lg:text-center">
                  Pearl Drop Earrings
                </p>
                <p className="mt-2 text-sm text-gray-600 max-lg:text-center">
                  A timeless beauty — classic pearls combined with a modern gold drop design.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <img
                  alt="Pearl Earrings"
                  src="https://plus.unsplash.com/premium_photo-1675107359599-a2d0d8983c36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVhcmwlMjBEcm9wJTIwRWFycmluZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
                  className="size-full object-cover object-center rounded-t-2xl"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
