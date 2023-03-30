// React js
import { useEffect, useState } from "react";

// Firebase
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";

// Redux
import { useDispatch } from "react-redux";
import { setActiveUser } from "./src/redux/slices/userSlice";

const firebaseConfig = {
  apiKey: "AIzaSyD9p3I_UwoE0lZ3hwGASKopcFPoXDYmSwA",
  authDomain: "easypay-f768e.firebaseapp.com",
  projectId: "easypay-f768e",
  storageBucket: "easypay-f768e.appspot.com",
  messagingSenderId: "634847825308",
  appId: "1:634847825308:web:e808437bc707bc3ad08c59",
};

const Firebase = initializeApp(firebaseConfig);

export const auth = getAuth(Firebase);
export const firestore = getFirestore(Firebase);

export default Firebase;

// Custom hook
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Logica para cargar usuario en redux
        cargarDatosUsuarioAuth(user.uid);
        console.log("se cargo el usuario en redux");
      }
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  const cargarDatosUsuarioAuth = async (uid) => {
    // Leemos datos del usuario de firebase
    const docRef = doc(firestore, "usuarios", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Asignamos los datos obtenidos a REDUX
      dispatch(
        setActiveUser({
          nombre: docSnap.data().nombre,
          email: docSnap.data().email,
        })
      );
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return currentUser;
};
