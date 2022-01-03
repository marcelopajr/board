import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: 'AIzaSyBx_yMxjqrVxNecx92I2ef-VUi_By3Cq8A',
  authDomain: 'boardapp-1cd0f.firebaseapp.com',
  projectId: 'boardapp-1cd0f',
  storageBucket: 'boardapp-1cd0f.appspot.com',
  messagingSenderId: '185766689090',
  appId: '1:185766689090:web:af98577fdb78f1cbc2f0db',
  measurementId: 'G-18T6VR7N96',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
