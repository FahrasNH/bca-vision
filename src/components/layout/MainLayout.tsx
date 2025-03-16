import BaseTemplate from "../templates/BaseTemplate";
import { MainLayoutProps } from "./interface";

const MainLayout = ({ children }: MainLayoutProps) => {
  return <BaseTemplate>{children}</BaseTemplate>;
};

export default MainLayout;
