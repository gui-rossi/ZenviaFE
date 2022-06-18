import React from 'react';

import './RemoveButton.css';

function RemoveButton({ func }){
    return (
        <button className="remove-button-classes" onClick={func} ><strong className="remove-symbol">-</strong></button>
    );
}

export default RemoveButton;