import { ChangeEvent } from "react";

export interface HeaderProps {
  category: string;
  searchQuery: string;
  categoryOptions: Array<{
    value: string;
    label: string;
  }>;
  onCategoryChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}