import React, { useState, useEffect } from 'react';
import checklistData from '../data'; 
import '../styles.css'; 

const ChecklistPage = ({ currentPage, onNavigate }) => {
  const [responses, setResponses] = useState([]);
  const [files, setFiles] = useState([]);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    if (checklistData[currentPage]) {
      setPage(currentPage);
      setResponses(Array(checklistData[currentPage].length).fill(null));
      setFiles(Array(checklistData[currentPage].length).fill(null));
    }
  }, [currentPage]);

  const handleResponse = (index, response) => {
    const newResponses = [...responses];
    newResponses[index] = response;
    setResponses(newResponses);
  };

  const handleFileChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files[0];
    setFiles(newFiles);
  };

  const handleNextPage = () => {
    if (page < checklistData.length - 1) {
      setPage(page + 1);
      onNavigate(page + 1);
    } else {
      console.error('Página não encontrada ou final da lista.');
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
      onNavigate(page - 1);
    }
  };

  const handleFinalPageNavigation = () => {
    onNavigate('conclusion'); 
  };

  const handleHomeClick = () => {
    onNavigate('home'); 
  };

  const handleReportClick = () => {
    onNavigate('template-selection'); 
  };

  const handleLogoutClick = () => {
    onNavigate('login'); 
  };

  if (!checklistData[page]) {
    return <div>Loading...</div>;
  }

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
          <h2>Relatório | Andamento</h2>
          <img src="images/default.avatar.jpg" alt="Usuário" />
        </div>
        <section className="form-section">
          <h3>Serviços de Alimentação - RDC 216/04 da ANVISA</h3>
          {checklistData[page].map((item, index) => (
            <div className="form-group" key={index}>
              <label>{item}</label>
              <div className="textarea-container">
                <textarea placeholder="Comentários"></textarea>
                <div className="button-group">
                  <label className="form-button attach-btn">
                    <img src="images/anexar button.png" alt="Anexar" /> Anexar
                    <input 
                      type="file" 
                      style={{ display: 'none' }} 
                      onChange={(e) => handleFileChange(index, e)} 
                    />
                  </label>
                  <div className="yes-no-buttons">
                    <button 
                      className={`yes-btn ${responses[index] === 'yes' ? 'selected' : ''}`} 
                      aria-label="Certo"
                      onClick={() => handleResponse(index, 'yes')}
                    >
                      <img src="images/Thumbs Up.png" alt="Certo" />
                    </button>
                    <button 
                      className={`no-btn ${responses[index] === 'no' ? 'selected' : ''}`} 
                      aria-label="Errado"
                      onClick={() => handleResponse(index, 'no')}
                    >
                      <img src="images/Thumbs Down.png" alt="Errado" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="action-buttons">
            {page === checklistData.length - 1 ? (
              <button 
                className="action-button"
                onClick={handleFinalPageNavigation}
              >
                Concluir
              </button>
            ) : (
              <>
                <button 
                  className="action-button back-btn" 
                  onClick={handlePreviousPage} 
                  disabled={page === 0}
                >
                  &lt; <span>Retornar</span> 
                </button>
                <button 
                  className="action-button" 
                  onClick={handleNextPage} 
                  disabled={page === checklistData.length - 1}
                >
                  <span>Avançar</span> &gt;
                </button>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChecklistPage;
