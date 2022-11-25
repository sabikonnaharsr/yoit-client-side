import React from 'react';
import LadiesCloth from '../LadiesCloth/LadiesCloth';


const  LadiesClothes = () => {
    return (
        <div className="w-11/12 mx-auto py-16 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <LadiesCloth></LadiesCloth>  
            <LadiesCloth></LadiesCloth>  
            <LadiesCloth></LadiesCloth>  
        </div>
    );
};

export default LadiesClothes;