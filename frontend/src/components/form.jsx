import React from 'react';
import {Formik, Form, Field} from 'formik';
import StateList from './StateList';

export default class Formulario extends React.Component{
    render(){
        return(
            <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '', 
                addressZip: '', // CEP
                addressStreet: '', // logradouro
                addressNumber: '',
                addressComplement: '',
                addressDistrict: '',    // bairro
                addressCity: '',
                addressState: '',
            }}>
            {(isValid) => (
                <Form className="form-controller">
                    <div className="field-controller">
                        <label>Nome: </label>
                        <Field name="name" type="text"/>
                    </div>
                    <div className="field-controller">
                        <label>Email: </label>
                        <Field name="email" type="email"/>
                    </div>
                    <div className="field-controller">
                        <label>Telefone: </label>
                        <Field name="phone" type="text"/>
                    </div>
                    <div className="field-controller">
                        <label>CEP: </label>
                        <Field name="addressZip" type="text"/>
                    </div>
                    <div className="field-controller">
                        <label>Logradouro: </label>
                        <Field name="addressStreet" type="text"/>
                    </div>
                    <div className="field-controller">
                        <label>Número: </label>
                        <Field name="addressNumber" type="text"/>
                    </div>
                    <div className="field-controller">
                        <label>Complemento: </label>
                        <Field name="addressComplement" type="text"/>
                    </div>
                    <div className="field-controller">
                        <label>Bairro: </label>
                        <Field name="addressDistrict" type="text"/>
                    </div>
                    <div className="field-controller">
                        <label>Cidade: </label>
                        <Field name="addressCity" type="text"/>
                    </div>
                    <div className="field-controller">
                        <label>Estado: </label>
                        <Field component="select" name="addressState">
                            <StateList />
                        </Field>
                    </div>
                    <button type="submit" disabled={!isValid}>Enviar</button>
                </Form>
            )}   
            </Formik>
        )
    }
}