import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  icon: (isActive: boolean) => React.ReactNode;
  label: string;
  className: string;
}

const NavLink = ({ to, icon, label, className }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${className} flex items-center py-3 rounded-lg px-2 hover:bg-primary/40 transition-colors ${
        isActive ? "text-[#80D5CB]" : "text-[#c8ccdd]"
      }`}
    >
      <span className="mr-3">{icon(isActive)}</span>
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
