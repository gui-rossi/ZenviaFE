import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import './ListUser.css';

import NavigationHeader from '../../components/Header/NavigationHeader';
import { fetchUsers } from '../../services/userRegisterService';
import UserList from '../../components/UserList/UserList';

function ListUsers({ previousPage }){
    const [allUsers, setAllUsers] = useState([]);

    async function getAllUsers(){
        await fetchUsers.getAllUsers()
            .catch(e => {throw e})
            .then(v => setAllUsers(v.data))
    }

    useEffect(() => {
        getAllUsers();
    }, [])

    function onClickUser(){
        //navigate to edit screen
    }

    return (
        <>
            <NavigationHeader
                previousPage={ previousPage }
            />
            <div className="container-list-users">
                {
                    allUsers.length &&
                    <UserList 
                        allUsers={allUsers}
                    />
                }
            </div>
        </>
    );
}

export default ListUsers;