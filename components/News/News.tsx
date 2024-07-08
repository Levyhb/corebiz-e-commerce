import React, { useState } from "react";
import styles from "./News.module.css";

export default function News() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const registerNews = (e: React.FormEvent) => {
    setEmail("");
    setName("");
    e.preventDefault();
    setIsRegistered(true);
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const invalidEmail = email.length <= 0 || !emailPattern.test(email);
  const disabledBtn = !name || invalidEmail;

  return (
    <div className={styles.news_container}>
      { !isRegistered ? (
        <>
          <h2 className={styles.news_title}>
            Participe de nossas news com promoções e novidades!
          </h2>
          <form className={styles.news_form} onSubmit={registerNews}>
            <div className={styles.input_group}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                className={!name ? styles.error_input : styles.success_input}
              />
              {!name && (
                <p className={styles.error_message}>
                  Preencha com seu nome completo
                </p>
              )}
            </div>
            <div className={styles.input_group}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className={
                  invalidEmail ? styles.error_input : styles.success_input
                }
              />
              {invalidEmail && (
                <p className={styles.error_message}>
                  Preencha com um email válido
                </p>
              )}
            </div>
            <button disabled={disabledBtn}>Eu Quero!</button>
          </form>{" "}
        </>
      ) : (
        <>
        <div className={styles.success_container}>
          <div className={styles.success_message}>
            <h2>Seu e-mail foi cadastrado com sucesso!</h2>
            <p>A partir de agora você receberá as novidades e ofertas exclusivas</p>
          </div>
          <button onClick={() => setIsRegistered(false)}>
            Cadastrar novo e-mail
          </button>
        </div>
        </>
      )}
    </div>
  );
}
