import { useTasks } from "../context/TaskContext";
import { useDraggable } from "@dnd-kit/core";

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
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    }
  : undefined;
  return (
    <div ref={setNodeRef}
  style={style}
  {...listeners}
  {...attributes}
      
      className={`shadow-xl bg-white p-4 rounded-xl shadow-sm cursor-pointer ${priorityColors[task.priority]}`}
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
      <div className="my-3 font-bold" onClick={() => toggleTaskStatus(task._id)}>{`${
          task.status === "COMPLETED"
            ? "Return to Active"
            : "Mark as done"
        }`}</div>
    </div>
  );
};

export default TaskCard;