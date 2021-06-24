import React, { Component } from 'react';
import Button from "@material-ui/core/Button"
import {TextField} from '@material-ui/core';

function FormularioCadastro(){
    return(
    <form>
        <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth/>
        
        <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth/>

        <TextField id="cpf" label="CPF" variant="outlined" fullWidth/>
        
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