import React from "react";

const Home = () => {
  const empresas = [
    {
      nome: "Delícia de Amor",
      id: "75318232",
      consultor: "John D.",
      prazo: "28/04/2024",
      ultimaAtividade: "20/03/2024",
      status: "Em andamento",
    },
    {
      nome: "Café Aromático",
      id: "75318231",
      consultor: "John D.",
      prazo: "28/04/2024",
      ultimaAtividade: "20/03/2024",
      status: "Em andamento",
    },
    {
      nome: "Cantinho Gourmet",
      id: "75318230",
      consultor: "Marcos R.",
      prazo: "28/04/2024",
      ultimaAtividade: "20/03/2024",
      status: "Em andamento",
    },
    {
      nome: "Panificadora Bom Pão",
      id: "75318229",
      consultor: "Marcos R.",
      prazo: "28/04/2024",
      ultimaAtividade: "20/03/2024",
      status: "Em andamento",
    },
  ];

  const handleRowClick = (id) => {
    alert(`Linha clicada com ID: ${id}`);
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <main className="w-full flex flex-col items-center p-4 sm:p-6 rounded-lg">
        <section className="bg-white p-4 lg:p-6 rounded-lg w-full">
          <h3 className="text-lg lg:text-xl font-bold mb-4 text-center text-gray-700">
            Lista de Empresas
          </h3>

          <div className="flex items-center mb-4">
            <label htmlFor="idSearch" className="mr-2">
              <i className="fas fa-search text-gray-400"></i>
            </label>
            <input
              type="search"
              id="idSearch"
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Pesquisar"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow rounded-lg">
              <thead>
                <tr>
                  <th className="px-2 lg:px-4 py-2 text-left text-gray-600 font-bold border-b">
                    Empresa
                  </th>
                  <th className="px-2 lg:px-4 py-2 text-left text-gray-600 font-bold border-b">
                    ID #
                  </th>
                  <th className="px-2 lg:px-4 py-2 text-left text-gray-600 font-bold border-b">
                    Consultor
                  </th>
                  <th className="px-2 lg:px-4 py-2 text-left text-gray-600 font-bold border-b">
                    Prazo
                  </th>
                  <th className="px-2 lg:px-4 py-2 text-left text-gray-600 font-bold border-b">
                    Última Atividade
                  </th>
                  <th className="px-2 lg:px-4 py-2 text-left text-gray-600 font-bold border-b">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {empresas.map((empresa) => (
                  <tr
                    key={empresa.id}
                    className="hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleRowClick(empresa.id)}
                  >
                    <td className="px-2 lg:px-4 py-2 border-b">
                      {empresa.nome}
                    </td>
                    <td className="px-2 lg:px-4 py-2 border-b">{empresa.id}</td>
                    <td className="px-2 lg:px-4 py-2 border-b">
                      {empresa.consultor}
                    </td>
                    <td className="px-2 lg:px-4 py-2 border-b">
                      {empresa.prazo}
                    </td>
                    <td className="px-2 lg:px-4 py-2 border-b">
                      {empresa.ultimaAtividade}
                    </td>
                    <td className="px-2 lg:px-4 py-2 border-b">
                      {empresa.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
