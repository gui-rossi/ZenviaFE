import React, { useContext, useEffect } from 'react';
import RemoveButton from '../RemoveButton/RemoveButton';
import { Form, Row, Col } from 'react-bootstrap';
import { UserContext } from '../../provider/UserContext'

import './Forms.css';

function FormEndereço({ i }){
    const { user, setUser } = useContext(UserContext);

    function changeNome(newNome){
        let newUser = user;
        newUser.enderecos[i].nome = newNome;
        setUser(newUser);
    }

    return (
        <div className="align-icon-to-bootstrap">
            <Row className="mb-3">
                <Form.Group className="col-4" as={Col}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Endereço de trabalho*" 
                        onChange={e => changeNome(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="col-2" as={Col}>
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Rua Lamenha Lins*"
                        onChange={e => console.log(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="number" placeholder="368*" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control type="number" placeholder="1066" />
                </Form.Group>
                <Form.Group className="col-2" as={Col}>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="Curitiba*" />
                </Form.Group>
            </Row>
            {
                i != 0 &&
                <RemoveButton
                   
                />
            }
        </div>
    );
}

export default FormEndereço;