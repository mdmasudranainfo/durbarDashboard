import { CiMenuBurger } from "react-icons/ci";
import logo from "../../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = ({ setToggle, toggle }) => {
  return (
    <div className="flex  items-center bg-dark-blue-50 relative ">
      {/* logo */}
      <div className="flex justify-between md:min-w-[250px]    items-center  border-r border-dotted">
        <div className="md:block  hidden">
          <Link to={"/"}>
            <img src={logo} className="w-full max-w-[120px]" alt="Logo" />
          </Link>
        </div>
        <CiMenuBurger
          onClick={() => setToggle(!toggle)}
          size={25}
          className="cursor-pointer ml-1 md:ml-0"
        />
      </div>

      <div className="flex md:justify-between justify-end w-full px-4">
        {/* search */}
        <div className="relative md:block hidden">
          <input
            type="text"
            className="bg-dark-blue-100 outline-none p-2 px-3 rounded-full"
          />
          <div className="absolute right-3 top-0 h-full flex items-center">
            <IoIosSearch className=" " size={20} />
          </div>
        </div>
        {/* notification and profile */}
        <div className="flex  items-center gap-7">
          {/* notification */}
          <div className="">
            <IoIosNotifications
              size={25}
              className="cursor-pointer text-primary"
            />
          </div>
          {/* profile */}
          <div className="flex items-center gap-1">
            <div className="">
              <img
                className="max-w-full w-10 border-2 border-primary rounded-full "
                src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
                alt=""
              />
            </div>
            <p className="md:block hidden">Md Masud Rana</p>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
