import React from 'react';
import styles from './App.module.scss';
import Landing from "../Landing/Landing";
import Skills from "../Skills/Skills";

function App(props) {
    return (
        <div className={styles.App}>
            <Landing/>
            <div className={styles.main}>
                <Skills/>
            </div>
        </div>
    );
}

export default App;