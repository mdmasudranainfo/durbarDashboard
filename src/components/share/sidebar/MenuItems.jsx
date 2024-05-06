import { useState } from "react";
import { Collapse } from "react-collapse";
import { NavLink, useLocation } from "react-router-dom";
import * as Ic from "lucide-react";

const MenuItems = ({ item }) => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const IconComponent = item.icon && Ic[item.icon];

  const pathName = location.pathname.split("/")[1];

  return (
    <div className="py-2 cursor-pointer  ">
      {!item?.submenu?.length ? (
        <NavLink
          className={`flex items-center pl-3  ${
            pathName == item?.path && "text-primary bg-dark-blue-100 border-l-2"
          }`}
          to={item.path}
        >
          {IconComponent && (
            <IconComponent
              className={`w-4 h-4 ${
                pathName == item?.path ? "text-primary" : "opacity-0"
              }`}
            />
          )}
          <p
            className={`hover:text-primary px-4 p-2  ${
              pathName == item?.path && "text-primary  "
            }
`}
            onClick={() => setActive(!active)}
          >
            {item.title}
          </p>
        </NavLink>
      ) : (
        <div
          className={`flex items-center pl-3  ${
            pathName == item?.path && "text-primary bg-dark-blue-100 border-l-2"
          }`}
        >
          {IconComponent && (
            <IconComponent
              className={`w-4 h-4 ${
                pathName == item?.path ? "text-primary" : "opacity-0"
              }`}
            />
          )}
          <p
            className={`hover:text-primary  p-2  `}
            onClick={() => setActive(!active)}
          >
            {item.title}
          </p>
        </div>
      )}

      <Collapse isOpened={active}>
        <div className={`pl-8`}>
          {item?.submenu?.map((sumItem, i) => {
            return (
              <NavLink to={`${item?.path}${sumItem.path}`} key={i}>
                <p className="py-3 hover:text-primary">- {sumItem.title}</p>
              </NavLink>
            );
          })}
        </div>
      </Collapse>
    </div>
  );
};

export default MenuItems;
