import {addDoc, collection} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";
import * as data from "./data.json";


// package.json végére!
//  "type": "module"


const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = getFirestore();
// connectFirestoreEmulator(db, 'localhost', 8080);
console.log('Firebase initialized');


// person objektumok mentése firestore-ba
data.default.posts.forEach(async person => {
   const personRef = await addDoc(collection(db, 'posts'), person);
   console.log(`Created person with ID ${personRef.id}`);
});
