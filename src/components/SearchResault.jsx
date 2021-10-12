import React, { useState } from 'react'
import RecipeView from './RecipeView'
import Footer from './Footer'
import ListItem from './ListItem'
import Pagination from './Pagination'

const SearchResault = ({ recipes, result, addToFavorite, fid }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage] = useState(13)
  const [id, setId] = useState('5ed6604591c37cdc054bca85')

  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = recipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  )
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const linkId = (digit) => setId(digit)

  return (
    <>
      <div className='search-resault'>
        <ul className='results'>
          {result && (
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
              {' '}
              {result} resaults found.
            </h2>
          )}
          {!result && (
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
              Start by searching for a recipe
              <br /> or an ingredient. Have fun!
            </h2>
          )}
          <li>
            {recipes && (
              <ListItem linkId={linkId} recipes={currentRecipes} />
            )}
          </li>
          <Pagination
            recipesPerPage={recipesPerPage}
            totalRecipes={result}
            paginate={paginate}
          />
        </ul>

        <Footer />
      </div>
      <RecipeView id={id} fid={fid} addToFavorite={addToFavorite} />
    </>
  )
}

export default SearchResault
