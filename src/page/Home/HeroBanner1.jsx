import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { Checkbox } from "antd";
import Rated from "./Rated";
import ScrollUpBtn from "../../component/Buttons/ScrollUpBtn";

const HeroBanner1 = () => {
  return (
    <div className="relative">
      {/* <div className="absolute flex items-center justify-center -z-10">
        <div className="w-[300px] h-[300px] bg-[#62DF50] opacity-20 rounded-lg"></div>
      </div> */}

      <div className="container mx-auto py-[70px] min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-5">
            <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight">
              Your Go-To Platform for{" "}
              <span className="text-[#62DF50]">to boost productivity</span>
            </h1>
            <p className="text-gray-500">
              Manage your tasks efficiently with a seamless drag-and-drop
              interface. Stay organized, track progress, and get things done
              effortlessly.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center py-5">
          <ScrollUpBtn buttonText="Get Started" link="/dashboard" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner1;
