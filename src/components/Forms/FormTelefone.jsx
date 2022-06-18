import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function FormTelefone({}){
    return (
        <Row className="mb-3">
            <Form.Group className="col-2" as={Col}>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Telefone de trabalho*" />
            </Form.Group>
            <Form.Group className="col-2" as={Col}>
                <Form.Label>Número</Form.Label>
                <Form.Control type="text" placeholder="(16) 99753-6898*" />
            </Form.Group>
        </Row>
    );
}

export default FormTelefone;