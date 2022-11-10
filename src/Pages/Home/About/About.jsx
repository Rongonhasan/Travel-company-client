import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-4">
          <img
            src="https://i.etsystatic.com/11569872/r/il/9bd1a7/3159412917/il_794xN.3159412917_rb4q.jpg"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl h-full "
          />
          <div>
            <h1 className="text-5xl font-bold">
              Create beautiful itineraries <br /> and quotes.
            </h1>
            <p className="py-6">
              Add tours, accommodations, flights, <br /> transportation, and
              cruises. Set times, add notes, <br /> upload documents... fill out
              details to your <br /> heart's content..
            </p>
            <Link to="/services">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
