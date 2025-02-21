import axios from "axios";
import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { MdOutlineDragIndicator } from "react-icons/md";


const TaskCard = ({task, refetch}) => {

  const handleDelete = async (id) => {
    console.log("okkkk")
    try {
      const res = await axios.delete(`${import.meta.env.VITE_URL}/task/${id}`);
      console.log(res.data);
      refetch()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-[#F9F9F9] shadow-md rounded-xl p-5 flex  justify-between w-full max-w-lg mx-auto">
      {/* Left Section: Checkbox and Task Info */}
      <div className="flex items-start gap-4 ">

        {/* Task Info */}
        <div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-500">{task.description}</p>

          {/* Time Range */}
          <div className="mt-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg inline-block">
            {task.taskTime}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between gap-3">

        {/* Drag &  Edit & Delete Icons */}
        {/* <MdOutlineDragIndicator  /> */}
        <FiEdit2 className="text-gray-500 hover:text-gray-700 cursor-pointer" size={16} />
        <FiTrash2 onClick={()=>handleDelete(task._id)} className="text-gray-500 hover:text-red-600 cursor-pointer" size={16} />
      </div>

      {/* Modal for Edit */}
    </div>
  );
};

export default TaskCard;
