import React, { useState, useEffect } from "react";
import {
  DndContext,
  useSensors,
  useSensor,
  PointerSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../hook/useAuth";
import SortableTask from "../DragTask/SortableTask";
import { arrayMove } from "@dnd-kit/sortable";

const TaskSection = () => {
  const { user } = useAuth();
  const [localTasks, setLocalTasks] = useState({
    todo: [],
    inprogress: [],
    done: [],
  });

  // 1. Enhanced data fetching with debugging
  const { isLoading, isError } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}/tasks/${user?.email}`
        );
        console.log("Raw API response:", data);
        
        // Convert MongoDB data to frontend format
        const transformData = (category) => 
          (data[category] || []).map(task => ({
            ...task,
            _id: task._id.toString(), // Convert ObjectId to string
            category: category
          }));

        return {
          todo: transformData('todo'),
          inprogress: transformData('inprogress'),
          done: transformData('done'),
        };
      } catch (error) {
        console.error("API error:", error);
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("Transformed data:", data);
      setLocalTasks(data);
    },
    enabled: !!user?.email,
    retry: 1,
  });

  // 2. Sensor configuration
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  // 3. Drag handler with data validation
  const handleDragEnd = ({ active, over }) => {
    if (!over) return;
    
    console.log("Drag event:", { active, over });

    const fromColumn = active.data.current?.columnId;
    const toColumn = over.data.current?.columnId || over.id;
    const activeId = active.id.toString();
    const overId = over.id.toString();

    setLocalTasks(prev => {
      // Clone state with fallback empty arrays
      const newState = {
        todo: [...prev.todo],
        inprogress: [...prev.inprogress],
        done: [...prev.done],
      };

      try {
        if (fromColumn === toColumn) {
          // Same column sorting
          const columnIndex = newState[fromColumn].findIndex(t => t._id === activeId);
          const overIndex = newState[fromColumn].findIndex(t => t._id === overId);
          
          if (columnIndex === -1 || overIndex === -1) {
            console.error("Invalid drag positions");
            return prev;
          }
          
          newState[fromColumn] = arrayMove(newState[fromColumn], columnIndex, overIndex);
        } else {
          // Cross-column movement
          const sourceIndex = newState[fromColumn].findIndex(t => t._id === activeId);
          if (sourceIndex === -1) return prev;
          
          const [movedTask] = newState[fromColumn].splice(sourceIndex, 1);
          movedTask.category = toColumn;
          newState[toColumn].push(movedTask);
        }
        
        return newState;
      } catch (error) {
        console.error("Drag error:", error);
        return prev;
      }
    });
  };

  if (isLoading) return <div className="p-4">Loading tasks...</div>;
  if (isError) return <div className="p-4 text-red-500">Error loading tasks</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        {Object.keys(localTasks).map((column) => (
          <div key={column} className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 capitalize">
              {column.replace('inprogress', 'In Progress')}
            </h2>
            
            <SortableContext 
              items={localTasks[column].map(t => t._id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-2">
                {localTasks[column].map(task => (
                  <SortableTask key={task._id} task={task} />
                ))}
                {localTasks[column].length === 0 && (
                  <div className="text-gray-400 text-center py-2">
                    No tasks here
                  </div>
                )}
              </div>
            </SortableContext>
          </div>
        ))}
      </DndContext>
    </div>
  );
};

export default TaskSection;