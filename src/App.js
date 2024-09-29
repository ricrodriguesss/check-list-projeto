import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import TemplateSelectionPage from "./components/TemplateSelectionPage";
import ChecklistPage from "./components/ChecklistPage";
import NewReport from './components/NewReport';
import ConclusionPage from "./components/ConclusionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/selecionar-template" element={<TemplateSelectionPage/>} />
        <Route path="/novo-relatorio" element={<NewReport/>} />
        <Route path="/relatorio-andamento" element={<ChecklistPage/>} />
        <Route path="/relatorio-conclusao" element={<ConclusionPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
