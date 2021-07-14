import React from "react";
import OneTap from "../src/Components/OneTap";

export default function Login() {
  if (typeof window === "undefined") {
    return null;
  } else {
    return <OneTap />;
  }
}
