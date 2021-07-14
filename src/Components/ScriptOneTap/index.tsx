import Head from "next/head";
import React, { useEffect } from "react";

declare var google: any;

const ScriptOneTap = () => {
  function handleCredentialResponse(response) {
    console.log(response);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onload = function () {
        google.accounts.id.initialize({
          client_id:
            "AddGoogleClient",
          callback: handleCredentialResponse,
        });
        google.accounts.id.prompt();
      };
    }
  }, []);

  return (
    <div>
      <Head>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </Head>
      {/* <div
        id="g_id_onload"
        data-client_id="1006593267796-aipr3q43095ttf4gnl47s0jt5hhsbahh.apps.googleusercontent.com"
        data-login_uri="http://localhost:3000"
        data-callback={handleCredentialResponse}
      ></div> */}
    </div>
  );
};

export default ScriptOneTap;
