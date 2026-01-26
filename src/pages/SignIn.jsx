import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async () => {
    if (!email || !password) return;

    try {
      await login(email, password);
      navigate("/home");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Sign In</h1>

      <input
        className="w-full border p-3 rounded-lg mb-4"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     <input
        type="password"
        className="w-full border p-3 rounded-lg mb-6"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-3 rounded-lg"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;