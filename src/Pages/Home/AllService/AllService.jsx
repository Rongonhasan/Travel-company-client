import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';

const AllService = () => {
    const services=useLoaderData()
    console.log(services);
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(e=><Cards e={e} key={e._id}></Cards>)
                }
            </div>
        </div>
    );
};

export default AllService;