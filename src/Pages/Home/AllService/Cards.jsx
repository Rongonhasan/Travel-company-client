import React from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from "react-router-dom";

const Cards = ({ e }) => {
  const {_id,name,image,description,price,service} = e;
  const cutDetails=description.slice(0,100)
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl create-card pic">
        <figure className="px-10 pt-10">
          <PhotoProvider>
            <PhotoView src={image}>
              <img className='w-auto h-72 rounded-xl'
                src={image}
                style={{ objectFit: "cover" }}
                alt=""
                
              />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{service}</h2>
          <p className="text-xl text-primary font-bold">BDT:{price}</p>
          <p>
            {cutDetails}...
            <button className="btn btn-primary">
             
              <Link className="" to={`/services/${_id}`}>
                Read More
              </Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
