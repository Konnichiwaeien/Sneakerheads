import { useState } from 'react';

import Card from '../Card';



const Orders = ({data, cartItems, favItems, onCartItem, onFavItem}) => {
  return (
    <section className="main-content__content">
    <header className="main-content__header">
      <h2 className="main-content__title">My orders</h2>
    </header>



    <div className="main-content__items">
      {data.map((item) => (
        <Card data={item} isMain={true} key={item.baseID} onCartItem={onCartItem} onFavItem={onFavItem}/>
      ))}
    </div>
  </section>
  )
}

export default Orders;
