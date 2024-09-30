import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import NewReport from "./NewReport";

export default function TemplateSelectionPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen overflow-hidden">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-72" : "ml-0"
        } md:ml-72`}
      >
        <div className="flex flex-col flex-1">
          <Header texto={"Relatório | Identificação"} userName="John Doe" />

          <Content>
            <NewReport />
          </Content>
        </div>
      </div>
    </div>
  );
}
