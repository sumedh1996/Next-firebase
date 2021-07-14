import React from "react";

import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import {
  signInWithFacebook,
  signInWithGoogle,
  signInWithEmail,
  Signout,
  GetCurrentUser,
  SignUp,
} from "../../../firebase/service";

const OneTap = () => {
  useGoogleOneTapLogin({
    onSuccess: (response) => console.log(response),
    onError: (response) => console.log(response),
    googleAccountConfigs: {
      client_id:
        "AddGoogleClient",
    },
  });
  return (
    <div className="login-buttons">
      <button className="login-provider-button" onClick={signInWithGoogle}>
        <span> Continue with Google</span>
      </button>
      <button className="login-provider-button" onClick={signInWithFacebook}>
        <span> Continue with fb</span>
      </button>
      <button
        className="email"
        onClick={() =>
          signInWithEmail("yacin12sbfkhvsvbk333@godpeed.com", "12345678")
        }
      >
        <span> email signin</span>
      </button>
      <button className="signout" onClick={() => Signout()}>
        <span> Signout</span>
      </button>

      <button className="currentUser" onClick={() => GetCurrentUser()}>
        <span> user</span>
      </button>
      <button
        className="signup"
        onClick={() => SignUp("yacin12sbfkhvsvbk333@godpeed.com", "12345678")}
      >
        <span>Signup</span>
      </button>
    </div>
  );
};

export default OneTap;
