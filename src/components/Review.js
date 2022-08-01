import React from 'react'

function Review({data}) {
  return (
    <div>
        {data.map((item) =>(
            <div>
                <h1>{item.name}</h1>
            <div>
                <p>{item.data}</p>
                <p>{item.comments}</p>
            </div>
            </div>   
        ))}
    </div>
  )
}

export default Review