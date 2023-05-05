import { useRouter } from "next/router";
import Link from "next/link";
import styles from ".//NavBar.module.css";
import { useEffect } from "react";
import { useState } from "react";

export default function NavBar() {
  const [color, setColor] = useState("black");
  const [color2, setColor2] = useState("black");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      setColor("blue");
      console.log("1");
    }
  }, [router.pathname]);

  useEffect(() => {
    if (router.pathname === "/about") {
      setColor2("blue");
      console.log("2");
    }
  }, [router.pathname]);

  return (
    <nav>
      <Link
        href="/"
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
      >
        About
      </Link>
    </nav>
  );
}
