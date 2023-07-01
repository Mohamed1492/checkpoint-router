import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const Details = ({movies}) => {
  const {id}=useParams();
  const item=movies.find(el=>el.id==id)
  console.log(item)
  return (
    <div className='detail'>
        
        <h1>{item.Title}</h1>
        <div className='description'>
        <img src={item.Poster}  />
        <iframe  src={item.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p> Description: <br /> {item.Description}</p>
        
        </div>
<br />
<Link to="/">

<h2>Back</h2>
</Link>    
    </div>
  )
}
