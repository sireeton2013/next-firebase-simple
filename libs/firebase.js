export default async function db() {
  const firebase = await import('firebase')

  const config = {
    apiKey: "AIzaSyBAcNly2GtCkC564tp047SvuPJs53Y8Wck",
    authDomain: "fir-dev-29016.firebaseapp.com",
    databaseURL: "https://fir-dev-29016.firebaseio.com",
    projectId: "fir-dev-29016",
    storageBucket: "fir-dev-29016.appspot.com",
    messagingSenderId: "420602998657"
  }

  try {
    firebase.initializeApp(config)
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase
}
