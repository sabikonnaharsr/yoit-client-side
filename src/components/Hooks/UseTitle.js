import  { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(() =>  {
        document.title = `${title}  - Resell Product`;
       
    },[title])
};

export default UseTitle;