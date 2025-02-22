import Profile from "../../component/leftbar/Profile";
import AddTask from "./TaskForm/AddTask";
import useAuth from "../../hook/useAuth";
import { fetchTasks } from "../../api/utilitis";
import { useEffect, useState } from "react";
import axios from "axios";
import TaskBoard from "./DragTask/TaskBoard";
import WeeklyRating from "../../component/leftbar/WeeklyRating";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="">
      <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center py-[20px] justify-center md:px-6 sm:px-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[60rem] h-[60rem] bg-gradient-to-r from-[#62DF50] to-black opacity-30 blur-[5rem] rounded-full"></div>
        </div>

        {/* all dashboard content */}
        <div className="relative z-10 ">
          <div className="min-h-screen p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Sidebar */}
              <aside className="md:col-span-3 w-full space-y-6 bg-[#232230]/70 backdrop-blur-lg  text-gray-200 rounded-xl shadow-md">
                {/* Profile and Task Summary */}
                <div className=" p-4 rounded-lg ">
                  <Profile />
                </div>
                {/* Daily Stats */}
                <div className="p-4 rounded-lg ">
                  <WeeklyRating />
                </div>
                {/* Weekly Stats */}
                {/* <div className="p-4 rounded-lg ">Weekly Stats</div> */}
              </aside>

              {/* Main Content */}
              <main className="md:col-span-9  w-full bg-[#232230]/70 backdrop-blur-lg min-h-[90vh] space-y-6 ">
                {/* Search & Sort */}
                <div className="max-w-[85rem] px-4  sm:px-6 lg:px-8 lg:py-6 mx-auto">

                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="w-full md:w-2/3 bg-white text-black p-3 rounded-lg shadow-md">
                      Search Bar
                    </div>
                    <div className="w-full md:w-1/3 bg-white text-black p-3 rounded-lg shadow-md">
                      Sort By
                    </div>
                  </div>
                </div>

                {/* Tasks Section */}
                <div className=" p-4 rounded-lg shadow-md pb-[50px]">
                  {/* Add Task */}
                  <div>
                    <AddTask />
                  </div>
                  <div className="container mx-auto px-8">
                    <TaskBoard />
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
