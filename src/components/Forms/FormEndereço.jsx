import React from 'react';

function FormEndereço({}){
    return (
        <div class="form-row">
            <div class="form-group col-md-3">
                <label>Nome</label>
                <input type={'text'} required={true} class="form-control" placeholder="Endereço de trabalho*"></input>
            </div>
            <div class="form-group col-md-4">
                <label>Endereço</label>
                <input type={'text'} required={true} class="form-control" placeholder="Rua Lamenha Lins*"></input>
            </div>
            <div class="form-group col-md-1">
                <label>Número</label>
                <input type={'text'} required={true} class="form-control" placeholder="368*"></input>
            </div>
            <div class="form-group col-md-1">
                <label>Complemento</label>
                <input type={'text'} class="form-control" placeholder="1066"></input>
            </div>
            <div class="form-group col-md-3">
                <label>Cidade</label>
                <input type={'text'} required={true} class="form-control" placeholder="Curitiba*"></input>
            </div>
        </div>
    );
}

export default FormEndereço;