import { useNavigate } from "react-router-dom";
import { LogoProps } from "./interface";

const Logo = ({ className = "" }: LogoProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      className={`${className} cursor-pointer mx-auto w-full`}
      onClick={handleClick}
    >
      <h1 className="flex justify-end md:justify-center items-center space-x-1">
        <img
          src="/images/v-icon.png"
          alt="BCA Vision Logo"
          className="w-7 h-7 rounded-full"
        />
        <div className="text-[#E2E2E2] text-2xl font-bold text-center">
          BCA<span className="font-normal">Vision</span>
        </div>
      </h1>
    </button>
  );
};

export default Logo;
