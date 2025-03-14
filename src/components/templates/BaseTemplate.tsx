import { ReactNode } from "react";
import Sidebar from "../organisms/Sidebar";

interface BaseTemplateProps {
  children: ReactNode;
}

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-[296px] flex-1">{children}</main>
    </div>
  );
};

export default BaseTemplate;