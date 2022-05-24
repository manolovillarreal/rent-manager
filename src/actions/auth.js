import Swal from "sweetalert2";
import { auth, googleAuthProvider } from "../firebase/firebaseConfig";

import {
    updateProfile,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";



import { types } from '../types/types';
import { finishLoading, startLoading } from "./ui";



export const  startLoginWithEmail= (email,password) => {
    return (dispatch) => {
        dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch((err) => {
                console.log(err.code);
                // dispatch(setError("Error de autenticación"));
                dispatch(finishLoading());
                Swal.fire("Error", err.message, "error");
            });
    };
};
export const startRecoveryPassword = (email) => {
    return (dispatch) => {
        dispatch(startLoading());
        sendPasswordResetEmail(auth, email)
            .then(() => {               
                dispatch(finishLoading());
                Swal.fire("Email enviado","Se ha enviado un enlace de recuperación a su correo","success")
            })
            .catch((err) => {
                console.log(err.code);
                // dispatch(setError("Error de autenticación"));
                dispatch(finishLoading());
                console.log(err);
                Swal.fire("Error", err.message + " " +err.code, "error");
            });
    };
};
export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                console.log(user.photoURL);
                dispatch(login(user.uid, user.displayName, user.photoURL));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});