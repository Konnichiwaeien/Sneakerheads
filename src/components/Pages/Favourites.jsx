import {useState, useContext} from 'react';

import AppContext from '../../context';
import Card from '../Card';



const Favourites = ({onCartItem, onFavItem}) => {
  const {items, cartItems, favItems, isLoaded, checkIsItemAdded} = useContext(AppContext);

  const renderItems = () => {
    return (!isLoaded ? [...Array(8)] : favItems).map((item, idx) => (
      <Card data={item} isCartItem={item && checkIsItemAdded(cartItems, item)} isFavItem={item && checkIsItemAdded(favItems, item)} isMain={true} isLoaded={isLoaded} key={idx} onCartItem={onCartItem} onFavItem={onFavItem}/>
    ));
  }

  return (
    <section className="main-content__content">
      <header className="main-content__header">
        <h2 className="main-content__title">Favourites</h2>
      </header>



      <div className="main-content__items">
        {/* {favItems.map((item) => (
          <Card data={item} isMain={true} key={item.baseID} onCartItem={onCartItem} onFavItem={onFavItem}/>
        ))} */}
        {renderItems()}
      </div >
    </section>
  )
}



export default Favourites;
