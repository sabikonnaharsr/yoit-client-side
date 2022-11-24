import React from 'react';
import BabiesCloth from '../BabiesCloth/BabiesCloth';

const BabiesClothes = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <BabiesCloth></BabiesCloth>
          <BabiesCloth></BabiesCloth>
          <BabiesCloth></BabiesCloth>
        </div>
    );
};

export default BabiesClothes;