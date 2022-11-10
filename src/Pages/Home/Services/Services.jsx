import React from 'react';

import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
 const service=useLoaderData()
 console.log(service)

   
    return (
        <div>
           
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                  service.map(e=><ServiceCard key={e._id}
                     e={e}></ServiceCard>)  
                }
            </div>
            
        </div>
    );
};

export default Services;