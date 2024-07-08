import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Carousel.module.css";

export default function Carousel({ items }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className={styles.carousel_container}>
      <Slider {...settings}>
        {items.map((item: any, index: number) => (
          <div key={index} className={styles.carousel_paper}>
            <Image
              src={item.img}
              alt={`Imagem do carrossel ${index + 1}`}
              loading="lazy"
              layout="responsive"
              width={700}
              height={475}
            />
            <div className={styles.title_container}>
              {item.text1 && (
                <p className={`${styles.text1} ${styles.title}`}>
                  {item.text1}
                </p>
              )}
              {item.text2 && (
                <p className={`${styles.text2} ${styles.title}`}>
                  {item.text2}
                </p>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
