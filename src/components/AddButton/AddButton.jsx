import React from 'react';

import './AddButton.css';

function AddButton({ text, func }){
    return (
        <button type="button" className="add-button-classes" onClick={func} ><strong className="plus-symbol">+</strong> { text }</button>
    );
}

export default AddButton;