import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import AppContext from '../context';
import Header from './Header';
import Slider from './Slider';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import Orders from './Pages/Orders';
import Cart from './Cart';



const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // axios.get('https://618c8f44ded7fb0017bb95de.mockapi.io/items').then((result) => setItems(result.data));
      // axios.get('https://618c8f44ded7fb0017bb95de.mockapi.io/cart').then((result) => setCartItems(result.data));
      // axios.get('https://618c8f44ded7fb0017bb95de.mockapi.io/favourites').then((result) => setFavItems(result.data));
      const itemsResponse = await axios.get('https://618c8f44ded7fb0017bb95de.mockapi.io/items');
      const cartResponse = await axios.get('https://618c8f44ded7fb0017bb95de.mockapi.io/cart');
      const favResponse = await axios.get('https://618c8f44ded7fb0017bb95de.mockapi.io/favourites');

      setIsLoaded(true);

      setCartItems(cartResponse.data);
      setFavItems(favResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const checkIsItemAdded = (items, obj) => items.some((item) => item.baseID === obj.baseID);

  const cartOpenClickHandler = () => {
    setIsOpenCart(true);
  }

  const cartCloseClickHandler = () => {
    setIsOpenCart(false);
  }

  const cartItemHandler = async (obj) => {
    const id = obj.baseID;
    const item = cartItems.find((item) => item.baseID === id);
    try {
      if (item) {
        axios.delete(`https://618c8f44ded7fb0017bb95de.mockapi.io/cart/${item.id}`);
        setCartItems((prev) => prev.filter((item) => item.baseID !== id));
        console.log('delete item');
      } else {
        const {data} = await axios.post('https://618c8f44ded7fb0017bb95de.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, data]); // временное решение для соответствия объектов в стейте и на беке, надо сделать лудче
      }
    } catch (error) {
      alert('Couldn\'t add item to cart');
    }
  }

  const favItemHandler = async (obj) => {
    const id = obj.baseID;
    try {
      const item = favItems.find((item) => item.baseID === id);
      if (item) {
        axios.delete(`https://618c8f44ded7fb0017bb95de.mockapi.io/favourites/${item.id}`);
        setFavItems((prev) => prev.filter((item) => item.baseID !== id));
        console.log('delete item');
      } else {
        // axios.post('https://618c8f44ded7fb0017bb95de.mockapi.io/favourites', item);
        // setFavItems((prev) => [...prev, item]);
        const {data} = await axios.post('https://618c8f44ded7fb0017bb95de.mockapi.io/favourites', obj);
        setFavItems((prev) => [...prev, data]); // временное решение для соответствия объектов в стейте и на беке, надо сделать лудче
      }
    } catch (error) {
      alert('Couldn\'t added to favourite');
    }
  }

  const removeFromCartHandler = (id) => {
    axios.delete(`https://618c8f44ded7fb0017bb95de.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    console.log('delete itemrrrrrrrrrrrrrr');
  }



  return (
    <AppContext.Provider value={{items, cartItems, favItems, setCartItems, isLoaded, checkIsItemAdded, cartCloseClickHandler}}>
      <div className="main-container">
        <div className="main-container__wrapper">
          {isOpenCart && <Cart data={cartItems} isCart={true} closeCart={cartCloseClickHandler} removeCartItem={removeFromCartHandler} />}



          <Header openCart={cartOpenClickHandler} />



          <main className="main-content">
            <div className="main-content__container">
              <Slider />



              <Route exact path="/">
                <Home onCartItem={cartItemHandler} onFavItem={favItemHandler}/>
              </Route>

              <Route exact path="/favourites">
                <Favourites onCartItem={cartItemHandler} onFavItem={favItemHandler} />
              </Route>
            </div>
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}



export default App;

