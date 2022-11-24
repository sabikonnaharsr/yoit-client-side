import React from 'react';
import PrimaryButton from '../../../PrimaryButton/PrimaryButton';
import { PhotoProvider, PhotoView } from "react-photo-view";


const DressGallery = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-4'>Dress Gallery</h1>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                  <PhotoProvider>
                    <PhotoView src="https://images.unsplash.com/photo-1548454433-4a1812514573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80/"><img src="https://images.unsplash.com/photo-1548454433-4a1812514573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80/" alt="" className=" w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"/>
                    </PhotoView> 

                 </PhotoProvider>
                    <PhotoProvider><PhotoView src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19389.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538&semt=sph"><img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19389.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538&semt=sph" />
                    </PhotoView>
                </PhotoProvider>
                
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4916.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538&semt=sph" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/premium-photo/portrait-handsome-blond-man-singer-elegant-tuxedo-bow-tie-posing-with-vintage-microphone-black-wall_149155-5186.jpg?w=900" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvbWVzJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/free-photo/group-beautiful-girls-boys-pastel-wall_155003-10579.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538&semt=sph" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/free-photo/little-beautiful-smiling-girl-with-funny-face-striped-yellow-dress-posing-blue-background-studio_114579-92649.jpg?w=1060&t=st=1669288267~exp=1669288867~hmac=9acfc94659d4cc3a8e909e9b11d17258fc2a0c3a4499bcbe76afd05f0279c942" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/free-photo/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_155003-21550.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538&semt=sph" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/free-photo/stylish-little-girl-child-girl-casual-with-skateboard-yellow-wall_231208-11396.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538&semt=sph" />
                    {/* <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/free-photo/little-beautiful-smiling-girl-with-funny-face-striped-yellow-dress-posing-blue-background-studio_114579-92649.jpg?w=1060&t=st=1669288267~exp=1669288867~hmac=9acfc94659d4cc3a8e909e9b11d17258fc2a0c3a4499bcbe76afd05f0279c942" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/free-photo/portrait-smiling-little-girl-with-long-brown-hair-piercing-glance-lying-sofa-home_613910-21050.jpg?w=996&t=st=1669288297~exp=1669288897~hmac=da40f0cdfc3d2924385dc3189900ad18a741a664feab6f0f352fb7b1d05ad334" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.freepik.com/free-photo/portrait-happy-cute-little-girl-white-dress-white-background_613910-4189.jpg?w=996&t=st=1669288354~exp=1669288954~hmac=1a090024fa61f759569b6f45b8f33ee61cbcd245fadc3e9e6ddcba787be3a007" />
                    <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4916.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538&semt=sph/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" /> 
                    https://images.unsplash.com/photo-1519165598262-124d83b93b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80*/}
                </div>
            </section>
            <PrimaryButton>Choose More</PrimaryButton>
        </div>
    );
};

export default DressGallery;