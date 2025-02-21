import { useState } from "react";
import { DndContext, useDroppable, useDraggable, closestCorners } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function App() {
  const COLUMNS = [
    { id: "TODO", title: "To Do" },
    { id: "IN_PROGRESS", title: "In Progress" },
    { id: "DONE", title: "Done" },
  ];

  const INITIAL_TASKS = [
    { id: "45241", title: "Research Project", description: "Gather requirements and create initial documentation", status: "TODO" },
    { id: "43452", title: "Design System", description: "Create component library and design tokens", status: "TODO" },
    { id: "3453", title: "API Integration", description: "Implement REST API endpoints", status: "IN_PROGRESS" },
    { id: "4534", title: "Testing", description: "Write unit tests for core functionality", status: "DONE" },
  ];

  const [tasks, setTasks] = useState(INITIAL_TASKS);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const overId = over.id;

    const activeTask = tasks.find((task) => task.id === taskId);
    const overColumn = COLUMNS.find((col) => col.id === overId);

    if (!activeTask) return;

    if (overColumn) {
      // Moving to a different column
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? { ...task, status: overColumn.id } : task))
      );
    } else {
      // Moving within the same column
      const overTask = tasks.find((task) => task.id === overId);
      if (!overTask || activeTask.status !== overTask.status) return;

      const columnTasks = tasks.filter((task) => task.status === activeTask.status);
      const oldIndex = columnTasks.findIndex((task) => task.id === taskId);
      const newIndex = columnTasks.findIndex((task) => task.id === overId);

      const newTasks = arrayMove(columnTasks, oldIndex, newIndex);
      setTasks([...tasks.filter((task) => task.status !== activeTask.status), ...newTasks]);
    }
  }

  return (
    <div className="p-4">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          {COLUMNS.map((column) => (
            <Column key={column.id} column={column} tasks={tasks.filter((task) => task.status === column.id)} />
          ))}
        </DndContext>
      </div>
    </div>
  );
}

function Column({ column, tasks }) {
  const { setNodeRef } = useDroppable({ id: column.id });

  return (
    <div ref={setNodeRef} className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <SortableContext items={tasks.map((task) => task.id)}>
        <div className="flex flex-1 flex-col gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
      style={style}
    >
      <h3 className="font-medium text-neutral-100">{task.title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{task.description}</p>
    </div>
  );
}

export default App;
