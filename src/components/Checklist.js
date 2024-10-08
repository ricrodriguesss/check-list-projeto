import React, { useState } from "react";
import checklistData from "../assets/texts/checklistData";
import anexar from "../assets/images/anexar_button.png";
import thumbs_up from "../assets/images/thumbs_up.png";
import thumbs_down from "../assets/images/thumbs_down.png";
import { useNavigate } from "react-router-dom";
import { useReport } from "../contexts/ReportContext";

const Checklist = () => {
  const navigate = useNavigate();
  const { report, updateResponses, updateComment, updateFiles, removeFile } = useReport(); 

  const [currentPage, setCurrentPage] = useState(0); 

  const handleNextPage = () => {
    if (currentPage < checklistData.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleComplete = () => {
    navigate("/relatorio-conclusao");
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <main className="w-full flex flex-col items-center max-w-7xl p-4 sm:p-6 rounded-lg">
        <section className="mb-6 bg-white w-full rounded-lg overflow-y-auto">
          <h3 className="text-center text-2xl font-semibold mt-8 text-gray-800 mb-8">
            Serviços de Alimentação - RDC 216/04 da ANVISA
          </h3>
          <div className="h-[60vh] pr-2 flex flex-col items-center">
            {checklistData[currentPage].map((item) => (
              <div key={item.id} className="w-full max-w-4xl">
                <label className="text-lg text-gray-700 mb-2 block text-center">
                  {item.question}
                </label>
                <p className="text-gray-400 mb-2 text-center">
                  Passo 3 | Obrigatório
                </p>
                <div className="mb-6 p-4 bg-gray-200 rounded-lg shadow-md w-full">
                  <div className="space-y-4">
                    <textarea
                      className="w-full h-20 p-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Comentários"
                      value={
                        report.responses.find((r) => r.questionId === item.id)?.comment || ""
                      }
                      onChange={(e) => updateComment(item.id, e.target.value)}
                    ></textarea>
                    <div className="flex items-center justify-between space-x-4 flex-wrap">
                      <label className="flex items-center space-x-2 cursor-pointer bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
                        <img
                          src={anexar}
                          className="text-black h-4"
                          alt="Anexar"
                        />
                        <span>Anexar</span>
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          onChange={(e) =>
                            updateFiles(item.id, Array.from(e.target.files))
                          }
                        />
                      </label>
                      <div className="flex space-x-2">
                        <button
                          className={`w-12 h-12 rounded-full flex hover:bg-green-600 items-center justify-center transition-transform ${
                            report.responses.find((r) => r.questionId === item.id)?.response === "yes"
                              ? "bg-green-600 scale-110"
                              : "bg-gray-200"
                          }`}
                          onClick={() => updateResponses(item.id, "yes")}
                        >
                          <img
                            src={thumbs_up}
                            className="h-8 w-8 object-contain"
                            alt="Certo"
                          />
                        </button>
                        <button
                          className={`w-12 h-12 rounded-full flex hover:bg-red-600 items-center justify-center transition-transform ${
                            report.responses.find((r) => r.questionId === item.id)?.response === "no"
                              ? "bg-red-600 scale-110"
                              : "bg-gray-200"
                          }`}
                          onClick={() => updateResponses(item.id, "no")}
                        >
                          <img
                            src={thumbs_down}
                            className="h-8 w-8 object-contain"
                            alt="Errado"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      {report.responses.find((r) => r.questionId === item.id)?.files.map((file, fileIndex) => (
                        <div
                          key={fileIndex}
                          className="flex items-center space-x-4 bg-gray-300 p-2 rounded-lg flex-wrap"
                        >
                          {file.type.startsWith("image/") ? (
                            <img
                              src={URL.createObjectURL(file)}
                              alt="Pré-visualização"
                              className="h-20 w-20 object-cover rounded-lg"
                            />
                          ) : (
                            <span>{file.name}</span>
                          )}
                          <button
                            onClick={() => removeFile(item.id, fileIndex)}
                            className="text-white bg-red-500 rounded-md p-2 hover:bg-red-700"
                          >
                            Excluir
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-between w-full max-w-4xl">
          <button
            className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-md shadow-md hover:bg-green-600 transition"
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            Anterior
          </button>

          {currentPage === checklistData.length - 1 ? (
            <button
              className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-md shadow-md hover:bg-green-600 transition"
              onClick={handleComplete}
            >
              Concluir
            </button>
          ) : (
            <button
              className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-md shadow-md hover:bg-green-600 transition"
              onClick={handleNextPage}
              disabled={currentPage === checklistData.length - 1}
            >
              Próximo
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checklist;
