import axios from 'axios'
import { useState } from 'react'
import Header from './components/Header'
import SearchResault from './components/SearchResault'

// https://forkify-api.herokuapp.com/v2

function App() {
  const [recipes, setRecipe] = useState([])
  const [result, setResult] = useState('')
  const [favorite, setFavorite] = useState([])
  const [fid, setFid] = useState('')

  const addToFavorite = (recipe) => {
    setFavorite((prev) => [...prev, recipe])
    console.log('worked')
  }
  console.log(favorite)
  const searchRecipe = (text) => {
    // setIsLoading(true)

    fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${text}`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setResult(data.results)
        setRecipe(data.data.recipes)
        //  setIsLoading(false);
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
      />
      <SearchResault
        recipes={recipes}
        result={result}
        addToFavorite={addToFavorite}
        fid={fid}
      />
    </div>
  )
}

export default App
