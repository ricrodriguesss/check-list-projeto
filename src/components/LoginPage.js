import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch("http://nag4wa.org:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer login");
      }

      const result = await response.json();


      localStorage.setItem("access_token", result.access_token);
      localStorage.setItem("refresh_token", result.refresh_token);


      if (onLogin) {
        onLogin(result);
      }
    } catch (error) {
      console.error("Erro ao enviar dados", error);
      setError("Falha no login. Verifique suas credenciais e tente novamente."); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-white p-6 ">
        <img
          src={logo}
          alt="Logo CheckList"
          className="w-full max-w-xs mx-auto mb-8"
        />
        <form onSubmit={handleSubmit}>
          <legend className="text-lg font-bold text-left mb-6">Login</legend>
          

          <div className="relative mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-4 text-gray-400" />
            <input
              type="email"
              name="email"
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>


          <div className="relative mb-4">
            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-4 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 focus:outline-none"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>


          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="checkbox"
              id="idCheckbox"
              className="mr-2 text-green-600 focus:ring-green-400"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="idCheckbox" className="text-sm text-gray-600">
              Lembrar meus dados
            </label>
          </div>
          

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Entrar
          </button>


          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
