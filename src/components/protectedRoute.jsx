import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authState = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser(currentUser);
            } else {
                navigate("/admin");
            }
            setIsLoading(false);
        })

        return () => authState;
    }, [navigate]);

    if(isLoading) {
        return <div>Loading...</div>
    }

    return user ? children: null;
};

export default ProtectedRoute;
