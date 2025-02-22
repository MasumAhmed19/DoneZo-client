// components/CategoryColumn.jsx
import { Droppable } from "@hello-pangea/dnd";
import { TaskSingleCard } from "./TaskSingleCard";

const statusNames = {
  todo: "To-Do",
  inprogress: "In Progress",
  done: "Done"
};

// status mane category name
// tasks mane like todo'r data
export const CategoryColumn = ({ status, tasks }) => (
  <div className="flex-1 p-2 first:pl-4 last:pr-4 bg-gray-50">
    <h2 className="text-lg font-semibold text-center mb-4">
      {statusNames[status]}
    </h2>
    <Droppable droppableId={status}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`p-2 rounded-lg min-h-[200px] ${
            snapshot.isDraggingOver ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          <div className="space-y-2">
            {tasks.map((task, index) => (
              <TaskSingleCard key={task._id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  </div>
);