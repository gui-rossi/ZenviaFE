import React, { useContext, useEffect, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { UserContext } from '../../provider/UserContext';

import './RegisterUser.css';

import NavigationHeader from '../../components/Header/NavigationHeader';
import AddButton from '../../components/AddButton/AddButton';
import FormHeader from '../../components/Forms/FormHeader';
import FormEndereço from '../../components/Forms/FormEndereço';
import FormTelefone from '../../components/Forms/FormTelefone';

function RegisterUser({ previousPage }){
    const { user, setUser } = useContext(UserContext);
    const [ tempUser, setTempUser ] = useState(user);

    function addEndereco(){
        const blankEndereco = {
            nome: "", 
            endereco: "", 
            numero: "", 
            comp: "", 
            cidade: ""
        }
        let newUser = tempUser;
        newUser.enderecos = [...newUser.enderecos, blankEndereco];
        setTempUser(newUser);
        console.log(tempUser.enderecos)
    }

    return (
        <>
            <NavigationHeader
                previousPage={ previousPage }
            />

            <div className="form-container">
                <div>
                    <FormHeader />
                    <div>
                        <div>Endereços</div>
                        {
                            tempUser &&
                            tempUser.enderecos.map((x, i) => {
                                return (
                                    <FormEndereço
                                        i={i}
                                    />
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
                        {
                            user.telefones.map((x, i) => {
                                return (
                                    <FormTelefone 
                                        positionArray={i}
                                    />
                                );
                            })
                        }
                        <AddButton 
                            text={"Telefone"}
                            func={() => addTelefone()}
                        />
                    </div>
                    <button type="submit" onClick={() => console.log("euae")} className="btn btn-primary">Cadastrar</button>
                </div>
            </div>
        </>
    );
}

export default RegisterUser;