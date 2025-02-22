import { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import TaskModal from "../../../component/popup/TaskModal";
import axios from "axios";
import useAuth from "../../../hook/useAuth";
import useTasks from "../../../hook/useTasks";

const AddTask = () => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const { user } = useAuth();
  const {refetch} = useTasks()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.task_name.value;
    const description = form.task_description.value;
    const time = new Date();

    const taskTime = time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const taskDate = time.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const taskData = {
      title,
      description,
      email: user?.email,
      category: 'todo',
      order: 0,
      taskTime,
      taskDate,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URL}/tasks`,
        taskData
      );
      refetch()

      console.log(res.data);
    } catch (err) {
      console.log("error in adding task-->", err);
    }

    console.log(taskData);
    setIsAddTaskOpen(false);
  };

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-gray-800 font-semibold">
              Task Dashboard
            </h2>
            <div
              onClick={() => setIsAddTaskOpen(true)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <GoPlusCircle />
              Add Task
            </div>
          </div>
          {/* Column Component */}
          <div className="">
          </div>
        </div>
      </div>
      <TaskModal
        isOpen={isAddTaskOpen}
        closeModal={() => setIsAddTaskOpen(false)}
        title="Add To Do"
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="">
            <input
              type="text"
              name="task_name"
              id="full-name"
              required
              className="input input-bordered w-full bg-white text-black border-gray-300 focus:border-gray-600 focus:ring-gray-600 disabled:opacity-50"
              placeholder="Task Name"
            />
          </div>
          {/* <div className="form-control">
            <select
              defaultValue="default"
              className="select select-bordered w-full bg-white text-black border-gray-300 focus:border-gray-600 focus:ring-gray-600"
              name="task_category"
              required
            >
              <option
                disabled
                value="default"
              >
                Task Category
              </option>
              <option value="todo">Todo</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div> */}

          <div className="form-control">
            <div>
              <textarea
                name="task_description"
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

export default AddTask;