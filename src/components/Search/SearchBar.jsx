import React, { useEffect, useState } from 'react';
import { ListGroup, InputGroup, Form  } from 'react-bootstrap';

function SearchBar({ changeSearch }){
    return (
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text>Search by name</InputGroup.Text>
            <Form.Control
                aria-describedby="inputGroup-sizing-sm"
                onChange={e => changeSearch(e.target.value)} 
            />
        </InputGroup>
    );
}

export default SearchBar;