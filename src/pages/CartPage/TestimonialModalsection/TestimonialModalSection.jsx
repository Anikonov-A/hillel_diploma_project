import { useState } from "react";
import TestimonialModal from "@/components/TestimonialModal/TestimonialModal";

export default function TestimonialModalSection() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div >
            <button
                className="button green openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                Leave a Review
            </button>
            <TestimonialModal openModal={modalOpen} setOpenModal={setModalOpen}/>
        </div>
    );
}