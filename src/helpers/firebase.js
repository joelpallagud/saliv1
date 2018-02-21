import * as firebase from 'firebase';

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
