import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hook/useAuth";
import TaskCard from "../../../component/Tasks/TaskCard";

const fetchTasks = async (id, email) => {
  const { data } = await axios.get(`${import.meta.env.VITE_URL}/tasks/${email}?category=${id}`);
  return data;
};

const TasksColumn = ({ taskCat, setFlag, flag}) => {
  const { user } = useAuth();

  const { data: taskData, isLoading, isError, refetch } = useQuery({
    queryKey: ["tasks", taskCat, user?.email],
    queryFn: () => fetchTasks(taskCat, user?.email),
    enabled: !!user?.email, 
  });

  useEffect(() => {
    if (flag) {
      refetch();
      setFlag(false);
    }
  }, [flag, setFlag, refetch]);


  return (
    <div className="p-2">
      {/* Column Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-md mb-2">{taskCat.toUpperCase()}</h2>
      </div>
      <div className="border border-[#f6f6f6] mb-5"></div>

      {/* Task List */}
      <div className="mt-3 flex flex-col gap-5">
        {isLoading ? (
          <p>Loading tasks...</p>
        ) : isError ? (
          <p className="text-red-500">Error loading tasks</p>
        ) : taskData?.length > 0 ? (
          taskData.map((task) => (
            <TaskCard key={task.id} task={task} refetch={refetch} />
          ))
        ) : (
          <p className="text-gray-400 text-sm">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TasksColumn;