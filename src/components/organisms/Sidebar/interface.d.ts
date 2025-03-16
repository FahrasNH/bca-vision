export interface MenuItem {
  name: string;
  path: string;
  icon: (isActive: boolean) => React.ReactNode;
}

export interface MenuGroup {
  category: string;
  items: MenuItem[];
}