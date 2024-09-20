import React from "react";
import { useNavigate } from "react-router-dom";

const TemplateSelection = () => {
  const navigate = useNavigate();

  const templates = [
    "Serviços de Alimentação - RDC 216/04 da ANVISA",
    "Exemplo de template",
    "Exemplo de template",
    "Exemplo de template"
  ];

  const handleTemplateClick = (templateName) => {
      navigate("gerar-relatorio");

  };

  return (
    <main className="flex-1 h-full flex flex-col p-6 bg-gray-100 min-h-screen">
      <section className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Selecione um Template
        </h3>
        <div className="flex flex-col space-y-4 w-full max-w-lg">
          {templates.map((template, index) => (
            <p
              key={index}
              onClick={() => handleTemplateClick(template)}
              className="text-gray-400 text-lg hover:text-black cursor-pointer"
            >
              {template}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TemplateSelection;
