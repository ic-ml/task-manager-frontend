import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Header from "../components/layout/Header";
import TaskSwitcher from "../components/TaskSwitcher";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";
import EmptyState from "../components/EmptyState";
import PageWrapper from "../components/PageWrapper";
import TaskFilters from "../components/TaskFilters";

const Home = () => {
  const [activeTab, setActiveTab] = useState("ACTIVE");
  const { tasks, loading } = useTasks();
const [search, setSearch] = useState("");
const [priority, setPriority] = useState("");
const [sort, setSort] = useState("");
    if (loading) {
    return (
      <PageWrapper>
        <p className="text-center mt-10 text-gray-400">
          Loading...
        </p>
      </PageWrapper>
    );
  }

  let filteredTasks = tasks.filter(
    (task) => task.status === activeTab
  );
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
  return (
    <PageWrapper>
    <div className="p-6 pb-24">
      <Header />
      <h1 className="text-lg font-bold mb-4">My Tasks</h1>
      <TaskSwitcher
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TaskFilters
        search={search}
        setSearch={setSearch}
        priority={priority}
        setPriority={setPriority}
        sort={sort}
        setSort={setSort}
      />
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
           <EmptyState text="No tasks here yet" />

        ) : (
          filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
    </PageWrapper>
  );
};

export default Home;