import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./rating.css";
const Rating = ({ projectId }) => {
  const storedRating = localStorage.getItem(`userRating_${projectId}`);
  const [rating, setRating] = useState(
    storedRating ? parseInt(storedRating) : null
  );
  const [hover, setHover] = useState(0); //initial hover state to 0

  const handleRating = (currentRating) => {
    setRating(currentRating);
    localStorage.setItem(`userRating_${projectId}`, currentRating);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <FontAwesomeIcon
              icon={faStar}
              className={
                currentRating <= (hover || rating)
                  ? "rated star"
                  : "unrated star"
              }
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)} // hover to 0 on mouse leave
              onClick={() => handleRating(currentRating)}
              style={{ cursor: "pointer" }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
