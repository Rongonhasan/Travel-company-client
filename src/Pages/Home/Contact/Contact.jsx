import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-amber-100 rounded-xl px-4 my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> CONTACT US</h1>
            <p className="py-6">
              During WWII, the travel industry took a big hit, unsurprisingly.
              However, during the post-war years, when income was still very
              low, travel agents were forced to react to the market demands and
              create cheaper packages which fell in line with reduced airfares.
              Once this happened, travel became much more accessible to all
              demographics, and the British search for some summer sun began.
              Like any industry, travel agents have had their ups and their
              downs. The most recent being the dawn of the internet nullifying
              the requirement of a travel agent for many people. Agents have
              needed to respond an ensure their value-added remains despite the
              wealth of information accessible at the fingertips of many.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <input
                className="input my-2 input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="Name"
              />
              <div className="flex gap-2">
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className="textarea input-bordered input-accent w-full max-w-xs"
                name=""
                placeholder="Message"
                id=""
                cols="10"
                rows="10"
              ></textarea>
            </div>
            <Link className="w-[50%] mx-auto" to="/">
              <button className="btn btn-success my-5 ">Connect Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
