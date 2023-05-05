import { useState } from "react";
import NavBar from "./components/NavBar";
import Head from "next/head";
import Seo from "./components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1>hello</h1>
    </div>
  );
}
