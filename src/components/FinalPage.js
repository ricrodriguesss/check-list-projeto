import React from 'react';
import '../styles.css';

const FinalPage = ({ onNavigate }) => {
  
  const handleHomeClick = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link
    onNavigate('home'); 
  };

  const handleReportClick = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link
    onNavigate('template-selection'); 
  };

  const handleLogoutClick = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link
    onNavigate('login'); 
  };

  return (
    <div className="container final-page">
      <aside className="sidebar">
        <img src="images/logo.png" alt="CheckList" />
        <a href="#" className="menu-item" onClick={handleHomeClick}>Home</a>
        <a href="#" className="menu-item report-btn" onClick={handleReportClick}>Gerar Relatório</a>
        <a href="#" className="logout" onClick={handleLogoutClick}>Log out</a>
      </aside>
      <main className="content">
        <div className="content-header">
          <h2>Relatório Final</h2>
        </div>
        <section className="form-section">
          <h3>Foto do Relatório Concluído</h3>
          <img src="images/report-photo.png" alt="Relatório Concluído" />
        </section>
      </main>
    </div>
  );
};

export default FinalPage;
