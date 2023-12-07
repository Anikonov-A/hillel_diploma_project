import TestimonialForm from "@/components/TestimonialForm/TestimonialForm";
import { useState } from "react";
import { testimonials }  from "../../HomePage/TestimonialSection/testimonials";

import './FormSection.scss';

export default function FormSection() {
    const [items, setItems] = useState([]);

    const handleTaskAdd = (newItem ) => {
        setItems([
            ...items,
            newItem,
        ]);
        testimonials.push(newItem );

    }
    return (
        <div className='container form-wrapper' >
        <TestimonialForm onAdd={handleTaskAdd}/>
        </div>
    )
}