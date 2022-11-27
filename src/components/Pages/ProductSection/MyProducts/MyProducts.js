import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import AdvertiseCard from '../../DashboardSection/AdvertiseCard/AdvertiseCard';


const MyProducts = () => {
    const {user} = useContext(AuthContext)

    const {data: myProducts = []} = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async()=> {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`);   
            const data = await res.json();
            return data
        }
    })

    return (
        <div>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-1'>
           {
               myProducts.map(myProduct => <AdvertiseCard
               key={myProduct._id}
               myProduct={myProduct}
               ></AdvertiseCard>)
            }
            {
                myProducts.length
            }
           </div>
        </div>
    );
};

export default MyProducts;