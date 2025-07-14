import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    setTimeout(() => {
      try {
        if (email === 'eve.holt@reqres.in' && password) {
          setMessage('Login bem-sucedido! Redirecionando...');
          
          setTimeout(() => {
            navigate('/dashboard');
          }, 1000);

        } else {
          throw new Error('Usuário ou senha inválidos.');
        }
      } catch (error) {
        setMessage(error.message);
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <h1>Login</h1>

      {message && <p className="message">{message}</p>}

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}

export default Login;