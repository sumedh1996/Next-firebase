import firebase from "./clientApp";

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
     // var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      //console.log("token", token);
      console.log("credential", credential);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const signInWithFacebook = () => {
  auth
    .signInWithPopup(facebookProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};


export const signInWithEmail = (email: string, password: string) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(userCredential);
     // console.log("token", userCredential.accessToken);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      // ..
    })
};

export const SignUp = async (email: string, password: string) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      //console.log("token", userCredential.accessToken);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      // ..
    });
};

export function Signout() {
  auth
    .signOut()
    .then((t) => {
      console.log(t);
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

export function GetCurrentUser() {
  const user = auth.currentUser;
  console.log(user);
}
