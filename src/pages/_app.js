// pages/_app.js

import { useRouter } from "next/router";
import Navbar from "../Components/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const hideNavbar = Component.hideNavbar || router.pathname === "/404";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Component {...pageProps} />
    </>
  );
}