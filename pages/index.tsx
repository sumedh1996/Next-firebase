import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CustomOneTap from "../src/Components/CustomOneTap";
import React from "react";
import Link from "next/link";
import ScriptOneTap from "../src/Components/ScriptOneTap";

export default function Home() {
  if (typeof window === "undefined") {
    return null;
  } else {
    return (
      <div>
        <Link href="auth">
          <a>auth</a>
        </Link>
        <ScriptOneTap />
      </div>
    );
  }
}
