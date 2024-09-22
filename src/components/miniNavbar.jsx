import React from "react";
import styles from './miniNavbar.module.css'
const MiniNavbar = () => {
    return(
        <div className={styles.links}>
                <a href="/">
                    <h3 className={styles.link}>Обавештења</h3>
                </a>
                <a href="/skola">
                    <h3 className={styles.link}>Школа</h3>
                </a>
                <a href="/organizacija">
                    <h3 className={styles.link}>Организација</h3>
                </a>
                <a href="/kontakt">
                    <h3 className={styles.link}>Контакт</h3>
                </a>
        </div>
    )
}

export default MiniNavbar;