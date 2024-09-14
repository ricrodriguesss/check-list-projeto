import React, { useState } from 'react';
import HomePage from './components/HomePage';
import TemplateSelectionPage from './components/TemplateSelectionPage';
import GerarRelatorio from './components/GerarRelatorio';
import ChecklistPage from './components/ChecklistPage';
import ConclusionPage from './components/ConclusionPage';
import FinalPage from './components/FinalPage';
import LoginPage from './components/LoginPage'; 

const App = () => {
  const [page, setPage] = useState('login'); 
  const [currentPage, setCurrentPage] = useState(0);

  const handleNavigate = (nextPage) => {
    if (typeof nextPage === 'number') {
      setCurrentPage(nextPage);
      setPage('checklist');
    } else {
      setPage(nextPage);
    }
  };

  const handleLogin = () => {
    setPage('home');
  };

  return (
    <div className="App">
      {page === 'login' && <LoginPage onLogin={handleLogin} />}
      {page === 'home' && <HomePage onNavigate={handleNavigate} />}
      {page === 'template-selection' && <TemplateSelectionPage onNavigate={handleNavigate} />}
      {page === 'gerar-relatorio' && <GerarRelatorio onNavigate={handleNavigate} />}
      {page === 'checklist' && <ChecklistPage currentPage={currentPage} onNavigate={handleNavigate} />}
      {page === 'conclusion' && <ConclusionPage onNavigate={() => handleNavigate('final')} />}
      {page === 'final' && <FinalPage onNavigate={handleNavigate} />}
    </div>
  );
};

export default App;

