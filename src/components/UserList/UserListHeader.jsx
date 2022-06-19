import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

import './UserList.css';

function UserListHeader({}){


    return (
        <ListGroup horizontal>
            <ListGroup.Item className="row-1 header-list">
                Nome completo
            </ListGroup.Item>
            <ListGroup.Item className="row-2 header-list">
                RG
            </ListGroup.Item>
            <ListGroup.Item className="row-3 header-list">
                CPF
            </ListGroup.Item>
        </ListGroup>
    );
}

export default UserListHeader;