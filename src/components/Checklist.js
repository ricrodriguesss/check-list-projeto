import React, { useState, useEffect } from "react";
import checklistData from "../assets/texts/checklistData";
import anexar from "../assets/images/anexar_button.png"
import thumbs_up from "../assets/images/thumbs_up.png"
import thumbs_down from "../assets/images/thumbs_down.png"

const Checklist = ({ currentPage = 0, onNavigate }) => {
  const [responses, setResponses] = useState([]);
  const [files, setFiles] = useState([]);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    if (currentPage >= 0 && currentPage < checklistData.length) {
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
      onNavigate(page + 1);
    } else {
      console.error("Página não encontrada ou final da lista.");
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      onNavigate(page - 1);
    }
  };

  const handleFinalPageNavigation = () => {
    onNavigate("conclusion");
  };

  if (!checklistData[page]) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <main className="w-full max-w-7xl p-4 sm:p-6 bg-white shadow-lg rounded-lg">
        <section className="mb-6">
          <h3 className="text-center text-2xl font-semibold text-gray-800 mb-8">
            Serviços de Alimentação - RDC 216/04 da ANVISA
          </h3>
          <div className="h-[60vh] overflow-y-auto pr-2">
            {checklistData[page].map((item, index) => (
              <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md" key={index}>
                <label className="block text-lg text-gray-700 mb-2">{item}</label>
                <div className="space-y-4">
                  <textarea
                    className="w-full p-2 rounded-md border border-gray-300 resize-none focus:ring-2 focus:ring-green-500"
                    placeholder="Comentários"
                  ></textarea>
                  <div className="flex items-center justify-between space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer text-green-600">
                      <img src={anexar} className="text-black h-10 w-10" alt="Anexar" />
                      <span>Anexar</span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileChange(index, e)}
                      />
                    </label>
                    <div className="flex space-x-2">
                      <button
                        className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-transform ${
                          responses[index] === "yes" ? "bg-green-600 scale-110" : "bg-gray-200"
                        }`}
                        onClick={() => handleResponse(index, "yes")}
                      >
                        <img src={thumbs_up} alt="Certo" />
                      </button>
                      <button
                        className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-transform ${
                          responses[index] === "no" ? "bg-red-600 scale-110" : "bg-gray-200"
                        }`}
                        onClick={() => handleResponse(index, "no")}
                      >
                        <img src={thumbs_down} alt="Errado" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-between">
          <button
            className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-md shadow-md hover:bg-green-600 transition disabled:bg-gray-400"
            onClick={handlePreviousPage}
            disabled={page === 0}
          >
            &lt; Retornar
          </button>
          {page === checklistData.length - 1 ? (
            <button
              className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-md shadow-md hover:bg-green-600 transition"
              onClick={handleFinalPageNavigation}
            >
              Concluir
            </button>
          ) : (
            <button
              className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-md shadow-md hover:bg-green-600 transition"
              onClick={handleNextPage}
            >
              Avançar &gt;
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checklist;
