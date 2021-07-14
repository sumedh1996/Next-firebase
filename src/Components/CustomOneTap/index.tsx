import React from "react";

import { useGoogleOneTapLogin } from "react-google-one-tap-login";

const CustomOneTap = () => {
  async function handleSuccess(googleUser: any) {
    // const t = googleUser.getAuthResponse().id_token;
    // console.log(t);
    console.log(googleUser);
    const t = await googleUser.getAuthResponse();
    console.log(t.id_token);
  }

  useGoogleOneTapLogin({
    onSuccess: (response) => handleSuccess(response),
    onError: (response) => console.log(response),
    googleAccountConfigs: {
      client_id:
        "AddGoogleClient",
    },
  });
  return null;
};

export default CustomOneTap;
