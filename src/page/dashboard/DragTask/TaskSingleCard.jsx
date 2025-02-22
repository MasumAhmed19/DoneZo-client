// components/TaskCard.jsx
import { Draggable } from "@hello-pangea/dnd";

export const TaskSingleCard = ({ task, index }) => {
    // console.log(task._id)

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => (
        <div
          className="mb-2"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            className={`p-4 rounded-lg shadow-sm transition-all ${
              snapshot.isDragging
                ? "bg-blue-50 opacity-90 rotate-[-1deg] shadow-md"
                : "bg-white"
            }`}
          >
            <h3 className="font-medium truncate">{task.title}</h3>
            {task.description && (
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {task.description}
              </p>
            )}
            <div className="mt-2 text-xs text-gray-400">
              {task.taskTime}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};