import React, { useState } from "react";
import styles from "./Products.module.css";
import Slider from "react-slick";
import Image from "next/image";
import imageTest from "../../public/shoes.png";
import ReviewStars from "../ReviewStars.tsx/ReviewStars";
import flagOff from "../../public/flag-off.png";
import { useMediaQuery } from "@mui/material";

export default function Products() {
  const isDesktop = useMediaQuery("(min-width:768px)");
  const [selected, setSelected] = useState<boolean>(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: isDesktop ? 4 : 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const items = [
    {
      productId: 2,
      productName: "SANDÁLIA LINHO BROWN",
      stars: 4,
      imageUrl: imageTest,
      price: 19900,
      installments: [
        {
          quantity: 4,
          value: 4975,
        },
      ],
    },
    {
      productId: 2,
      productName: "SANDÁLIA LINHO BROWN",
      stars: 4,
      imageUrl: imageTest,
      listPrice: 29900,
      price: 19900,
      installments: [
        {
          quantity: 4,
          value: 4975,
        },
      ],
    },
    {
      productId: 2,
      productName: "SANDÁLIA LINHO BROWN",
      stars: 4,
      imageUrl: imageTest,
      listPrice: 29900,
      price: 19900,
      installments: [
        {
          quantity: 4,
          value: 4975,
        },
      ],
    },
    {
      productId: 2,
      productName: "SANDÁLIA LINHO BROWN",
      stars: 4,
      imageUrl: imageTest,
      listPrice: 29900,
      price: 19900,
      installments: [
        {
          quantity: 4,
          value: 4975,
        },
      ],
    },
  ];

  const formatPrice = (price: number): string => {
    return (price / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className={styles.product_container}>
      <h2>Mais Vendidos</h2>
      <div className={styles.line}></div>
      <Slider {...settings}>
        {items.map((e, index) => (
          <div
            key={e.productId}
            className={styles.product_card}
            onMouseEnter={() => setSelectedProductIndex(index)}
            onMouseLeave={() => setSelectedProductIndex(null)}
          >
            <Image
              src={e.imageUrl}
              alt={e.productName}
              className={styles.product_image}
            />
            <p className={styles.product_name}>{e.productName}</p>
            <ReviewStars stars={e.stars} />
            <div className={styles.price_container}>
              {e.listPrice ? (
                <span className={styles.list_price}>
                  de {formatPrice(e.listPrice)}
                </span>
              ) : (
                <span className={styles.list_price_null}></span>
              )}
              <h3 className={styles.price}>
                por <strong>{formatPrice(e.price)}</strong>
              </h3>
              <span className={styles.installments}>
                ou em {e.installments[0].quantity}x de{" "}
                {formatPrice(e.installments[0].value)}
              </span>
              {!isDesktop ? (
                <button className={styles.buy_btn}>COMPRAR</button>
              ) : (
                selectedProductIndex === index && <button className={styles.buy_btn}>COMPRAR</button>
              )}
            </div>
            {e.listPrice && (
              <Image src={flagOff} alt="off flag" className={styles.flag_off} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
