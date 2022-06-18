import React from 'react';
import API from './api'

const submitUser = {

    postNewUser: async (user) => {
        const url = `api/IsApiUp`;
        
        return API (url, {
            method: 'GET'
        });

        // return API (url, {
        //     method: 'POST',
        //     data: {
        //         user: user
        //     }
        // });
    }
}

export default submitUser;