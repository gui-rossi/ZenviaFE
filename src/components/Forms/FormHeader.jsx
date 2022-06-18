import React, { useContext, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { UserContext } from '../../provider/UserContext'

function FormHeader({}){
    const { user, setUser } = useContext(UserContext);

    function changeId(newId){
        let newUser = user;
        newUser.informacoes.id = newId;
        setUser(newUser);
    }

    function changeNome(newNome){
        let newUser = user;
        newUser.informacoes.nome = newNome;
        setUser(newUser);
    }

    function changeSobrenome(newSobrenome){
        let newUser = user;
        newUser.informacoes.sobrenome = newSobrenome;
        setUser(newUser);
    }

    function changeNascimento(newNascimento){
        let newUser = user;
        newUser.informacoes.nascimento = newNascimento;
        setUser(newUser);
    }

    function changeRg(newRg){
        let newUser = user;
        newUser.informacoes.rg = newRg;
        setUser(newUser);
    }

    function changeCpf(newCpf){
        let newUser = user;
        newUser.informacoes.cpf = newCpf;
        setUser(newUser);
    }

    return (
        <div>
            <div>Informações gerais</div>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>ID</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="ALJSH1423*" 
                        onChange={e => changeId(e.target.value)}     
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nome*" 
                        onChange={e => changeNome(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Sobrenome*" 
                        onChange={e => changeSobrenome(e.target.value)}    
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Nascimento</Form.Label>
                    <Form.Control 
                        type="date" 
                        placeholder="12/10/1994" 
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
                        onChange={e => changeRg(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>CPF</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="111.222.333-44*" 
                        onChange={e => changeCpf(e.target.value)}
                    />
                </Form.Group>
            </Row>
        </div>
    );
}

export default FormHeader;