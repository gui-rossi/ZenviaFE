import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import './HomePage.css';
import zenvia from '../../img/zenvia.jpg';

import CustomButton from '../../components/Button/CustomButton';
import { UserContext } from '../../provider/UserContext';
import { emptyUser } from '../../utils/emptyUser';

function HomePage({}){
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function onClickCadastrar(){
        setUser((emptyUser));
        navigate('User', { state: "Home" });
    }

    function onClickListar(){
        navigate('ListUsers', { state: "Home" });
    }

    return (
        <div style={{backgroundImage: `url(${zenvia})`}} className="container-home">

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