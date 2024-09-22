import React, { useEffect, useState } from "react";
import styles from './detail.module.css';
import { db } from "../config/firebase";
import {doc, getDoc} from 'firebase/firestore';
import { useParams } from "react-router-dom";


const Details = () => {

    const {id} = useParams();
    const [announcement, setAnnouncement] = useState(null);

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const docRef = doc(db, "announcements", id);
                const docSnap = await getDoc(docRef);
                if(docSnap.exists()) {
                    setAnnouncement(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch(error) {
                console.error(error);
            }
        }
        fetchAnnouncement();
    }, [id])

   

    return (
        <div>           
            <div className={styles.detailsContainer}>
                {announcement ? (
                    <div className={styles.announcementDetails}>
                        <h1>{announcement.title}</h1>
                        <p>{announcement.content}</p>
                        <p>Објављено: {announcement.createdTime?.toDate?.().toLocaleString()}</p>
                    </div>
                ) : (
                    null
                )}
            </div>
        </div>      
    )
}

export default Details;