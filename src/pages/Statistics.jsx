import React from "react";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
import { Link } from "react-router-dom";

const Statistics = () => {
  return (
    <div>
      <Head />
      <div className="bg-[#9538E2] w-12/12 mx-auto">
        <Navbar
          mainTitle={
            <p className="text-5xl w-8/12 mx-auto font-bold text-[#FFFFFF]">
             Statistics
            </p>
          }
          subTitle={
           <p className="">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p> 
          }
          button={<Link to="/statistics" className="bg-white px-6 py-2 rounded-full text-[#9538E2] font-bold">Statistic</Link>}
        />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <p className="font-bold">Statistics</p>
        <h1 className="text-4xl text-center font-bold text-violet-500 mt-7">
          No Data to Show Statistics
        </h1>
      </div>
    </div>
  );
};

export default Statistics;
