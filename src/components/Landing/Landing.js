import React from 'react';
import styles from './Landing.module.scss';
import bgimg from '../../assets/images/bgi6.jpg';

function Landing(props) {
    return (
        <div className={styles.Landing}>
            <div className={styles.backgroundLayer}>
                <div className={styles.backgroundContent}>
                    <div>
                        iOS & Android
                    </div>
                    <div>
                        React.js
                    </div>
                    <div>
                        Node.js
                    </div>
                </div>
            </div>
            <div className={styles.splitViewLayer}>
                <div className={styles.leftContainer}>
                    <div className={styles.leftNavBar}>
                        Louis Nelson
                    </div>
                    <div className={styles.leftContent}>
                        <div>
                            <div>
                                Full Stack
                            </div>
                            <div>
                                Software Engineer
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <img className={styles.bgimg} src={bgimg} alt=""/>
                    <div className={styles.rightContent}>
                        <div className={styles.rightNavBar}>
                            <div>
                                Skills
                            </div>
                            <div>
                                Contact
                            </div>
                        </div>
                        <div className={styles.summary}>
                            <div className={styles.summaryContainer}>
                                <div className={styles.summaryText}>
                                    <div>
                                        Hi there,
                                    </div>
                                    <p className={styles.contentItem}>
                                        I'm Louis Nelson software engineer with 2 years of experience.
                                    </p>
                                    <p className={styles.contentItem}>
                                        I'm Louis Nelson software engineer with 2 years of experience.
                                    </p>
                                </div>
                                <div className={styles.summaryActions}>
                                    <div className={styles.summaryButton}>
                                        View Skills
                                    </div>
                                    <div className={styles.summaryButton}>
                                        Contact
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;