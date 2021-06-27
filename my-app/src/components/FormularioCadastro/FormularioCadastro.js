import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro(props) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(false); //valor inicial verdadeiro, cheked
    const [novidades, setNovidades] = useState(true);


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.aoEnviar(nome, sobrenome, cpf, promocoes, novidades);
        }   }
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }
                    //set value to state only after validation
                }
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
            {/*esse formControlLabel é do Material UI e está controlando esse interruptor */}
            <FormControlLabel

                label="Promoções"
                control={<Switch
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked); //switch event is checked and isn't value.
                    }}
                    name="promocoes" label="Promoções" color="primary" />}
            />
            <FormControlLabel
                label="Novidades" control={<Switch
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                    name="novidades" color="primary" />} />

            <Button type="submit" variant="contained" color="primary"> {/*on material-ui.com has all kind of tags we can get style */}
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;