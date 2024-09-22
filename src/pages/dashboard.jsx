import React, { useEffect, useState } from "react";
import Navbar from '../components/navbar';
import styles from './dashboard.module.css';
import AnnouncementDetail from '../pages/announcementDetail';
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { addDoc, collection, getDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import MiniNavbar from "../components/miniNavbar";
import Footer from "../components/footer";



const Dashboard = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [announcements, setAnnouncements] = useState([]);
    const informationCollection = collection(db, "announcements");
    const navigate = useNavigate();
    const location = useLocation();


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

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const editId = queryParams.get(`edit`);
        if(editId) {
            setEditingId(editId);
            loadAnnouncementsForEditing(editId);
        }
    }, [location.search])


    const loadAnnouncementsForEditing = async (id) => {
        if (!id) {
            console.error("No announcement ID provided.");
            return;
        }
        try{
            const docRef = doc(db,"announcements", id);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                const data = docSnap.data();
                setTitle(data.title);
                setText(data.content);
            } else {
                console.log("No such document!")
            }
        } catch(error) {
            console.error(error);
        }
    }


    const addAnnouncement = async (e) => {
        e.preventDefault();
        try {
            if(editingId){
                await updateDoc(doc(db, "announcements", editingId), {
                    title:title,
                    content:text,
                    createdTime: new Date()
                });
                setEditingId(null);
                setTitle("");
                setText("");
                loadAnnouncements();
                navigate("/")
            } else {
            await addDoc(informationCollection, {
                title: title,
                content: text,
                createdTime: new Date()
            })
            setTitle("");
            setText("");
            loadAnnouncements();
            navigate("/")
        }
        } catch(error) {
            console.error(error);
        }
    }
    
    const loadAnnouncements = async () => {
        try {
            const data = await getDocs(informationCollection);
            setAnnouncements(data.docs.map(doc => ({...doc.data(), id: doc.id, createdTime: doc.data().createdTime?.toDate?.().toLocaleString() || "Unknown Time"})))
        } catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        loadAnnouncements();
    }, [])


    const logout =  async () => {
        try {
            await signOut(auth);
            navigate("/")
        } catch(error) {
            console.log(error);
        }
    }

    return(
    <div>
        
        <h1 className={styles.dashboardWelcome}>Добродошао админе</h1>
        <div className={styles.dashboardLogoutButtonContainer}>
            <button className={styles.dashboardLogoutButton} onClick={logout} type="button">Log out</button>
        </div>
        <div className={styles.dashboardContainer}>
        {isAdmin && (
            <div className={styles.updateContainer}>
                <h2 className={styles.dashboardHeader}>{editingId ? "Edit announcement" : "Add announcement"}</h2>
                <form className={styles.dashboardForm}>
                    <input className={styles.dashboardInput} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <textarea className={styles.dashboardTextarea} placeholder="Add new announcement" value={text} onChange={(e) => setText(e.target.value)} required />
                    <button className={styles.dashboardButton} onClick={addAnnouncement}>{editingId ? "Update" : "Add"}</button>
                </form>
            </div>    
        )}
        <AnnouncementDetail announcements={announcements}/>
        </div>
       
    </div>
);
}

export default Dashboard;