import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import TemplateSelectionPage from "./components/TemplateSelectionPage";
import ChecklistPage from "./components/ChecklistPage";
import NewReportPage from "./components/NewReportPage";
import ConclusionPage from "./components/ConclusionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/novo-relatorio" element={<NewReportPage />} />
        <Route
          path="/selecionar-template"
          element={<TemplateSelectionPage />}
        />
        <Route path="/relatorio-andamento" element={<ChecklistPage />} />
        <Route path="/relatorio-conclusao" element={<ConclusionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
