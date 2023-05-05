import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/about" ? "blue" : "red" }}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
