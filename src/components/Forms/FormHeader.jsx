import React from 'react';

function FormHeader({}){
    return (
        <div>
            <div>Informações gerais</div>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label>ID</label>
                    <input type={'text'} required={true} class="form-control" placeholder="ALJSH1423*"></input>
                </div>
                <div class="form-group col-md-3">
                    <label>Nome</label>
                    <input type={'text'} required={true} class="form-control" placeholder="Nome*"></input>
                </div>
                <div class="form-group col-md-3">
                    <label>Sobrenome</label>
                    <input type={'text'} required={true} class="form-control" placeholder="Sobrenome*"></input>
                </div>
                <div class="form-group col-md-3">
                    <label>Nascimento</label>
                    <input type={'date'} class="form-control" placeholder="12/10/1994"></input>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label>RG</label>
                    <input type={'text'} required={true} class="form-control" placeholder="11.222.333-x*"></input>
                </div>
                <div class="form-group col-md-3">
                    <label>CPF</label>
                    <input type={'text'} required={true} class="form-control" placeholder="111.222.333-44*"></input>
                </div>
            </div>
        </div>
    );
}

export default FormHeader;