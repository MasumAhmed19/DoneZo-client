import Profile from "../../component/leftbar/Profile";
import AddTask from "./TaskForm/AddTask";

const Dashboard = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="mx-auto p-5 md:p-10">
      <div className="min-h-screen p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="md:col-span-3 space-y-6 bg-white rounded-xl shadow-md">
          {/* Profile and Task Summary */}
          <div className=" p-4 rounded-lg ">
              <Profile />
          </div>
          {/* Daily Stats */}
          <div className="p-4 rounded-lg ">Daily Stats</div>
          {/* Weekly Stats */}
          <div className="p-4 rounded-lg ">Weekly Stats</div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-9 space-y-6">
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
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Add Task */}
            <div>
                <AddTask />
            </div>
            {/* Three Column for three category */}
          </div>

        </main>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Dashboard;
