import React, { Component } from 'react';
import Button from "@material-ui/core/Button"
import { TextField } from '@material-ui/core';

function FormularioCadastro(){
    return(
    <form>
        <label>Nome</label>
        <input type="text"/>
        
        <label>Sobrenome</label>
        <input type="text"/>

        <label>CPF</label>
        <input type="text"/>
        
        <label>Promoções</label>
        <input type="checkbox"/>
        
        <label>Novidades</label>
        <input type="checkbox"/>

        <Button type="submit" variant="contained" color="primary"> {/*on material-ui.com has all kind of tags we can get style */}
            Cadastrar
        </Button>
    </form>
   );
}

export default FormularioCadastro;