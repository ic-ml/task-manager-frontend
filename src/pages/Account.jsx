import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";
import PageWrapper from "../components/PageWrapper";

const Account = () => {
  const { user, logout } = useAuth();
  const { tasks } = useTasks();

  const activeCount = tasks.filter(
    (t) => t.status === "ACTIVE"
  ).length;

  const completedCount = tasks.filter(
    (t) => t.status === "COMPLETED"
  ).length;

  return (
    <PageWrapper>
    <div className="p-6 pb-24">
      <h1 className="text-xl font-bold mb-6">Account</h1>

      <div className="mb-6">
        <p className="font-semibold">{user?.name}</p>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 bg-gray-100 p-4 rounded-lg text-center">
          <p className="font-bold">{activeCount}</p>
          <p className="text-sm text-gray-500">Active</p>
        </div>

        <div className="flex-1 bg-gray-100 p-4 rounded-lg text-center">
          <p className="font-bold">{completedCount}</p>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
      </div>

      <button
        onClick={logout}
        className="w-full border py-3 rounded-lg text-red-500"
      >
        Logout
      </button>
    </div>
    </PageWrapper>
  );
};

export default Account;