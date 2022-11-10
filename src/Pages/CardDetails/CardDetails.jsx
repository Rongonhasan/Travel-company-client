import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from './Details';

const CardDetails = () => {
    const detailsCard=useLoaderData()
    console.log(detailsCard)
    return (
        <div>
            {
                detailsCard.map(e=><Details key={e._id} e={e}></Details>)
            }
        </div>
    );
};

export default CardDetails;