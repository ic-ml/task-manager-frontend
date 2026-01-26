import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center mb-6 pb-4 border-b border-solid border-gray-900">
      <div>
        <p className="text-black-500 text-md font-bold ml-10">Hello!</p>
        <h1 className="text-xl font-bold ml-10">{user?.name}</h1>
      </div>

      <button className="w-10 h-10 bg-white flex items-center justify-center">
        🔔
      </button>
    </div>
  );
};

export default Header;