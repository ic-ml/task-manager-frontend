import api from "./axios";

export const fetchTasks = async () => {
  const { data } = await api.get("/tasks");
  return data;
};

export const createTask = async (task) => {
  const { data } = await api.post("/tasks", task);
  return data;
};

export const updateTask = async (id, updates) => {
  const { data } = await api.put(`/tasks/${id}`, updates);
  return data;
};

export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};