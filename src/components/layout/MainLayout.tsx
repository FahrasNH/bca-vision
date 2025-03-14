import { ReactNode } from "react";
import BaseTemplate from "../templates/BaseTemplate";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <BaseTemplate>{children}</BaseTemplate>;
};

export default MainLayout;
