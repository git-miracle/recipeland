import React from 'react'
import Spinner from './Spinner'

const ViewFavorite = ({ favorite }) => {
  return (
    <div className='favorite-container'>
      <h1 className='heading'>Favorite recipe:</h1>
      {!favorite && <Spinner />}
      <ul>
        {favorite.map((recipe) => (
          <li
            key={recipe.id}
            // onClick={() => linkId(recipe.id)}
          >
            <div className='favorite-container__box '>
              <figure className='favorite-container__fig'>
                <img src={recipe.image_url} alt='img' />
              </figure>
              <div className='favorite-container__data'>
                <h4 className='favorite-container__title'>
                  {recipe.title.length > 20
                    ? recipe.title.substring(0, 20) + '...'
                    : recipe.title}
                </h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewFavorite
