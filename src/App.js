import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import TemplateSelectionPage from "./components/TemplateSelectionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/selecionar-template" element={<TemplateSelectionPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
