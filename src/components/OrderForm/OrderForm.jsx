import {useFormik} from "formik";
import {validSchemaOrderForm} from "../../common/validationSchemas";
import Title from "../Title/Title";
import styles from "./OrderForm.module.scss"
import {useState} from "react";
import TestimonialModal from "../TestimonialModal/TestimonialModal";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../store/slices/cartSlice";

export default function OrderForm({price,isEmpty}) {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            phone: '',
            paymentType: '',
            cardNumber: '',
        },
        validationSchema: validSchemaOrderForm,
        onSubmit: (values, {resetForm}) => {
            const orderData = {
                formData: values,
                total:price,
                cartData: cartItems,
            };

            const orderDataJSON = JSON.stringify(orderData);
            localStorage.setItem('orderData', orderDataJSON);


            resetForm();
            setModalOpen(true);
            dispatch(clearCart())
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.form}>
                    <div className={styles.text}>
                        <p>
                            Order Information:
                        </p>
                    </div>
                    <div className={styles.forms}>
                        <div className={styles.field}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                disabled={isEmpty}

                            />
                            {formik.touched.name && formik.errors.name && (
                                <div className={styles.error_message}>{formik.errors.name}</div>
                            )}
                        </div>
                        <div className={styles.field}>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Enter your address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                                disabled={isEmpty}

                            />
                            {formik.touched.address && formik.errors.address && (
                                <div className={styles.error_message}>{formik.errors.address}</div>
                            )}
                        </div>
                        <div className={styles.field}>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                disabled={isEmpty}

                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <div className={styles.error_message}>{formik.errors.phone}</div>
                            )}
                        </div>
                        <div className={styles.field}>
                            <select
                                id="paymentType"
                                name="paymentType"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                defaultValue="default"
                                disabled={isEmpty}

                            >
                                <option value="default" disabled hidden>Select Payment Type</option>
                                <option value="cash">Cash</option>
                                <option value="card">Card</option>
                            </select>
                            {formik.touched.paymentType && formik.errors.paymentType && (
                                <div className={styles.error_message}>{formik.errors.paymentType}</div>
                            )}
                        </div>
                        {formik.values.paymentType === 'card' && (
                            <div className={styles.field}>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    placeholder="Enter your card number"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cardNumber}
                                    disabled={isEmpty}
                                />
                                {formik.touched.cardNumber && formik.errors.cardNumber && (
                                    <div className={styles.error_message}>{formik.errors.cardNumber}</div>
                                )}
                            </div>
                        )}
                    </div>

                    <Title size={5}>TOTAL <span>{new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(price)}</span></Title>
                    <div className={styles.button}>
                        <button type="submit" disabled={isEmpty} className={isEmpty ? styles.disabled : ""} >Place Order</button>
                    </div>
                </div>
            </form>
            <TestimonialModal openModal={modalOpen} setOpenModal={setModalOpen}/>
        </>
    );
};
