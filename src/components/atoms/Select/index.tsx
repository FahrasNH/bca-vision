import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { SelectProps } from "./interface";

const Select = ({ options, className = "", value, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between px-6 py-3 bg-secondary text-white rounded-full outline-none focus:ring-2 focus:ring-primary/50 min-w-[150px] ${className}`}
      >
        <span>{selectedOption?.label ?? "Select option"}</span>
        <CaretDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          size={16}
          weight="bold"
          color="#FFFFFF"
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-secondary rounded-xl overflow-hidden shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              className="w-full px-6 py-3 text-left text-white hover:bg-primary/20 transition-colors"
              onClick={() => {
                onChange?.({ target: { value: option.value } } as any);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
