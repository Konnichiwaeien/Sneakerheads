import {useContext} from 'react';

import AppContext from '../context';
import SvgIcon from './SvgIcon';
import {ReactComponent as Close} from '../assets/img/icons/close.svg';



const Info = ({title, descr, img}) => {
  const {cartCloseClickHandler} = useContext(AppContext);



  return (
    <div className="cart__info">
      <h3 className="cart__info-title">{title}</h3>
      <p className="cart__info-descr">{descr}</p>
      <img className="cart__info-img" src={`img/info/${img}.png`} alt=""/>
      <button className="cart__btn  btn  btn--primary" type="button" onClick={() => cartCloseClickHandler(false)}>
        <span className="cart__btn-text">Back to sneakers</span>
        <SvgIcon className="cart__icon  cart__icon--bag  svg-icon" Icon={Close} aria-hidden="true"/>
      </button>
    </div>
  )
}



export default Info;
