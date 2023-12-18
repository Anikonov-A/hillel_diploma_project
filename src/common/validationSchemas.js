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
    }),
});

export const validSchemaTestimonialForm = Yup.object().shape({
    author: Yup.string()
        .matches(/^[A-Za-z]+([\s.'-][A-Za-z]+)*$/, 'Invalid Full Name (only letters and spaces are allowed)')
        .required('Name is required'),
    trade: Yup.string()
        .matches(/^[A-Za-z]+([\s.'-][A-Za-z]+)*$/, 'Invalid Profession (only letters and spaces are allowed)')
        .required('Profession is required'),
    text: Yup.string()
        .matches(/^[\s\S]{2,200}$/, 'Invalid Message (must contain a min of 2 and a max of 200 characters)')
        .required('Message is required'),
});

export const validSchemaEmailForm = Yup.object().shape({
    email: Yup.string()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email address')
        .required('Email is a required field'),
});
