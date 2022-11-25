import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <a
        href="/"
        className="mt-8 inline-block rounded border border-pink-600 bg-[#3A4256] bg-gradient-to-r from-primary to-secondary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500"
      >
        {children}
      </a>
    </div>
  );
};

export default PrimaryButton;
