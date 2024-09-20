// import React from "react";
// import "./HomePage.css";

// const HomePage = ({ onNavigate }) => {
//   const handleTemplateClick = (templateName) => {
//     if (templateName === "Serviços de Alimentação - RDC 216/04 da ANVISA") {
//       onNavigate("gerar-relatorio");
//     }
//   };

//   const handleRowClick = (id) => {
//     alert(`Linha clicada com ID: ${id}`);
//   };

//   const handleGenerateReportClick = () => {
//     onNavigate("template-selection");
//   };

//   const handleLogoutClick = () => {
//     onNavigate("login"); // Navega para a página de login
//   };

//   return (
//     <div className="container">
//       <aside className="sidebar">
//         <img src="images/logo.png" alt="Logo" />
//         <a href="#" className="menu-item">
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
//           <h2>Relatório | Templates</h2>
//           <img
//             className="profile"
//             src="images/default.avatar.jpg"
//             alt="Usuário"
//           />
//         </div>
//         <section className="form-section">
//           <h3>Lista de Empresas</h3>
//           <div className="search">
//             <label htmlFor="idSearch">
//               <i className="fa-solid fa-magnifying-glass" id="icon-search"></i>
//             </label>
//             <input
//               type="search"
//               name="Search"
//               id="idSearch"
//               placeholder="Pesquisar"
//             />
//           </div>
//           <div className="responsive-table">
//             <table>
//               <thead>
//                 <tr>
//                   <th scope="col">Empresa</th>
//                   <th scope="col">ID #</th>
//                   <th scope="col">Consultor</th>
//                   <th scope="col">Prazo</th>
//                   <th scope="col">Última Atividade</th>
//                   <th scope="col">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr onClick={() => handleRowClick("75318232")}>
//                   <td>Delícia de Amor</td>
//                   <td>75318232</td>
//                   <td>John D.</td>
//                   <td>28/04/2024</td>
//                   <td>20/03/2024</td>
//                   <td>Em andamento</td>
//                 </tr>
//                 <tr onClick={() => handleRowClick("75318231")}>
//                   <td>Café Aromático</td>
//                   <td>75318231</td>
//                   <td>John D.</td>
//                   <td>28/04/2024</td>
//                   <td>20/03/2024</td>
//                   <td>Em andamento</td>
//                 </tr>
//                 <tr onClick={() => handleRowClick("75318230")}>
//                   <td>Cantinho Gourmet</td>
//                   <td>75318230</td>
//                   <td>Marcos R.</td>
//                   <td>28/04/2024</td>
//                   <td>20/03/2024</td>
//                   <td>Em andamento</td>
//                 </tr>
//                 <tr onClick={() => handleRowClick("75318229")}>
//                   <td>Panificadora Bom Pão</td>
//                   <td>75318229</td>
//                   <td>Marcos R.</td>
//                   <td>20/04/2024</td>
//                   <td>14/03/2024</td>
//                   <td>Completo</td>
//                 </tr>
//                 <tr onClick={() => handleRowClick("75318228")}>
//                   <td>Sabor da Terra</td>
//                   <td>75318228</td>
//                   <td>John D.</td>
//                   <td>20/04/2024</td>
//                   <td>14/03/2024</td>
//                   <td>Completo</td>
//                 </tr>
//                 <tr onClick={() => handleRowClick("75318227")}>
//                   <td>Grill Master</td>
//                   <td>75318227</td>
//                   <td>John D.</td>
//                   <td>20/04/2024</td>
//                   <td>14/03/2024</td>
//                   <td>Completo</td>
//                 </tr>
//                 <tr onClick={() => handleRowClick("75318226")}>
//                   <td>La Pizzeria Bella</td>
//                   <td>75318226</td>
//                   <td>Marcos R.</td>
//                   <td>18/04/2024</td>
//                   <td>12/03/2024</td>
//                   <td>Completo</td>
//                 </tr>
//                 <tr onClick={() => handleRowClick("75318225")}>
//                   <td>Doces Temperados</td>
//                   <td>75318225</td>
//                   <td>John D.</td>
//                   <td>18/04/2024</td>
//                   <td>12/03/2024</td>
//                   <td>Completo</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default HomePage;
