import React, { useState } from 'react';

import './RegisterUser.css';

import NavigationHeader from '../../components/Header/NavigationHeader';
import AddButton from '../../components/AddButton/AddButton';
import FormHeader from '../../components/Forms/FormHeader';
import FormEndereço from '../../components/Forms/FormEndereço';
import FormTelefone from '../../components/Forms/FormTelefone';

function RegisterUser({ previousPage }){
    const [enderecos, setEnderecos] = useState([{nome: "", endereco: "", numero: "", comp: "", cidade: ""}]);

    function addEndereco(){
        const end = {
            nome: "", 
            endereco: "", 
            numero: "", 
            comp: "", 
            cidade: ""
        }
        setEnderecos(oldArray => [...oldArray, end]);
    }

    return (
        <>
            <NavigationHeader
                previousPage={ previousPage }
            />

            <div className="form-container">
                <form>
                    <FormHeader />
                    <div>
                        <div>Endereços</div>
                        {
                            enderecos.map(x => {
                                return (
                                    <FormEndereço />
                                );
                            })
                        }
                        <AddButton 
                            text={"Endereço"}
                            func={() => addEndereco()}
                        />
                    </div>
                    <div>
                        <div>Telefones</div>
                        <FormTelefone />
                        <AddButton 
                            text={"Telefone"}
                        />
                    </div>
                    <button type="submit" onClick={() => console.log("euae")} class="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        </>
    );
}

export default RegisterUser;