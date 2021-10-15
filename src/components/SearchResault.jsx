import React, { useState } from 'react'
import RecipeView from './RecipeView'
import Footer from './Footer'
import ListItem from './ListItem'
import Pagination from './Pagination'
import ViewFavorite from './ViewFavorite'
import Result from './Result'
import Spinner from './Spinner'

const SearchResault = ({
  recipes,
  loading,
  result,
  addToFavorite,
  fid,
  favorite,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage] = useState(13)
  const [id, setId] = useState('')

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
          {loading ? <Spinner /> : <Result result={result} />}

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
      {!id && !fid ? (
        <ViewFavorite favorite={favorite} />
      ) : (
        <RecipeView id={id} fid={fid} addToFavorite={addToFavorite} />
      )}
    </>
  )
}

export default SearchResault
