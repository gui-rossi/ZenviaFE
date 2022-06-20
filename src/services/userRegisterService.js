import React from 'react';
import API from './api'

const submitUser = {
    postNewUser: async (user) => {
        const url = `api/Users/AddUser`;

        return API (url, {
            method: 'POST',
            data: {
                "informacoes": user.informacoes,
                "enderecos": user.enderecos,
                "telefones": user.telefones
            }
        });
    }
}

const fetchUsers = {
    getAllUsers: async () => {
        const url = `api/Users/GetAllUsers`;

        return API (url, {
            method: 'GET'
        });
    }
}

const modifyUser = {
    putUser: async (user) => {
        const url = `api/Users/ModifyUser`;

        return API (url, {
            method: 'PUT',
            data: {
                "informacoes": user.informacoes,
                "enderecos": user.enderecos,
                "telefones": user.telefones
            }
        });
    }
}

export {submitUser, fetchUsers, modifyUser};