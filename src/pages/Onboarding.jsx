import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6">
      
      {/* Image placeholder */}
      <div className="flex-1 flex items-center">
        <div className="w-64 h-64 bg-gray-200 rounded-xl flex items-center justify-center">
         <img className="w-full h-full" src="../assets/task.jpg"/>
        </div>
      </div>

      {/* Text */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">
          Manage your tasks
        </h1>
        <p className="text-gray-500">
          Organize your daily tasks easily and efficiently
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full space-y-4">
        <button
          onClick={() => navigate("/signin")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
        >
          Sign In
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Onboarding;