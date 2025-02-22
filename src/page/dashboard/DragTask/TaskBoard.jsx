// components/TaskBoard.jsx
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import axios from "axios";
import useAuth from "../../../hook/useAuth";
import { Link } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import useTasks from "../../../hook/useTasks";
import TaskCard from "../../../component/Tasks/TaskCard";
import TaskBoardSkeleton from "./TaskBoardSkeleton";

const categories = ["todo", "inprogress", "done"];

const TaskBoard = () => {
  const { user } = useAuth();
  const { userTasks, refetch, isLoading } = useTasks();
  const [taskList, setTaskList] = useState(userTasks || []);

  console.log(userTasks);

  useEffect(() => {
    if (!isLoading && userTasks) {
      setTaskList(userTasks);
    } else {
      setTaskList([]);
    }
  }, [userTasks, isLoading]);

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // Reordering within the same category
    if (source.droppableId === destination.droppableId) {
      const updatedTasks = [...taskList];
      const [movedTask] = updatedTasks[source.droppableId].tasks.splice(
        source.index,
        1
      );
      updatedTasks[destination.droppableId].tasks.splice(
        destination.index,
        0,
        movedTask
      );
      setTaskList(updatedTasks);
    } else {
      // Moving task between categories
      const sourceCategory = taskList[source.droppableId];
      const destinationCategory = taskList[destination.droppableId];
      const [movedTask] = sourceCategory.tasks.splice(source.index, 1);
      movedTask.category = categories[destination.droppableId];
      destinationCategory.tasks.splice(destination.index, 0, movedTask);
      setTaskList([...taskList]);

      saveTaskDataToDB(movedTask);
    }
  };

  const saveTaskDataToDB = async (task) => {
    const updatedTask = { ...task, modified: new Date().toISOString() };
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_URL}/tasks/dnd/${task._id}`,
        updatedTask
      );
      if (res.data.success) {
        refetch();
      }
    } catch (error) {
      console.error("Operation failed, Please try again!");
      console.error("Error updating task:", error);
    }
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {isLoading ? (
          <TaskBoardSkeleton />
        ) : taskList.length > 0 ? (
          taskList.map((taskCategory, categoryIndex) => (
            <Droppable
              key={taskCategory.category}
              droppableId={categoryIndex.toString()}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-[#272C35] p-4 shadow rounded"
                >
                  <h2 className="text-xl font-semibold text-white">
                    {taskCategory.category === "todo"
                      ? "To Do"
                      : taskCategory.category === "inProgress"
                      ? "In Progress"
                      : "Done"}
                  </h2>

                  <div className="mt-4">
                    <ul >
                      {taskCategory.tasks.map((t, taskIndex) => (
                        <Draggable
                          key={t._id}
                          draggableId={t._id.toString()}
                          index={taskIndex}
                        >
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="border-accent py-2"
                            >
                              <TaskCard task={t} />

                            </li>
                          )}
                        </Draggable>
                      ))}
                    </ul>
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))
        ) : (
          <h2 className=" text-center my-20 text-3xl text-white">
            No tasks available
          </h2>
        )}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
