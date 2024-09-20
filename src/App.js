import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import TemplateSelectionPage from "./components/TemplateSelectionPage";
import ChecklistPage from "./components/ChecklistPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/selecionar-template" element={<TemplateSelectionPage/>} />
        <Route path="/relatorio-andamento" element={<ChecklistPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
