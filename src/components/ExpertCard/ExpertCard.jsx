import styles from "./ExpertCard.module.scss"
import Title from "../Title/Title";
import Span from "../Span/Span";
import {useEffect, useState} from "react";
import axios from "axios";
import logo from "../Logo/Logo";

export default function ExpertCard({ data }){
    const [expertData, setExpertData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/experts.json');
                setExpertData(response.data.experts);
                const expertsData = response.data.experts
                console.log(expertsData[0].social)
            } catch (error) {
                console.error('Error fetching expert data:', error);
            }
        };

        fetchData();
    }, []);
    if (!expertData) {
        return <div>Loading...</div>;
    }

    const firstExpert = expertData[0];

    return (
        <div>
            <div>
                <img src={firstExpert.photo} alt={firstExpert.name} />
            </div>
            <div>
                <div>
                    <Title size={5}>{firstExpert.name}</Title>
                    <Span children="">{firstExpert.industry}</Span>
                </div>
                <div>
                    {Object.entries(firstExpert.social).map(([platform, icon]) => (
                        <img key={platform} src={icon} alt={platform} />
                    ))}
                </div>
            </div>
        </div>
    );
}