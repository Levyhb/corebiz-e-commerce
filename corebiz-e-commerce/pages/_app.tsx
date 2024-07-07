import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MyProvider } from "../context/MyContext";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </MyProvider>
  );
}
