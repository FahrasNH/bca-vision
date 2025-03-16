import { Compass, GearSix, Heart, House, User } from "@phosphor-icons/react";
import { MenuGroup } from "./interface";
import { Logo } from "../../atoms";
import { NavLink } from "../../molecules";

const Sidebar = () => {
  const menuItems: MenuGroup[] = [
    {
      category: "Main",
      items: [
        {
          name: "Home",
          path: "/",
          icon: (isActive: boolean) => (
            <House size={24} color={isActive ? "#80D5CB" : "#c8ccdd"} />
          ),
        },
        {
          name: "Explore",
          path: "/explore",
          icon: (isActive: boolean) => (
            <Compass size={24} color={isActive ? "#80D5CB" : "#c8ccdd"} />
          ),
        },
        {
          name: "Favorites",
          path: "#",
          icon: (isActive: boolean) => (
            <Heart size={24} color={isActive ? "#80D5CB" : "#c8ccdd"} />
          ),
        },
      ],
    },
    {
      category: "Account",
      items: [
        {
          name: "Profile",
          path: "#",
          icon: (isActive: boolean) => (
            <User size={24} color={isActive ? "#80D5CB" : "#c8ccdd"} />
          ),
        },
        {
          name: "Settings",
          path: "#",
          icon: (isActive: boolean) => (
            <GearSix size={24} color={isActive ? "#80D5CB" : "#c8ccdd"} />
          ),
        },
      ],
    },
  ];

  return (
    <div className="bg-secondary w-64 min-h-[calc(100vh-4rem)] fixed left-8 top-8 p-6 rounded-3xl">
      <Logo className="mb-6" />
      <nav className="space-y-8">
        {menuItems.map((menuGroup) => (
          <div key={menuGroup.category}>
            <h3 className="text-gray-400 text-sm mb-4">{menuGroup.category}</h3>
            <div className="space-y-2">
              {menuGroup.items.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  icon={item.icon}
                  label={item.name}
                  className={item.path === "#" ? "cursor-not-allowed" : ""}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
