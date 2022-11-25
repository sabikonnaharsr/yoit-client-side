import React from 'react';
import MensCloth from '../MensCloth/MensCloth';

const MensClothes = () => {
    return (
        <div className="w-11/12 mx-auto py-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
            <MensCloth></MensCloth>
            <MensCloth></MensCloth>
            <MensCloth></MensCloth>
        </div>
    );
};

export default MensClothes;