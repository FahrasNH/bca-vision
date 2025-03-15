import { ReactNode } from "react";
import Sidebar from "../organisms/Sidebar";

interface BaseTemplateProps {
  children: ReactNode;
}

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <main className="ml-80 max-w-[calc(100vw-340px)] flex-1">{children}</main>
    </div>
  );
};

export default BaseTemplate;
