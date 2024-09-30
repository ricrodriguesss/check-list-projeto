import React, { useState } from "react";
import relatorio_concluido from "../assets/images/relatorio_concluido.png";

const Final = () => {
  const [showModal, setShowModal] = useState(false);

  const handleView = () => {
    window.open("URL_DO_DOCUMENTO_PDF", "_blank");
  };

  const handleShare = () => {
    setShowModal(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "URL_DO_DOCUMENTO_PDF";
    link.download = "relatorio_final.pdf";
    link.click();
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <main className="w-full flex flex-col items-center max-w-7xl p-4 sm:p-6 rounded-lg overflow-y-auto h-full">
        <section className="bg-white w-full rounded-lg p-8">
          <div className="flex flex-col items-center">
            <img
              src={relatorio_concluido}
              alt="Relatório Concluído"
              className="w-full max-w-md rounded-lg bg-gray-300 mb-6"
            />

            <div className="flex space-x-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition"
                onClick={handleView}
              >
                Visualizar
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition"
                onClick={handleShare}
              >
                Compartilhar
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition"
                onClick={handleDownload}
              >
                Baixar
              </button>
            </div>
          </div>
        </section>

        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-80">
              <h4 className="text-xl mb-4 text-center">Compartilhar</h4>
              <ul className="space-y-3 flex flex-col items-center">
                <li className="cursor-pointer hover:text-green-600">Email</li>
                <li className="cursor-pointer hover:text-green-600">WhatsApp</li>

              </ul>
              <div className="flex justify-center mt-6">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition"
                  onClick={() => setShowModal(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Final;
