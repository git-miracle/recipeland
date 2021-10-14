import React from 'react'
import logo from '../img/logo.png'
import { FaRegStar, FaStar } from 'react-icons/fa'
import SearchRecipe from './SearchRecipe'
import Favorite from './Favorite'

const Header = (props) => {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='header__logo' />
      <SearchRecipe searchRecipe={props.searchRecipe} />

      <nav className='nav'>
        <ul className='nav__list'>
          {/* <li className='nav__item'>
            <button className='nav__btn nav__btn--add-recipe'>
              <div className='nav__icon'>
                <FaEdit />
              </div>
              <span>Add recipe</span>
            </button>
          </li> */}
          <li className='nav__item'>
            <button className='nav__btn nav__btn--bookmarks'>
              <div className='nav__icon'>
                {props.favorite.length !== 0 ? (
                  <FaStar />
                ) : (
                  <FaRegStar />
                )}
              </div>
              <span>Favorite</span>
            </button>
            <div className='bookmarks'>
              <ul className='bookmarks__list'>
                <div className='message'>
                  {props.favorite.length !== 0 ? (
                    <Favorite
                      favorite={props.favorite}
                      linkId={props.linkId}
                      deleteFav={props.deleteFav}
                    />
                  ) : (
                    <p>
                      No Favorite yet.
                      <br /> Find a nice recipe and mark it.
                    </p>
                  )}
                </div>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
