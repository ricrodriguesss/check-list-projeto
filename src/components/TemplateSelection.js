import React from "react";
import { useNavigate } from "react-router-dom";
import { useReport } from "../contexts/ReportContext";

const TemplateSelection = () => {
  const { setTemplateId } = useReport();
  const navigate = useNavigate();

  const templates = [
    { id: 1, name: "Serviços de Alimentação - RDC 216/04 da ANVISA" },
    { id: 2, name: "Exemplo de template 1" },
    { id: 3, name: "Exemplo de template 2" },
    { id: 4, name: "Exemplo de template 3" },
  ];

  const handleTemplateClick = (templateId) => {
    setTemplateId(templateId);
    navigate("/novo-relatorio");
  };

  return (
    <main className="flex-1 h-full flex flex-col p-6 bg-gray-100 min-h-screen">
      <section className="bg-white p-6 rounded-lg  flex flex-col items-center">
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Selecione um Template
        </h3>
        <div className="flex flex-col space-y-4 w-full max-w-lg items-center">
          {templates.map((template) => (
            <p
              key={template.id}
              onClick={() => handleTemplateClick(template.id)}
              className="text-gray-400 text-lg hover:text-black cursor-pointer"
            >
              {template.name}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TemplateSelection;
