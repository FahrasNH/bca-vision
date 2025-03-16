import {
  Compass,
  GearSix,
  Heart,
  House,
  User,
  List,
  X,
} from "@phosphor-icons/react";
import { MenuGroup } from "./interface";
import { Logo } from "../../atoms";
import { NavLink } from "../../molecules";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-5 left-4 z-50 p-2 bg-secondary rounded-lg"
      >
        {isOpen ? (
          <X size={24} color="#c8ccdd" />
        ) : (
          <List size={24} color="#c8ccdd" />
        )}
      </button>

      <div
        className={`
          fixed md:left-8 md:top-8
          ${isOpen ? "left-0 top-0" : "-left-full"}
          transition-all duration-300
          bg-secondary w-64 min-h-full md:min-h-[calc(100vh-4rem)] p-6 rounded-r-2xl md:rounded-3xl
          md:translate-x-0 z-40
        `}
      >
        <Logo className="mb-6" />
        <nav className="space-y-8">
          {menuItems.map((menuGroup) => (
            <div key={menuGroup.category}>
              <h3 className="text-gray-400 text-sm mb-4">
                {menuGroup.category}
              </h3>
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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
