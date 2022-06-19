import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import SearchBar from '../Search/SearchBar';

import './UserList.css';

import UserListHeader from './UserListHeader';

function UserList({ allUsers }){
    const navigate = useNavigate();
    const [allUsersList, setAllUsersList] = useState(allUsers);

    function onClickUser(){
        navigate('/Register', { state: "List" }) //mando as infos do usuario, verifico no Register se esta vindo de Home ou de List
    }
    
    function changeSearch(value){
        if (value === '')
            setAllUsersList(allUsers);

        const users = allUsers.filter(user => {
            const fullName = `${user.informacoes.nome} ${user.informacoes.sobrenome}`;
            if (fullName.toLocaleLowerCase().includes(value.toLocaleLowerCase())) return true;
        }); 
        setAllUsersList(users);
    }

    return (
        <div>
            <SearchBar 
                changeSearch={changeSearch}
            />
            <ListGroup>
                <UserListHeader />
                {
                    allUsersList &&
                    allUsersList.map((user, i) => {
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
        </div>
    );
}

export default UserList;