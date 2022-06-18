import React, { useContext, useEffect } from 'react';
import RemoveButton from '../RemoveButton/RemoveButton';
import { Form, Row, Col } from 'react-bootstrap';

import './Forms.css';

function FormEndereço({ i, end, ends, setEnds }){

    function changeNome(newNome){
        let newEnds = ends;
        newEnds[i].nome = newNome;
        setEnds(newEnds);
    }

    function changeEndereco(newEndereco){
        let newEnds = ends;
        newEnds[i].endereco = newEndereco;
        setEnds(newEnds);
    }

    function changeNumero(newNumero){
        let newEnds = ends;
        newEnds[i].numero = newNumero;
        setEnds(newEnds);
    }

    function changeCompl(newCompl){
        let newEnds = ends;
        newEnds[i].comp = newCompl;
        setEnds(newEnds);
    }

    function changeCidade(newCidade){
        let newEnds = ends;
        newEnds[i].cidade = newCidade;
        setEnds(newEnds);
    }

    function removeEndereco(){
        const newUserObj = ends.filter((x,j) => j !== i);
        setEnds(newUserObj);
    }

    return (
        <div className="align-icon-to-bootstrap">
            <Row className="mb-3 col-10">
                <Form.Group className="col-4" as={Col}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Endereço de trabalho*" 
                        defaultValue={end.nome}
                        onChange={e => changeNome(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="col-3" as={Col}>
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Rua Lamenha Lins*"
                        defaultValue={end.endereco}
                        onChange={e => changeEndereco(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Número</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="368*"
                        defaultValue={end.number}
                        onChange={e => changeNumero(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="col-1" as={Col}>
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="1066"
                        defaultValue={end.comp}
                        onChange={e => changeCompl(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="col-3" as={Col}>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Curitiba*"
                        defaultValue={end.cidade}
                        onChange={e => changeCidade(e.target.value)} 
                    />
                </Form.Group>
            </Row>
            {/* {
                i != 0 &&
                <RemoveButton
                   func={() => removeEndereco()}
                />
            } */}
        </div>
    );
}

export default FormEndereço;