const colors = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-yellow-100 text-yellow-600",
  Low: "bg-green-100 text-green-600",
};

const PriorityBadge = ({ priority }) => {
  return (
    <span
      className={`text-[10px] px-2 py-0.5 rounded-full ${colors[priority]}`}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;