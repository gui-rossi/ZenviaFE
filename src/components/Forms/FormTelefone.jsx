import React from 'react';

function FormTelefone({}){
    return (
        <div class="form-row">
            <div class="form-group col-md-3">
                <label>Nome</label>
                <input type={'text'} required={true} class="form-control" placeholder="Telefone do trabalho*"></input>
            </div>
            <div class="form-group col-md-3">
                <label>Número</label>
                <input type={'text'} required={true} class="form-control" placeholder="(16) 99753-6898*"></input>
            </div>
        </div>
    );
}

export default FormTelefone;