import { SelectHTMLAttributes } from "react";
import { CaretDown } from "@phosphor-icons/react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

const Select = ({ options, className = "", ...props }: SelectProps) => {
  return (
    <div className="relative">
      <select
        className={`px-6 py-3 bg-secondary text-white rounded-full outline-none focus:ring-2 focus:ring-primary/50 pr-10 appearance-none cursor-pointer ${className}`}
        {...props}
      >
        {(options || []).map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <CaretDown
        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
        size={16}
        weight="bold"
        color="#FFFFFF"
      />
    </div>
  );
};

export default Select;
