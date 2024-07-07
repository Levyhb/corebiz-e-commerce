import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import shoppingCart from "../../public/shopping-cart.png";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.menu}>
        <MenuIcon/>
      </div>

      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>

      <div className={styles.shoppingCart}>
        <Image src={shoppingCart} alt="shopping-cart" />
      </div>
    </header>
  );
}
