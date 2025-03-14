import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  icon: (isActive: boolean) => React.ReactNode;
  label: string;
}

const NavLink = ({ to, icon, label }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center py-3 rounded-lg hover:bg-primary transition-colors ${
        isActive ? "text-[#80D5CB]" : "text-[#c8ccdd]"
      }`}
    >
      <span className="mr-3">{icon(isActive)}</span>
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
