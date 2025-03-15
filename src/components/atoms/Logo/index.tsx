interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={className}>
      <h1 className="text-[#E2E2E2] text-2xl font-bold text-center">
        BCA<span className="font-normal">Vision</span>
      </h1>
    </div>
  );
};

export default Logo;
