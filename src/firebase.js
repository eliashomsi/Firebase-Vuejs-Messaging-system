import {initializeApp} from 'firebase'

// config
let config = {
  apiKey: 'AIzaSyAg_0OZsESbwhaS6TfxKhV5rEfDRppb0Uo',
  authDomain: 'cybersecuritycapstone.firebaseapp.com',
  databaseURL: 'https://cybersecuritycapstone.firebaseio.com',
  projectId: 'cybersecuritycapstone',
  storageBucket: 'cybersecuritycapstone.appspot.com',
  messagingSenderId: '258984364496'
}

// init firebase
const app = initializeApp(config)

// export things
export const db = app.database()
export const postsRef = db.ref('posts')
export const auth = app.auth()
