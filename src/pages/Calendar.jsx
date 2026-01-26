import { useTasks } from "../context/TaskContext";
import { getDaysInMonth, getFirstDayOfMonth } from "../utils/calendar";
import PriorityBadge from "../components/PriorityBadge";
import PageWrapper from "../components/PageWrapper";

const Calendar = () => {
  const { tasks } = useTasks();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const monthName = today.toLocaleString("default", { month: "long" });

  const getTasksForDay = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    return tasks.filter((task) => task.dueDate === dateStr);
  };

  return (
    <PageWrapper>
    <div className="p-6 pb-24">
      <h1 className="text-xl font-bold mb-4">
        {monthName} {year}
      </h1>

      {/* Days of week */}
      <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells before first day */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {daysArray.map((day) => {
          const dayTasks = getTasksForDay(day);

          return (
            <div
              key={day}
              className="border rounded-lg p-1 min-h-[70px]"
            >
              <p className="text-xs font-semibold mb-1">{day}</p>

              <div className="space-y-1">
                {dayTasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-gray-100 rounded p-1"
                  >
                    <p className="text-[10px] truncate">
                      {task.title}
                    </p>
                    <PriorityBadge priority={task.priority} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </PageWrapper>
  );
};

export default Calendar;