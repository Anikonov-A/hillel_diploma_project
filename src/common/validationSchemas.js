import * as Yup from "yup";

export const validSchemaOrderForm = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z ]+$/, 'Invalid Name (only letters and spaces are allowed)')
        .required('Name is required'),
    address: Yup.string()
        .matches(/^[a-zA-Z0-9,.\- ]+$/, 'Invalid Address')
        .required('Address is required'),
    phone: Yup.string()
        .matches(/^\+380\d{9}$/, 'Invalid Phone Number (must start with +380 and have 9 additional digits)')
        .required('Phone number is required'),
    paymentType:Yup.string().oneOf(['cash','card']).required('Choose payment type'),
    cardNumber: Yup.string().when('paymentType', {
        is: 'card',
        then:()=> Yup.string()
            .matches(/^\d{16}$/, 'Invalid Card Number (must be 16 digits)')
            .required('Card Number is required')
    })
});
