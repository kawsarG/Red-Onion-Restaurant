    import * as firebase from "firebase/app";
    import "firebase/auth";
    import firebaseConfig from '../../firebaseConfig';
    import { useEffect } from "react";

    firebase.initializeApp(firebaseConfig)
    const Auth = () => {

        const sinUpWithPassword = (email, password) => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(
                res => {
                    console.log(res);
                    console.log("signined")
                    window.location.href = "/"
                }
            ).catch(function (error) {
            });
        }

        const SignOut = () => {
            firebase.auth().signOut().then(function () {
                // Sign-out successful.
                console.log("signout")

            }).catch(function (error) {
                // An error happened.
            });
        }

        
        const SignIn = (email, password) => {
            firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
                console.log("signined")
                window.location.href = "/"
            }
            ).catch(function (error) {
            });

        }


        useEffect(() => {

            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    const email = user.email;
                    console.log(email)


                } else {
                    // No user is signed in.
                    console.log("no user")
                }
            });
        }, [])

        return {
            sinUpWithPassword,
            SignIn,
            SignOut,

        }
    }
    export default Auth;