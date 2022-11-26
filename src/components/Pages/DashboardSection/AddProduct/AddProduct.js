import React from 'react';
import UseTitle from "../../../Hooks/UseTitle"
import 'react-toastify/dist/ReactToastify.css';
import toast from "react-hot-toast";
  

const AddProduct = () => {
    UseTitle('Add Product')

   const addProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const email = form.email.value;
    const img = form.img.value;
    console.log(title,email, price, img)
    const data = {
      title: title, 
      price: price,  
      img: img
    }

    fetch('https://sequel-extract-server.vercel.app/allServices', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => 
      
      {
        if(data.acknowledged){ 
        //   alert("your review is successfully worked!");
        toast.success('you successfully added your product')
          form.reset();  
            
        }
    })
    .catch((er) => console.error(er.message));
   }
 

  return (
<div>
<section className="bg-slate-800">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside
      className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
    >
      <img
        alt="Pattern"
        src="https://portraitgallery-vt.com/wp-content/uploads/2021/11/emily-ben-final_980.gif"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      aria-label="Main"
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-blue-600" href="/">
          <span className="sr-only">Home</span>
              <img src="https://portraitgallery-vt.com/wp-content/uploads/2021/11/angelyce-philip-final_980x.gif" alt="" />
        </a>

        <h1
          className="mt-6 text-2xl font-bold text-gray-50 sm:text-3xl md:text-4xl"
        >
          Welcome to add your products 
        </h1>

        <p className="mt-4 leading-relaxed text-gray-50">
           Thank your being with us and also we are here to give you the best price.
        </p>

        <form onSubmit={addProducts} action="/" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              for="FirstName"
              className="block text-sm font-medium text-gray-50"
            >
              Title
            </label>

            <input
              type="text"
              id="title"
              name="text"
              className="mt-1 w-full border-gray-900 bg-gray-700 text-white shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              name= "price"
              for="price"
              class="block text-sm font-medium text-gray-50"
            >
              Price
            </label>

            <input
              type="text"
              id="price"
              name="price"
              class="mt-1 w-full border-gray-900 bg-gray-700 text-gray-50 shadow-sm"
            />
          </div>

          {/* <div className="col-span-6">
            <label for="Email" className="block text-sm font-medium text-gray-50">
              Email
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full border-gray-900 bg-gray-700 text-white shadow-sm"
            />
          </div> */}

          <div className="col-span-6 sm:col-span-3">
            <label
              for="email"
              className="block text-sm font-medium text-gray-50"
            >
              Email
            </label>

            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 w-full border-gray-900 bg-gray-700 text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              for="PasswordConfirmation"
              className="block text-sm font-medium text-gray-50"
            >
             Image
            </label>

            <input
              type=""
              id="text"
              name="img"
              className="mt-1 w-full border-gray-900 bg-gray-700  text-gray-50 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label for="MarketingAccept" class="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 rounded-md border-gray-900 bg-gray-700 shadow-sm"
              />

              <span className="text-sm text-gray-50">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="/" className="text-gray-700 underline">
                terms and conditions
              </a>
              and
              <a href="/" className="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Create an account
            </button>
          

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <a href="/" className="text-gray-700 underline">Log in</a>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
</div>
  );
};

export default AddProduct;