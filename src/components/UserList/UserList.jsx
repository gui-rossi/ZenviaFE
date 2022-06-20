import React, { useContext, useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

import './UserList.css';

import { UserContext } from '../../provider/UserContext';
import UserListHeader from './UserListHeader';
import SearchBar from '../Search/SearchBar';
import { emptyUser } from '../../utils/emptyUser';

function UserList({ allUsers }){
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [allUsersList, setAllUsersList] = useState(allUsers);
    
    const [pageNumber, setPageNumber] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [pageItems, setPageItems] = useState(1);

    function onClickUser(user){
        const editUser = {
            informacoes: user.informacoes,
            enderecos: user.enderecos.length ? user.enderecos : emptyUser.enderecos,
            telefones: user.telefones.length ? user.telefones : emptyUser.telefones
        }

        setUser(editUser);
        navigate('/User', { state: "List" }) //mando as infos do usuario, verifico no Register se esta vindo de Home ou de List
    }
    
    function changeSearch(value){
        //setActivePage(1);
        if (value === '')
            setAllUsersList(allUsers);

        const users = allUsers.filter(user => {
            const fullName = `${user.informacoes.nome} ${user.informacoes.sobrenome}`;
            if (fullName.toLocaleLowerCase().includes(value.toLocaleLowerCase())) return true;
        }); 
        setAllUsersList(users);
    }

    useEffect(() => {
        const pages = Math.ceil((allUsersList.length / 2));
        setPageNumber(pages);
    }, [allUsersList])
    
    //pagination not working, so its disabled
    useEffect(() => {
        let items = [];
        for (let number = 1; number <= pageNumber; number++) {
            items.push(
                <Pagination.Item disabled onClick={(event) => setActivePage(parseInt(event.target.text))} key={number} active={number == activePage}>
                    {number}
                </Pagination.Item>,
            );
        }
        setPageItems(items);
    }, [pageNumber])
    
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
                            <ListGroup key={i} className="highlight-row" horizontal onClick={() => onClickUser(user)}>
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
                <Pagination className="mt-3">{pageItems}</Pagination>
            </ListGroup>
        </div>
    );
}

export default UserList;