import {useState, useContext} from 'react';
import axios from 'axios';

import AppContext from '../context';
import Card from './Card';
import Info from './Info';
import SvgIcon from './SvgIcon';
import {ReactComponent as Close} from '../assets/img/icons/close.svg';
import {ReactComponent as Bag} from '../assets/img/icons/shopping-bag.svg';

const getDelay = (time) => new Promise((resolve) => setTimeout(resolve, time))

const Cart = ({closeCart, removeCartItem}) => {
  const {cartItems, setCartItems} = useContext(AppContext);
  const [orderID, setOrderId] = useState(null);
  const [isOrderDone, setIsOrderDone] = useState(false);



  const orderBtnCLickHandler = async () => {
    try {
      const {data} = await axios.post('https://618c8f44ded7fb0017bb95de.mockapi.io/orders', {items: cartItems});
      axios.put('https://618c8f44ded7fb0017bb95de.mockapi.io/cart', {});
      for (let idx = 0; idx < cartItems.length; idx++) {
        const elem = cartItems[idx];
        await axios.delete('https://618c8f44ded7fb0017bb95de.mockapi.io/cart/' + elem.id);
        await getDelay(100);
      }
      setOrderId(data.id);
      setIsOrderDone(true);
      setCartItems([]);
    } catch (error) {
      alert('We don\'t need your money');
    }
  }

  return (
    <aside className="cart">
      {cartItems.length ? (
        <div className="cart__container">
        <h3 className="cart__title">Cart</h3>
        <button className="cart__close  btn" aria-label="Close cart" onClick={closeCart}>
          <SvgIcon className="cart__icon  card__icon--close  svg-icon" Icon={Close}/>
        </button>
        <div className="cart__items">
          {cartItems.map((item) => (<Card data={item} isCart={true} key={item.id} removeCartItem={() => removeCartItem(item.id)}/>))}
        </div>

        <footer className="cart__order">
          <p className="cart__text">
            Total:
            <span className="cart__price">456 $</span>
          </p>
          <p className="cart__text">
            Discount:
            <span className="cart__price">50 $</span>
          </p>
          <button className="cart__btn  btn  btn--primary" type="button" onClick={orderBtnCLickHandler}>
            <span className="cart__btn-text">Buy</span>
            <SvgIcon className="cart__icon  cart__icon--bag  svg-icon" Icon={Bag} aria-hidden="true"/>
          </button>
        </footer>
      </div>
      ) : (
      <div className="cart__container">
        {!isOrderDone ? (
          <Info title={'Cart is empty'} descr={'You know what to do big boy'} img={'empty'}/>) : 
          (<Info title={'Order is done!'} descr={'Give us your moneeey'} img={'done'}/>)}
      </div>
      )}
    </aside>
  )
}



export default Cart;
