import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/database'
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification
} from "firebase/auth";
import {
  getFirestore,
  collection,
  setDoc,
  getDocs,
  query,
  doc,
  updateDoc,
  where,
  orderBy,
  addDoc,
  getDoc
} from "firebase/firestore";
import { getStorage , ref, getDownloadURL , uploadBytes  } from "firebase/storage";
import swal from 'sweetalert';
const firebaseConfig = {
  apiKey: "AIzaSyD9jVJFwKNlCsW-COdP6cndnvShKEBSG0g",
  authDomain: "deepwall-6a8d0.firebaseapp.com",
  projectId: "deepwall-6a8d0",
  storageBucket: "deepwall-6a8d0.appspot.com",
  messagingSenderId: "354115952389",
  appId: "1:354115952389:web:9f830fba7495324278616c",
  measurementId: "G-ZPV86PPBER"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);//Auth
const db = getFirestore(app)//DB
const storage = getStorage();
const rdb = firebase.database()


const userRegister = async (form) => {
    const { firstName , lastName , organization , email , password } = form;
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const uid = result.user.uid;
    const date = new Date().toLocaleDateString({
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    var verify = sendEmailVerification(result.user);


    const selected = false
    await setDoc(doc(db, "users", uid), {
      firstName,
      lastName,
      organization,
      email,
      date,
      uid,
      selected,
    });
    // console.log('result ==========>>> ' , result)

    
};



// ================================== User LogIn ==================================== \\
async function SignIn (email,password) {
    await signInWithEmailAndPassword(auth, email, password)
}

// ================================== User Log Out ==================================== \\
const logOut = async (popup = '') => {
    // console.log('logOut', auth.currentUser)
    await signOut(auth)
      .then(() => {
        if(!popup) {
        swal({
            title: "Log Out!",
            text: "Log Out your account",
            icon: "warning",
            button: "OK",
        });
        }
      })
      .catch((error) => {
        alert("Signout Error ", error.message);
      });
};


async function uploadImage({file , fileName}) {
  // console.log('file', fileName)
  const imageRef = ref(storage, 'productImages/' + fileName)
  const uploadedImage = await uploadBytes(imageRef, file)
  const url = await getDownloadURL(uploadedImage.ref)
  return  url
}





export {
    userRegister,
    SignIn,
    logOut,
    onAuthStateChanged,
    auth,
    uploadImage
}