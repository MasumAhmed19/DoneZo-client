 import React from "react";
import TasksColumn from "./TasksColumn";
import { DndContext, useSensors, useSensor, PointerSensor, KeyboardSensor, closestCenter } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import useAuth from "../../../hook/useAuth";

const TaskSection = ({setFlag, flag}) => {
  const {user} = useAuth()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {};
  const handleDragMove = (event) => {};
  const handleDragEnd = (event) => {};

  // Task categories (columns)
  const taskIds = ["todo", "inprogress", "done"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={taskIds}>
          {taskIds.map((taskId) => (
            <TasksColumn key={taskId} id={taskId}  setFlag={setFlag}  flag={flag}  />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default TaskSection;
