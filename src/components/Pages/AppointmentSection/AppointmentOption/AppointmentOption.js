import React from "react";

const AppointmentOption = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;
  return (
    <div>
      <a className="group block h-56" href="/blog">
        <div className=" relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]">
          <div className="lg:group-hover:absolute lg:group-hover:opacity-0">
            <span
              className="text-3xl sm:text-4xl"
              role="img"
              aria-hidden="true"
            >
              📆
            </span>
            <p className="mt-4 text-xl font-bold sm:text-2xl">{slots}</p>
          </div>

          <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
            <h3 className="text-2xl font-bold">{name}</h3>

            <p className="mt-4 text-lg font-medium leading-relaxed">
              {slots.length > 0 ? slots[0] : "Try another day"}
            </p>
            <p className="text-slate-500 text-center">
              {slots.length} {slots.length > 1 ? "spaces" : "space"} available
            </p>
            <button className="text-center">Book Appointment</button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AppointmentOption;
