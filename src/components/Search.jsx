import {useEffect} from 'react';

import placeholders from '../utils/placeholders';
import SvgIcon from './SvgIcon';
import {ReactComponent as Loupe} from '../assets/img/icons/loupe.svg';
import {ReactComponent as Del} from '../assets/img/icons/del.svg';



const Search = ({onChangeSearchVal, onDelSearchVal, searchVal}) => {
  useEffect(() => {
    placeholders('.search__textfield', '.search__capt', 'search__capt--hidden');
  });

  

  return (
    <form className="main-content__search  search">
      <p className="search__group">
        <label className="search__label">
          <span className="search__capt">Search</span>
          <input className="search__textfield" type="text" name="search" value={searchVal} onChange={onChangeSearchVal}/>
          <SvgIcon className="search__icon  search__icon--search  svg-icon" Icon={Loupe} aria-hidden="true"/>

          {
            searchVal && <button className="search__del  btn" type="button" aria-label="Delete" onClick={onDelSearchVal}>
              <SvgIcon className="search__icon  search__icon--del  svg-icon" Icon={Del} aria-hidden="true"/>
            </button>
          }
        </label>
      </p>
    </form>
  )
}



export default Search;
