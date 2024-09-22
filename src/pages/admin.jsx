import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './admin.module.css';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const Admin = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value; 

        try {
            const adminEmail = "ets.gora@hotmail.com";
            if (email === adminEmail) {
                await signInWithEmailAndPassword(auth, email, password);
                navigate("/");
            } else {
                setError("Access denied. Only the admin can log in here!");
            }
        } catch (error) {
            setError("Failed to log in. Please check your credentials.");
        }
    };

    return (
        <div className={styles.adminContainer}>
            <h1 className={styles.adminWelcome}>Добродошао</h1>
            <p className={styles.adminSubtitle}>на логин панел сајта ЕТС</p>
            {error && <p className={styles.adminErrorMessage}>{error}</p>}
            <form className={styles.adminForm} onSubmit={handleSubmit}>
                <input className={styles.adminInput} type="email" name="email" placeholder="Email" required /> <br />
                <input className={styles.adminInput} type="password" name="password" placeholder="Password" required /> <br />
                <button className={styles.adminButton} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Admin;
