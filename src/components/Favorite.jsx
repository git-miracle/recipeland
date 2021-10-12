import React from 'react'

const favorite = ({ favorite, linkId }) => {
  return (
    <div>
      {favorite.map((recipe) => (
        <div
          key={recipe.id}
          onClick={() => linkId(recipe.id)}
          className='preview'
        >
          <div className='preview__box'>
            <figure className='preview__fig'>
              <img src={recipe.image_url} alt='img' />
            </figure>
            <div className='preview__date'>
              <h4 className='preview__title'>
                {recipe.title.length > 20
                  ? recipe.title.substring(0, 20) + '...'
                  : recipe.title}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default favorite
