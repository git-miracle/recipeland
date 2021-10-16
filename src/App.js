import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchResault from './components/SearchResault'

// https://forkify-api.herokuapp.com/v2

function App() {
  const [recipes, setRecipe] = useState([])
  const [result, setResult] = useState('')
  const [favorite, setFavorite] = useState([])
  const [fid, setFid] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (Boolean(localStorage.getItem('fav-recipe'))) {
      console.log(Boolean(localStorage.getItem('fav-recipe')))
      const favRecipe = JSON.parse(localStorage.getItem('fav-recipe'))
      setFavorite(favRecipe)
    } else {
      setFavorite([])
    }
  }, [])

  const saveLocalStorage = (items) => {
    localStorage.setItem('fav-recipe', JSON.stringify(items))
  }
  const addToFavorite = (recipe) => {
    //alternats:
    // 1- setFavorite((prev) => prev.concat(recipe))
    // 2- const newFavorite = (prev) => [...prev, recipe]

    const newFavorite = [...favorite, recipe]
    setFavorite(newFavorite)
    saveLocalStorage(newFavorite)
  }

  //we can use id  instead recipe as argoman and change recipe.id to id
  const deleteFav = (recipe) => {
    console.log(recipe)
    const arr = favorite.filter((item) => item.id !== recipe.id)
    setFavorite(arr)
    saveLocalStorage(arr)
  }
  const searchRecipe = (text) => {
    setLoading(true)
    setRecipe([])
    setResult('')

    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${text}`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setResult(data.results)
        setRecipe(data.data.recipes)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  const linkId = (digit) => setFid(digit)

  // const searchRecipe = async (text) => {
  //   try {
  //     const res = await axios.get(
  //       `https://forkify-api.herokuapp.com/api/v2/recipes?search=${text}`
  //     )
  //     setResult(res.data.result)
  //     setRecipe(res.data.data.recipes)
  //     // console.log(res.data.re)
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // }
  return (
    <div className='container'>
      <Header
        favorite={favorite}
        searchRecipe={searchRecipe}
        linkId={linkId}
        deleteFav={deleteFav}
      />
      <SearchResault
        loading={loading}
        favorite={favorite}
        recipes={recipes}
        result={result}
        addToFavorite={addToFavorite}
        fid={fid}
      />
    </div>
  )
}

export default App
