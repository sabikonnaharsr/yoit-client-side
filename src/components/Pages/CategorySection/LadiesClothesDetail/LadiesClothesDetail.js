import React from 'react';
import { Link } from 'react-router-dom';

const LadiesClothesDetail = () => {
    return (
        <div>
          <div>
            <div className="w-11/12 mx-auto py-16 grid grid-cols-2 gap-10">
                <div>
                    <a href="/" class="group relative block bg-black">
                    <img
                        alt="Developer"
                        src="https://img.freepik.com/premium-photo/baby-boy-white-bodysuit-multicolored-hat-holding-toy-sitting-orange-wall_98296-1950.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538"
                        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />
                  <div class="relative p-8">
                        <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                        pah
                        </p>
                        <p class="text-2xl font-bold text-white">lprice</p>

                        <div class="mt-64">
                        <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p class="text-sm text-white">
                            description
                            <p class="text-sm text-white">Ratings:</p>
                            <div>
                                <Link to="/services">
                                <button className=" py-1 px-3 font-GreatVibes text-rose-600 text-4xl bg-slate-800 rounded-md">
                                    See All
                                </button>
                                </Link>
                            </div>
                            </p>
                        </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
         </div>
         <div>
       </div>
    </div>
    );
};

export default LadiesClothesDetail;