export interface NavLinkProps {
  to: string;
  icon: (isActive: boolean) => React.ReactNode;
  label: string;
  className: string;
}