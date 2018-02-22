//import firebase from '../firebase';

export function signUp(email, password)
{
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
	return error.message;
    })
    return true;
}

export function doPasswordsMatch(password, confirmPassword)
{
    return (password == confirmPassword);
}

export function storeInfo(userId, birthday, phone)
{
    firebase.database().ref('users/' + userId).set({
	birthday: birthday,
	phone: phone
    })
}
