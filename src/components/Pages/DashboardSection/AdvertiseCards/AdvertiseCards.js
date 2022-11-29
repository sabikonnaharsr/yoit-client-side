// import { useQuery } from '@tanstack/react-query';
// import React, { useContext } from 'react';
// import { AuthContext } from '../../../Contexts/AuthProvider';
// import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';

// const AdvertiseCards = () => {
//     const {user} = useContext(AuthContext);
    
//     const {data: card = []} = useQuery({
//         queryKey: ['card'],
//         queryFn: async()=> {
//             const res = await fetch(`http://localhost:5000/advertise-products/${user?.email}`);
//             const data = await res.json();
//             return data
//         }
//     })

//     return (
//         <div>
//             <div className='w-11/12 mx-auto py-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4"'>
//             {
//                card.map(cardData => <AdvertiseCard
//                key={cardData._id}
//                card={cardData}
//                ></AdvertiseCard>)
//             }
//             </div>
//         </div>
//     );
// };

// export default AdvertiseCards;