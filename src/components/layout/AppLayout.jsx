import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default AppLayout;