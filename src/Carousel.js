import React, { useState } from "react";
import { images } from "./utils/images";
import "./style/Carousel.css";

function Carousel() {
  const [currentImg, setCurrentImg] = useState(0);

  const handlePrevious = () => {
    // currentImg > 0 && setCurrentImg(currentImg - 1);
    if (currentImg > 0) {
      setCurrentImg(currentImg - 1);
    } else if (currentImg === 0) {
      setCurrentImg(currentImg + (images.length - 1));
    }
  };

  const handleNext = () => {
    // currentImg < images.length - 1 && setCurrentImg(currentImg + 1);
    if (currentImg < images.length - 1) {
      setCurrentImg(currentImg + 1);
    } else if (currentImg === images.length - 1) {
      setCurrentImg(currentImg - (images.length - 1));
    }
  };
  return (
    <div className="carousel-container">
      <button className="Btn" onClick={handlePrevious}>
        Previous Image
      </button>
      <div>
        <img src={images[currentImg].img} alt={images[currentImg].title} />
      </div>
      <button className="Btn" onClick={handleNext}>
        Next Image
      </button>
    </div>
  );
}

export default Carousel;
