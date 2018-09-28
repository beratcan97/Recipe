import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBz5omD-G4sSZzVDoYeWXJRKd0XGuznBVY",
    authDomain: "recept-1a5da.firebaseapp.com",
    databaseURL: "https://recept-1a5da.firebaseio.com",
    projectId: "recept-1a5da",
    storageBucket: "recept-1a5da.appspot.com",
    messagingSenderId: "829027743533"
};
firebase.initializeApp(config);

export default firebase
