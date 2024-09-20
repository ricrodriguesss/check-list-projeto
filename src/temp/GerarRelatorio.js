// import React from "react";
// import "../styles.css";

// const GerarRelatorio = ({ onNavigate }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (typeof onNavigate === "function") {
//       onNavigate("checklist"); // Navega para a página ChecklistPage ao submeter o formulário
//     } else {
//       console.error("onNavigate is not a function");
//     }
//   };

//   const handleHomeClick = () => {
//     onNavigate("home"); // Navega para a página HomePage
//   };

//   const handleGenerateReportClick = () => {
//     onNavigate("template-selection"); // Navega para a página TemplateSelectionPage
//   };

//   const handleLogoutClick = () => {
//     onNavigate("login"); // Navega para a página LoginPage
//   };

//   return (
//     <div className="container">
//       <aside className="sidebar">
//         <img src="images/logo.png" alt="CheckList" />
//         <a href="#" className="menu-item" onClick={handleHomeClick}>
//           Home
//         </a>
//         <a
//           href="#"
//           className="menu-item report-btn"
//           onClick={handleGenerateReportClick}
//         >
//           Gerar Relatório
//         </a>
//         <a href="#" className="logout" onClick={handleLogoutClick}>
//           Log out
//         </a>
//       </aside>
//       <main className="content">
//         <div className="content-header">
//           <h2>Relatório | Identificação</h2>
//           <img src="images/default.avatar.jpg" alt="Usuário" />
//         </div>
//         <section className="form-section">
//           <h3>Serviços de Alimentação - RDC 216/04 da ANVISA</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="nomeFantasia">Nome Fantasia da Empresa:</label>
//               <input
//                 type="text"
//                 id="nomeFantasia"
//                 name="nomeFantasia"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="endereco">Endereço:</label>
//               <input type="text" id="endereco" name="endereco" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="dataConsulta">Data da Consulta:</label>
//               <input
//                 type="date"
//                 id="dataConsulta"
//                 name="dataConsulta"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="responsavelOperacional">
//                 Responsável Operacional:
//               </label>
//               <input
//                 type="text"
//                 id="responsavelOperacional"
//                 name="responsavelOperacional"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="consultorTecnico">Consultor Técnico:</label>
//               <input
//                 type="text"
//                 id="consultorTecnico"
//                 name="consultorTecnico"
//                 required
//               />
//             </div>
//             <div className="action-buttons">
//               <button className="form-button" type="submit">
//                 Iniciar
//               </button>
//             </div>
//           </form>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default GerarRelatorio;
