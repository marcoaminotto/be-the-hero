import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Faça seu login</h1>
          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/> 
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="A group of people hugging each other and forming a line" />
    </div>
  );
}

export default Login;