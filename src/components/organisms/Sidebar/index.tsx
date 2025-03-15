import { Compass, House } from "@phosphor-icons/react";
import NavLink from "../../molecules/NavLink";
import Logo from "../../atoms/Logo";

const Sidebar = () => {
  const menuItems = [
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
  ];

  return (
    <div className="bg-secondary w-64 min-h-[calc(100vh-4rem)] fixed left-8 top-8 p-6 rounded-3xl">
      <Logo className="mb-6" />
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            icon={item.icon}
            label={item.name}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
