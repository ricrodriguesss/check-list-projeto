import React, { useState } from "react";
import Content from "./Content";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

const ConclusionPage = ({ onNavigate }) => {
  const [comment, setComment] = useState("");
  const [files, setFiles] = useState([]);

  // Manipula a seleção de arquivos e atualiza a lista de arquivos anexados
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  // Função para remover arquivos anexados
  const handleFileRemove = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    alert("Comentário e arquivo enviados!");
    onNavigate("final");
  };

  const handleHomeClick = () => {
    onNavigate("home");
  };

  const handleReportClick = () => {
    onNavigate("template-selection");
  };

  const handleLogoutClick = () => {
    onNavigate("login");
  };

  return (
    <div className="relative flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 ml-72 md:ml-72">
        <div className="flex flex-col flex-1">
          <Header texto={"Relatório | Concluir"} userName="John Doe" />
          <Content>
            <main className="p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Serviços de Alimentação - RDC 216/04 da ANVISA
              </h3>
              <section className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold mb-4">Observações adicionais:</h4>

                {/* Caixa de comentários em cinza */}
                <textarea
                  className="w-full h-24 border-gray-300 rounded-lg p-4 mb-4 bg-gray-200 text-gray-700"
                  placeholder="Digite seus comentários aqui..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>

                <div className="flex items-center justify-between mb-6">
                  <label className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                    <span>Anexar</span>
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {/* Pré-visualização dos anexos */}
                {files.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Anexos:</h4>
                    <div className="flex flex-wrap gap-4">
                      {files.map((file, index) => (
                        <div key={index} className="relative">
                          {file.type.startsWith("image/") ? (
                            <img
                              src={URL.createObjectURL(file)}
                              alt="Pré-visualização"
                              className="w-16 h-16 object-cover rounded-lg shadow-md"
                            />
                          ) : (
                            <span>{file.name}</span>
                          )}
                          <button
                            onClick={() => handleFileRemove(index)}
                            className="absolute top-1 right-1 text-white bg-red-500 rounded-full p-1 hover:bg-red-700"
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <button
                    className="text-gray-500 hover:underline"
                    onClick={() => onNavigate("previous")}
                  >
                    ← Retornar
                  </button>
                  <button
                    className="bg-green-500 text-white px-6 py-2 rounded-lg"
                    onClick={handleSubmit}
                  >
                    Gerar Relatório
                  </button>
                </div>
              </section>
            </main>
          </Content>
        </div>
      </div>
    </div>
  );
};

export default ConclusionPage;
