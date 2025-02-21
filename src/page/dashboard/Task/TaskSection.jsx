//   import React, { useState } from "react";
// import TasksColumn from "./TasksColumn";
// import { DndContext, useSensors, useSensor, PointerSensor, KeyboardSensor, closestCenter } from "@dnd-kit/core";
// import { SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
// import useAuth from "../../../hook/useAuth";

// const TaskSection = ({setFlag, flag}) => {
//   const {user} = useAuth();
 
//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   );

//   const handleDragStart = (event) => {};
//   const handleDragMove = (event) => {};
//   const handleDragEnd = (event) => {};

//   // Task categories (columns)
//   const taskCategory = ["todo", "inprogress", "done"];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//       <DndContext
//         sensors={sensors}
//         collisionDetection={closestCenter}
//         onDragStart={handleDragStart}
//         onDragMove={handleDragMove}
//         onDragEnd={handleDragEnd}
//       >
//         <SortableContext items={taskCategory}>
//           {taskCategory.map((taskCat) => (
//             <TasksColumn key={taskCat} taskCat={taskCat}  setFlag={setFlag}  flag={flag}  />
//           ))}
//         </SortableContext>
//       </DndContext>
//     </div>
//   );
// };

// export default TaskSection;




import React, { useState, useEffect } from "react";
import TaskCard from "../../../component/Tasks/TaskCard";
import { DndContext, useSensors, useSensor, PointerSensor, KeyboardSensor, closestCenter } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hook/useAuth";



const TaskSection = ({ setFlag, flag }) => {
  const { user } = useAuth();
  const taskCategories = ["todo", "inprogress", "done"];

  const fetchTasks = async (id, email) => {
    const { data } = await axios.get(`${import.meta.env.VITE_URL}/tasks/${email}?category=${id}`);
    return data;
  };

  const tasksData = taskCategories.map((category) => {
    return useQuery({
      queryKey: ["tasks", category, user?.email],
      queryFn: () => fetchTasks(category, user?.email),
      enabled: !!user?.email,
    });
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );



  useEffect(() => {
    if (flag) {
      tasksData.forEach(({ refetch }) => refetch());
      setFlag(false);
    }
  }, [flag, setFlag, tasksData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <DndContext sensors={sensors} collisionDetection={closestCenter}>
        <SortableContext items={taskCategories}>
          {taskCategories.map((category, index) => {
            const { data: taskData, isLoading, isError, refetch } = tasksData[index];
            return (
              <div key={category} className="p-2">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-md mb-2">{category.toUpperCase()}</h2>
                </div>
                <div className="border border-[#f6f6f6] mb-5"></div>
                <div className="mt-3 flex flex-col gap-5">
                  {isLoading ? (
                    <p>Loading tasks...</p>
                  ) : isError ? (
                    <p className="text-red-500">Error loading tasks</p>
                  ) : taskData?.length > 0 ? (
                    taskData.map((task) => <TaskCard key={task.id} task={task} refetch={refetch} />)
                  ) : (
                    <p className="text-gray-400 text-sm">No tasks available</p>
                  )}
                </div>
              </div>
            );
          })}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default TaskSection;

