import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
const AvailableAppointment = () => {
    const [treatmentsType, setTreatmentsType] = useState(null)
    // const date = format(selectedDate, 'PP');

    const {data:appointmentOption = []} = useQuery({
        queryKey: ['appointmentOption', ],
        queryFn: ()=>  fetch(`appointOption.json`)
        .then(res => res.json())
    })


    return (
        <section>
            <p className='text-center mt-10 font-bold text-blue-700'>Available Appointment</p>
            <div className='gird gird-cols-1 mg:grid-cols-2 lg:gird-cols-3 gap-4'> 
                {
                    appointmentOption.map(option => 
                    <AppointmentOption
                    key={option._id}
                    appointmentOption={appointmentOption}
                    ></AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;