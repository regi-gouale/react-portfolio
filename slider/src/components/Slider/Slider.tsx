import { useState } from "react";
import "./Slider.css";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import sliderData from "../../data/sliderData";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  function toggleImage(direction: number) {
    if (sliderIndex + direction > sliderData.length) {
      setSliderIndex(1);
    } else if (sliderIndex + direction < 1) {
      setSliderIndex(sliderData.length);
    } else {
      setSliderIndex(sliderIndex + direction);
    }
  }
  return (
    <>
      <p className="index-info">
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((obj) => obj.id === sliderIndex)?.description}
        </p>
        <img
          src={`"/images/img-${sliderIndex}.jpg"`}
          alt="estate's rooms"
          className="slider-img"
        />

        <button
        onClick={()=> {toggleImage(-1)}}
        className="navigation-button prev-button">
          <img src={leftArrow} alt="previous image" />
        </button>
        <button
        onClick={()=> {toggleImage(1)}}
        className="navigation-button next-button">
          <img src={rightArrow} alt="next image" />
        </button>
      </div>
    </>
  );
}
