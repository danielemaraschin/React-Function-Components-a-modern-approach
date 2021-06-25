import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    const nome = useState("Dani");
    return (
        <form onSubmit={ (event) => {
            event.preventDefault();
            console.log(nome)}}>
            <TextField 
                onChange={ event => {
                    nome = (event.target.value);
                } }
                id="nome"
                label="Nome" 
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                id="sobrenome"
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                fullWidth />

            <TextField
                id="cpf"
                label="CPF" 
                variant="outlined"
                margin="normal"
                fullWidth />
                            {/*esse formControlLabel está controlando esse interruptor */}
            <FormControlLabel label="Promoções" control={<Switch name="promocoes" label="Promoções" defaultChecked color="primary" />}/>
            <FormControlLabel label="Novidades" control={<Switch name="novidades"  defaultChecked color="primary"/>}/>
        
            <Button type="submit" variant="contained" color="primary"> {/*on material-ui.com has all kind of tags we can get style */}
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;