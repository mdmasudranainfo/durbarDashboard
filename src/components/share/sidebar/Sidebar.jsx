import { menuItems } from "../../../lib/menuItems";
import MenuItem from "./MenuItems";

const Sidebar = () => {
  return (
    <div className="p-2 ">
      {menuItems?.map((menuItem, i) => {
        return (
          <>
            <p key={i} className="text-primary  uppercase">
              {menuItem?.title}
            </p>
            <div className="">
              {menuItem?.menus?.map((item, index) => {
                return <MenuItem key={index} item={item} />;
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Sidebar;
