import React from 'react';
import BabiesCloth from '../BabiesCloth/BabiesCloth';

const BabiesClothes = () => {
    return (
        <div className="w-11/12 mx-auto py-16 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <BabiesCloth></BabiesCloth>
          <BabiesCloth></BabiesCloth>
          <BabiesCloth></BabiesCloth>
        </div>
    );
};

export default BabiesClothes;