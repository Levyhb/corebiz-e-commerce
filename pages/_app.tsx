import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </CartProvider>
  );
}
