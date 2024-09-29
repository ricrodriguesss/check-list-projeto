import Content from "./Content";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function GerarRelatorio({ onNavigate }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onNavigate === "function") {
      onNavigate("checklist"); // Navega para a página ChecklistPage ao submeter o formulário
    } else {
      console.error("onNavigate is not a function");
    }
  };

  const handleHomeClick = () => {
    onNavigate("home"); // Navega para a página HomePage
  };

  const handleGenerateReportClick = () => {
    onNavigate("template-selection"); // Navega para a página TemplateSelectionPage
  };

  const handleLogoutClick = () => {
    onNavigate("login"); // Navega para a página LoginPage
  };

  return (
    <div className="relative flex h-screen overflow-hidden bg-gray-100">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-72" : "ml-0"
        } md:ml-72`}
      >
        <div className="flex flex-col flex-1">
          <Header texto={"Relatório | Identificação"} userName="John Doe" />
          <Content>
            <section className="flex flex-col items-center p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Serviços de Alimentação - RDC 216/04 da ANVISA
              </h3>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg space-y-6"
              >
                <div className="form-group">
                  <label
                    htmlFor="nomeFantasia"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome Fantasia da Empresa:
                  </label>
                  <input
                    type="text"
                    id="nomeFantasia"
                    name="nomeFantasia"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-gray-200"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="endereco"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Endereço:
                  </label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-gray-200"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="dataConsulta"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Data da Consulta:
                  </label>
                  <input
                    type="date"
                    id="dataConsulta"
                    name="dataConsulta"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-gray-200"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="responsavelOperacional"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Responsável Operacional:
                  </label>
                  <input
                    type="text"
                    id="responsavelOperacional"
                    name="responsavelOperacional"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-gray-200"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="consultorTecnico"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Consultor Técnico:
                  </label>
                  <input
                    type="text"
                    id="consultorTecnico"
                    name="consultorTecnico"
                    required
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-gray-200"
                  />
                </div>

                <div className="action-buttons">
                  <button
                    className="bg-green-600 text-white px-4 py-2 w-full rounded-md hover:bg-green-700 transition"
                    type="submit"
                  >
                    Iniciar
                  </button>
                </div>
              </form>
            </section>
          </Content>
        </div>
      </div>
    </div>
  );
}
