import { useState } from "react";
import Navbar from "../share/navbar/Navbar";
import Sidebar from "../share/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar setToggle={setToggle} toggle={toggle} />
      <div className=" flex  mt-4 gap-4   ">
        {/* sidebar */}
        <div className={`relative`}>
          <div
            className={`${
              toggle ? "w-[250px]" : "md:w-[250px] w-0"
            }    h-[90vh] sidebarScroll overflow-y-auto absolute md:static duration-500   bg-dark-blue-50`}
          >
            <Sidebar />
          </div>
        </div>

        {/* content */}
        <div className=" w-full overflow-y-auto h-[90vh] sidebarScroll  ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
