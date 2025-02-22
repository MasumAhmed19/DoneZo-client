// components/TaskBoard.jsx
import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import axios from "axios";
import useAuth from "../../../hook/useAuth";
import { CategoryColumn } from "./CategoryColumn";
import useAllTasks from "../../../hook/useAllTasks";

const categories = ["todo", "inprogress", "done"];

const TaskBoard = () => {
    const { user } = useAuth();
    const [allTasks, isLoading, refetch] = useAllTasks();
    const [sortedTasks, setSortedTasks] = useState(null);
    const [tasksByStatus, setTasksByStatus] = useState({
        todo: [],
        inprogress: [],
        done: [],
    });

    useEffect(() => {
        if (allTasks) {
            const sortedTasks = {
                todo: allTasks.todo || [],
                inprogress: allTasks.inprogress || [],
                done: allTasks.done || []
            };
    
            setTasksByStatus(sortedTasks);
        } else {
            setTasksByStatus({
                todo: [],
                inprogress: [],
                done: []
            });
        }
    }, [allTasks]);

    console.log(tasksByStatus)

    if (isLoading) {
        return <div>Loading tasks...</div>;
    }

  const handleDragEnd = async (result) => {
    const { source, destination } = result;

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    )
      return;

    // Optimistic update
    const newTasks = reorderTasks(tasksByStatus, source, destination);

    setTasksByStatus(newTasks);

    try {
      await axios.patch(`/api/tasks/${result.draggableId}`, {
        sourceStatus: source.droppableId,
        sourceIndex: source.index,
        destStatus: destination.droppableId,
        destIndex: destination.index,
      });
    } catch (error) {
      console.error("Error updating task:", error);
      setTasksByStatus(tasksByStatus);
    }
  };

  const reorderTasks = (tasks, source, destination) => {
    const sourceClone = [...tasks[source.droppableId]];
    const destClone =
      source.droppableId === destination.droppableId
        ? sourceClone
        : [...tasks[destination.droppableId]];

    const [movedTask] = sourceClone.splice(source.index, 1);
    destClone.splice(destination.index, 0, movedTask);

    return {
      ...tasks,
      [source.droppableId]: sourceClone,
      [destination.droppableId]: destClone,
    };
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4 p-4 min-h-screen bg-gray-50">
        {categories.map((category) => (
          <CategoryColumn
            key={category}
            status={category}
            tasks={tasksByStatus[category]}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
