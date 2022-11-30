import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ booking }) => {
  const { user } = useContext(AuthContext);
  const { name, seller_price } = booking;
  const date = new Date();
  const today = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    // const price = form.price.value;
    const userName = form.name.value;
    const email = form.email.value;

    const bookingData = {
      ...booking,
      productId: booking._id,
      buyerName: userName,
      seller_price,
      email,
      buyerPhone: phone,
      bookingDate: today,
    };

    delete bookingData._id;
    console.log(booking);
    // toast.success('Booking Confirmed')

    fetch("https://byte-code-velocity.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Confirmed");
          // refetch()
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-primary">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-primary font-bold">{name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid gird-cols-1 gap-3 mt-5"
          >
            <input
              type="text"
              defaultValue={seller_price}
              className="input bg-slate-200 w-full input-bordered "
              readOnly
            />

            <select
              name="slot"
              className="select select-bordered w-full bg-slate-200"
            ></select>

            <input
              type="text"
              placeholder="Your Name"
              name="name"
              defaultValue={user?.displayName}
              className="input w-full input-bordered input-secondary "
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="input w-full input-bordered input-secondary"
              required
            />

            <input
              type="text"
              placeholder="Email Address"
              defaultValue={user?.email}
              readOnly
              name="email"
              className="input w-full input-bordered bg-slate-200 "
              required
            />
            <input
              type="text"
              placeholder="Location"
              className="input w-full  input-bordered  input-secondary"
            />

            <input
              className="btn w-full max-w-xm"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
