import React from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../../components/Button/CustomButton';

function RegisterUser({}){
    const navigate = useNavigate();

    function onClickGoBack(){
        navigate(-1);
    }

    return (
        <CustomButton 
            text="Go Back"
            func={() => onClickGoBack()}
        />
    );
}

export default RegisterUser;