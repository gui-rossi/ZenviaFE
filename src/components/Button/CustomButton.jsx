import React from 'react';

import './CustomButton.css';

function CustomButton({ text, func }){
    return (
        <button type="button" onClick={func} className="btn btn-primary custom-button">
            { text }
        </button>
    );
}

export default CustomButton;