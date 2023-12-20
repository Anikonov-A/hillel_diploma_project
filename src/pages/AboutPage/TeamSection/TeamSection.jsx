import styles from "./TeamSection.module.scss";
import {useEffect, useState} from "react";
import ExpertCard from "../../../components/ExpertCard/ExpertCard";
import axios from "axios";
import Span from "../../../components/Span/Span";
import Title from "../../../components/Title/Title";
import Paragraph from "../../../components/Paragraph/Paragraph";

export default function TeamSection({sliceFrom,sliceTo}) {
    const [expertData, setExpertData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/experts.json');
                setExpertData(response.data.experts);

            } catch (error) {
                console.error('Error fetching expert data:', error);
            }
        };
        fetchData();
    }, []);

    const displayedExperts = expertData && expertData.slice(sliceFrom, sliceTo);

    return (
        <section className={styles.container}>
            <div className={styles.parag_wrapper}>
                <Span children="" anim="fade-up">Team</Span>
                <Title size={2} anim="fade-up">Our Organic Experts</Title>
                <Paragraph anim="fade-up">
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley.
                </Paragraph>
            </div>
            <div className={styles.expert_cont} data-aos="fade-up">
                {displayedExperts && displayedExperts.map(item => (
                    <ExpertCard key={item.id} data={item}/>
                ))}
            </div>
        </section>
    );
}