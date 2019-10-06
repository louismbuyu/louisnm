import React from 'react';
import styles from './SkillsCard.module.scss';
import imagePath from '../../../../assets/images/swift.png';

function SkillsCard(props) {
    const { title, image, items } = props.skill;
    return (
        <div className={styles.SkillsCard}>
            <div className={styles.title}>
                {title}
            </div>
            <img className={styles.image} src={image} alt={image}/>
            <div>
                View more details
            </div>
        </div>
    );
}

export default SkillsCard;