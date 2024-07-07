import React from "react";
import styles from "./Footer.module.css";
import EmailIcon from "@mui/icons-material/Email";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import logo from "../../public/site-logo-corebiz-preto-cinza.png"
import vtex from "../../public/vtex-logo.png"

import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.location}>
        <h2>Localização</h2>
        <div className={styles.line}></div>
        <p>
          Avenida Andrômeda, 2000. block 6 e 8 <br /> Alphavile SP
        </p>
        <p>brasil@corebiz.ag</p>
        <p>55 11 3090 1039</p>
      </div>

      <div>
        <div className={`${styles.mail_btn} ${styles.contact_btn}`}>
          <EmailIcon />
          <span>ENTRE EM CONTATO</span>
        </div>
  
        <div className={`${styles.call_btn} ${styles.contact_btn}`}>
          <HeadsetMicIcon />
          <span>FALE COM NOSSO CONSULTOR ONLINE</span>
        </div>
      </div>

      <div className={styles.footer_logos}>
        <div className={styles.corebiz_logo}>
          <p>Created by</p>
          <Image src={logo} alt="logo" />
        </div>
        <Image src={vtex} alt="vtex-logo" className={styles.vtex_logo}/>
      </div>
    </footer>
  );
}
