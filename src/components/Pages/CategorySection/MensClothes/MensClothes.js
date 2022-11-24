import React from 'react';
import MensCloth from '../MensCloth/MensCloth';

const MensClothes = () => {
    return (
        <div className='grid lg:grid-cols-3  xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-4 mx-auto items-center justify-center'>
    
            <MensCloth></MensCloth>
            <MensCloth></MensCloth>
            <MensCloth></MensCloth>
        </div>
    );
};

export default MensClothes;