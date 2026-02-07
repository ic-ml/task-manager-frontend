import { useTasks } from "../context/TaskContext";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const priorityColors = {
  High: "border-l-4 border-red-500",
  Medium: "border-l-4 border-yellow-400",
  Low: "border-l-4 border-green-500",
};
const TaskCard = ({ task }) => {
  const { toggleTaskStatus } = useTasks();
const { attributes, listeners, setNodeRef, transform } =
  useDraggable({
    id: task._id,
  });

const style = transform
  ? {
  transform: CSS.Translate.toString(transform),
    }
  : undefined;
  return (
    <div ref={setNodeRef}
  style={style}
 
      
      className={`shadow-xl mb-4 bg-white p-4 rounded-xl shadow-sm cursor-pointer ${priorityColors[task.priority]}`}
    >
      <h3
        className={`font-semibold ${
          task.status === "COMPLETED"
            ? "line-through text-gray-400"
            : ""
        }`}
      >
        {task.title}
      </h3>

      <p className="text-sm text-gray-500">
        {task.dueDate} • {task.priority}
      </p>
      <div className="my-3 font-bold" >{`${
          task.status === "COMPLETED"
            ? "Return to Active"
            : "Mark as done"
        }`}</div>
        <button
  className="cursor-grab active:cursor-grabbing p-1 text-gray-400"
  {...listeners}
  {...attributes}
>
  ☰
</button>
    </div>
  );
};

export default TaskCard;