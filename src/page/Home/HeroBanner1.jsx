import React from "react";
import { Link } from "react-router-dom";
import ScrollUpBtn from "../../component/Buttons/ScrollUpBtn";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-6 sm:px-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[60rem] h-[60rem] bg-gradient-to-r from-[#62DF50] to-black opacity-30 blur-[5rem] rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl -mt-80">
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Organize Your Tasks <span className="text-[#62DF50]">Effortlessly</span>
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Plan, manage, and complete your tasks seamlessly with our smart task tracker.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <ScrollUpBtn buttonText="Go to Dashboard" link="/dashboard" />
        </div>
      </div>


    </div>
  );
};

export default HomePage;
