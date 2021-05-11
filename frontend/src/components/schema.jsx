import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    // phone: '', 
    // addressZip: '', // CEP
    // addressStreet: '', // logradouro
    // addressNumber: '',
    // addressComplement: '',
    // addressDistrict: '',    // bairro
    // addressCity: '',
    // addressState: '',
});
  
