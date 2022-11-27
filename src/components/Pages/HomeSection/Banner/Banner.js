import React from "react";

const Banner = () => {
  return (
    <div>
      <section>
        {/* this is picture */}
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://img.freepik.com/free-photo/blissful-lady-trendy-summer-clothes-posing-with-camera-yellow-positive-beautiful-girl-hat-chilling-studio_197531-11082.jpg?w=996&t=st=1669549171~exp=1669549771~hmac=759be5796675551b526ea95ec4d751782a2f8a68c0a50803ad4555e03d9a6b05"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            {/* this is text */}
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>
              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold text-[#FE731B] sm:text-3xl">
                  Some human cultures, traditionally make their clothing
                  entirely of prepared.
                </h2>
                <p className="mt-4 text-gray-600">
                  <span className="text-7xl font-bold text-[#FE731B]">
                    Clothing
                  </span>
                  also known as clothes, apparel, and attire are items worn on
                  the body. Typically, clothing is made of fabrics or textiles,
                  but over time it has included garments made from animal skin
                  and other thin sheets of materials and natural products found
                  in the environment, put together. The wearing of clothing is
                  mostly restricted to human beings and is a feature of all
                  human societies. The amount and type of clothing worn depends
                  on gender, body type, social factors, and geographic
                  considerations. Garments cover the body,
                </p>
                <a
                  href="/"
                  className="mt-8 inline-block rounded border border-white-600 bg-[#FE731B] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
