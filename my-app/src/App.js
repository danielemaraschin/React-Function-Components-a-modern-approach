import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';


class App extends Component {

  render() {
    return (
      <section>
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro />
      </section>
    );
  }
}

export default App;
