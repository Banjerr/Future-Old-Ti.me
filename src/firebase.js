import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAgIv4aDEOi23h7GN2ljrqkRbDQ9CzjH8Y",
  authDomain: "tunetracker-7844e.firebaseapp.com",
  databaseURL: "https://tunetracker-7844e.firebaseio.com",
  projectId: "tunetracker-7844e",
  storageBucket: "tunetracker-7844e.appspot.com",
  messagingSenderId: "851483398440"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;