import React, { useEffect, useState } from "react";
import Navbar from '../components/navbar';
import styles from './home.module.css';
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Swal from 'sweetalert2'; // Importuj sweetalert2

const Home = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [announcements, setAnnouncements] = useState([]);
    const informationCollection = collection(db, "announcements");
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.email === "ets.gora@hotmail.com") {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const addAnnouncement = async (e) => {
        e.preventDefault();
        try {
            await addDoc(informationCollection, {
                title: title,
                content: text,
                createdTime: new Date()
            });
            setTitle("");
            setText("");
            loadAnnouncements();
        } catch (error) {
            console.error(error);
        }
    };

    const loadAnnouncements = async () => {
        try {
            const data = await getDocs(informationCollection);
            const sortedAnnouncements = data.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
                createdTime: doc.data().createdTime?.toDate?.().toLocaleString() || "Unknown Time"
            })).sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime)); // Sortiranje po vremenu
            setAnnouncements(sortedAnnouncements);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadAnnouncements();
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/dashboard?edit=${id}`);
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Да ли сте сигурни?',
            text: "Желите да обришете ово обавештење?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Да, обриши!',
            cancelButtonText: 'Одустани'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteDoc(doc(db, "announcements", id));
                    Swal.fire(
                        'Обрисано!',
                        'Обавештење је обрисано.',
                        'success'
                    );
                    loadAnnouncements();
                } catch (error) {
                    console.error(error);
                }
            } else {
                Swal.fire(
                    'Отказано!',
                    'Операција је отказана.',
                    'info'
                );
            }
        });
    };

    const maxLength = 200;
    
    const truncateContent = (content) => {
        return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
    };

    return (
        <div>
            <Navbar />
            {/* Displaying announcements */}
            <div className={styles.displayContainer}>
                {announcements.length === 0 ? <p>Нема доступних обавештења</p> : (
                    <div className={styles.announcementContainer}>
                        {announcements.map(announcement => (
                            <div className={styles.announcement} key={announcement.id}>
                                <h3>{announcement.title}</h3>
                                <p>{truncateContent(announcement.content)}</p>
                                <h2>Објављено {announcement.createdTime}</h2>
                                <Link to={`/announcement/${announcement.id}`} className={styles.viewDetailsLink}>Погледај више</Link>

                                {/* IF you are NOT admin, you can not see edit and delete button */}
                                {isAdmin && (
                                    <div className={styles.buttonContainer}>
                                        <button className={styles.editButton} type="button" onClick={() => handleEdit(announcement.id)}>Измени</button>
                                        <button className={styles.deleteButton} type="button" onClick={() => handleDelete(announcement.id)}>Обриши</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
