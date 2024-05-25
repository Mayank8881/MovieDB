import React from 'react'

export default function Result({results}) {
  return (
    <div>
        {
        results.map((result)=>(
            <div key={result.id}>
                <h3>{result.original_title}</h3>
                <h2>{result.adult}</h2>
            </div>
        ))
    }
    </div>
   
  )
}
