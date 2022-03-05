import SvgIcon from "./SvgIcon";
import {ReactComponent as Arrow} from '../assets/img/icons/arrow.svg';



const Slider = () => {
  return (
    <section className="main-content__slider  slider">
      <div className="slider__items">
        <div className="slider__item">
          <p className="slider__item-text">
            Stan Smith,
            <span className="slider__item-marked">
              Forever!
            </span>
          </p>
          <img className="slider__item-img" src="img/slider/slider-1.png" width="642" height="300" alt="Sneakers and Fucking Frog"/>
          <button className="slider__btn  btn" type="button">Buy</button>
        </div>
      </div>



      <div className="slider__sonctrols">
        <button className="slider__control  slider__control--prev  btn" type="button" aria-label="Previous">
          <SvgIcon className="slider__control-icon" Icon={Arrow}/>
        </button>
        <button className="slider__control  slider__control--next  btn" type="button" aria-label="Next">
          <SvgIcon className="slider__control-icon" Icon={Arrow}/>
        </button>
      </div>
    </section>
  )
}



export default Slider;
