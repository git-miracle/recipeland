import React, { useEffect, useState } from 'react'
import axios from 'axios'

import RecipeDirections from './RecipeDirections'

import RecipeInfo from './RecipeInfo'
import RecipeIngredients from './RecipeIngredients'

const RecipeView = ({ id, addToFavorite, fid }) => {
  const [recipe, setRecipe] = useState([])
  const [ingredients, setIngredients] = useState([])
  const key = '414f59eb-de8b-4c6f-87f2-d2b6fdfefa57'

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?${key}`
      )
      const { recipe } = res.data.data
      setRecipe(recipe)
      const { ingredients } = res.data.data.recipe
      setIngredients(ingredients)
    }
    fetchRecipe()
  }, [id])

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${fid}?${key}`
      )
      const { recipe } = res.data.data
      setRecipe(recipe)
      const { ingredients } = res.data.data.recipe
      setIngredients(ingredients)
    }
    fetchRecipe()
  }, [fid])

  return (
    <div className='recipe-view'>
      <RecipeInfo addToFavorite={addToFavorite} recipe={recipe} />
      <RecipeIngredients ingredients={ingredients} />
      <RecipeDirections recipe={recipe} />
    </div>
  )
}

export default RecipeView
