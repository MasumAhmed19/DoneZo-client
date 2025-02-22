// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import TaskCard from "../../../component/Tasks/TaskCard";

// function SortableTask({ task }) {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//     isDragging,
//   } = useSortable({ id: task._id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     opacity: isDragging ? 0.5 : 1,
//     zIndex: isDragging ? 999 : "auto",
//     willChange: "transform, opacity",
//   };

//   return (
//     <div 
//       ref={setNodeRef} 
//       style={style}
//       {...attributes} 
//       {...listeners}
//       role="button"
//       aria-grabbed={isDragging}
//     >
//       <TaskCard task={task} isDragging={isDragging} />
//     </div>
//   );
// }

// export default SortableTask;

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableTask({ task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 mb-2 rounded shadow"
    >
      <h3 className="font-medium">{task.title}</h3>
      <p className="text-sm text-gray-500">{task.description}</p>
    </div>
  );
}