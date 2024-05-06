import { useState } from "react";
import Navbar from "../share/navbar/Navbar";
import Sidebar from "../share/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const [toggle, setToggle] = useState(false);

  const location = useLocation();

  const pathName1 = location.pathname.split("/")[1];
  const pathName2 = location.pathname.split("/")[1];
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
          <div className="bg-dark-blue-50 flex items-center justify-between mx-8 p-4 mb-4">
            <h1 className="uppercase font-bold">{pathName1}</h1>
            <div className="flex gap-1">
              <span>{pathName1}</span>/<span>{pathName2}</span>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
