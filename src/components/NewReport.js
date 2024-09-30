import { useNavigate } from "react-router-dom";

export default function NewReport() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/relatorio-andamento");
  };

  return (
    <main className="w-full flex flex-col items-center justify-center p-4 sm:p-6 bg-gray-100">
      <section className="bg-white w-full max-w-lg mx-auto rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Serviços de Alimentação - RDC 216/04 da ANVISA
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="action-buttons">
            <button
              className="bg-green-500 text-white px-4 py-2 w-full rounded-md hover:bg-green-600 transition"
              type="submit"
            >
              Iniciar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
