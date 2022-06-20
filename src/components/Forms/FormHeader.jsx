import React, { useContext, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function FormHeader({ info, setInfo }){


    function changeId(newId){
        let newUser = info;
        info.id = newId;
        setInfo(newUser);
    }

    function changeNome(newNome){
        let newUser = info;
        info.nome = newNome;
        setInfo(newUser);
    }

    function changeSobrenome(newSobrenome){
        let newUser = info;
        info.sobrenome = newSobrenome;
        setInfo(newUser);
    }

    function changeNascimento(newNascimento){
        let newUser = info;
        info.nascimento = newNascimento;
        setInfo(newUser);
    }

    function changeRg(newRg){
        let newUser = info;
        info.rg = newRg;
        setInfo(newUser);
    }

    function changeCpf(newCpf){
        let newUser = info;
        info.cpf = newCpf;
        setInfo(newUser);
    }

    return (
        <div>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>ID</Form.Label>
                    <Form.Control 
                        type="text"
                        required
                        placeholder="02f26943-2da0-46a0-bbbe-bb130c058ae4*"
                        defaultValue={info.id}
                        onChange={e => changeId(e.target.value)}     
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nome*"
                        defaultValue={info.nome}
                        onChange={e => changeNome(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Sobrenome*"
                        defaultValue={info.sobrenome}
                        onChange={e => changeSobrenome(e.target.value)}    
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Nascimento</Form.Label>
                    <Form.Control 
                        type="date" 
                        placeholder="12/10/1994"
                        defaultValue={info.nascimento}
                        onChange={e => changeNascimento(e.target.value)}    
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>RG</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="11.222.333-x*"
                        defaultValue={info.rg}
                        onChange={e => changeRg(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>CPF</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="111.222.333-44*"
                        defaultValue={info.cpf}
                        onChange={e => changeCpf(e.target.value)}
                    />
                </Form.Group>
            </Row>
        </div>
    );
}

export default FormHeader;