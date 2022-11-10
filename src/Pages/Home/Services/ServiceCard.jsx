import React from 'react';
import { Link } from 'react-router-dom';



const ServiceCard = ({e}) => {
    
    const {_id, name, image, price, service,description } = e;
    const short= description.slice(0,100) + "...";
    return (
    
       <div>
         <div className="card card-compact w-96 bg-base-100 shadow-xl my-6">
            <figure><img className='w-auto h-72' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>{price}</p>
                <p>{service}</p>
                <p>{short}</p>
                <div className="card-actions justify-end">
                    
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">Read</button>
                    </Link>
                   
                </div>
            </div>
        </div>
        <div>
       
        </div>
       </div>
    );
};

export default ServiceCard;