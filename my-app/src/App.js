import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container} from "@material-ui/core";

class App extends Component {

  render() {
    return (
      <Container component="article" >
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
