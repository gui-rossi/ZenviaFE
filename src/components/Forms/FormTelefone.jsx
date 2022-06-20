import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import RemoveButton from '../RemoveButton/RemoveButton';

import './Forms.css';

function FormTelefone({ i, tel, tels, setTels }){

    function changeNome(newNome){
        let newTels = tels;
        newTels[i].nome = newNome;
        setTels(newTels);
    }

    function changeNumero(newNumero){
        let newTels = tels;
        newTels[i].nome = newNumero;
        setTels(newTels);
    }

    function removeTelefone(){
        const newUserObj = tels.filter((x,j) => j !== i);
        setTels(newUserObj);
    }

    return (
        <div className="align-icon-to-bootstrap">
            <Row className="mb-3 col-10">
                <Form.Group className="" as={Col}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Telefone de trabalho*"
                        defaultValue={tel.nome}
                        onChange={e => changeNome(e.target.value)}     
                    />
                </Form.Group>
                <Form.Group className="" as={Col}>
                    <Form.Label>Número</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="(16) 99753-6898*"
                        defaultValue={tel.numero}
                        onChange={e => changeNumero(e.target.value)}        
                    />
                </Form.Group>
            </Row>
            {/* {
                i != 0 &&
                <RemoveButton
                   func={() => removeTelefone()}
                />
            } */}
        </div>
    );
}

export default FormTelefone;