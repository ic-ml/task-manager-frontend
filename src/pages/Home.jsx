import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Header from "../components/layout/Header";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";
import EmptyState from "../components/EmptyState";
import PageWrapper from "../components/PageWrapper";
import TaskFilters from "../components/TaskFilters";
import { DndContext, PointerSensor,useSensor,useSensors,useDroppable } from "@dnd-kit/core";
const DroppableColumn = ({ id, children }) => {
  const { setNodeRef } = useDroppable({ id });

 return (
  <div
    ref={setNodeRef}
    className="min-h-[200px] rounded-xl border border-dashed border-gray-300 p-3"
  >
    {children}
  </div>
);
};
const Home = () => {
  const { tasks, loading, updateTask } = useTasks();
const [search, setSearch] = useState("");
const [priority, setPriority] = useState("");
const [sort, setSort] = useState("");

 const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: {
      distance: 8,
    },
  })
);
    const handleDragEnd = async (event) => {
      const { active, over } = event;

      if (!over) return;

      const taskId = active.id;
      const newStatus = over.id;

      if (newStatus !== "ACTIVE" && newStatus !== "COMPLETED") return;

      const task = tasks.find((t) => t._id === taskId);
      if (!task) return;

      if (task.status === newStatus) return;

      try {
        await updateTask(taskId, { status: newStatus });
      } catch (err) {
        console.error(err);
      }
    };
    if (loading) {
    return (
      <PageWrapper>
        <p className="text-center mt-10 text-gray-400">
          Loading...
        </p>
      </PageWrapper>
    );
  }

  let filteredTasks = tasks;

  if (search) {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (priority) {
    filteredTasks = filteredTasks.filter(
      (task) => task.priority === priority
    );
  }
  if (sort === "date-asc") {
    filteredTasks = [...filteredTasks].sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );
  }



  if (sort === "date-desc") {
    filteredTasks = [...filteredTasks].sort(
      (a, b) => new Date(b.dueDate) - new Date(a.dueDate)
    );
  }

    
    const activeTasks = filteredTasks.filter(
      (task) => task.status === "ACTIVE"
    );

    const completedTasks = filteredTasks.filter(
      (task) => task.status === "COMPLETED"
    );
   
  return (
    <PageWrapper>
<DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="p-6 pb-24">
      <Header />
      <h1 className="text-lg font-bold mb-4">My Tasks</h1>
     
      <TaskFilters
        search={search}
        setSearch={setSearch}
        priority={priority}
        setPriority={setPriority}
        sort={sort}
        setSort={setSort}
      />
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

  {/* ACTIVE */}
  <div>
    <h2 className="text-sm font-semibold mb-3 text-gray-500">
      Active
    </h2>

    <DroppableColumn id="ACTIVE">

      {activeTasks.length === 0 ? (
        <EmptyState text="No active tasks" />
      ) : (
        activeTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))
      )}

    </DroppableColumn>
  </div>

  {/* COMPLETED */}
  <div>
    <h2 className="text-sm font-semibold mb-3 text-gray-500">
      Completed
    </h2>

    <DroppableColumn id="COMPLETED">

      {completedTasks.length === 0 ? (
        <EmptyState text="No completed tasks" />
      ) : (
        completedTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))
      )}

    </DroppableColumn>
  </div>

</div>
    </div>
    </DndContext>
    </PageWrapper>
  );
};

export default Home;