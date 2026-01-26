import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
    const [name, setName] = useState("");

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async () => {
    if (!name || !email || !password) return;

    try {
      await register(name, email, password);
      navigate("/home");
    } catch (error) {
      alert("Registration failed");
    }
  };

   return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Sign Up</h1>

      <input
        className="w-full border p-3 rounded-lg mb-4"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;