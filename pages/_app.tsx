import type { AppProps } from "next/app";
import NavBar from "./components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </>
  );
}
