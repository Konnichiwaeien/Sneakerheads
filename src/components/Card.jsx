import {useState, useEffect, useContext} from 'react';
import classnames from 'classnames';
import ContentLoader from 'react-content-loader';

import AppContext from '../context';
import SvgIcon from './SvgIcon';
import {ReactComponent as Heart} from '../assets/img/icons/heart.svg';
import {ReactComponent as Plus} from '../assets/img/icons/plus.svg';
import {ReactComponent as Check} from '../assets/img/icons/check.svg';



const Card = ({data = {}, isMain, isCart, isCartItem, isFavItem, isLoaded = true, onCartItem, removeCartItem, onFavItem}) => {

  const {title, price, img} = data;
  const [isAdded, setIsAdded] = useState(isCartItem);
  const [isFavourite, setIsFavourite] = useState(isFavItem);

  // const addBtnClickHandler = () => {
  //   setIsAdded(!isAdded);
  //   addToCart();
  //   console.log(typeof(id));
  // }
  // console.log(itemCartState);

  useEffect(() => {
    setIsAdded(isCartItem);
  }, [isCartItem]) // можно и так и через useContext, это связанно с тем, что иначе при удалении айтема из корзины, внешний вид эла на странице никак не меняется ибо чтобы он поменялся нужно изменить state, который просто от ререндера не меняется, а меняется с помощью setState!

  const cartBtnClickHandler = () => {
    setIsAdded(!isAdded);
    onCartItem(data);
    // console.log(typeof(id));
  }

  const favBtnClickHandler = () => {
    onFavItem(data);
    setIsFavourite(!isFavourite);
  }



  return (
    <>
    {!isLoaded ? (
      <ContentLoader
        className={classnames({
          'main-content__card': isMain,
          'cart__item': isCart})}
        speed={2}
        width={330}
        height={560}
        viewBox="0 0 155 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
        <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
        <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
      </ContentLoader>
    ) : ( 
      <article className={classnames('card', {
        'main-content__card': isMain,
        'cart__item': isCart
      })}>
        <img className="card__img" src={img} alt="" width="133" height="112"/>
        <div className="card__info">
          <h1 className="card__title">{title}</h1>
          <p className="card__price">
            Price:
            <b className="card__price-value">
              {price} $
            </b>
          </p>
          <button className={classnames('card__btn  card__btn--fav  btn', {'card__btn--active' : isFavourite})} aria-label="Add to      favourite" onClick={favBtnClickHandler}>
            <SvgIcon className="card__icon  card__icon--fav  svg-icon" Icon={Heart}/>
          </button>
          {/* <button className="card__btn  card__btn--add  btn" aria-label="Add to cart" onClick={addBtnClickHandler}>
            <SvgIcon className={`card__icon  card__icon--${isAdded ? 'add' : 'plus'}  svg-icon`} Icon={isAdded ? Check : Plus}/>
          </button> */}
          {!isAdded && isMain && 
            <button className="card__btn  card__btn--add  btn" aria-label="Add to cart" onClick={cartBtnClickHandler}>
              <SvgIcon className={`card__icon  card__icon--add  svg-icon`} Icon={Plus}/>
            </button>
          }
          {isCart &&
          <button className="card__btn  card__btn--add  btn" aria-label="Remove from cart" onClick={removeCartItem}>
            <SvgIcon className={`card__icon  card__icon--'plus'  svg-icon`} Icon={Check}/>
          </button>}

          {isAdded ? 'fwfwfwfw' : 'proeebe'}
        </div>
      </article>
    )}
    </>
  )
}



export default Card;