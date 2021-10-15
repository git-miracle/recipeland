import React from 'react'

const Result = ({ result }) => {
  console.log(result)
  return (
    <div>
      {result !== '' && (
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
          {' '}
          {result} resaults found.
        </h2>
      )}

      {result === '' && (
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
          Start by searching for a recipe
          <br /> or an ingredient. Have fun!
        </h2>
      )}
    </div>
  )
}

export default Result
