import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReportProvider } from "../contexts/ReportContext";
import NewReportPage from "../components/NewReportPage";
import TemplateSelectionPage from "../components/TemplateSelectionPage";
import ChecklistPage from "../components/ChecklistPage";
import ConclusionPage from "../components/ConclusionPage";
import FinalPage from "../components/FinalPage";

const ReportRoutes = () => {
  return (
    <ReportProvider>
        <Routes>
            <Route path="/novo-relatorio" element={<NewReportPage />} />
            <Route path="/selecionar-template" element={<TemplateSelectionPage />} />
            <Route path="/relatorio-andamento" element={<ChecklistPage />} />
            <Route path="/relatorio-conclusao" element={<ConclusionPage />} />
            <Route path="/relatorio-final" element={<FinalPage />} />
        </Routes>
    </ReportProvider>
  );
};

export default ReportRoutes;
