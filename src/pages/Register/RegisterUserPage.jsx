import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../provider/UserContext';
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from 'react-bootstrap';

import './RegisterUserPage.css';

import NavigationHeader from '../../components/Header/NavigationHeader';
import AddButton from '../../components/AddButton/AddButton';
import FormHeader from '../../components/Forms/FormHeader';
import FormEndereço from '../../components/Forms/FormEndereço';
import FormTelefone from '../../components/Forms/FormTelefone';
import { submitUser, modifyUser } from '../../services/userRegisterService';
import FormFooter from '../../components/Forms/FormFooter';

function RegisterUserPage({ }){
    const { user, setUser } = useContext(UserContext);
    const [userEnds, setUserEnds] = useState(user.enderecos);
    const [userInfos, setUserInfos] = useState(user.informacoes);
    const [userTels, setUserTels] = useState(user.telefones);
    const navigate = useNavigate();
    const location = useLocation();

    function addEndereco(){
        const blankEndereco = {
            nome: "", 
            endereco: "", 
            numero: "", 
            comp: "", 
            cidade: ""
        };
        
        let newUser = userEnds;
        newUser = [...newUser, blankEndereco];
        setUserEnds(newUser);
    }

    function addTelefone(){
        const blankTelefone = {
            nome: "", 
            numero: ""
        };
        
        let newUser = userTels;
        newUser = [...newUser, blankTelefone];
        setUserTels(newUser);
    }

    async function onSubmit(){
        debugger;
        const finalUser = {
            informacoes: userInfos,
            enderecos: userEnds,
            telefones: userTels
        }

        await submitUser.postNewUser(finalUser)
            .catch(e => {throw e})
            .then(() => navigate('/'))
    }

    async function onModify(){
        const editedUser = {
            informacoes: userInfos,
            enderecos: userEnds,
            telefones: userTels
        }
        
        await modifyUser.putUser(editedUser)
            .catch(e => {throw e})
            .then(() => navigate('ListUsers'))
    }

    return (
        <>
            <NavigationHeader
                previousPage={ location.state }
            />

            <div className="form-container">
                <Form>
                    <strong>Informações gerais</strong>
                    <FormHeader 
                        info={userInfos}
                        setInfo={setUserInfos}
                        previousPage={ location.state }
                    />
                    <div className="separation">
                        <strong>Endereços</strong>
                        {
                            userEnds &&
                            userEnds.map((x, i) => {
                                return (
                                    <FormEndereço
                                        key={i}
                                        i={i}
                                        end={x}
                                        ends={userEnds}
                                        setEnds={setUserEnds}
                                    />
                                );
                            })
                        }
                        <AddButton
                            text={"Endereço"}
                            func={() => addEndereco()}
                        />
                    </div>
                    <div className="separation">
                        <strong>Telefones</strong>
                        {
                            userTels &&
                            userTels.map((x, i) => {
                                return (
                                    <FormTelefone
                                        key={i}
                                        i={i}
                                        tel={x}
                                        tels={userTels}
                                        setTels={setUserTels}
                                    />
                                );
                            })
                        }
                        <AddButton 
                            text={"Telefone"}
                            func={() => addTelefone()}
                        />
                    </div>
                    <div className="separation">
                        <strong>Redes Sociais</strong>
                        <FormFooter 
                            info={userInfos}
                            setInfo={setUserInfos}
                        />
                    </div>
                    <button onClick={location.state === "List" ? () => onModify() : () => onSubmit()} className="btn btn-primary">
                        {location.state === "List" ? "Atualizar Usuário" : "Cadastrar Usuário"}
                    </button>
                </Form>
            </div>
        </>
    );
}

export default RegisterUserPage;