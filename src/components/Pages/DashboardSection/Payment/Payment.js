import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import UseTitle from "../../../Hooks/UseTitle";
import PaymentForm from "./PaymentForm/PaymentForm";

const Payment = () => {
  UseTitle("Payment");
  const product = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return;
  }

  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);

  return (
    <div className="flex flex-col mt-10 justify-center items-center">
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-100">

        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={product.img}
              alt=""
              className="block object-cover object-center w-96 rounded-md h-46 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {product.name}
              </h3>
              <p className="font-bold text-slate-800">price: ${product.seller_price}</p>
            </a>
            <p className="leading-snug dark:text-gray-400">
              {product.bookingDate}
            </p>
          </div>
        </div>
      </div>

      <div className="w-96 my-12 ">
        <Elements stripe={stripePromise}>
          <PaymentForm product={product} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
