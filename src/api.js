import firebase from './firebase.js'

const database = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();

export function signInWithFacebook (fbToken, callback) {
    const credential = provider.credential(fbToken);
    auth.signInWithCredential(credential)
        .then((user) => getUser(user, callback))
        .catch((error) => callback(false, null, error));
}
