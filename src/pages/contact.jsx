import React from "react";
import styles from './contact.module.css';
import MiniNavbar from "../components/miniNavbar";
import ets from '../assets/images/ets.jpg';
import Footer from "../components/footer";

export default function Contact(){
    return(
        <div >
            
            <div>
                <h1 className={styles.contactHeader}>Контакт</h1>
                <div className={styles.containerInfo}>
            <div className={styles.infoRow}>
                        <span className={styles.label}>Назив школе:</span>
                        <span className={styles.value1}>Економско-туристичка школа</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.label}>Адреса:</span>
                        <span className={styles.value2}>Гора, Драгаш-Млике</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.label}>Емаил:</span>
                        <a href="mailto:ets.gora@hotmail.com">
                        <span className={styles.value3}>ets.gora@hotmail.com</span>
                        </a>
                    </div>
                    </div>
            </div>
            <div className={styles.jpgContainer}>
                <img className={styles.schooljpg} src={ets} alt="школа"/>
            </div>
          
            
        </div>
    )
}