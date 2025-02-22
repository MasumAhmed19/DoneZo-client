// import axios from "axios";
// import React, { useState } from "react";
// import { FiEdit2, FiTrash2 } from "react-icons/fi";
// import { MdOutlineDragIndicator } from "react-icons/md";

// const TaskCard = ({
//   task,
//   refetch,
//   dragAttributes,
//   dragListeners,
//   isDragging,
//   columnId,
// }) => {
//   const [isDeleting, setIsDeleting] = useState(false);

//   const handleDelete = async (id) => {
//     if (isDeleting) return;

//     try {
//       setIsDeleting(true);
//       await axios.delete(`${import.meta.env.VITE_URL}/task/${id}`),

//       refetch();
//     } catch (error) {
//       console.error("Delete error:", error);
//     } finally {
//       setIsDeleting(false);
//     }
//   };

//   return (
//     <div
//       className={`
//         group
//         bg-[#F9F9F9] 
//         shadow-md 
//         rounded-xl 
//         p-5 
//         flex 
//         justify-between 
//         w-full 
//         max-w-lg 
//         mx-auto 
//         transition-all 
//         duration-200
//         hover:shadow-lg
//         ${
//           isDragging
//             ? "ring-2 ring-blue-500 scale-105 opacity-75 shadow-xl"
//             : ""
//         }
//       `}
//       data-column={columnId}
//     >
//       <div className="flex items-start gap-4 flex-1">
//         <button
//           {...dragAttributes}
//           {...dragListeners}
//           className={`
//             p-1.5 
//             rounded 
//             transition-colors
//             group-hover:bg-gray-100
//             cursor-grab 
//             active:cursor-grabbing
//             focus:outline-none 
//             focus:ring-2 
//             focus:ring-blue-500
//           `}
//           aria-label="Drag task"
//         >
//           <MdOutlineDragIndicator
//             className="text-gray-400 group-hover:text-gray-600"
//             size={20}
//           />
//         </button>

//         <div className="flex-1 min-w-0">
//           <h3 className="text-lg font-semibold truncate">{task.title}</h3>
//           <p className="text-sm text-gray-500 line-clamp-2">
//             {task.description}
//           </p>
//           <div className="mt-2 flex gap-2 flex-wrap">
//             <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
//               {task.taskTime}
//             </span>

//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-end justify-between gap-3 ml-4">
//         <button
//           className="p-1.5 rounded hover:bg-gray-100 transition-colors"
//           aria-label="Edit task"
//         >
//           <FiEdit2
//             className="text-gray-500 hover:text-gray-700"
//             size={16}
//           />
//         </button>
//         <button
//           onClick={() => handleDelete(task._id)}
//           disabled={isDeleting}
//           className={`
//             p-1.5 
//             rounded 
//             hover:bg-red-50 
//             transition-colors
//             disabled:opacity-50 
//             disabled:cursor-not-allowed
//           `}
//           aria-label={isDeleting ? "Deleting task..." : "Delete task"}
//         >
//           <FiTrash2
//             className={`
//               text-gray-500 
//               hover:text-red-600 
//               ${isDeleting ? "opacity-50" : ""}
//             `}
//             size={16}
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;


import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { MdOutlineDragIndicator } from "react-icons/md";
import axios from "axios";

const TaskCard = ({ task, isDragging }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_URL}/tasks/${id}`);
      // Trigger a refetch or state update in the parent component
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div
      className={`bg-[#F9F9F9] shadow-md rounded-xl p-5 flex justify-between w-full max-w-lg mx-auto ${
        isDragging ? "ring-2 ring-blue-500" : ""
      }`}
    >
      {/* Left Section: Task Info */}
      <div className="flex items-start gap-4 flex-1">
        {/* Drag Handle */}
        <div className="cursor-grab active:cursor-grabbing">
          <MdOutlineDragIndicator className="text-gray-400 mt-1" />
        </div>

        {/* Task Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-500">{task.description}</p>
          <div className="mt-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg inline-block">
            {task.taskTime}
          </div>
        </div>
      </div>

      {/* Right Section: Edit & Delete Icons */}
      <div className="flex flex-col items-end justify-between gap-3">
        <FiEdit2 className="text-gray-500 hover:text-gray-700 cursor-pointer" size={16} />
        <FiTrash2
          onClick={() => handleDelete(task._id)}
          className="text-gray-500 hover:text-red-600 cursor-pointer"
          size={16}
        />
      </div>
    </div>
  );
};

export default TaskCard;
