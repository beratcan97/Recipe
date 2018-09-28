import firebase from '../../firebase.js';

export function ComponentDidMount(setUser) {
    firebase.auth()
        .onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser('');
            }
        });
}

export function OnLogin(email, password) {
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => console.log(error));
}

export function OnLogout() {
    firebase.auth()
        .signOut();
}

export function OnRegister(email, password) {
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => console.log(error));
}

export function CreateRecept(contentHeader, content) {
    const objectToPush = {
        Header: contentHeader,
        Content: content,
        Baked: 0,
        Timestamp: (new Date).getTime()
    }
    firebase.database().ref(`Recipe`).push(objectToPush);
}
