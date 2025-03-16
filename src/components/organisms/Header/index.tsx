import { Bell, MagnifyingGlass } from "@phosphor-icons/react";
import { Select } from "../../atoms";
import { HeaderProps } from "./interface";

const Header = ({
  category,
  searchQuery,
  categoryOptions,
  onCategoryChange,
  onSearchChange,
}: HeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 space-y-3 md:space-y-0 md:space-x-3">
      <div className="flex w-full md:w-auto items-center justify-end gap-2 mb-3 md:mb-0">
        <div className="flex md:hidden items-center gap-2">
          <div className="bg-secondary p-3 rounded-full cursor-not-allowed">
            <Bell size={18} weight="bold" color="#FFFFFF" />
          </div>
          <div className="bg-secondary rounded-full p-1 cursor-not-allowed">
            <img
              src="/images/kill_av.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full gap-2 !ml-0">
        <div className="w-1/2 md:w-auto text-sm md:text-base">
          <Select
            options={categoryOptions}
            value={category}
            onChange={onCategoryChange}
            className="w-full"
          />
        </div>

        <div className="relative w-1/2 md:w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={onSearchChange}
            className="w-full px-4 md:px-6 py-2.5 md:py-3 bg-secondary text-white rounded-full outline-none focus:ring-2 focus:ring-primary/50 pr-10 md:pr-12 text-sm md:text-base"
          />
          <MagnifyingGlass
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2"
            size={18}
            weight="bold"
            color="#FFFFFF"
          />
        </div>
      </div>

      <div className="hidden md:block bg-secondary p-[14px] rounded-full cursor-not-allowed">
        <Bell size={20} weight="bold" color="#FFFFFF" />
      </div>

      <div className="hidden md:flex items-center bg-secondary rounded-full p-1 cursor-not-allowed">
        <img
          src="/images/kill_av.jpg"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col justify-start ml-2 mr-3">
          <span className="text-white text-sm font-medium">Fahras</span>
          <span className="text-gray-400 text-xs">Author</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
