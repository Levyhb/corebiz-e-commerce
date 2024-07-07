import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import shoppingCart from "../../public/shopping-cart.png";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.header_wrapper}>
        <div className={styles.menu}>
          <MenuIcon />
        </div>

        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>

        <div className={styles.shopping_cart}>
          <Image src={shoppingCart} alt="shopping-cart" />
          <div className={styles.count}>1</div>
        </div>
      </div>

      <div className={styles.header_search}>
        <input type="text" placeholder="O que está procurando?"/>
        <SearchIcon />
      </div>
    </header>
  );
}
