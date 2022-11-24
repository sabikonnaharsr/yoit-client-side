import React from 'react';

const PrimaryButton = ( {children}) => {
    return (
        <div>
      <a
        href="/"
        class="mt-8 inline-block rounded border border-indigo-600 bg-[#0FCFEC] bg-gradient-to-r from-primary to-secondary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
       {children}
      </a>
    </div>
    );
};

export default PrimaryButton;