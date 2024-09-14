import React, { useState } from 'react';
import '../styles.css';

const ConclusionPage = ({ onNavigate }) => {
  const [comment, setComment] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    alert('Comentário e arquivo enviados!');
    onNavigate('final'); // Navega para a página final após o envio
  };

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
    <div className="container">
      <aside className="sidebar">
        <img src="images/logo.png" alt="CheckList" />
        <a href="#" className="menu-item" onClick={handleHomeClick}>Home</a>
        <a href="#" className="menu-item report-btn" onClick={handleReportClick}>Gerar Relatório</a>
        <a href="#" className="logout" onClick={handleLogoutClick}>Log out</a>
      </aside>
      <main className="content">
        <div className="content-header">
          <h2>Conclusão</h2>
          <img src="images/default.avatar.jpg" alt="Usuário" />
        </div>
        <section className="form-section">
          <h3>Comentários Finais</h3>
          <div className="textarea-container">
            <textarea 
              placeholder="Digite seus comentários aqui..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="button-group">
              <label className="form-button attach-btn">
                <img src="images/anexar button.png" alt="Anexar" /> Anexar
                <input 
                  type="file" 
                  style={{ display: 'none' }} 
                  onChange={handleFileChange} 
                />
              </label>
              <button 
                className="form-button"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ConclusionPage;
