import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={toggleSidebar}>
        <FontAwesomeIcon
          icon={faBars}
          className="md:hidden fixed top-4 left-4 z-50 bg-green-500 p-2 rounded-lg text-white"
        />
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg flex flex-col items-center py-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <img
          src={logo}
          alt="Logo CheckList"
          className="w-full max-w-xs mx-auto mb-8"
        />

        <nav className="flex flex-col w-full space-y-4 px-6">
          <button
            className="w-full text-lg text-gray-800 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
            onClick={() => navigate("/home")}
          >
            Home
          </button>

          <button
            className="w-full text-lg text-gray-800 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
            onClick={() => navigate("/selecionar-template")}
          >
            Gerar Relatório
          </button>
        </nav>

        <div className="mt-auto w-full px-6">
          <button
            className="w-full text-lg text-white bg-green-500 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
