import React, { useContext } from 'react';
import UseTitle from "../../../Hooks/UseTitle"
import 'react-toastify/dist/ReactToastify.css';
import toast from "react-hot-toast";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { format } from 'date-fns';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    UseTitle('Add Product');
    const date = new  Date()
    const today = format(date, 'PP')
    const addProducts = (data) => {
    const image = data.imgFile[0];
    const productName = data.name;
    const phoneNumber = data.phoneNumber;
    const price = data.sellerPrice;
    const oldPrice = data.oldPrice;
    const category =parseInt( data.category);
    const opinion = data.opinion;
    const message = data.message;
    const sellerName = data.sellerName;
    const location = data.location;
    
    console.log(image)
    const formData = new FormData();
    formData.append('image', image )
    fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgData =>{ 
        if(imgData.success){
            const productData = {
                name: productName,
                img: imgData.data.url, 
                seller_price: price,
                phoneNumber ,
                old_price: oldPrice,
                product_id: category ,
                opinion,
                description: message,
                location: location,
                sellerName ,
                ratings: 5,
                postTime: today
    
            }
            fetch('http://localhost:5000/addProduct', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => {console.error(error)
                if(data.acknowledged){ 
      
                    toast.success('you successfully added your product')
                     
                    .catch((er) => console.error(er.message));
                    }
                   
            })
        }
        console.log(imgData)
    })


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
        src=""
      />
    </aside>

    <main
      aria-label="Main"
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-blue-600" href="/">
          <span className="sr-only">Home</span>
              <img src="" alt="" />
        </a>

        <h1
          className="mt-6 text-2xl font-bold text-gray-50 sm:text-3xl md:text-4xl"
        >
          Welcome to add your products 
        </h1>

        <p className="mt-4 leading-relaxed text-gray-50">
           Thank your being with us and also we are here to give you the best price.
        </p>

        <form onSubmit={handleSubmit(addProducts)} action="/" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              for="FirstName"
              className="block text-sm font-medium text-gray-50"
            >
              Name
            </label>
            <input
              type="text"
              id=""
              name="text"
              {...register('name')}
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
              name="sellerPrice"
              class="mt-1 w-full border-gray-900 bg-gray-700 text-gray-50 shadow-sm"
              {...register('sellerPrice')}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              name= "oldPrice"
              for="price"
              class="block text-sm font-medium text-gray-50"  
            >
             Old Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              class="mt-1 w-full border-gray-900 bg-gray-700 text-gray-50 shadow-sm"
              {...register('oldPrice')}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label for="Email" className="block text-sm font-medium text-gray-50">
              Phone Number
            </label>
            <input
              type="Phone Number"
              id=""
              name="phoneNumber"
              className="mt-1 w-full border-gray-900 bg-gray-700 text-white shadow-sm"
              {...register('phoneNumber')} 
            />
          </div>
          

          <div className="col-span-6 sm:col-span-3">
            <label for="Email" className="block text-sm font-medium text-gray-50">
              put your opinion
            </label>
                <select {...register('opinion')}  className="select  select-bordered w-full max-w-xs">
                <option disabled selected>Conditional Type</option>
                <option value='excellent'>Excellent</option>
                <option value='good'>Good</option>
                <option value='fair'>Fair</option>
                </select>
           </div>

          <div className="col-span-6 sm:col-span-3">
            <label for="Email" className="block text-sm font-medium text-gray-50">
              location
            </label>
            <input
              type="text"
              id=""
              name="location"
              className="mt-1 w-full border-gray-900 bg-gray-700 text-white shadow-sm"
              {...register('location')} 
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label for="Email" className="block text-sm font-medium text-gray-50">
              Years of use
            </label>
            <input
              type="text"
              id=""
              name="years"
              className="mt-1 w-full border-gray-900 bg-gray-700 text-white shadow-sm"
              {...register('years')} 
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label for="Email" className="block text-sm font-medium text-gray-50">
              Category
            </label>
                <select {...register('category')} className="select select-bordered w-full max-w-xs">
                <option disabled selected>Conditional Type</option>
                <option value='1'>Women Collection</option>
                <option value='2'>Men Collection</option>
                <option value='3'>Baby Collection</option>
           </select>
          </div>

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
              disabled
              defaultValue={user?.email}
              className="mt-1 w-full border-gray-900 bg-gray-700 text-gray-50 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              for="PasswordConfirmation"
              className="block text-sm font-medium text-gray-50"
            >
             Picture
            </label>
            <input type="file" name='imgFile'  {...register('imgFile')} className="file-input file-input-bordered file-input-info w-full max-w-xs" />
          </div>
          

          <div className="col-span-6 sm:col-span-3">
            <label for="Email" className="block text-sm font-medium text-gray-50">
              Seller Name
            </label>
            <input
              type="text"
              id=""
              
              defaultValue={user?.displayName}
              name="sellerName"
              className="mt-1 w-full border-gray-900 bg-gray-700 text-white shadow-sm"
              {...register('sellerName')} 
            />
          </div>

          <div className="col-span-6 w-full">
            <label for="Email"  className="block  text-sm font-medium text-gray-50">
              Message
            </label>
            <textarea  {...register('message')}  className="textarea w-full textarea-bordered" placeholder="type your message">  
            </textarea>
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