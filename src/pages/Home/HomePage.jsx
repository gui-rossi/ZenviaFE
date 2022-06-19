import React from 'react';
import { useNavigate } from "react-router-dom";

import './HomePage.css';

import CustomButton from '../../components/Button/CustomButton';

function HomePage({}){
    const navigate = useNavigate();

    function onClickCadastrar(){
        navigate('Register', { state: "Home" });
    }

    function onClickListar(){
        navigate('ListUsers', { state: "Home" });
    }

    return (
        <div className="container-home">

            <CustomButton 
                text="Cadastrar usuário"
                func={() => onClickCadastrar()}
            />
            <CustomButton 
                text="Listar usuários"
                func={() => onClickListar()}
            />

        </div>
    );
}

export default HomePage;