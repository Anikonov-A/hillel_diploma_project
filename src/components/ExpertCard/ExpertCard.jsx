import styles from "./ExpertCard.module.scss"
import Title from "../Title/Title";
import Span from "../Span/Span";
import {Link} from "react-router-dom";

export default function ExpertCard({data, anim}){
    return (
        <div className={styles.expert_card} data-aos={anim}>
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
                            <Link to={socialData.link} target="_blank">
                                <img src={socialData.img} alt={platform} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}