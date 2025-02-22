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
    <div className="bg-[#f9f9f9] dark:bg-black">
      <div className="mx-auto p-5 md:p-10">
        <div className="min-h-screen p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <aside className="md:col-span-3 space-y-6 bg-[#272C35] rounded-xl shadow-md">
              {/* Profile and Task Summary */}
              <div className=" p-4 rounded-lg ">
                <Profile />
              </div>
              {/* Daily Stats */}
              <div className="p-4 rounded-lg "><WeeklyRating></WeeklyRating></div>

            </aside>

            {/* Main Content */}
            <main className="md:col-span-9 space-y-6 ">
              {/* Search & Sort */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full md:w-2/3 bg-white p-3 rounded-lg shadow-md">
                  Search Bar
                </div>
                <div className="w-full md:w-1/3 bg-white p-3 rounded-lg shadow-md">
                  Sort By
                </div>
              </div>

              {/* Tasks Section */}
              <div className="bg-[#232230] p-4 rounded-lg shadow-md pb-[50px]">
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
  );
};

export default Dashboard;
