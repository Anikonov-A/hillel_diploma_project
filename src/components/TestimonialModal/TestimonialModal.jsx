import TestimonialForm from "../TestimonialForm/TestimonialForm";
import { useState } from "react";
import { testimonials }  from "@/pages/HomePage/TestimonialSection/testimonials";
import Title from "@/components/Title/Title";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './TestimonialModal.scss';

export default function TestimonialModal ({ openModal, setOpenModal }) {
    const [items, setItems] = useState([]);

    const handleTaskAdd = (newItem ) => {
        setItems([
            ...items,
            newItem,
        ]);
        testimonials.push(newItem);
        setOpenModal(false);
        toast.success('Thank you for your feedback!', {
            className:"toast-modify",
            containerId:"id2",
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",

        });
    }
        return (
        <div>
        <div className={openModal ? 'modal active' : 'modal'} onClick={()=> setOpenModal(false)}>
            <div className={openModal ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <div className="titleCloseBtn">
                    <button className='button-modal'
                        onClick={() => {
                            setOpenModal(false); }}>
                        x
                    </button>
                </div>
                <div className="modal-content-title">
                    <Title size={2} >Please, leave your feedback</Title>
                </div>
                <div className="modal-content-body">
                   <TestimonialForm onAdd={handleTaskAdd}/>
                </div>
            </div>
        </div>
    <ToastContainer
        position="top-center"
        enableMultiContainer={true}
        containerId="id2"
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
    </div>
    )
}