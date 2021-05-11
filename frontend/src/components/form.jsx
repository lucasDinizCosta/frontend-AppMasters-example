import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import StateList from './StateList';
import schema from './schema'
import '../App.css'

const renderErrorMessage = (msg) => (<label className="errorNotice">{msg}</label>);
export default class Formulario extends React.Component{

    state = {
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
    };
    self = this;

    onSubmit(values, actions){
        console.log('SUBMIT', values);
    }

    onBlurCep(ev, setFieldValueAux){
        const {value} = ev.target;
        const setFieldValue = setFieldValueAux;  // Ajusta a referencia pra função
        
        // Trabalhando com REGEX pra ajustar o CEP
        // /[^0-9]/g pega tudo que nao for numero
        const cep = value?.replace(/[^0-9]/g, '');
    
        if(cep?.length !== 8){  // '?' verifica se existe, então tenta acessar o length
          return;
        }
    
        //Extrai o json com os dados do CEP
        let test = fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setFieldValue('addressStreet', data.logradouro);
            setFieldValue('addressDistrict', data.bairro);
            setFieldValue('addressCity', data.localidade);
            setFieldValue('addressState', data.uf);
          });
      }

    render(){
        return(
            <Formik
            validationSchema={schema}
            onSubmit={this.onSubmit}
            validateOnMount
            initialValues={this.state}>
            {({isValid, setFieldValue}) => (
                <Form className="form-controller">
                    <div className="field-controller">
                        <label>Formulário de cadastro para recebimento dos adesivos</label>
                    </div>
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
                        <Field name="addressZip" type="text" onBlur={
                            (ev) => this.onBlurCep(ev, setFieldValue)
                        }/>
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
