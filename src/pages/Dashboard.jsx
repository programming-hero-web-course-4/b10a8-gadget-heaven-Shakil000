import React from "react";
import Head from "../components/Head";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Head></Head>
   <div className="bg-[#9538E2] w-12/12 mx-auto">
   <div className="">
   <Navbar
        mainTitle={<h1 className="text-5xl w-8/12 mx-auto font-bold text-[#FFFFFF]">Dashboard</h1>}
        button={<button className="bg-white px-5 rounded-full text-[#9538E2] font-bold">Cart</button>}
        button_w={<button className=" px-6 py-2 rounded-full text-white border font-bold -pb-28">Wishlist</button>}
        subTitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}
      ></Navbar>
   </div>
   </div>
    </div>
  );
};

export default Dashboard;



        // <p className="text-[16px] text-[#FFFFFF] py-10 w-5/12 mx-auto">{subTitle}</p>
        // <button className="bg-white px-5 py-2 rounded-full text-[#9538E2] font-bold">{button}</button>