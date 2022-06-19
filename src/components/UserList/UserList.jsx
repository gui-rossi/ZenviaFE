import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

import './UserList.css';

import NavigationHeader from '../../components/Header/NavigationHeader';
import UserListHeader from './UserListHeader';

function UserList({ allUsers }){

    function onClickUser(){
        //navigate to edit screen
    }

    return (
        <ListGroup>
            <UserListHeader />
            {
                allUsers.map((user, i) => {
                    return (
                        <ListGroup horizontal onClick={() => onClickUser()}>
                            <ListGroup.Item className="row-1">
                                {user.informacoes.nome} {user.informacoes.sobrenome}
                            </ListGroup.Item>
                            <ListGroup.Item className="row-2">
                                {user.informacoes.rg}
                            </ListGroup.Item>
                            <ListGroup.Item className="row-3">
                                {user.informacoes.cpf}
                            </ListGroup.Item>
                        </ListGroup>
                    );
                })
            }
        </ListGroup>
    );
}

export default UserList;