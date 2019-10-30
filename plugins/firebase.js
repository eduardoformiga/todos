import firebase from 'firebase/app'
import 'firebase/firestore'
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

if (!firebase.apps.length) {
  const config = {
    apiKey: String(process.env.API_KEY),
    authDomain: String(process.env.AUTH_DOMAIN),
    databaseURL: String(process.env.DATABASE_URL),
    projectId: String(process.env.PROJECT_ID),
    storageBucket: String(process.env.STORAGE_BUCKET),
    messagingSenderId: String(process.env.MESSAGING_SENDER_ID),
    appId: String(process.env.APP_ID)
  }
  firebase.initializeApp(config)
  // firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
export { fireDb }
