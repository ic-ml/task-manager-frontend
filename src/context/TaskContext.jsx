import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchTasks,
  createTask as createTaskAPI,
  updateTask as updateTaskAPI,
} from "../api/taskService";
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadTasks = async () => {
    setLoading(true);
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  };
  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (task) => {
    const newTask = await createTaskAPI(task);
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTaskStatus = async (id) => {
    const task = tasks.find((t) => t._id === id);
    const updated = await updateTaskAPI(id, {
      status: task.status === "ACTIVE" ? "COMPLETED" : "ACTIVE",
    });

    setTasks((prev) =>
      prev.map((t) => (t._id === id ? updated : t))
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskStatus, loading }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);