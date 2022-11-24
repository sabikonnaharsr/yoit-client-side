import React from 'react';
import LadiesCloth from '../LadiesCloth/LadiesCloth';


const  LadiesClothes = () => {
    return (
        <div className='grid gap-4 xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto items-center justify-center'>
            <LadiesCloth></LadiesCloth>  
            <LadiesCloth></LadiesCloth>  
            <LadiesCloth></LadiesCloth>  
        </div>
    );
};

export default LadiesClothes;