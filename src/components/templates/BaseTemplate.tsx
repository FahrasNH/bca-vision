import Sidebar from "../organisms/Sidebar";
import { BaseTemplateProps } from "./interface";

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <main className="w-full px-0 md:ml-80 md:max-w-[calc(100vw-340px)] flex-1">
        {children}
      </main>
    </div>
  );
};

export default BaseTemplate;
