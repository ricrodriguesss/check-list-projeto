import { useState } from "react";
import { useNavigate } from "react-router-dom";
import anexar from "../assets/images/anexar_button.png";

const Conclusion = () => {
  const [comment, setComment] = useState("");
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleFileRemove = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    alert("Comentário e arquivo enviados!");
    navigate("PAGINA FINAL");
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <main className="w-full flex flex-col items-center max-w-7xl p-4 sm:p-6 rounded-lg">
        <section className="mb-6 bg-white w-full rounded-lg overflow-y-auto">
          <h3 className="text-center text-2xl font-semibold mt-8 text-gray-800 mb-8">
            Serviços de Alimentação - RDC 216/04 da ANVISA
          </h3>
          <div className="h-[60vh] pr-2 flex flex-col items-center">
            <div className="w-full max-w-4xl">
              <label className="text-lg text-gray-700 mb-2 block text-left">
                Observações adicionais:
              </label>

              <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md w-full">
                <div className="space-y-4">
                  <textarea
                    className="w-full h-20 p-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Digite seus comentários aqui..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <div className="flex items-center justify-between space-x-4">
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
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  <div className="mt-4 space-y-2">
                    {files.length > 0 && (
                      <>
                        <h4 className="text-lg font-semibold mb-2">Anexos:</h4>
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-4 bg-gray-300 p-2 rounded-lg"
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
                              onClick={() => handleFileRemove(index)}
                              className="text-white bg-red-500 rounded-md p-2 hover:bg-red-700"
                            >
                              Excluir
                            </button>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-between w-full max-w-4xl">
          <button
            className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-md shadow-md hover:bg-green-600 transition"
            onClick={() => navigate(-1)}
          >
            &lt; Retornar
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 sm:px-6 rounded-md shadow-md hover:bg-green-600 transition"
            onClick={handleSubmit}
          >
            Gerar Relatório
          </button>
        </div>
      </main>
    </div>
  );
};

export default Conclusion;
