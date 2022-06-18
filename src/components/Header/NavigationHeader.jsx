import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NavigationHeader.css';

function NavigationHeader({ previousPage }){
    const navigate = useNavigate();

    function onClickGoBack(){
        navigate(-1);
    }

    return (
        <header className="nav-header">
            <button className="button-header" onClick={() => onClickGoBack()}>⟵ { previousPage }</button>
        </header>
    );
}

export default NavigationHeader;