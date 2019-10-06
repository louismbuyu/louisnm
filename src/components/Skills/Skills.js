import React from 'react';
import styles from './Skills.module.scss';
import SkillsSection from "./SkillsSection/SkillsSection";
import { temp } from '../../data/skills';

function Skills(props) {

    return (
        <div className={styles.Skills}>
            <div className={styles.title}>
                Skills
            </div>
            <div className={styles.body}>
                {
                    temp().map((val, index) => {
                        return (<SkillsSection key={val.id} section={val} />)
                    })
                }
            </div>
        </div>
    );
}

export default Skills;