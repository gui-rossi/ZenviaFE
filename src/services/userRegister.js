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

const fetchUser = {
    getAllUsers: async () => {
        const url = `api/Users/GetAllUsers`;

        return API (url, {
            method: 'GET'
        });
    }
}
export {submitUser, fetchUser};