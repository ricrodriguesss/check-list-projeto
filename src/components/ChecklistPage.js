import Checklist from "./Checklist";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function ChecklistPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState([]);
  const [files, setFiles] = useState([]);

  const handleResponseUpdate = (index, response) => {
    const newResponses = [...responses];
    newResponses[currentPage] = newResponses[currentPage] || [];
    newResponses[currentPage][index] = {
      ...newResponses[currentPage][index],
      ...response,
    };
    setResponses(newResponses);
  };

  const handleFileChange = (index, selectedFiles) => {
    const newFiles = [...files];
    newFiles[currentPage] = newFiles[currentPage] || [];
    newFiles[currentPage][index] = [
      ...(newFiles[currentPage][index] || []),
      ...selectedFiles,
    ];
    setFiles(newFiles);
  };

  const handleFileRemove = (itemIndex, fileIndex) => {
    const newFiles = [...files];
    newFiles[currentPage][itemIndex].splice(fileIndex, 1);
    setFiles(newFiles);
  };

  return (
    <div className="relative flex h-screen overflow-hidden">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-72" : "ml-0"} md:ml-72`}
      >
        <div className="flex flex-col flex-1">
          <Header texto={"Relatório | Identificação"} userName="John Doe" />
          <Content>
            <Checklist
              currentPage={currentPage}
              onNavigate={setCurrentPage}
              responses={responses}
              onResponseUpdate={handleResponseUpdate}
              files={files}
              onFileChange={handleFileChange}
              onFileRemove={handleFileRemove}
            />
          </Content>
        </div>
      </div>
    </div>
  );
}
