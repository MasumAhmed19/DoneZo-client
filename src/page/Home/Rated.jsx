import React from 'react';

const Rated = () => {
    return (
        <div className="font-noto sm:flex sm:justify-center sm:items-center text-center sm:text-start">
            <div className="shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
              <div className="flex justify-center -space-x-3">
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white "
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="User 1"
                />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white "
                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="User 2"
                />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white "
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt="User 3"
                />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white "
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="User 4"
                />
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white bg-gray-800 ">
                  <span className="text-xs font-medium leading-none text-white uppercase">
                    7k+
                  </span>
                </span>
              </div>
            </div>

            <div className="border-t sm:border-t-0 sm:border-s border-gray-200 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0 "></div>

            <div className="pt-5 sm:pt-0 sm:ps-5">
              <div className="text-lg font-semibold text-gray-800 ">
                Used By
              </div>
              <div className="text-sm text-gray-500 ">
                Rated best over 37k reviews
              </div>
            </div>
          </div>
    );
};

export default Rated;