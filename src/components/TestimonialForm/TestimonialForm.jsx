import { useFormik } from "formik";
import { Fragment } from "react";
import { object } from 'yup';
import {validSchemaTestimonialForm} from "../../common/validationSchemas";
import './TestimonialForm.scss'

const formElementsConfiguration = {
    author: {
        defaultValue: '',
        inputType: 'text',
        labelText: 'Full Name*',
        placeholder: 'your full name',
        id:"fullName",
        vSchema: validSchemaTestimonialForm.fields.author,
    },

    trade: {
        defaultValue: '',
        inputType: 'text',
        labelText: 'Profession*',
        placeholder: 'your profession',
        id:"trade",
        vSchema: validSchemaTestimonialForm.fields.trade,
    },
    text: {
        defaultValue: '',
        inputType: 'textarea',
        labelText: 'Message* ',
        placeholder: 'the text of your review...',
        id:"text",
        vSchema: validSchemaTestimonialForm.fields.text,
    },
};

function getInitialValues() {
    let initialValues = {
        id: Date.now()
    };
    for (let key of Object.keys(formElementsConfiguration)) {
        initialValues[key] = formElementsConfiguration[key].defaultValue;
    }
    return initialValues;
}

function getValidationSchema() {
    let objWithSchemas = {};
    for (let key of Object.keys(formElementsConfiguration)) {
        objWithSchemas[key] = formElementsConfiguration[key].vSchema;
    }
    return object(objWithSchemas);
}

export default function TestimonialForm({ onAdd }) {
    const formik = useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        onSubmit: async (values, { resetForm }) => {
            await onAdd(values);
            resetForm();
        }
    })

    const generateFormElements = () => {
        const formItems = [];
        for (let key of Object.keys(formElementsConfiguration)) {
            const { labelText, inputType, placeholder ,id} = formElementsConfiguration[key];

            formItems.push((
                <Fragment key={key}>
                   <div className='form-item'>

                           <label htmlFor={id}>{labelText}</label>
                       {inputType === 'textarea' ? (
                           <textarea
                               placeholder={placeholder}
                               name={key}
                               value={formik.values[key]}
                               onChange={formik.handleChange}
                               id={id}
                           />
                       ) : (
                           <input
                               type={inputType}
                               placeholder={placeholder}
                               name={key}
                               value={formik.values[key]}
                               onChange={formik.handleChange}
                               id={id}
                           />
                       )}
                       {formik.touched[key] && formik.errors[key] && <div style={{color: 'red'}}>{formik.errors[key]}</div>}
                   </div>
                </Fragment>
            ));
        }

        return (
            <>
                <div className='form-items'>
                    {formItems}
                </div>
                <div className="btn-block">
                    <button type='button' onClick={formik.handleSubmit} className="button form-button">
                        Send Review
                    </button>
                </div>
            </>
        )
    }


    return (
        <div>
            <form className='form'>
                {generateFormElements()}
            </form>
        </div>
    )
}