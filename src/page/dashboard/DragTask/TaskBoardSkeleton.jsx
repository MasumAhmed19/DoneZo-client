
  const TaskBoardSkeleton = () => {
    
    <div className="flex gap-4 p-4 bg-gray-900 min-h-screen">
    {["To Do", "Done", "Done"].map((title, index) => (
      <div key={index} className="w-1/3 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-white font-bold mb-4">{title}</h2>
        <div className="space-y-4">
          {[1, 2].map((_, idx) => (
            <div
              key={idx}
              className="p-4 bg-red-500 rounded-lg animate-pulse"
            >
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  };
  
  export default TaskBoardSkeleton;