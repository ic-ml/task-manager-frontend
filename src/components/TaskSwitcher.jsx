import { motion } from "framer-motion";

const TaskSwitcher = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex bg-gray-100 rounded-xl p-1 mb-6 relative">
      {["ACTIVE", "COMPLETED"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-2 mx-3 text-sm font-medium z-10 ${
    activeTab === tab ? "bg-white" : "bg-gray-100"
  }`}
        >
          {tab}
        </button>
      ))}

     
    </div>
  );
};

export default TaskSwitcher;