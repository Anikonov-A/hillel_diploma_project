import styles from "./ExpertCard.module.scss"
import Title from "../Title/Title";
import Span from "../Span/Span";

export default function ExpertCard({data}){

    return (
        <div className={styles.expert_card}>
            <div className={styles.expert_img}>
                <img src={data.photo} alt={data.name} />
            </div>
            <div className={styles.expert_info}>
                <div className={styles.expert_left_block}>
                    <Title size={5}>{data.name}</Title>
                    <Span children="">{data.industry}</Span>
                </div>
                <div className={styles.expert_right_block}>
                    {Object.entries(data.social).map(([platform, socialData]) => (
                        <div key={platform}>
                            <a href={socialData.link} target="_blank">
                                <img src={socialData.img} alt={platform} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}