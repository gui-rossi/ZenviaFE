import React, { useContext, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';


function FormFooter({ info, setInfo }){

    function changeFacebook(newFb){
        let newUser = info;
        info.facebook = newFb;
        setInfo(newUser);
    }

    function changeTwitter(newTw){
        let newUser = info;
        info.twitter = newTw;
        setInfo(newUser);
    }

    function changeInstagram(newInsta){
        let newUser = info;
        info.instagram = newInsta;
        setInfo(newUser);
    }

    function changeLinkedin(newLinkedin){
        let newUser = info;
        info.linkedin = newLinkedin;
        setInfo(newUser);
    }

    return(
        <Row className="mb-3">
            <Form.Group as={Col}>
                <Form.Label>Facebook</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="https://www.facebook.com/eeniemenie23/"
                    defaultValue={info.facebook}
                    onChange={e => changeFacebook(e.target.value)}     
                />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Instagram</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="https://www.instagram.com/eenie.menie/"
                    defaultValue={info.instagram}
                    onChange={e => changeTwitter(e.target.value)}
                />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Twitter</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="https://twitter.com/eeniemenie/"
                    defaultValue={info.twitter}
                    onChange={e => changeInstagram(e.target.value)}    
                />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="https://www.linkedin.com/in/eenie-menie-4ab2b313b/"
                    defaultValue={info.linkedin}
                    onChange={e => changeLinkedin(e.target.value)}    
                />
            </Form.Group>
        </Row>
    );
}

export default FormFooter;