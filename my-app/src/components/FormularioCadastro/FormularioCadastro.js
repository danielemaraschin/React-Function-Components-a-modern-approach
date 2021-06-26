import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(nome, sobrenome, cpf);
        }}
        >
            <TextField
                value={nome}


                onChange={(event) => {
                    var temporaria = event.target.value;
                    if (temporaria.length >= 3) {
                        temporaria = temporaria.substr(0, 3);
                    }
                    setNome(temporaria); //set value to state only after validation
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}

                id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth />
            {/*esse formControlLabel está controlando esse interruptor */}
            <FormControlLabel label="Promoções" control={<Switch name="promocoes" label="Promoções" defaultChecked color="primary" />} />
            <FormControlLabel label="Novidades" control={<Switch name="novidades" defaultChecked color="primary" />} />

            <Button type="submit" variant="contained" color="primary"> {/*on material-ui.com has all kind of tags we can get style */}
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;