import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import StateList from './StateList';
import schema from './schema'
import '../App.css'

const renderErrorMessage = (msg) => (<label className="errorNotice">{msg}</label>);
export default class Formulario extends React.Component{
    onSubmit(values, actions){
        console.log('SUBMIT', values);
    }

    render(){
        return(
            <Formik
            validationSchema={schema}
            onSubmit={this.onSubmit}
            validateOnMount
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
            {(values, errors, touched, isValid) => (
                <Form className="form-controller">
                    <div className="field-controller">
                        <label>Nome: 
                            <ErrorMessage render={renderErrorMessage} name="name"/>
                        </label>
                        <Field name="name" type="text"/>
                    </div>
                    <div className="field-controller">
                        <label>Email: 
                        <ErrorMessage render={renderErrorMessage} name="email"/>
                        </label>
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
                    <button type="submit" /*disabled={!isValid}*/>Enviar</button>
                </Form>
            )}   
            </Formik>
        )
    }
    
}
