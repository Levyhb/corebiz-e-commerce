import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import shoppingCart from "../../public/shopping-cart.png";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useMediaQuery } from "@mui/material";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width:768px)");
  const [cartQuantity, setCartQuantity] = useState(0);
  const { cart }: any = useCart();

  useEffect(() => {
    setCartQuantity(cart.length)
  }, [cart]);

  return (
    <header className={`${styles.header}`}>
      <div className={styles.header_wrapper}>
        {!isDesktop && (
          <div className={styles.menu}>
            <MenuIcon />
          </div>
        )}
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>

        {isDesktop && (
          <div className={styles.header_search}>
            <input type="text" placeholder="O que está procurando?" />
            <SearchIcon />
          </div>
        )}

        {isDesktop && (
          <div className={styles.account}>
            <PersonOutlineIcon />
            <span>Minha Conta</span>
          </div>
        )}

        <div className={styles.shopping_cart}>
          <Image src={shoppingCart} alt="shopping-cart" />
          <div className={styles.count}>{cartQuantity}</div>
        </div>
      </div>

      {!isDesktop && (
        <div className={styles.header_search}>
          <input type="text" placeholder="O que está procurando?" />
          <SearchIcon />
        </div>
      )}
    </header>
  );
}
