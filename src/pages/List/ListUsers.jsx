import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import './ListUser.css';

import NavigationHeader from '../../components/Header/NavigationHeader';
import { fetchUsers } from '../../services/userRegisterService';
import UserList from '../../components/UserList/UserList';

function ListUsers({ }){
    const [allUsers, setAllUsers] = useState([]);
    const location = useLocation();

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
                previousPage={ location.state }
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