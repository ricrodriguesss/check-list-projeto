
import React, { useState } from 'react';
import './LoginPage.css'; 

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onLogin();
  };

  return (
    <div className="login-container">
      <img src="images/Logo.png" alt="Logo CheckList" className="logo" />
      <form onSubmit={handleSubmit}>
        <legend className="legend">Login</legend>
        <p>
          <input 
            type="email" 
            name="email" 
            className="email" 
            id="idEmail" 
            placeholder="Digite seu e-mail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            autoComplete="email"
          />
        </p>
        <p>
          <input 
            type="password" 
            name="password" 
            className="password" 
            id="idPassword" 
            placeholder="Digite sua senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            autoComplete="current-password"
          />
        </p>
        <div className="checkbox">
          <input 
            type="checkbox" 
            name="checkbox" 
            id="idCheckbox" 
            checked={rememberMe} 
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="idCheckbox">Lembrar meus dados</label>
        </div>
        <input type="submit" value="Entrar" className="button" />
        <p>
          <a href="#" className="forgot-password">Esqueceu a senha?</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
