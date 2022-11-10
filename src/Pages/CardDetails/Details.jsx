import React from "react";

const Details = ({ e }) => {
    const {image,name,service,price,description}=e
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{service}</h2>
          <p>Price:{price}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
