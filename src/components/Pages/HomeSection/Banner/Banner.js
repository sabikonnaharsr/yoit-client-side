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
                  src="https://img.freepik.com/free-photo/attractive-happy-smiling-stylish-woman-shopaholic-red-trendy-dress-jumping-running-holding-colorful-shopping-bags-pink-wall-isolated-sale-excited-spring-summer-fashion-trend_285396-7340.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            {/* this is text */}
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>
              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-xs font-bold hover:text-[#05CDE9] uppercase text-slate-500 sm:text-3xl">
                 traditionally make their clothing
                  entirely of prepared.
                </h2>
                <p className="mt-4 text-gray-600">
                  <span className="text-7xl font-bold text-slate-600 ">
                    <span className="text-pink-700 hover:text-[#05CDE9]">C</span><span className="text-slate-600 hover:text-[#05CDE9]">l</span><span className="text-[#05CDE9]">o</span><span className="text-[#DF0226] hover:text-[#05CDE9]">t</span><span className="text-[#FF9702] hover:text-[#05CDE9]">h</span><span className="text-pink-600 hover:text-[#05CDE9]">i</span><span className="text-slate-600 hover:text-[#05CDE9]">n</span><span className=" text-[#F58C9B] hover:text-[#05CDE9]">g</span>
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
                  className="mt-8 inline-block rounded border border-white-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-indigo-500"
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
