import React from 'react';
import './TemplateSelectionPage.css';

const TemplateSelectionPage = ({ onNavigate }) => {
  const handleTemplateClick = (templateName) => {
    if (templateName === 'Serviços de Alimentação - RDC 216/04 da ANVISA') {
      onNavigate('gerar-relatorio');
    }
  };

  const handleHomeClick = () => {
    onNavigate('home'); // Navega para a página Home
  };

  const handleLogoutClick = () => {
    onNavigate('login'); // Navega para a página de login
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <img src="images/logo.png" alt="Logo" />
        <a href="#" className="menu-item" onClick={handleHomeClick}>Home</a>
        <a href="#" className="menu-item report-btn">Gerar Relatório</a>
        <a href="#" className="logout" onClick={handleLogoutClick}>Log out</a>
      </aside>
      <main className="content">
        <div className="content-header">
          <h2>Relatório | Templates</h2>
          <img className="profile" src="images/default.avatar.jpg" alt="Usuário" />
        </div>
        <section className="form-section">
          <h3>Selecione um Template</h3>
          <div className="template-list">
            <p><a href="#" onClick={() => handleTemplateClick('Ex.: Edificação, Instalações, Equipamentos, Móveis e Utensílios')}>Ex.: Edificação, Instalações, Equipamentos, Móveis e Utensílios</a></p>
            <p><a href="#" onClick={() => handleTemplateClick('Serviços de Alimentação - RDC 216/04 da ANVISA')}>Serviços de Alimentação - RDC 216/04 da ANVISA</a></p>
            <p><a href="#" onClick={() => handleTemplateClick('Ex.: Edificação, Instalações, Equipamentos, Móveis e Utensílios')}>Ex.: Edificação, Instalações, Equipamentos, Móveis e Utensílios</a></p>
            <p><a href="#" onClick={() => handleTemplateClick('Ex.: Edificação, Instalações, Equipamentos, Móveis e Utensílios')}>Ex.: Edificação, Instalações, Equipamentos, Móveis e Utensílios</a></p>
            <p><a href="#" onClick={() => handleTemplateClick('Ex.: Edificação, Instalações, Equipamentos, Móveis e Utensílios')}>Ex.: Edificação, Instalações, Equipamentos, Móveis e Utensílios</a></p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TemplateSelectionPage;
