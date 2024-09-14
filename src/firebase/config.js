import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBo7oAkY78vdkvLIAgq6Jq0-pkvaJxOsKA",
    authDomain: "vueblog-df84d.firebaseapp.com",
    projectId: "vueblog-df84d",
    storageBucket: "vueblog-df84d.appspot.com",
    messagingSenderId: "642376482628",
    appId: "1:642376482628:web:4a355953fc279f7aa46111"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export {projectFirestore}