import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import style from "./ReviewStars.module.css";

interface ReviewStarsProps {
  stars: number;
}

const ReviewStars: React.FC<ReviewStarsProps> = ({ stars }) => {
  const clampedStars = Math.min(Math.max(stars, 0), 5);
  const fullStars = Math.floor(clampedStars);
  const halfStars = clampedStars % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className={style.reviewStars}>
      {Array.from({ length: fullStars }).map((_, index) => (
        <StarIcon key={`full-${index}`} />
      ))}
      {Array.from({ length: halfStars }).map((_, index) => (
        <StarHalfIcon key={`half-${index}`} />
      ))}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <StarOutlineIcon key={`empty-${index}`} />
      ))}
    </div>
  );
};

export default ReviewStars;
