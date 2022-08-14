import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD29kHfGf6UI-vURSfkLwTGiz8gdpeRJS4",
  authDomain: "oath-623ff.firebaseapp.com",
  projectId: "oath-623ff",
  storageBucket: "oath-623ff.appspot.com",
  messagingSenderId: "1082572176376",
  appId: "1:1082572176376:web:e432251ca8cf1c328b340d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();


export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((result) =>{
        console.log(result);
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL

        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("profilePic",profilePic)
        
    })
    .catch((error) =>{
        console.log(error);
    });
}

export const signingOut = () =>{
    console.log('CALLING')
    signOut(auth).then(() => {
        // Sign-out successful.
        window.localStorage.clear();
        console.log('successful')
      }).catch((error) => {
        // Sign-in error
        console.log(error)
      });
      console.log('CALLED')
}


  