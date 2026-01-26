import { useTasks } from "../context/TaskContext";
const priorityColors = {
  High: "border-l-4 border-red-500",
  Medium: "border-l-4 border-yellow-400",
  Low: "border-l-4 border-green-500",
};
const TaskCard = ({ task }) => {
  const { toggleTaskStatus } = useTasks();

  return (
    <div
      
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