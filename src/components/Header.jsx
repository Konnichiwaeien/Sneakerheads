import {useEffect} from 'react';
import {Link} from 'react-router-dom';

import highlight from '../utils/highlight';
import SvgIcon from "./SvgIcon";
import {ReactComponent as Sneakers} from '../assets/img/icons/sneakers.svg';
import {ReactComponent as Cart} from '../assets/img/icons/cart.svg';
import {ReactComponent as Heart} from '../assets/img/icons/heart.svg';
import {ReactComponent as User} from '../assets/img/icons/user.svg';



const Header = ({openCart}) => {
  
  useEffect(() => {
    highlight('.main-header__title', '.main-header__logo', 'main-header__logo--highlighted');
  });



  return (
    <header className="main-header">
      <div className="main-header__container">
        <div className="main-header__info">
          <Link className="main-header__logo" to="/">
            <SvgIcon className="main-header__logo-icon  svg-icon  svg-icon--sneakers" Icon={Sneakers} aria-hidden="true"/>
          </Link>
          <div className="main-header__info-content">
            <Link to="/">
              <h1 className="main-header__title">SNEAKERHEADS</h1>
            </Link>
            <p className="main-header__text">You are what you wear</p>
          </div>
  
        </div>



        <div className="main-header__user">
          <ul className="main-header__user-list">
            <li className="main-header__user-item">
              <button className="main-header__user-btn  main-header__user-btn--cart  btn" type="button" onClick={openCart}aria-label="Order cost">
                <SvgIcon className="main-header__icon  main-header__icon--cart  svg-icon" Icon={Cart} aria-hidden="true"/>
                <span className="main-header__user-text">120 $</span>
              </button>
            </li>

            <li className="main-header__user-item">
              <Link to="/favourites" className="main-header__user-btn  btn" aria-label="Favourites">
                <SvgIcon className="main-header__icon  main-header__icon--heart  svg-icon  svg-icon--heart" Icon={Heart} aria-hidden="true"/>
              </Link>
            </li>

            <li className="main-header__user-item">
              <Link to="" className="main-header__user-btn  btn" type="button" onClick={openCart} aria-label="Orders">
                <SvgIcon className="main-header__icon  main-header__icon--user  svg-icon" Icon={User} aria-hidden="true"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}



export default Header;
