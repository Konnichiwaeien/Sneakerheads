import {useState, useContext} from 'react';

import AppContext from '../../context';
import Search from '../Search';
import Card from '../Card';



const Home = ({onCartItem, onFavItem}) => {
  const {items, cartItems, favItems, isLoaded, checkIsItemAdded} = useContext(AppContext);
  const [searchVal, setSearchValue] = useState('');

  const changeSearchValHandler = (evt) => {
    setSearchValue(evt.target.value);
  }

  const delSearchValHandler = () => {
    setSearchValue('');
  }

  const renderItems = () => {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchVal.toLowerCase()));
    return (!isLoaded ? [...Array(8)] : filteredItems).map((item, idx) => (
      <Card data={item} isCartItem={item && checkIsItemAdded(cartItems, item)} isFavItem={item && checkIsItemAdded(favItems, item)} isMain={true} isLoaded={isLoaded} key={idx} onCartItem={onCartItem} onFavItem={onFavItem}/>
    ));
    // return (
    //   !isLoaded ? [...Array(8)].map((item, idx) => <Card isLoaded={isLoaded} isMain={true} key={idx}/>) : 
    //   filteredItems.map((item, idx) => (
    //     <Card data={item} isCartItem={cartItems.some((obj) => obj.baseID === item.baseID)} isFavItem={favItems.some((obj) => obj.baseID === item.baseID)} isMain={true} isLoaded={isLoaded} key={idx} onCartItem={onCartItem} onFavItem={onFavItem}/>
    //   ))
    // )
  }
  


  return (
    <section className="main-content__content">
    <header className="main-content__header">
      <h2 className="main-content__title">{!searchVal ? 'Bestsellers' : `Search by: "${searchVal}"`}</h2>
      <Search onChangeSearchVal={changeSearchValHandler} onDelSearchVal={delSearchValHandler} searchVal={searchVal}/>
    </header>



    <div className="main-content__items">
      {renderItems()}
    </div>
  </section>
  )
}



export default Home;
