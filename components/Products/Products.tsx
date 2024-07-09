import React, { useState } from "react";
import styles from "./Products.module.css";
import Slider from "react-slick";
import Image from "next/image";
import imageTest from "../../public/shoes.png";
import ReviewStars from "../ReviewStars.tsx/ReviewStars";
import flagOff from "../../public/flag-off.png";
import { useMediaQuery } from "@mui/material";
import { ProductsInterface } from "./products.interface";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const isDesktop = useMediaQuery("(min-width:768px)");
  const [selectedProductIndex, setSelectedProductIndex] = useState<
    number | null
  >(null);
  const { dispatch }: any = useCart();

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: isDesktop ? 4 : 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const items: ProductsInterface[] = [
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

  const addToCart = (product: ProductsInterface) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <div className={styles.product_container}>
      <h2>Mais Vendidos</h2>
      <div className={styles.line}></div>
      <Slider {...settings}>
        {items.map((product, index) => (
          <div
            key={product.productId}
            className={styles.product_card}
            onMouseEnter={() => setSelectedProductIndex(index)}
            onMouseLeave={() => setSelectedProductIndex(null)}
          >
            <Image
              src={product.imageUrl}
              alt={product.productName}
              className={styles.product_image}
            />
            <p className={styles.product_name}>{product.productName}</p>
            <ReviewStars stars={product.stars} />
            <div className={styles.price_container}>
              {product.listPrice ? (
                <span className={styles.list_price}>
                  de {formatPrice(product.listPrice)}
                </span>
              ) : (
                <span className={styles.list_price_null}></span>
              )}
              <h3 className={styles.price}>
                por <strong>{formatPrice(product.price)}</strong>
              </h3>
              <span className={styles.installments}>
                ou em {product.installments[0].quantity}x de{" "}
                {formatPrice(product.installments[0].value)}
              </span>
              {!isDesktop ? (
                <button
                  className={styles.buy_btn}
                  onClick={() => addToCart(product)}
                >
                  COMPRAR
                </button>
              ) : (
                selectedProductIndex === index && (
                  <button
                    className={styles.buy_btn}
                    onClick={() => addToCart(product)}
                  >
                    COMPRAR
                  </button>
                )
              )}
            </div>
            {product.listPrice && (
              <Image src={flagOff} alt="off flag" className={styles.flag_off} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
