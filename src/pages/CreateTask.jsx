import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import PageWrapper from "../components/PageWrapper";

const CreateTask = () => {
  const navigate = useNavigate();
  const { addTask } = useTasks();

  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    status: "ACTIVE",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.title || !form.dueDate) {
      alert("Title and due date are required");
      return;
    }

    addTask(form);
    navigate("/home");
  };

  return (
     <PageWrapper>
    <div className="p-6 pb-24">
      <h1 className="text-xl font-bold mb-6">Create new task</h1>

      <div className="space-y-4">
        <input
          name="title"
          className="w-full border p-3 rounded-lg"
          placeholder="Task title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          className="w-full border p-3 rounded-lg"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dueDate"
          className="w-full border p-3 rounded-lg"
          value={form.dueDate}
          onChange={handleChange}
        />

        <select
          name="priority"
          className="w-full border p-3 rounded-lg"
          value={form.priority}
          onChange={handleChange}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          name="status"
          className="w-full border p-3 rounded-lg"
          value={form.status}
          onChange={handleChange}
        >
          <option value="ACTIVE">To Do</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex-1 border py-3 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg"
        >
          Create
        </button>
      </div>
    </div>
    </PageWrapper>
  );
};

export default CreateTask;