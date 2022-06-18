import React, { useState } from 'react';

export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        informacoes: {id: "", nome: "", sobrenome: "", nascimento: "", rg: "", cpf: ""},
        enderecos: [{nome: "", endereco: "", numero: "", comp: "", cidade: ""}],
        telefones: [{nome: "", numero: ""}]
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
};