import './Subscription.scss';
import Title from '../Title/Title';
import {FormButton} from '../Buttons/Buttons';
import {useFormik} from 'formik';
import {validSchemaEmailForm} from "../../common/validationSchemas";
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const email = {
    defaultValue: '',
}

function Subscription({subscribe}) {
    const formik = useFormik({
        initialValues: {email: email.defaultValue},
        validationSchema: validSchemaEmailForm,
        onSubmit: async (values, {resetForm}) => {
            await subscribe(values);
            toast.success("You have successfully subscribed to the newsletter!",{
                className:"toast-modify",
                position: "top-center",
                autoClose: 5000,
                containerId:"id1",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",

            });
            resetForm();

        },
    })


    return (
        <section className="subscription" >
            <div className="container" data-aos="fade-up">
                <div className="subscription__wrapper">
                    <Title addClasses="subscription__title" size={2}>
                        Subscribe to our Newsletter
                    </Title>
                    <form className="subscription__form" onSubmit={formik.handleSubmit}>
                        <div className='subscription__content'>
                        <div className="subscription__input-wrapper">
                            <label htmlFor="email"></label>
                            <input className="subscription__input" id="email"  value={formik.values.email} type="text"
                                   placeholder="Your Email Address" onChange={formik.handleChange}/>
                        </div>
                        <FormButton text="Subscribe"></FormButton>
                        </div>
                        {formik.touched.email && formik.errors.email && (
                            <div className='error-message-email'>{formik.errors.email}</div>
                        )}
                    </form>
                </div>
            </div>
            <ToastContainer
                enableMultiContainer={true}
                containerId="id1"
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
        </section>
    )
}

export default Subscription;