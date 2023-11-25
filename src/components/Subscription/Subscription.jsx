import './Subscription.scss';
import Title from '../Title/Title';
import {FormButton} from '../Buttons/Buttons';
import {useFormik} from 'formik';
import {string} from 'yup';

const email = {
    defaultValue: '',
    inputType: 'email',
    vSchema: string()
        .email('Invalid email address')
        .required('Email is a required field'),
}

function Subscription ({ subscribe }) {
    const formik = useFormik({
        initialValues: { email: email.defaultValue },
        validationSchema: email.vSchema,
        onSubmit: async (values, { resetForm }) => {
            await subscribe(values);
            resetForm();
        },
    })

    return (
        <section className="subscription">
            <div className="container">
                <div className="subscription__wrapper">
                    <Title addClasses="subscription__title" size={2}>
                        Subscribe to our Newsletter
                    </Title>
                    <form className="subscription__form" onSubmit={formik.handleSubmit}>
                        <div className="subscription__input-wrapper">
                            <label htmlFor="email"></label>
                            <input className="subscription__input" id="email" value={formik.values.email} type="email" placeholder="Your Email Address" onChange={formik.handleChange}/>
                        </div>
                        <FormButton text="Subscribe"></FormButton>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Subscription;