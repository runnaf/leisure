import { useState } from "react";
import { data } from "./dataSlider";

export function GetSlider () { 
  const [slider, setSlider] = useState(0);
  const {image, description} = data[slider];

  const isPrevios = () => {
    if (slider === 0) {
      setSlider(data.length-1)
    } else setSlider(slider - 1)
  }
  
  const isNext = () => {
    if (slider === data.length - 1) {
      setSlider(0)
    } else {setSlider(slider + 1)}
  }

  return (
    <div className="slider">
      <h2 className="slider__title">Зарядись новогодним настроением</h2>
      <img className="slider__image" src={image} alt={description} />
      <div className="slider__button-container">
        <button className="btn slider__button" onClick={isPrevios}>Предыдущий</button>
        <button className="btn slider__button" onClick={isNext}>Следующий</button>
      </div>
    </div>
  )
}