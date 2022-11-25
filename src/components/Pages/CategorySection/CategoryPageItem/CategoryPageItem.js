import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPageItem = ({product}) => {
    const { name, img, description, price, ratings, _id} = product;

    return (
        <div>
        <div>
          <div>
            <a href="/" className="group mt-10 relative block bg-black">
              <img
                alt="Developer"
                src={img}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />
              <div className="relative p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                  {name}
                </p>
                <p className="text-2xl font-bold text-white">{price}</p>

                <div className="mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                     { description}
                      <p className="text-sm text-white">Ratings: {ratings}</p>
                      <div>
                        <Link to={`/productDetails/${_id}`}>
                          <button className=" py-1 px-3 font-GreatVibes text-rose-600 text-4xl bg-slate-800 rounded-md">
                           Details
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
    );
};

export default CategoryPageItem;