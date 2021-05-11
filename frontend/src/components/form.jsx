import React from 'react';
import {Formik, Form, Field} from 'formik'

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
            {() => (
                <Form>
                    <div className="form-controller">
                        <label>Nome: </label>
                        <Field name="name" type="text"/>
                    </div>
                    <div className="form-controller">
                        <label>Email: </label>
                        <Field name="email" type="email"/>
                    </div>
                    <div className="form-controller">
                        <label>Telefone: </label>
                        <Field name="phone" type="text"/>
                    </div>
                    <div className="form-controller">
                        <label>CEP: </label>
                        <Field name="addressZip" type="text"/>
                    </div>
                    <div className="form-controller">
                        <label>Logradouro: </label>
                        <Field name="addressStreet" type="text"/>
                    </div>
                    <div className="form-controller">
                        <label>Número: </label>
                        <Field name="addressNumber" type="text"/>
                    </div>
                    <div className="form-controller">
                        <label>Complemento: </label>
                        <Field name="addressComplement" type="text"/>
                    </div>
                    <div className="form-controller">
                        <label>Bairro: </label>
                        <Field name="addressDistrict" type="text"/>
                    </div>
                    <div className="form-controller">
                        <label>Cidade: </label>
                        <Field name="addressCity" type="text"/>
                    </div>
                    <div className="form-controller">
                        <label>Estado: </label>
                        <Field name="addressState" type="text"/>
                    </div>
                </Form>
            )}   
            </Formik>
        )
    }
}