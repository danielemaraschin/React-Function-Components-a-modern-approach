import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(false);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}}); //guardar o estado erros que recebe um obj com os elementos q serao validados
    //estado de erros com atributo cpf que recebe os atributos valido e texto
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
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

                onBlur={(event) =>{
                    const ehValido = validarCPF(event.target.value);
                    //const ehValido = validarCPF(cpf); pode usar o estado cpf direto, AS DUAS FORMAS SÃO VALIDAS
                    //setErros({cpf:{valido: false, texto:"O CPF deve conter 11 dígitos"}})
                    setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
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