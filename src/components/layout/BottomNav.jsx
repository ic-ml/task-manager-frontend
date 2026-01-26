import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItemClass = ({ isActive }) =>
  `flex flex-col items-center text-xs ${
    isActive ? "text-blue-600" : "text-gray-400"
  }`;

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full max-w-[375px] bg-white border-t flex justify-around py-2">
      
      <NavLink to="/home" className={navItemClass}>
        <span className="text-xl">🏠</span>
        Home
      </NavLink>

      <NavLink to="/calendar" className={navItemClass}>
        <span className="text-xl">📅</span>
        Calendar
      </NavLink>

      <NavLink
        to="/create"
        className="flex flex-col items-center -mt-6 border-4 border-blue-300 rounded-full box-border"
      >
        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-4xl shadow-lg">
          +
        </div>
      </NavLink>
 <NavLink to="/" className={navItemClass}>
        <span className="text-xl">👤</span>
        Chat
      </NavLink>
      <NavLink to="/account" className={navItemClass}>
        <span className="text-xl">👤</span>
        Account
      </NavLink>
    </nav>
    
  );
};

export default BottomNav;