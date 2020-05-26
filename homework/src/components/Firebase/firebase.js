import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDmIkyNv2HrZAc4KmRfXG72ZhtbCWzCktI",
  authDomain: "js-homework-e0648.firebaseapp.com",
  databaseURL: "https://js-homework-e0648.firebaseio.com",
  projectId: "js-homework-e0648",
  storageBucket: "js-homework-e0648.appspot.com",
  messagingSenderId: "23124008288",
  appId: "1:23124008288:web:2970715de9d45caa1ad205"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.stor = app.storage().ref();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  storageRef = uid => this.stor.child(`photos/${uid}`);
}

export default Firebase;