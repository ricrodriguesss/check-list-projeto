import React, { useState, useEffect } from "react";
import checklistData from "../assets/texts/checklistData";
import anexar from "../assets/images/anexar_button.png";
import thumbs_up from "../assets/images/thumbs_up.png";
import thumbs_down from "../assets/images/thumbs_down.png";

const Checklist = ({ currentPage = 0, onNavigate }) => {
  const [responses, setResponses] = useState([]);
  const [files, setFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    if (currentPage >= 0 && currentPage < checklistData.length) {
      setPage(currentPage);
      setResponses(Array(checklistData[currentPage].length).fill(null));
      setFiles(Array(checklistData[currentPage].length).fill([])); 
      setFilePreviews(Array(checklistData[currentPage].length).fill([])); 
    }
  }, [currentPage]);

  const handleResponse = (index, response) => {
    const newResponses = [...responses];
    newResponses[index] = response;
    setResponses(newResponses);
  };

  const handleFileChange = (index, event) => {
    const newFiles = [...files];
    const newPreviews = [...filePreviews];

    const selectedFiles = Array.from(event.target.files);

    if (selectedFiles.length) {

      newFiles[index] = [...newFiles[index], ...selectedFiles];


      const previews = selectedFiles.map((file) => {
        if (file.type.startsWith("image/")) {
          return { preview: URL.createObjectURL(file), isImage: true };
        } else {
          return { preview: file.name, isImage: false };
        }
      });


      newPreviews[index] = newPreviews[index] ? [...newPreviews[index], ...previews] : previews;
    }

    setFiles(newFiles);
    setFilePreviews(newPreviews);
  };

  const handleFileRemove = (index, fileIndex) => {
    const newFiles = [...files];
    const newPreviews = [...filePreviews];

    newFiles[index].splice(fileIndex, 1); 
    newPreviews[index].splice(fileIndex, 1); 

    setFiles(newFiles);
    setFilePreviews(newPreviews);
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
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <main className="w-full flex flex-col items-center max-w-7xl p-4 sm:p-6 rounded-lg">
        <section className="mb-6 bg-white w-full rounded-lg overflow-y-auto">
          <h3 className="text-center text-2xl font-semibold mt-8 text-gray-800 mb-8">
            Serviços de Alimentação - RDC 216/04 da ANVISA
          </h3>
          <div className="h-[60vh] pr-2 flex flex-col items-center">
            {checklistData[page].map((item, index) => (
              <div key={index} className="w-full max-w-4xl">
                <label className="text-lg text-gray-700 mb-2 block text-left">
                  {item}
                </label>
                <p className="text-left text-gray-400 mb-2">Passo 3 | Obrigatório</p>
                <div className="mb-6 p-4 bg-gray-200 rounded-lg shadow-md w-full">
                  <div className="space-y-4">
                    <textarea
                      className="w-full h-20 p-2 rounded-md resize-none bg-gray-300"
                      placeholder="Comentários"
                    ></textarea>
                    <div className="flex items-center justify-between space-x-4">
                      <label className="flex items-center space-x-2 cursor-pointer bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
                        <img src={anexar} className="text-black h-4" alt="Anexar" />
                        <span>Anexar</span>
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          onChange={(e) => handleFileChange(index, e)}
                        />
                      </label>

                      <div className="flex space-x-2">
                        <button
                          className={`w-12 h-12 rounded-full flex hover:bg-green-600 items-center justify-center transition-transform ${
                            responses[index] === "yes"
                              ? "bg-green-600 scale-110"
                              : "bg-gray-200"
                          }`}
                          onClick={() => handleResponse(index, "yes")}
                        >
                          <img
                            src={thumbs_up}
                            className="h-8 w-8 object-contain"
                            alt="Certo"
                          />
                        </button>
                        <button
                          className={`w-12 h-12 rounded-full flex hover:bg-red-600 items-center justify-center transition-transform ${
                            responses[index] === "no"
                              ? "bg-red-600 scale-110"
                              : "bg-gray-200"
                          }`}
                          onClick={() => handleResponse(index, "no")}
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
                      {Array.isArray(filePreviews[index]) &&
                        filePreviews[index].map((filePreview, fileIndex) => (
                          <div
                            key={fileIndex}
                            className="flex items-center space-x-4 bg-gray-300 p-2 rounded-lg"
                          >
                            {filePreview.isImage ? (
                              <img
                                src={filePreview.preview}
                                alt="Pré-visualização"
                                className="h-20 w-20 object-cover rounded-lg"
                              />
                            ) : (
                              <div className="flex items-center space-x-2">
                                <img
                                  src={anexar}
                                  alt="Arquivo"
                                  className="h-4 object-contain"
                                />
                                <span>{filePreview.preview}</span>
                              </div>
                            )}
                            <button
                              onClick={() => handleFileRemove(index, fileIndex)}
                              className="text-white bg-red-500 rounded-md p-2 flex items-center space-x-1 hover:bg-red-700"
                            >
                              <span>Excluir</span>
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
