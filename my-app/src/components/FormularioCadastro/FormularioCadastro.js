import React, { Component } from 'react';

function FormularioCadastro(){
    return(
    <form>
        <label>Nome</label>
        <input type="text"/>
        
        <label>Sobrenome</label>
        <input type="text"/>

        <label>CPF</label>
        <input type="text"/>
        

    </form>);
}

export default FormularioCadastro ;