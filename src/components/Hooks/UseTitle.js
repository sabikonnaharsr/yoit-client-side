import  { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(() =>  {
        document.title = `${title}  - Yoit`;
       
    },[title])
};

export default UseTitle;