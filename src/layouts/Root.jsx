import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Root() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="md:w-5/6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
