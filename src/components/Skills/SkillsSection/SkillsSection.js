import React from 'react';
import styles from './SkillsSection.module.scss';
import SkillsCard from "./SkillsCard/SkillsCard";

function SkillsSection(props) {
    const { title, skills } = props.section;
    return (
        <div className={styles.SkillsSection}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.body}>
                {
                    skills.map((val) => {
                        return ( <SkillsCard key={val.id} skill={val}/> )
                    })
                }
            </div>
        </div>
    );
}

export default SkillsSection;