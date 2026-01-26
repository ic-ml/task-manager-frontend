import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Header from "../components/layout/Header";
import TaskSwitcher from "../components/TaskSwitcher";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";
import EmptyState from "../components/EmptyState";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  const [activeTab, setActiveTab] = useState("ACTIVE");
  const { tasks, loading } = useTasks();

    if (loading) {
    return (
      <PageWrapper>
        <p className="text-center mt-10 text-gray-400">
          Loading...
        </p>
      </PageWrapper>
    );
  }

  const filteredTasks = tasks.filter(
    (task) => task.status === activeTab
  );

  return (
    <PageWrapper>
    <div className="p-6 pb-24">
      <Header />
      <h1 className="text-lg font-bold mb-4">My Tasks</h1>
      <TaskSwitcher
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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