import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
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
           <div className='text-center my-5'>
          <Link to="/services"> <button className='btn btn-info  '>See All</button></Link>
           </div>
           
        </div>
        
    );
};

export default Services;