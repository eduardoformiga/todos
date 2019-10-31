import firebase from 'firebase/app'
import 'firebase/firestore'
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyAy65k7aLfiicp3HJPE3GrrasYb0liQzd0',
    authDomain: 'todoguava.firebaseapp.com',
    databaseURL: 'https://todoguava.firebaseio.com',
    projectId: 'todoguava',
    storageBucket: 'todoguava.appspot.com',
    messagingSenderId: '365143761302',
    appId: '1:365143761302:web:2fe13f44c66f9e6e163db7'
  }
  firebase.initializeApp(config)
  // firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
export { fireDb }
