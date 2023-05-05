import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <style jsx>{`
        nav {
          background-color: #333;
        }
        a {
          text-decoratin: none;
        }
      `}</style>
    </nav>
  );
}
