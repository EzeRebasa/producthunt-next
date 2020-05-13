import React, { useEffect, useState} from 'react';
import firebase from '../firebase';

function useAuthentication() {
    const [ authenticateUser, setAuthenticateUser ] = useState(null);
    
    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            if( user ) {
                setAuthenticateUser(user);
            } else {
                setAuthenticateUser(null);
            }
        })
        return () => unsubscribe
    }, []);

    return authenticateUser;
}

export default useAuthentication;