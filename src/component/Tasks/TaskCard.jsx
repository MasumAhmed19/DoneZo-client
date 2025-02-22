
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import axios from "axios";
import useTasks from "../../hook/useTasks";
import { MdOutlineDragIndicator } from "react-icons/md";
import TaskModal from "../popup/TaskModal";
import { useState } from "react";

const TaskCard = ({ task }) => {
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const {refetch} = useTasks();
  console.log(task)
  const handleDelete = async (id) => {
    console.log(id)
    try {
      await axios.delete(`${import.meta.env.VITE_URL}/task-del/${id}`);
      refetch();

    } catch {
      console.error("Operation failed, please try again!");
    } 
  };

  const handleUpdate = async (e) => {

    e.preventDefault();
    const form = e.target;
    const title = form.task_name.value;
    const description = form.task_description.value;

    const taskData = {
      title,
      description,
    };

    try {
      await axios.put(`${import.meta.env.VITE_URL}/task-update/${task._id}`, taskData);
      refetch();
      setIsEditTaskOpen(false);
    } catch (error) {
      console.error("Operation failed, please try again!", error);
    }
  };


  return (
    <div>
      <div className="bg-white/20 backdrop-blur-lg shadow rounded-xl p-5 flex justify-between w-full max-w-lg mx-auto">
        {/* Left Section: Task Info */}
        <div className="flex items-start gap-4 flex-1">
          {/* Drag Handle */}
          <div className="cursor-grab active:cursor-grabbing">
            <MdOutlineDragIndicator className="text-white mt-1" />
          </div>

          {/* Task Content */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{task.title}</h3>
            <p className="text-sm text-gray-300">{task.description}</p>
            <div className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-lg inline-block">
              <p className="">
                {task?.taskTime
                  ? `Modified: ${new Date(task.modified).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}`
                  : `Created: ${new Date(task.timestamp).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}`}
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-col items-end justify-between gap-3">
          <FiEdit2 onClick={()=>setIsEditTaskOpen(true)} className="text-white hover:text-black cursor-pointer" size={16} />
          <FiTrash2
            onClick={() => handleDelete(task._id)}
            className="text-white hover:text-black cursor-pointer"
            size={16}
          />
        </div>

      </div>

      <TaskModal
        isOpen={isEditTaskOpen}
        closeModal={() => setIsEditTaskOpen(false)}
        title="Edit Task"
      >
        <form
          onSubmit={handleUpdate}
          className="space-y-4"
        >
          <div className="">
            <input
              type="text"
              name="task_name"
              id="full-name"
              defaultValue={task.title}
              required
              className="input input-bordered w-full bg-white text-black border-gray-300 focus:border-gray-600 focus:ring-gray-600 disabled:opacity-50"
              placeholder="Task Name"
            />
          </div>

          <div className="form-control">
            <div>
              <textarea
                name="task_description"
                defaultValue={task.description}
                id="comment"
                rows="3"
                className="textarea textarea-bordered w-full bg-white text-black border-gray-300 focus:border-gray-600 focus:ring-gray-600 disabled:opacity-50"
                placeholder="Add task description"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="btn"
          >
            Add Task
          </button>
        </form>
      </TaskModal>
    </div>

    
  );
};

export default TaskCard;
