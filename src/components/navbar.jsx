import React, { useState, useEffect } from "react";
import styles from './navbar.module.css';
import etsjpg from '../assets/images/ets.jpg'
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";


const Navbar = () => {

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user && user.email === "ets.gora@hotmail.com"){
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        })
        return () => unsubscribe();
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={etsjpg}/>
            </div>
            <h1 className={styles.header}>Економско-туристичка школа</h1>
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
                {isAdmin && (
                    <div>
                <a href="/admin/dashboard">
                    <h3 className={styles.link}>Админ</h3>
                </a>
                </div>
                )};
            </div>
        </div>
    )
}

export default Navbar;